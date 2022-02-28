import styled from 'styled-components';
export const NewAlbumCoverStyle = styled.div`
    height: 150px;
    width: ${props => props.width};
  .container_cover{
    position: relative;
    width: ${props => props.width};
    img{
    width: ${props => props.size};
    height:${props => props.size};
    }
    .cover{
      background-position: 0 ${props => props.bpos};
    }
    .icon{
    display: none;
    right: 20px;
    bottom: 5px;
    position: absolute;
    width: 22px;
    height: 22px;
    background-position: 0 -85px;
    }
    &:hover{
      .icon{
        display: block;
      }
    }
  }
  .songname{
      margin-top: 2px;
      display: block;
      font-size: 13px;
      color: #000;
    }
    .singername{
      font-size: 12px;
    }
`