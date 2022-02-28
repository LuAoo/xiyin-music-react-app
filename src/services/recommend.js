import request from './axios';
/* 
推荐页的统一网络请求操作文件
*/
//获取轮播图数据
export function getTopBanner() {
  return request({
    url: '/banner'
  })
}
// 获取热门推荐的数据 
export function getHotRecommend(limit) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}
// 获取新碟上架的数据
export function getNewAlbum(limit, offset) {
  return request({
    url: '/top/album',
    params: {
      limit,
      offset
    }
  })
}

// 获取榜单数据请求
export function getRankingList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}

export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}