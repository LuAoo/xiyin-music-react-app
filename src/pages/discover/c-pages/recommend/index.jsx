import React, { memo } from 'react'
import TopBanner from './c-cpn/top-banner'
import { ReCommendStyle } from './style'
import HotRecommend from './c-cpn/hot-recommend';
import NewAlbum from './c-cpn/new-album';
import RankingList from './c-cpn/ranking-list';
import UseLogin from './c-cpn/use-login';
import SettleSinger from './c-cpn/settle-singer';
import HotAnchor from './c-cpn/hot-anchor';
// 组件
function Recommend(props) {
  return (
    <ReCommendStyle>
      {/* 推荐页面轮播图 */}
      <TopBanner></TopBanner>
      {/* 推荐页面主要内容组织框架 */}
      <div className="container wrap-v2" >

        <div className="container_left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <RankingList></RankingList>
        </div>
        <div className="container_right">
          <UseLogin></UseLogin>
          <SettleSinger></SettleSinger>
          <HotAnchor></HotAnchor>
        </div>
      </div>
    </ReCommendStyle>
  )
}

// 使用原始的connect来操作redux
// const mapStateToProps = (state) => ({
//   bannerList: state.Recommend.topBanners
// })

// const mapDispatchToProps = (dispatch) => ({
//   // 咋这里我们可以进行派发操作，通过在组件中调用
//   getBannerData() {
//     dispatch(getTopBannerAction())
//   }
// })
export default (memo(Recommend))



