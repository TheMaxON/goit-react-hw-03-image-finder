import { React, Component } from 'react';
import { getImages } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section } from './Section/Section';
import PlaceholderText from './PlaceholderText/PlaceholderText';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from '../components/Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    totalImages: 0,
    isLoading: false,
    showModal: false,
    modalImage: '',
    tags: '',
    error: null,
  };

  componentDidUpdate = (_, prevState) => {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.fetchImages(searchQuery, page);
    }
    if (prevState.searchQuery !== searchQuery) {
      this.scrollToTop();
    }
  };

  fetchImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });

      const data = await getImages(query, page);
      if (data.hits.length === 0) {
        return toast.error('Sorry, there is nothing we could find.', {
          theme: 'dark',
        });
      }
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        totalImages: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = searchQuery => {
    return this.setState({ searchQuery, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onOpenModal = (modalImage, tags) => {
    this.setState({ showModal: true, modalImage, tags });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, totalImages, isLoading, showModal, modalImage, tags } =
      this.state;
    const totalPages = totalImages / images.length;

    return (
      <>
        <Section>
          <Searchbar onSubmit={this.onSubmit} />
        </Section>

        {isLoading && <Loader />}
        <Section>
          <ImageGallery images={images} onOpenModal={this.onOpenModal} />
        </Section>

        <Section>
          {totalPages > 1 && !isLoading && images.length !== 0 && (
            <Button onLoadMore={this.onLoadMore} />
          )}
        </Section>

        {showModal && (
          <Modal
            modalImage={modalImage}
            tags={tags}
            onCloseModal={this.onCloseModal}
          />
        )}

        {images.length === 0 && !isLoading && (
          <PlaceholderText text={"Let's find your photos!"} />
        )}

        <ToastContainer />
      </>
    );
  }
}

export default App;
