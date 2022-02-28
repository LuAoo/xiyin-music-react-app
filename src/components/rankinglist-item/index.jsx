import { getCurrentPlaySongAction } from '@/pages/player/store/createActions'
import { getSizeImage } from '@/utils/format-num'
import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { RankingListItemStyle } from './style'

export default memo(function RankingListItem(props) {
  const dispatch = useDispatch()
  const { info } = props
  function playMusic(id) {
    dispatch(getCurrentPlaySongAction(id))
  }
  return (
    <RankingListItemStyle>
      <div className="rankingitem_top">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <a href="/" className='image_cover sprite_covor'>1</a>
        </div>
        <div className="top_container">
          <a href="/">{info.name}</a>
          <div className='top_do'>
            <div className="play sprite_02"></div>
            <div className="perserve sprite_02"></div>
          </div>
        </div>
      </div>
      <div className="rankingitem_content">
        {info.tracks.slice(0, 10).map((item, index) => {
          return (
            <div className='rankingitem_content_item' key={item.id}>
              <div className='rankingitem_content_p'>
                <p className='pp'>{index + 1}</p>
                <a className='rankingitem_content_pa text-nowrap' href="/">{item.name}</a>
              </div>
              <div className='dowork'>
                <div className="dowork_play sprite_02" onClick={()=>{playMusic(item.id)}}></div>
                <div className="dowork_add sprite_icon2"></div>
                <div className="dowork_perserve sprite_02"></div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="rankingitem_alldata"><a href="/">查看全部{'>'}</a></div>
    </RankingListItemStyle>
  )
})
