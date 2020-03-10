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
