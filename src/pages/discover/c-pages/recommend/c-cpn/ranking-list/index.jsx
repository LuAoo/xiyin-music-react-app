import RankinglistItem from '@/components/rankinglist-item'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { getRankingListAction } from '../../store/actionCreators'
import { RankingListStyle } from './style'

export default memo(function RankingList() {
  // redux相关hooks
  const dispatch = useDispatch()
  const state = useSelector(state => ({
    rankingList1: state.getIn(['Recommend', 'rankingList1']),
    rankingList2: state.getIn(['Recommend', 'rankingList2']),
    rankingList3: state.getIn(['Recommend', 'rankingList3'])
  }), shallowEqual)
  // 其他hooks
  useEffect(() => {
    dispatch(getRankingListAction(0))
    dispatch(getRankingListAction(2))
    dispatch(getRankingListAction(3))
  }, [dispatch])
  return (
    <RankingListStyle>
      <ThemeHeaderRcm title='榜单' moreLink='/discover/ranking'></ThemeHeaderRcm>
      <div className="container_list bg_list">
        {/* 使用条件渲染 */}
        {
          state.rankingList1 && <RankinglistItem info={state.rankingList1}></RankinglistItem>
        }
        {
          state.rankingList2 && <RankinglistItem info={state.rankingList2}></RankinglistItem>
        }
        {
          state.rankingList3 && <RankinglistItem info={state.rankingList3}></RankinglistItem>
        }
      </div>
    </RankingListStyle>
  )
})
