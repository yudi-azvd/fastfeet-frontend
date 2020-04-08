import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  div {
    align-self: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px solid #7d40e7;
    position: relative;
    overflow: hidden;

    /* DEMORA CONSIDERAVELMENTE PRA CARREGAR */
    img {
      margin: 0 auto;
      height: 100%;
      width: auto;
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    min-width: 35px;
    min-height: 35px;
    border-radius: 50%;
    margin-right: 5px;

    color: ${props => props.color};
    background: ${props => lighten(0.25, props.color)};
    opacity: 0.7;
  }
`;
