import styled from '@emotion/styled';

export const ImagesGrid = styled.ul`
  margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

export const IdlePlaceholder = styled.h1`
  color: var(--color-text);
  text-align: center;
  font-size: 100px;
  margin-top: 150px;
  text-decoration: underline;
  text-decoration-color: var(--color-secondary);
  text-decoration-thickness: 10px;
`;
