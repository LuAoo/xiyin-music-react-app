import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";

 
import HYThemeHeaderSong from '@/components/theme-header-song';
import {
  RankingListWrapper
} from './style';
import { formatMinuteSecond, getSizeImage } from '@/utils/format-num';
import { getCurrentPlaySongAction } from '@/pages/player/store/createActions';

export default memo(function HYRankingList() {
  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual);
  const dispatch = useDispatch()
  const tracks = state.playList.tracks || [];
  function playMusic(id) {
    dispatch(getCurrentPlaySongAction(id))
  }
  return (
    <RankingListWrapper>
      <HYThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table" onClick={()=>{playMusic(item.id)}}></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})

