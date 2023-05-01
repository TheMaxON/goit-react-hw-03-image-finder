export const Button = props => {
  return (
    <button type="button" onClick={props.clickHandler}>
      <span>Load more</span>
    </button>
  );
};
