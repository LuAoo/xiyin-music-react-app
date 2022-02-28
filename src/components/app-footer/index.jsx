import { footerLinks } from '@/services/local-data'
import React from 'react'
import { AppFooterContainer } from './style'
export default function AppFooter() {
  return (
    <AppFooterContainer>
      <div className="container wrap-v2">
        <div className="container_left">
          <div className="container_left_toplist">
            {
              footerLinks.map((item, index) => {
                return <a key={item.link} href={item.link}>{item.title}</a>
              })
            }
          </div>
          <div className='normel_link'><span>网易公司版权所有©1997-2021 杭州乐读科技有限公司运营：</span> <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png">浙网文[2021] 1186-054号</a></div>
          <div className='normel_link'><span>违法和不良信息举报电话：0571-89853516 举报邮箱：</span> <a href="ncm5990@163.com" >ncm5990@163.com</a></div>
          <div className='normel_link'><a href="https://beian.miit.gov.cn/#/Integrated/index">粤B2-20090191-18  工业和信息化部备案管理系统网站</a> 👮 ‍<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" >浙公网安备 33010902002564号</a></div>
        </div>
        <div className="container_right">
          <div className="container_right_list">
            <div className='container_right_item'>
              <a href="/" className='sprite_footer one'>1</a>
              <p>amped studio</p>
            </div>
            <div className='container_right_item'>
              <a href="/" className='sprite_footer two'>1</a>
              <p>用户认证</p>
            </div>
            <div className='container_right_item'>
              <a href="/" className='sprite_footer three'>1</a>
              <p>独立音乐人</p>
            </div>
            <div className='container_right_item'>
              <a href="/" className='sprite_footer four'>1</a>
              <p>赞赏</p>
            </div>
            <div className='container_right_item'>
              <a href="/" className='sprite_footer five'>1</a>
              <p>视频奖励</p>
            </div>
          </div>
        </div>
      </div>
    </AppFooterContainer>
  )
}
