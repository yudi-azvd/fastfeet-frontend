import styled from 'styled-components';

import BasicModal from '../../components/BasicModal';

export const Container = styled.div`
  margin: 30px 10%;

  h1 {
    color: #444;
    font-size: 24px;
    margin-bottom: 34px;
  }

  div.header {
    padding-right: 20px;
    margin-bottom: 14px;
    font-weight: 16px;
    font-weight: bold;
    color: #444;

    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr;
    padding-left: 25px;

    div.actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;

export const ProblemItem = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
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
`;

export const Modal = styled(BasicModal)`
  h2 {
    color: #444;
    font-size: 14px;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;
