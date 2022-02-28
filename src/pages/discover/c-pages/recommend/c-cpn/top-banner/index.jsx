import React, { memo } from 'react'
import { TopBannerStyle } from './style'
// ant走马灯
import { Carousel } from 'antd';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTopBannerAction } from '../../store/actionCreators';
import { useCallback } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
export default memo(function TopBanner() {
  const [CurrentBannerIndex, setCurrentBannerIndex] = useState(0)
  // Redux的Hooks
  const state = useSelector(state => ({
    TopBanner: state.getIn(['Recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()
  // 其他的Hooks
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  // 监听当前轮播图的状态
  let addLinsterBanner = useCallback(
    (from, to) => {
      // 设置当前最新的Bannerindex
      setCurrentBannerIndex(to)
    },
    [],
  )
  // 获取Banner DOM事件
  const bannerRef = useRef()
  // 其他的操作
  //imgUrl的判空处理(并设置高斯模糊)
  const bgimage = state.TopBanner[CurrentBannerIndex] != null ? state.TopBanner[CurrentBannerIndex].imageUrl + '?imageView&blur=40x20' : []
  return (
    <TopBannerStyle CurrentBannerIndex={bgimage}>
      <div className="bannercontainer wrap-v2">
        <div className="bannercontent">
          <Carousel effect="fade" autoplay beforeChange={addLinsterBanner} ref={bannerRef}>
            {
              state.TopBanner.map((item) => {
                return (
                  <div key={item.targetId}>
                    <img className='contentStyle' src={item.imageUrl} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="downloadApp sprite_download">
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </div>
      </div>
      {/* 签后切换的逻辑实现 */}
      <div className="btn right sprite_banner" onClick={e => bannerRef.current.prev()}></div>
      <div className="btn left sprite_banner" onClick={e => bannerRef.current.next()}></div>
    </TopBannerStyle>
  )
})
