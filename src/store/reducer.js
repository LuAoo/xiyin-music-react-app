import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store";
import {reducer as playerReducer} from '@/pages/player/store';
import {reducer as rankingReducer} from '@/pages/discover/c-pages/ranking/store';

import {combineReducers} from 'redux-immutable'

/* 
顶部reducer，用来将所有的reducer操作合并
store拿数据从这里拿到数据
*/
// 这里我们使用使用的combineReducers是redux-immutable提供的combineReducers.因为我们不使用的话通过普通的对象无法拿到我们其他模块的immutable对象.
const cReducer=combineReducers({
  Recommend:recommendReducer,
  Player:playerReducer,
  ranking: rankingReducer,
})
export default cReducer