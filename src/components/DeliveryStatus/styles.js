import styled from 'styled-components';
import { lighten } from 'polished';

export const StatusContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  background: ${props => lighten(0.5, props.color)};

  &::before {
    position: relative;
    /* left: 50%; */
    content: '';
    display: inline-block;
    height: 25px;
    width: 25px;
    background: ${props => lighten(0.5, props.color)};
    background: blue;
    border-radius: 50%;
  }

  &::after {
    position: relative;
    /* left: 10px; */
    content: '';
    display: inline-block;
    height: 25px;
    width: 25px;
    background: ${props => lighten(0.5, props.color)};
    background: red;
    border-radius: 50%;
  }

  span::before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    background: ${props => props.color};
    width: 10px;
    height: 10px;
    margin-right: 6px;
  }

  span {
    text-align: center;
    color: ${props => props.color};
    min-width: 110px;
    /* padding: 0 15px; */
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
  }
`;
