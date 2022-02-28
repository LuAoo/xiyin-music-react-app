import styled from 'styled-components';
import proimg from '@/assets/img/progress_bar.png';
export const AppPlayerBarStyle = styled.div`
  width: 100%;
  height: 53px;
  .wapper{
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 53px;
  background-position: 0 0;
  }
  .container{
    height: 53px;
    display: flex;
    .container_play{
      height: 53px;
      display: flex;
      align-items: center;
      margin-top: 3px;
      justify-content: space-between;
      .prev{
        width: 28px;
        height: 28px;
        background-position: 0 -130px;
        &:hover{
          background-position: -29px -130px;
        }
      }
      .next{
        width: 28px;
        height: 28px;
        background-position: -80px -130px;
        &:hover{
          background-position: -109px -130px;
        }
      }
      .play{
        margin-left: 10px;
        margin-right: 10px;
        width: 36px;
        height: 36px;
        /* sdf */
        background-position: 0 ${props=>props.isPlaying?"-165px": "-204px"};
        &:hover{
          background-position:${props=>props.isPlaying?"-40px -165px": "-40px -204px"};
        }
      }
    }
    .container_singcontent{
      margin-left: 30px;
      height: 53px;
      display: flex;
      align-items: center;
      margin-top: 3px;
      .container_singcontent_img{
        width: 34px;
        height: 35px;
      }
      .container_singcontent_info{
        margin-left: 15px;
        width: 560px;
        .info{
          position: relative;
          margin-left: 4px;
          overflow: hidden;
          top: 4px;
          .singname{
            float: left;
            color: #e8e8e8;
            font-size: 12px;
          }

          .info_icon{
            width: 19px;
            height: 17px;
            margin-left: 3px;
            float: left;
            background-position: 0 -57px;
          }
          .songname{
            margin-left: 10px;
            float: left;
            color: #9b9b9b;
            font-size: 12px;
          }
        }
        .progress_time{
          position: relative;
          bottom: 3px;
          display: flex;
          .ant-slider{
            width: 466px;
            .ant-slider-handle{
              margin-top: -4px;
              width: 16px;
              height: 16px;
            }
            .ant-slider-track{
              height: 10px;
              background: url(${proimg}) no-repeat;
              background-position:left -66px;
            }
            .ant-slider-rail{
              height: 10px;
              background: url(${proimg}) no-repeat;
              background-position:right 0;
            }
            
          }
          .time{
            position: absolute;
            top: 8px;
            right: 8px;
            width: 70px;
            margin-left: 8px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 12px;
            .begintime{
              color: #a1a1a1;
            }
            .line{
              color: #797979;
            }
            .addtime{
              color: #797979;
            }
          }
        }
      }
    }
    .container_dosomething{
      margin-top: 5px;
      margin-left: 30px;
      display: flex;
      height: 53px;
      align-items: center;
      width: 215px;
      .container_dosomething_left{
        display: flex;
        .left_icon1{
        width: 25px;
        height: 25px;
        background-position: 0px 0px;
        &:hover{
          background-position: 0px -25px;
        }
        }
        .left_icon2{
        background-position: -88px -163px;
        width: 25px;
        height: 25px;
        &:hover{
        background-position: -88px -189px;
        }
        }
        .left_icon3{
          background-position: -114px -163px;
          width: 25px;
          height: 25px;
          &:hover{
            background-position: -114px -189px;
          
        }
        }
      }
      .middle{
        width: 25px;
        height: 25px;
        background-position: -139px -248px
      }
      .container_dosomething_right{
        display: flex;
        .right_icon1{
          background-position: -2px -248px;
          width: 25px;
          height: 25px;
          &:hover{
          background-position:-33px -248px;
          }
        }
        .right_icon2{
          background-position:${props=>{
            switch (props.PlayType) {
              case 0:
                return '-3px -344px'
              case 1:
                return '-66px -248px;'
              case 2:
                return '-66px -344px'
              default:
                break;
            }
          }};
          width: 25px;
          height: 25px;
          &:hover{
            background-position:${props=>{
            switch (props.PlayType) {
              case 0:
                return '-33px -344px'
              case 1:
                return '-93px -248px;'
              case 2:
                return '-93px -344px'
              default:
                break;
            }
          }};
          }
        }
        .right_icon3{
          background-position:-42px -68px;
          width: 60px;
          height: 25px;
          &:hover{
          background-position:-42px -98px;
          }
          .songnum{
            position: relative;
            top: 4px;
            left: 31px;
            color: #666;
            font-size: 12px;
          }
        }
      }
    }
  }
`