import styled from 'styled-components';
// import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #7d40e7;
  height: 100%;

  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  text-align: center;

  img {
    margin-bottom: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;
