import { memo } from 'react';
import styled from 'styled-components';

import searchSvg from '../../assets/search.svg';

export const Container = styled.div`
  margin: 30px 10%;

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

  /* Não to sabendo alinhar Ações com o ícone de ação */
  div.header {
    padding-right: 20px;
    margin-bottom: 14px;
    font-weight: 16px;
    font-weight: bold;
    color: #444;

    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
    padding-left: 25px;

    div.actions {
      display: flex;
      /* flex-direction: column; */
      justify-content: flex-end;
      align-items: center;
    }
  }
`;

// https://dmitripavlutin.com/use-react-memo-wisely/
export const DeliveryItem = memo(styled.li`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0 28px;

  /* aí quebra */
  line-height: 57px;

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

    div.dropdown {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    svg {
      cursor: pointer;
    }
  }
`);

export const Modal = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;

  div#modal-content {
    position: absolute;
    /* top e bottom precisam estar deifinidos 
    pra que uma altura esteja definida (?). 
    left e right precisam estar definidos p que
    ele tenha comprimento. */
    top: 0px;
    left: 40px;
    right: 40px;
    bottom: 10px;
    box-shadow: 0px 0px 10px #00000033;
    background: #fff;
    overflow: auto;
    border-radius: 4px;
    margin: 238px auto;
    width: 450px;
    min-height: 253px;
    padding: 25px;

    section {
      display: block;

      & + section {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid #eee;
      }

      p {
        color: #666;
        margin-bottom: 8px;

        strong {
          color: #444;
        }

        span {
          font-weight: bold;
          color: #666;
        }
      }
    }
  }
`;
