import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import AppPlayerBar from './pages/player/app-player-bar'
import { router } from './router'
import store from './store'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader></AppHeader>
        {renderRoutes(router)}
        <AppFooter></AppFooter>
        <AppPlayerBar ></AppPlayerBar>
      </HashRouter>
    </Provider>
  )
})
