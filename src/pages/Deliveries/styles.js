import { memo } from 'react';
import styled from 'styled-components';

import searchSvg from '../../assets/search.svg';

import BasicModal from '../../components/BasicModal';

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

  color: #666;
  background: #fff;
  border-radius: 4px;
  height: 57px;
  margin-bottom: 21px;
  overflow-wrap: normal;

  div {
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  div.name {
    position: relative;
    padding-right: 5px;

    /* Sim, é muita bambiarra. Isso 
    só pra ter um efeito de fade out. Não vale à pena */
    &::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      pointer-events: none;
      background-image: linear-gradient(
        to right,
        transparent,
        transparent,
        white,
        white,
        white
      );
      background-position: 20px 20px;
      background-repeat: no-repeat;
    }
  }

  div.avatar {
    display: flex;
    justify-content: flex-start;

    div {
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
    overflow: visible;

    div.dropdown {
      overflow: visible;
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

export const Modal = styled(BasicModal)`
  section {
    display: block;

    & + section {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #ededed;
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
`;
