import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  align-self: center;

  label.avatar {
    margin: 0 auto;
    cursor: pointer;
    /* Na página onde é usado label acaba com width: 100% */
    width: fit-content;
  }

  input {
    display: none;
  }
`;

// Cortar imagem circular sem deformação
// https://stackoverflow.com/questions/26421274/css-circular-cropping-of-rectangle-image
export const ImageCrop = styled.div`
  align-self: center;
  width: 148px;
  height: 148px;
  border-radius: 50%;
  border: 2px dashed #6e29e4;
  background: purple;
  position: relative;
  overflow: hidden;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  img {
    margin: 0 auto;
    height: 100%;
    width: auto;
  }
`;

export const DefaultAvatarPreview = styled.div`
  font-weight: normal;
  margin: 0 auto;
  margin-bottom: 24px;
  width: 148px;
  height: 148px;
  border-radius: 50%;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.editMode
      ? css`
          border: 2px dashed #6e29e4;
          background: ${lighten(0.35, '#6e29e4')};
          color: #6e29e4;
          font-size: 66px;
        `
      : css`
          border: 2px dashed #ddd;
          flex-direction: column;
          color: #ddd;
        `}

  span {
    font-size: 16px;
  }

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
