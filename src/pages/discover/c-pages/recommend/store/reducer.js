import { Map } from "immutable";

const { CHANGE_TOP_BANNERS, CHANGE_Hot_Recommend, CHANGE_New_Album, CHANGE_RankingList1, CHANGE_RankingList2, CHANGE_RankingList3,CHANGE_SETTLE_SONGER } = require("./constants");

const defaultState = Map({
  topBanners: [],
  hotRecommendData: [],
  newAlbumData: [],
  RankingList1: [],
  RankingList2: [],
  RankingList3: [],
  settleSings: []
})
export function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.banners }
      return state.set('topBanners', action.banners)
    case CHANGE_Hot_Recommend:
      // return { ...state, topBanners: action.banners }
      return state.set('hotRecommendData', action.hotRecommendData)
    case CHANGE_New_Album:
      return state.set('newAlbumData', action.newAlbumData)
    case CHANGE_RankingList1:
      return state.set('rankingList1', action.rankingList1)
    case CHANGE_RankingList2:
      return state.set('rankingList2', action.rankingList2)
    case CHANGE_RankingList3:
      return state.set('rankingList3', action.rankingList3)
      case CHANGE_SETTLE_SONGER:
        return state.set("settleSings", action.settleSings)
    default:
      return state
  }
}


