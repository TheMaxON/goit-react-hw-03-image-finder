import styled from '@emotion/styled';

// export const ButtonStyled = styled.button`
//   border: none;
//   background-color: var(--color-accent);
//   font-size: 18px;
//   color: var(--color-primary);
//   padding: 10px;
//   cursor: pointer;
//   border-radius: 5px;
//   margin: auto;
//   display: block;
// `;

export const ButtonStyled = styled.button`
  background-color: var(--color-accent);
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: var(--color-text);
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin: auto;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;

  &:focus,
  &:hover {
    text-decoration: none;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
  }

  &([disabled]):active {
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;
