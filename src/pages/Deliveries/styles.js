import styled from 'styled-components';
// import { MdSearch } from 'react-icons/md';

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
      /* background: #fff url('../assets/search.svg') no-repeat 190px center; */
      margin-bottom: 22px;
      padding-left: 16px;
      width: 237px;
      height: 36px;
      border: 1px solid #ddd;
      color: #ddd;
      border-radius: 4px;
    }

    button {
      /* TEMPORÁRIO ENQT NÃO HÁ COPNNT */
      background: purple;
      color: white;
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
        justify-content: center;

        img {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          margin-right: 5px;
        }
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
