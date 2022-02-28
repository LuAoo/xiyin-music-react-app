import { getSizeImage } from '@/utils/format-num'
import React, { memo } from 'react'
import { NewAlbumCoverStyle } from './style'

export default memo(function NewAlbumCover(props) {
  let { width, size, bpos, data } = props
  return (
    <NewAlbumCoverStyle width={width} size={size + 'px'} bpos={bpos}>
      <div className="container_cover">
        <img src={getSizeImage(data.picUrl, size)} alt="" />
        <a href="/" className='cover image_cover'>1</a>
        <div className='icon sprite_icon'></div>
      </div>
      <a className='songname text-nowrap' href="/">{data.name}</a>
      <a className='singername' href="/">{data.artist.name}</a>
    </NewAlbumCoverStyle>
  )
})
