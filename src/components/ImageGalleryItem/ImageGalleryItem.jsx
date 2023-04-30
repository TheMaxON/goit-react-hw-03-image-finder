export const ImageGalleryItem = (id, image, bigImage) => {
  console.log('what elem gets: ', image);
  return (
    <li className="gallery-item">
      <img src={image} alt="f" />
    </li>
  );
};
