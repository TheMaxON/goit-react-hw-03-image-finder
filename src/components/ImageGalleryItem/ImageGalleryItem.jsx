import { PropTypes } from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt="f" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
