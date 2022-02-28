import styled from 'styled-components';
export const AppHeaderContainer = styled.div`
  background-color: #242424;
  .container{
    line-height: 70px;
    display: flex;
    justify-content: space-between;
  .appheader_left{
    display: flex;
    .logo{
      display: inline-block;
      width: 175px;
      background-position: 0 0;
      text-indent: -9999px;
    } 
    .appheader_left_list{
    a{
      padding-left: 20px;
      padding-right: 20px;
      position: relative;
      display: inline-block;
      text-align: center;
      line-height: 70px;
      color: #CCCCCC;
      font-size: 14px;
      &:hover{
        text-decoration: none;
        background-color: #000;
        color: #fff;
      }
      &:last-of-type{
        .sign{
          width: 28px;
          height: 19px;
          top: 20px;
          right:-20px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          position: absolute;
        }
      }
    }
    .active{
      background-color: #000;
      color: #fff;
      .icon{
        position: absolute;
        width: 12px;
        height: 10px;
        bottom:-9px;
        left:50%;
        transform: translate(-50%,-50%);
        background-position: -226px 0;
      }
    }
    }
  }
  .appheader_right{
    /* line-height: 70px; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 330px;
    .input_container{
      position: relative;
      .input{
      font-size: 12px;
      padding-left: 30px;
      border-radius: 20px;
      width: 158px;
      background-image: url(${require("@/assets/img/sprite_01.png")});
      background-position: 0 -99px;
    }
    .input_icon{
      position: absolute;
      font-size: 18px;
      left: 7px;
      top: 25px;
      color: #9D9D9D;
      z-index: 10;
    }
    }

    .appheader_right_button{
      width: 90px;
      height: 30px;
      line-height: 29px;
      border-radius: 30px;
      color: #ccc;
      border: 1px solid #4F4F4F;
      background-color: transparent;
      &:hover{
        color: #fff;
        border: 1px solid #fff;
      }
    }
  }
  }
  .appheaderline{
    height: 5px;
    background: #C20C0C;
  }
`