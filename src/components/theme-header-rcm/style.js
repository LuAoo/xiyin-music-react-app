import styled from 'styled-components';
export const ThemeHeaderStyle = styled.div`
  border-bottom: 2px solid #C20C0C;
  display: flex;
  align-items: center;
  height: 35px;
  position: relative;
  .logo{
    height: 33px;
    width: 33px;
    background-position: -225px -156px;
  }
  .alist{
    line-height: 35px;
    margin-left: 30px;
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
  .more{
    position: absolute;
    right: 20px;
    span{
      width: 12px;
      height: 12px;
      vertical-align: middle;
      display: inline-block;
      background-position: 0 -240px;
    }
  }
`