import styled from 'styled-components';
export const NewAlbumStyle = styled.div`
  position: relative;
  .container{
    margin-top: 20px;
    height:184px;
    width: 100%;
    background: #f5f5f5;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    .banner_list{
      margin-top: 25px;
      margin-left: 28px;
      justify-content: space-between;
      width:645px ;
      .banner_list_item{
       display: flex !important;
       justify-content:space-around;
      }
    }
  }
  .left{
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translate(0,50%);
    width: 17px;
    height: 17px;
    background-position: -260px -75px;
    left: 10px;
  }
  .right{
    cursor: pointer;
    right: 10px;
    position: absolute;
    top: 50%;
    transform: translate(0,50%);
    width: 17px;
    height: 17px;
    background-position: -300px -75px;
  }
`