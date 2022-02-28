import { getArtistList, getHotRecommend, getNewAlbum, getRankingList, getTopBanner } from '@/services/recommend';
import * as actionTypes from './constants';

const changeSettleSingsAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists
})


/*更新TopBanner的action*/
const changeBannerAction = (result) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  banners: result.banners
})

/* 更新热门推荐里面的action */
const changeHotRecommend = (result) => (
  {
    type: actionTypes.CHANGE_Hot_Recommend,
    hotRecommendData: result
  }
)
/* 更新新碟是上架的数据 */
const changeNewAlbumAction = (reuslt) => (
  {
    type: actionTypes.CHANGE_New_Album,
    newAlbumData: reuslt
  })

/* 更新榜单的数据（三组） */
const changeRankingList1 = (res) => ({
  type: actionTypes.CHANGE_RankingList1,
  rankingList1: res
})
const changeRankingList2 = (res) => ({
  type: actionTypes.CHANGE_RankingList2,
  rankingList2: res
})
const changeRankingList3 = (res) => ({
  type: actionTypes.CHANGE_RankingList3,
  rankingList3: res
})


/* 获取轮播图数据的中间件action */
export const getTopBannerAction = () => {
  return (dispatch) => {
    // 发送网络请求的操作
    getTopBanner().then((result) => {
      dispatch(changeBannerAction(result))
    })
  }
}

/* 使用中间件获取热门推荐里面的数据 */
export const getHotRecommendAvtion = () => {
  return (dispatch) => {
    getHotRecommend(8).then((res) => {
      dispatch(changeHotRecommend(res.result))
    })
  }
}

/* 获取新碟上架的数据Action操作 */
export const getNewAlbumAction = () => {
  return (dispatch) => {
    getNewAlbum(10, 0).then((res) => {
      dispatch(changeNewAlbumAction(res.albums))
    })
  }
}

/* 获取榜单数据 */
export const getRankingListAction = (idx) => {
  return (dispatch) => {
    getRankingList(idx).then((res) => {
      switch (idx) {
        case 0:
          dispatch(changeRankingList1(res.playlist))
          break;
        case 2:
          dispatch(changeRankingList2(res.playlist))
          break;
        case 3:
          dispatch(changeRankingList3(res.playlist))
          break;
        default:
          console.log('others');
      }
    })
  }
}

/* 入住歌手 */
export const getSettleSingers = () => {
  return dispath => {
    getArtistList(5, 5001).then(res => {
      dispath(changeSettleSingsAction(res))
    })
  }
}
