import React, { memo } from 'react'
import { ThemeHeaderStyle } from './style'
import { Link } from 'react-router-dom';

export default memo(function ThemeHeaderRcm(props) {
  let datalist = props.datalist ? props.datalist : []
  return (
    <ThemeHeaderStyle>
      <div className="logo sprite_02"></div>
      <h2>{props.title}</h2>
      <div className='alist'>
        {/* 这里后面将其改为Link,然后将数据改为[{}]的形式进行路由的跳转 */}
        {
          datalist.map((item) => {
            return <a key={item} href="/">{item}</a>
          })
        }
      </div>
      <Link className='more' to={props.moreLink}>更多 <span className='sprite_02'></span></Link>
      {/* <a className='more' >更多 <span className='sprite_02'></span></a> */}
    </ThemeHeaderStyle>
  )
})
