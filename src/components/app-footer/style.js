import styled from 'styled-components';
export const AppFooterContainer = styled.div`
  border-top: 1px solid #d3d3d3;
  background-color: #f2f2f2;
  .container{
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .container_left{
    .container_left_toplist{
      display: flex;
      width: 400px;
      justify-content: space-between;
      a{
        font-size: 12px;
      }
    }
    .normel_link{
      margin-top: 5px;
    }
    }
    .container_right{
      .container_right_list{
      display: flex;
      justify-content: space-between;
      .container_right_item{
        width: 90px;
        height: 70px;
      }
      a{
        margin: 0 auto;
        display: block;
        width: 50px;
        display: block;
        height: 45px;
        text-indent: -9999px;
      }
      p{
        margin-top: 5px;
        text-align: center;
        font-size: 10px;
        color: #ccc;
      }
      .one{
        background-position: -63px -456.5px;
      }
      .two{
        background-position: -63px -101px;

      }
      .three{
        background-position: 0 0;

      }
      .four{
        background-position: -60px -50px;

      }
      .five{
        background-position: 0 -101px;
      }
    }
    }
  }
`