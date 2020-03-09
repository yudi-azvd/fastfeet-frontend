import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  height: 64px;
  padding-left: 30px;

  nav {
    display: flex;
    align-items: center;

    a#logo {
      margin-right: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        min-width: 135px;
        width: 135px;
      }
    }

    div {
      padding-left: 30px;
      border-left: 1px solid #ddd;

      ul {
        line-height: 32px;
        display: flex;

        li {
          font-weight: bold;
          font-size: 15px;

          & + li {
            margin-left: 21px;
          }

          a {
            color: #999;
          }

          a.selected {
            color: #444;
          }
        }
      }
    }
  }
`;
