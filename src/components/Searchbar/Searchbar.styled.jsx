import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
  border-bottom: 3px solid var(--color-primary);
`;

export const Form = styled.form`
  background-color: var(--color-primary);
  display: flex;
  overflow: hidden;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 35px;
  border: none;
  outline: none;
  background-color: var(--color-secondary);
  color: var(--color-text);
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 7px 18px;
  color: var(--color-text);
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
`;
