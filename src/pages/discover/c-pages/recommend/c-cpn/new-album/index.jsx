import NewalbumCover from '@/components/newalbum-cover'
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getNewAlbumAction } from '../../store/actionCreators'
import { NewAlbumStyle } from './style'
import { Carousel } from 'antd';
import { useRef } from 'react'
export default memo(function NewAlbum() {
  /* redux相关Hooks */
  const dispatch = useDispatch()
  const { newAlbumData } = useSelector(state => {
    return {
      newAlbumData: state.getIn(['Recommend', 'newAlbumData'])
    }
  }, shallowEqual);

  /* 其他Hook操作 */
  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [dispatch])
  const refCarousel = useRef()
  return (
    <NewAlbumStyle>
      <ThemeHeaderRcm title='新碟上架' moreLink='/discover/discshelves'></ThemeHeaderRcm>
      <div className="container">
        <Carousel ref={refCarousel} dots={false} autoplay className='banner_list'>
          {[0, 1].map((item) => {
            return (<div key={item} className='banner_list_item'>
              {newAlbumData.slice(5 * item, (item + 1) * 5).map((iten, index) => {
                return (<NewalbumCover width='118px' size={100} bpos='-570px' key={iten.id} data={iten}></NewalbumCover>)
              })}
            </div>)
          })}
        </Carousel>
      </div>
      <div className="left sprite_02" onClick={() => {refCarousel.current.prev()}}></div>
      <div className="right sprite_02" onClick={()=>{refCarousel.current.next()}}></div>
    </NewAlbumStyle>
  )
})
