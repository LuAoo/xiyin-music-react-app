import styled from 'styled-components';
export const TopBannerStyle = styled.div`
  color: red;
  background: url(${props => props.CurrentBannerIndex}) center center/6000px;
  position: relative;
  .bannercontainer{
    opacity: .9;
    display: flex;
    justify-content: space-between;
    .bannercontent{
      width: 730px;
      height: 285px;
      .contentStyle{
        width: 730px;
        height: 285px;
        color: '#fff';
        line-height: 160px;
        text-align:center;
        background: '#364d79';
        img{
          height: 280px;
        }
      }
    }
    .downloadApp{
    position: relative;
    width: 254px;
    height: 285px;
    cursor: pointer;
    opacity: .9;
    &:hover{
      opacity: 1;
    }
    p{
      width: 100%;
      height: 40px;
      text-align: center;
      background: #232323;
      line-height: 40px;
      color:#8d8d8d;
      font-size: 12px;
      position: absolute;
      bottom: 5px;
    }
  } 
  }

  .btn{
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    cursor: pointer;
    width: 37px;
    height: 63px;
    &:hover{
      background-color: rgba(0, 0, 0, .1);
    }
  }
  .right{
    left: 150px;
    background-position: 0 -360px;
  }
  .left{
    right: 150px;
    background-position: 0 -508px;
  }
`
