import { PropTypes } from 'prop-types';
import { ButtonStyled } from './Button.styled.jsx';

const Button = props => {
  const { onLoadMore } = props;
  return (
    <ButtonStyled type="button" onClick={onLoadMore}>
      <span>Load more</span>
    </ButtonStyled>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
