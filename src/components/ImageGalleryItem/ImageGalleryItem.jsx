import { PropTypes } from 'prop-types';
import { Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onOpenModal,
}) => {
  return (
    <li
      className="gallery-item"
      onClick={() => onOpenModal(largeImageURL, tags)}
    >
      <Image src={webformatURL} loading="lazy" alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
