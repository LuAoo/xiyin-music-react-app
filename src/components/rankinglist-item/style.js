import styled from 'styled-components';
export const RankingListItemStyle = styled.div`
width: 230px;
.rankingitem_top{
  height: 120px;
  padding: 20px 0 0 19px;
  overflow: hidden;
  .image{
    float: left;
    position: relative;
    .image_cover{
      position: absolute;
      top: 0;
      width: 80px;
      height: 80px;
      left: 0px;
      background-position: -145px -57px
    }
  }
  .top_container{
    float: left;
    margin-left: 10px;
    padding-top: 10px;
    a{
      font-size: 14px;
      color: #333;
      font-weight: bold;
    }
    .top_do{
      margin-top: 10px;
      overflow: hidden;
      .play{
        background-position: -267px -205px;
        width: 22px;
        height: 22px;
        float: left;
        &:hover{
          background-position: -267px -235px
        }
      }
      .perserve{
        background-position: -300px -205px;
        width: 22px;
        height: 22px;
        float: left;
        margin-left: 10px;
        &:hover{
          background-position: -300px -235px
        }
      }
    }
  }
}
.rankingitem_content{
  .rankingitem_content_item{
    box-sizing: border-box;
    width: 230px;
    height: 32px;
    display: flex;
    align-items: center;
    :nth-child(-n+3) .pp {
        color: #c10d0c;
        font-size: 18px;
      }
    .rankingitem_content_p{
      margin-left: 15px;
      display: flex;
      align-items: center;
      p{
        width: 20px;
        text-align: center;
        margin-right: 10px;
        font-size: 16px;
        color: #666;
      }
      a{
        color: #000;
        font-size: 12px;
        display: inline-block;
        width: 150px;
      }
    }
    .dowork{
      align-items: center;
      display: flex;
      display:none;
      .dowork_play{
        margin-right: 10px;
        width: 17px;
        height: 17px;
        background-position: -267px -268px;
        &:hover{
          background-position: -267px -288px
        }
      }
      .dowork_add{
        margin-right: 10px;
        width: 17px;
        height: 13px;
        background-position: 0 -700px;
        &:hover{
          background-position: -22px -700px
        }
      }
      .dowork_perserve{
        width: 17px;
        height: 17px;
        background-position: -297px -268px;
        &:hover{
          background-position: -297px -288px
        }
      }
    }
    &:hover{
      .dowork{
        display: flex;
      }
      .rankingitem_content_pa{
        width: 100px;
      }
    }
  }
}
.rankingitem_alldata{
  display: flex;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  a{
    color: #000;
    margin-right: 30px;
  }
}

`