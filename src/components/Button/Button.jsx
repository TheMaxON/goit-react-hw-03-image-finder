export const Button = props => {
  return (
    <button type="button" onClick={props.onCick}>
      <span>Load more</span>
    </button>
  );
};
