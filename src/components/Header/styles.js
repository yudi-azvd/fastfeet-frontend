import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding-left: 30px;
  padding-right: 30px;
  background: #fff;

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
            transition: opacity 0.2s;

            &:not(.selected):hover {
              color: ${darken(0.08, '#999')};
            }

            &.selected {
              color: #444;
            }
          }
        }
      }
    }
  }

  aside {
    strong {
      display: block;
      color: #666;
    }

    button {
      background: #fff;
      padding: 0;
      display: inline-block;
      border: 0;
      color: #de3b3b;
    }
  }
`;
