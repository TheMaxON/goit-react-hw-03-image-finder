import { PropTypes } from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  toggleModal,
  imageName,
}) => {
  return (
    <li
      className="gallery-item"
      onClick={() => toggleModal(largeImageURL, imageName)}
    >
      <Image src={webformatURL} loading="lazy" alt={imageName} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
