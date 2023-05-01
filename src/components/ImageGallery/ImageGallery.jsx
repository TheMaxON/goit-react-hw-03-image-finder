import { React, Component } from 'react';
import api from '../../api/api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { ImagesGrid } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    photos: [],
    status: 'idle',
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      return this.fetchPhotos();
    }
    if (prevState.page !== this.state.page) {
      return this.fetchPhotos();
    }
  }

  fetchPhotos() {
    this.setState({ status: 'pending' });
    const query = this.props.query;
    const { page } = this.state;

    try {
      api(query, page)
        .then(res => {
          if (res.ok) {
            return res.json();
          }

          return Promise.reject(new Error(`Error ${res.status}`));
        })
        .then(res => {
          const photos = res.hits;
          return this.setState({ photos, status: 'resolved' });
        })
        .catch(error => {
          return this.setState({ error, status: 'rejected' });
        });
    } catch (error) {
      return this.setState({ error });
    }
  }

  loadMore() {
    console.log('hello');
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  }

  pageDefault() {
    this.setState({ page: 1 });
  }

  render() {
    const { photos, status } = this.state;

    if (status === 'idle') {
      return <h1>Enter your prompt</h1>;
    }

    if (status === 'pending') {
      return <h1>Loading...</h1>;
    }

    if (status === 'rejected') {
      return <h1>Error</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImagesGrid>
            {photos.map(photo => {
              return (
                <ImageGalleryItem
                  key={photo.id}
                  webformatURL={photo.webformatURL}
                  largeImageURL={photo.largeImageURL}
                />
              );
            })}
          </ImagesGrid>
          <Button onClick={this.loadMore} />
        </>
      );
    }
  }
}

export default ImageGallery;
