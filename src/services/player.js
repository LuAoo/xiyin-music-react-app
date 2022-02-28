import request from "./axios";
/* 获取歌曲详情 */
export function getCurrentSingInfo(ids) {
  return request({
    url:'/song/detail',
    params:{
      ids
    }
  })
}

/* 获取歌词 */
export function getSingLyric(id){
  return request({
    url:'/lyric',
    params:{
      id
    }
  })
}