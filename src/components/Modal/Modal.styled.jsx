import styled from '@emotion/styled';

export const ModalBackgrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 999;
`;

export const ModalStyled = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
`;
