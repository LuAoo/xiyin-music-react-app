import styled from 'styled-components'
export const ThemeCoverStyle = styled.div`
margin-bottom: 40px;
width: 140px;
height: 190px;
position: relative;
.container{
  .container_top{
    position: relative;
    height: 140px;
    img{
      width: 140px;
      height: 140px;
    }
    .container_top_cover{
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      &:hover{
        .play{
          background-position: 0 -60px;
        }
    }
    }
    .container_top_bottom{
      bottom: 0px;
      width: 100%;
      height:25px;
      position: absolute;
      display: flex;
      color: #ccc;
      background-position:0 -537px;
      span{
        display: inline-block;
      }
      .logo{
        margin-left: 5px;
        background-position: 0 -24px;
        width: 14px;
        height: 11px;
        margin-top: 8px;
      }
      .playnum{
        margin-top: 5px;
        margin-left: 6px;
      }
      .play{
        width: 16px;
        height: 17px;
        position: absolute;
        right: 4px;
        bottom: 3px;
        background-position: 0 0;
       
      }
    }
  }
}
.container_bottom{
    width: 100%;
    margin-top: 5px;
    p{
      font-size: 14px;
    }
  }
  
`