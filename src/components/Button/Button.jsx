import { ButtonStyled } from './Button.styled.jsx';

export const Button = props => {
  return (
    <ButtonStyled type="button" onClick={props.fetchPhotos}>
      <span>Load more</span>
    </ButtonStyled>
  );
};
