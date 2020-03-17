import styled from 'styled-components';

import searchSvg from '../../assets/search.svg';

export const Container = styled.div`
  margin: 30px 120px;

  h1 {
    color: #444;
    font-size: 24px;
    margin-bottom: 34px;
  }

  div {
    display: flex;
    justify-content: space-between;

    input {
      background: #fff url(${searchSvg}) no-repeat 16px center;
      background-size: 16px 16px;
      margin-bottom: 22px;
      padding-left: 40px;
      width: 237px;
      height: 36px;
      border: 1px solid #ddd;
      color: #999;
      border-radius: 4px;

      &::placeholder {
        color: #999;
      }
    }
  }
`;

export const DeliveriesList = styled.div`
  display: flex;
  flex-direction: column;

  div.row {
    margin-bottom: 14px;
    font-weight: 16px;
    font-weight: bold;
    color: #444;

    div.actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  .row {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
    padding-left: 25px;
  }

  /* Não to sabendo alinhar Ações com o ícone de ação */
  div.row {
    padding-right: 28px;
  }

  li.row {
    padding-right: 28px;
  }

  ul {
    li {
      /* aí quebra */
      line-height: 57px;
      /* vertical-align: baseline; */

      color: #666;
      background: #fff;
      border-radius: 4px;
      height: 57px;
      margin-bottom: 21px;
      overflow-wrap: normal;

      div.avatar {
        display: flex;
        align-items: center;
        justify-content: left;

        span.default-avatar {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 5px;
        }

        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }

      div.status {
        display: flex;
        justify-content: left;
        align-items: center;
      }

      div.actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        svg {
          cursor: pointer;
        }
      }
    }
  }
`;
