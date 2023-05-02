import { React, Component } from 'react';
import { PropTypes } from 'prop-types';
import api from '../../api/api';
import Loader from '../Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { ImagesGrid, IdlePlaceholder } from './ImageGallery.styled.jsx';
import { Section } from '../Section/Section';

class ImageGallery extends Component {
  state = {
    photos: [],
    status: 'idle',
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.query !== this.props.query) {
      this.setState(
        {
          page: 1,
        },
        () => {
          this.clearPage();
          this.fetchPhotos();
        }
      );
    }
  }

  fetchPhotos = () => {
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

          this.setState(prevState => ({
            photos: [...prevState.photos, ...photos],
            status: 'resolved',
          }));

          return this.pageIncrement();
        })
        .catch(error => {
          return this.setState({ error, status: 'rejected' });
        });
    } catch (error) {
      return this.setState({ error });
    }
  };

  pageIncrement = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  clearPage = () => {
    this.setState({
      photos: [],
      status: 'pending',
      error: null,
    });
  };

  render() {
    const { photos, status } = this.state;

    if (status === 'idle') {
      return <IdlePlaceholder>Let's find your photos!</IdlePlaceholder>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <h1>Error</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <Section>
            <ImagesGrid>
              {photos.map(photo => {
                return (
                  <ImageGalleryItem
                    key={photo.id}
                    webformatURL={photo.webformatURL}
                    largeImageURL={photo.largeImageURL}
                    imageName={photo.tags}
                    toggleModal={this.props.toggleModal}
                  />
                );
              })}
            </ImagesGrid>
          </Section>
          <Section>
            <Button fetchPhotos={this.fetchPhotos} />
          </Section>
        </>
      );
    }
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
