import { Triangle } from 'react-loader-spinner';
import { LoaderContainer, LoaderText } from './Loader.styled.jsx';

const Loader = () => {
  return (
    <LoaderContainer>
      <Triangle
        height="170"
        width="170"
        color="var(--color-text-secondary)"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <LoaderText>Loading...</LoaderText>
    </LoaderContainer>
  );
};

export default Loader;
