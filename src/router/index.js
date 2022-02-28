import AppDiscover from '@/pages/discover';
import AppDownloadClientApp from '@/pages/download-client-app';
import AppFriend from '@/pages/friend';
import AppMine from '@/pages/mine';
import { Redirect } from 'react-router-dom';
import React from 'react'
import Recommend from '@/pages/discover/c-pages/recommend';
import Ranking from '@/pages/discover/c-pages/ranking';
import SongList from '@/pages/discover/c-pages/song-list';
import TheHostStation from '@/pages/discover/c-pages/the-host-station';
import Singer from '@/pages/discover/c-pages/singer';
import NewDiscShelves from '@/pages/discover/c-pages/new-disc-shelves';
import PlayerInfo from '@/pages/player/index';
export const router = [
  // 默认路由+重定向
  {
    exact: true,
    path: "/",
    render: () => (
      <Redirect to='/discover'></Redirect>
    )
  },
  {
    path: '/discover',
    component: AppDiscover,
    routes: [
      {
        exact: true,
        path: '/discover',
        render: () =>(
          <Redirect to={'/discover/recommend'}></Redirect>
        )
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/songslist',
        component: SongList
      },
      {
        path: '/discover/hoststation',
        component: TheHostStation
      },
      {
        path: '/discover/singer',
        component: Singer
      },
      {
        path: '/discover/discshelves',
        component: NewDiscShelves
      },
      {
        path: '/discover/playerInfo/:id',
        component:  PlayerInfo
      }
    ]
  },
  {
    path: '/mine',
    component: AppMine
  },
  {
    path: '/friend',
    component: AppFriend
  },
  {
    path: '/download',
    component: AppDownloadClientApp
  },
]