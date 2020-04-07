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
    }
  }
`;

export const RecipientList = styled.div`
  display: flex;
  flex-direction: column;

  div.header {
    padding-right: 20px;
    margin-bottom: 14px;
    font-weight: 16px;
    font-weight: bold;
    color: #444;

    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr;
    padding-left: 25px;

    div.actions {
      display: flex;
      /* flex-direction: column; */
      justify-content: flex-end;
      align-items: center;
    }
  }
`;

export const RecipientItem = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr;

  padding: 0 28px;

  color: #666;
  background: #fff;
  border-radius: 4px;
  height: 57px;
  margin-bottom: 21px;
  overflow-wrap: auto;

  /* Tenho que passar essa regra pras outras listagens */
  div {
    display: flex;
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
`;
