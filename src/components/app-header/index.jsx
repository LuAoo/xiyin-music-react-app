import { headerLinks } from '@/services/local-data';
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
/* style-component */
import { AppHeaderContainer } from './style';
/* ant组件 */
import { Input } from 'antd';
import {
  SearchOutlined,
} from '@ant-design/icons';
export default memo(function AppHeader() {
  return (
    <AppHeaderContainer>
      <div className="wrap-v1 container">
        <div className="appheader_left">
          <a className='logo sprite_01' href="#/"><div className="img">网易云音乐</div></a>
          <div className="appheader_left_list">
            {/* 注意这里不能加exact,因为我们子路由下还需要进行模糊匹配 */}
            <NavLink to='/discover'>{headerLinks[0].title} <span className='sprite_01 icon'></span></NavLink>
            <NavLink to={headerLinks[1].link}>{headerLinks[1].  title} <span className='sprite_01 icon'></span></NavLink>
            <NavLink to={headerLinks[2].link}>{headerLinks[2].title} <span className='sprite_01 icon'></span></NavLink>
            <a href={headerLinks[3].link}>{headerLinks[3].title}</a>
            <a href={headerLinks[4].link}>{headerLinks[4].title}</a>
            <NavLink to={headerLinks[5].link}>{headerLinks[5].title} <span className="sprite_01 sign"></span> <span className='sprite_01 icon'></span></NavLink>
          </div>
        </div>
        <div className="appheader_right">
          <div className='input_container'>
            <SearchOutlined className='input_icon' />
            <Input className='input' placeholder="音乐/视频/电台/用户" />
          </div>
          <button className="appheader_right_button">创作者中心</button>
          <a href="/">登录</a>
        </div>
      </div>
      <div className="appheaderline">
      </div>
    </AppHeaderContainer>
  )
})
