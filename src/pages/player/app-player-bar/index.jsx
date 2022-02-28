import React, { memo } from 'react'
import { AppPlayerBarStyle } from './style'
import { message, Slider } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
import { changeCurrentLyricsIndex, changePlayType, getCurrentPlaySongAction, getOtherCurrentPlaySongAction } from '../store/createActions';
import { formatMinuteSecond, getPlayUrl, getSizeImage } from '@/utils/format-num';
import { useRef } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

export default memo(function AppPlayerBar() {
  // redux的hooks
  const { CurrentsingInfo, PlayType, PlayCurrentIndex, PlayList, LyricsData, currentLyricIndex } = useSelector(state => ({
    CurrentsingInfo: state.getIn(['Player', 'CurrentsingInfo']),
    PlayType: state.getIn(['Player', 'PlayType']),
    PlayCurrentIndex: state.getIn(['Player', 'PlayCurrentIndex']),
    PlayList: state.getIn(['Player', 'PlayList']),
    LyricsData: state.getIn(['Player', 'LyricsData']),
    currentLyricIndex: state.getIn(['Player', 'currentLyricIndex'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentPlaySongAction('1861126812'))

  }, [dispatch])

  // 其他Hook
  // 是否播放state
  const [isPlaying, setisPlaying] = useState(false)
  // 当前播放时间state
  const [currentTime, setCurrentTime] = useState(0);
  // 进度条改变事件
  const [progressTime, setprogressTime] = useState(0)
  // 是否拖动
  const [isMove, setisMove] = useState(false)
  // 总时间
  // audio的事件
  const audioDom = useRef()


  function setOutSideIconFont() {
    setisPlaying(true)
  }
  /* 其他逻辑操作 */

  var imgurl, songname, singername = [], songId, AddTime;
  if (CurrentsingInfo.songs != null) {
    if (CurrentsingInfo.songs.length === 0) {
    } else {
      imgurl = CurrentsingInfo.songs != null ? CurrentsingInfo.songs[0].al.picUrl : 0
      songname = CurrentsingInfo.songs != null ? CurrentsingInfo.songs[0].name : 0
      singername = CurrentsingInfo.songs != null ? CurrentsingInfo.songs[0].ar : []
      songId = CurrentsingInfo.songs != null ? CurrentsingInfo.songs[0].id : 0
      AddTime = CurrentsingInfo.songs != null ? CurrentsingInfo.songs[0].dt : 0
    }
  }
  /* ------------------------------------------ */
  function doplay() {
    if (isPlaying) {
      audioDom.current.pause();
      setisPlaying(false)
    } else {
      audioDom.current.play();
      setisPlaying(true)
    }
  }
  // audio的实时更新操作
  function timeUpdata(e) {
    if (!isMove) {
      let currentTime = e.target.currentTime * 1000
      setCurrentTime(currentTime)
      let progresstime = e.target.currentTime / (AddTime / 1000) * 100
      setprogressTime(progresstime)
    }

    // 获取当前的歌词
    let tempcurrentLyricIndex = 1;
    let length = LyricsData.length;
    for (let i = 0; i < length; i++) {
      if (currentTime < LyricsData[i].time) {
        tempcurrentLyricIndex = i
        break;
      }
    }
    if (currentLyricIndex !== tempcurrentLyricIndex - 1) {
      let temp
      if (tempcurrentLyricIndex === 0) {
        temp = 0
      } else {
        temp = tempcurrentLyricIndex - 1
      }
      dispatch(changeCurrentLyricsIndex(temp))
      message.open({
        content: LyricsData[temp].content,
        duration: 0,
        key: "LyricsData",
        className: 'lyric-message',
      })
    }
  }

  // 进度条的事件（这里UseCallBack需要依赖这几个变量）
  const sliderChange = useCallback(
    (value) => {
      setisMove(true)
      let tempCurrent = (AddTime) * (value / 100)
      setCurrentTime(tempCurrent)
      setprogressTime(value)
    },
    [AddTime],
  )

  const sliderAfterChange = useCallback(
    (value) => {
      let tempCurrent = AddTime * (value / 100)
      audioDom.current.currentTime = tempCurrent / 1000
      if (!isPlaying) {
        audioDom.current.play()
        setisPlaying(true)
      }
      setisMove(false)
    }, [AddTime, isPlaying],
  )

  // 设置播放类型的操作
  function setPlayType() {
    switch (PlayType) {
      case 0:
        dispatch(changePlayType(1))
        break;
      case 1:
        dispatch(changePlayType(2))
        break;
      case 2:
        dispatch(changePlayType(0))
        break;
      default:
        break;
    }
  }

  // 下一首上一首播放
  function doPlaySing(flag) {
    switch (PlayType) {
      case 1:
        // 随机播放处理
        let num = Math.ceil(Math.random() * PlayList.length) - 1
        dispatch(getOtherCurrentPlaySongAction(num))
        setisPlaying(true)
        break;
      default:
        // 上一首
        if (flag === 1) {
          let num2 = PlayCurrentIndex
          if (num2 === 0) {
            num2 = PlayList.length - 1;
            dispatch(getOtherCurrentPlaySongAction(num2))
          } else {
            num2 = num2 - 1
            dispatch(getOtherCurrentPlaySongAction(num2))
          }
        } else {
          // 下一首
          let num3 = PlayCurrentIndex
          if (num3 === PlayList.length - 1) {
            num3 = 0;
            dispatch(getOtherCurrentPlaySongAction(num3))
          } else {
            num3 = num3 + 1
            dispatch(getOtherCurrentPlaySongAction(num3))
          }
        }
        setisPlaying(true)
        break;
    }
  }
  function songend(e) {
    switch (PlayType) {
      case 0:
        let num3 = PlayCurrentIndex
        if (num3 === PlayList.length - 1) {
          num3 = 0;
          dispatch(getOtherCurrentPlaySongAction(num3))
        } else {
          num3 = num3 + 1
          dispatch(getOtherCurrentPlaySongAction(num3))
        }
        break;
      case 1:
        let num = Math.ceil(Math.random() * PlayList.length) - 1
        dispatch(getOtherCurrentPlaySongAction(num))
        break;
      case 2:
        audioDom.current.play()
        break;
      default:
        break;
    }
  }

  return (
    <AppPlayerBarStyle isPlaying={isPlaying} PlayType={PlayType}>
      <div className="sprite_playbar2 wapper">
        <div className="container wrap-v2">
          <div className="container_play">
            <div className="prev sprite_playbar" onClick={() => { doPlaySing(1) }}></div>
            <div className="play sprite_playbar" onClick={() => {
              doplay()
            }}></div>
            <div className="next sprite_playbar" onClick={() => { doPlaySing(2) }}></div>
          </div>
          <div className="container_singcontent">
            {/* 歌曲信息的口 */}
            <NavLink exact to={'/discover/playerInfo/' + songId}>
              <img className="container_singcontent_img sprite_playbar" src={getSizeImage(imgurl, 35)} alt="" />
            </NavLink>
            <div className="container_singcontent_info">
              <div className="info">
                <a className='singname' href="/">{songname}</a>
                <div className='info_icon sprite_playbar'></div>
                <a className='songname' href="/">{
                  singername.length === 0 ? '' : singername.map((item, index) => {
                    return index === singername.length - 1 ? item.name : item.name + ' & '
                  })
                }</a>
              </div>
              <div className="progress_time">
                <Slider tipFormatter={null} value={progressTime} onChange={sliderChange} onAfterChange={sliderAfterChange} />
                <div className="time">
                  <div className="begintime">{formatMinuteSecond(currentTime)}</div>
                  <div className='line'>/</div>
                  <div className="addtime">{formatMinuteSecond(AddTime)}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container_dosomething">
            <div className="container_dosomething_left">
              <div className="left_icon1 otherppp"></div>
              <div className="left_icon2 sprite_playbar"></div>
              <div className="left_icon3 sprite_playbar"></div>
            </div>
            <div className="middle sprite_playbar"></div>
            <div className="container_dosomething_right">
              <div className="right_icon1 sprite_playbar"></div>
              <div className="right_icon2 sprite_playbar" onClick={() => { setPlayType() }}></div>
              <div className="right_icon3 sprite_playbar"><p className='songnum'>{PlayList.length}</p></div>
            </div>
          </div>
        </div>
      </div>
      <audio autoPlay onCanPlay={() => { setOutSideIconFont() }} ref={audioDom} onEnded={(e) => { songend(e) }} onTimeUpdate={(e) => { timeUpdata(e) }} src={getPlayUrl(songId)}></audio>
    </AppPlayerBarStyle>
  )
})
