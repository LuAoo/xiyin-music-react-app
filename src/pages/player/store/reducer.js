import { Map } from "immutable";
import { CHANGE_CURRENTLYRICINDEXX, CHANGE_CURRENT_PLAY_SONG, CHANGE_LYRICS, CHANGE_PLAYCURRENTINDEX, CHANGE_PLAYLIST, CHANGE_PLAYTYPE } from "./constants";

const defaultState = Map({
  CurrentsingInfo: [],
  PlayList: [],
  PlayCurrentIndex: 0,
  PlayType: 0,
  LyricsData: [],
  currentLyricIndex: 0
})

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_PLAY_SONG:
      return state.set('CurrentsingInfo', action.CurrentsingInfo)
    case CHANGE_PLAYLIST:
      return state.set('PlayList', action.PlayList)
    case CHANGE_PLAYCURRENTINDEX:
      return state.set('PlayCurrentIndex', action.PlayCurrentIndex)
    case CHANGE_PLAYTYPE:
      return state.set('PlayType', action.PlayType)
    case CHANGE_LYRICS:
      return state.set('LyricsData', action.LyricsData)
    case CHANGE_CURRENTLYRICINDEXX:
      return state.set('currentLyricIndex', action.currentLyricIndex)
    default:
      return state
  }
}