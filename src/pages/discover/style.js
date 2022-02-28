import styled from 'styled-components';

export const TheContainerOfDisvover = styled.div`
  .top-header{
    background:#C20C0C;
    height:34px;
    .container{
      height:34px;
      display: flex;
      padding-left: 180px;
      padding-right: 350px;
      padding-top: 5px;
      box-sizing: border-box;
      justify-content: space-around;
      justify-items: center;
      a{
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        height: 20px;
        display: inline-block;
        font-size: 10px;
        color: #fff;
        border-radius: 30px;
        text-decoration: none;
        &.active{
          background:rgb(155, 9, 9);
        }
        &:hover{
          background:rgb(155, 9, 9);   
        }
      }
    }
  }
`