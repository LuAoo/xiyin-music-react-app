import { dicoverMenu } from '@/services/local-data'
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'
import { TheContainerOfDisvover } from './style'

export default memo(function AppDiscover(props) {
  return (
    <TheContainerOfDisvover>
      {/* 发现页顶部导航栏 */}
      <div className="top-header">
        <div className="container wrap-v1">
          {
            dicoverMenu.map((item) => {
              return <NavLink exact key={item.link} to={item.link}>{item.title}</NavLink>
            })
          }
        </div>
      </div>
      <div className="discover-content">
        {/* 子路由props种有该路由的routes */}
        {renderRoutes(props.route.routes)}
      </div>
    </TheContainerOfDisvover>
  )
})
