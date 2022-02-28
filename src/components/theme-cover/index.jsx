import { numberFormat } from '@/utils/format-num'
import React, { memo } from 'react'
import { ThemeCoverStyle } from './style'

export default memo(function ThemeCover(props) {
  let { data } = props
  
  return (
    <ThemeCoverStyle>
      <div className="container">
        <div className="container_top">
          <img src={data.picUrl + '?param=140y140'} alt="" />
          <div className="container_top_cover sprite_covor">
            <div className="container_top_bottom sprite_covor">
              <span className='logo sprite_icon'></span>
              {/* 数字格式化 */}
              <p className='playnum'>{numberFormat(data.playCount).value+numberFormat(data.playCount).unit}</p>
              <span className='play sprite_icon'></span>
            </div>
          </div>
        </div>
      </div>
      <div className="container_bottom">
        <p>{data.name}</p>
      </div>
    </ThemeCoverStyle>
  )
})
