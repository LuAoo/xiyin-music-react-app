import ThemeCover from '@/components/theme-cover'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import { hotRecommend } from '@/services/local-data'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAvtion } from '../../store/actionCreators'
import { HotRecommendStyle } from './style'

export default memo(function HotRecommend() {
  // resux的hook
  const dispatch = useDispatch();
  const state = useSelector(state => ({
    hotRecommendData: state.getIn(['Recommend', 'hotRecommendData'])
  }), shallowEqual)
  // 其他hook
  useEffect(() => {
    dispatch(getHotRecommendAvtion())
  }, [dispatch])
  return (
    <HotRecommendStyle>
      <ThemeHeaderRcm title='热门推荐' datalist={hotRecommend} moreLink='/discover/songslist'></ThemeHeaderRcm>
      <div className="hotrecommendcontent">

        {
          state.hotRecommendData.map((item) => {
            return <ThemeCover key={item.id} data={item}></ThemeCover>
          })
        }
      </div>
    </HotRecommendStyle>
  )
})
