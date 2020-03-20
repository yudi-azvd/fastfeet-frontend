import { memo } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

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
    position: relative;

    div.dropdown {
      display: flex;
      /* flex-direction: column;
      justify-content: center;
      align-items: center; */
      /* position: relative; */
    }

    svg {
      cursor: pointer;
    }
  }
`);

export const ActionsDropdown = styled.ul`
  padding: 10px;
  width: 120px;
  border-radius: 4px;
  box-shadow: 0 0 2px #00000026;
  background: #fff;
  font-size: 16px;

  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;

  li {
    cursor: pointer;
    padding: 8px 0;
    display: flex;
    align-items: center;
    line-height: 100%;
    font-size: 16px;
    border-bottom: 1px solid #eee;
    color: #999;

    &:last-child {
      border-bottom: 0;
    }

    svg {
      margin-right: 8px;
      width: 16px;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    &:hover svg {
      opacity: 1;
    }

    span {
      transition: color 0.2s;
    }

    &:hover span {
      color: ${darken(0.2, '#999999')};
    }
  }
`;
