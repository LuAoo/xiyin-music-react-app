import { getCurrentSingInfo, getSingLyric } from "@/services/player"
import { parseLyric } from "@/utils/format-utils"
import { CHANGE_CURRENTLYRICINDEXX, CHANGE_CURRENT_PLAY_SONG, CHANGE_LYRICS, CHANGE_PLAYCURRENTINDEX, CHANGE_PLAYLIST, CHANGE_PLAYTYPE } from "./constants"
// 改变CurrentsingInfo操作
export const changeCurrentSingInfo = (res) => ({
  type: CHANGE_CURRENT_PLAY_SONG,
  CurrentsingInfo: res
})

// 改变PlayList操作
export const changePlayList = (res) => ({
  type: CHANGE_PLAYLIST,
  PlayList: res
})
// 改变PlayCurrentIndex操作
export const changePlayCurrentIndex = (res) => ({
  type: CHANGE_PLAYCURRENTINDEX,
  PlayCurrentIndex: res
})

// 改变PlayType操作
export const changePlayType = (res) => ({
  type: CHANGE_PLAYTYPE,
  PlayType: res
})

// 改变当前歌词操作
export const changeLyrics = (res) => {
  return {
    type: CHANGE_LYRICS,
    LyricsData: res
  }
}


// 改变当前歌词操作
export const changeCurrentLyricsIndex = (index) => {
  return {
    type: CHANGE_CURRENTLYRICINDEXX,
    currentLyricIndex: index
  }
}


// 获取某一首歌的Action请求
export const getCurrentPlaySongAction = (idx) => {
  return (dispatch, getstate) => {
    getCurrentSingInfo(idx).then((res) => {
      dispatch(changeCurrentSingInfo(res))
      let tempPlayList = [...getstate().getIn(['Player', 'PlayList'])]
      let isInclude = tempPlayList.findIndex((item) => {
        return item.songs[0].id === res.songs[0].id
      })
      if (isInclude === -1) {
        tempPlayList.push(res)
        dispatch(changePlayList(tempPlayList))
        dispatch(changePlayCurrentIndex(tempPlayList.length - 1))
      } else {
        dispatch(changePlayCurrentIndex(isInclude))
      }
    })
    // 点击某一首歌曲以后我们需要请求歌词
    dispatch(getLyricAction(idx))
  }
}

// 切换歌曲
export const getOtherCurrentPlaySongAction = (num) => {
  return (dispatch, getstate) => {
    dispatch(changePlayCurrentIndex(num));
    let tempPlayList = [...getstate().getIn(['Player', 'PlayList'])]
    let tempSong = tempPlayList[num]
    dispatch(changeCurrentSingInfo(tempSong))

    // 切换歌曲以后我们需要请求歌词
    dispatch(getLyricAction(getstate().getIn(['Player', 'CurrentsingInfo']).songs[0].id))
  }
}

/* 请求歌词的数据 */
export const getLyricAction = (id) => {
  return dispatch => {
    getSingLyric(id).then((res) => {
      // 准备解析工具
        let data = res.lrc.lyric;
        const targetdata = parseLyric(data)
        dispatch(changeLyrics(targetdata))  
    })
  }
}


