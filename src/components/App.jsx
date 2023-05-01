import { React, Component } from 'react';
import { Section } from './Section/Section';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    modalImage: '',
  };

  onSubmit = query => {
    return this.setState({ searchQuery: query });
  };

  toggleModal = image => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      modalImage: image,
    }));
  };

  render() {
    return (
      <>
        <Section>
          <Searchbar onSubmit={this.onSubmit} />
        </Section>
        <Section>
          <ImageGallery
            query={this.state.searchQuery}
            toggleModal={this.toggleModal}
          />
        </Section>
        {this.state.showModal && (
          <Modal image={this.state.modalImage} toggleModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
