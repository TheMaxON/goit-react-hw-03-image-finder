import { React, Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    photos: [],
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.query !== this.props.query) {
      const KEY = '34527262-b94b65b29daaf98e2e152eee9';
      const query = this.props.query;

      fetch(
        `https://pixabay.com/api/?q=${query}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(res => {
          this.setState({ photos: res.hits });
        });
    }
  }
  render() {
    console.log(this.state);
    return (
      <ul className="gallery">
        {this.state.photos.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              //   id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
