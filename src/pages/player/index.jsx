import React, { memo } from 'react'
import { PlayerInfoStyle } from './style'

export default memo(function PlayerInfo(props) {
  return (
    <PlayerInfoStyle>
      213123
      我是歌曲{props.match.params.id}的详情
    </PlayerInfoStyle>
  )
})
