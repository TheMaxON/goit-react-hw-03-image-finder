import { React, Component } from 'react';
import { Triangle } from 'react-loader-spinner';
import api from '../../api/api';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import {
  ImagesGrid,
  IdlePlaceholder,
  LoaderContainer,
  LoaderText,
} from './ImageGallery.styled.jsx';
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
      console.log('query changed');
      this.clearPage();
      this.fetchPhotos();
    }
  }

  fetchPhotos = () => {
    console.log('length, pages', this.state.photos.length, this.state.page);

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

          this.pageIncrement();

          return this.setState(prevState => ({
            photos: [...prevState.photos, ...photos],
            status: 'resolved',
          }));
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
    console.log('clear worked');
    return this.setState({
      photos: [],
      status: 'pending',
      error: null,
      page: 1,
    });
  };

  render() {
    const { photos, status } = this.state;

    if (status === 'idle') {
      return <IdlePlaceholder>Let's find your photos!</IdlePlaceholder>;
    }

    if (status === 'pending') {
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
