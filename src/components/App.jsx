import { React, Component } from 'react';
import { Section } from './Section/Section';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    searchQuery: '',
  };

  onSubmit = query => {
    this.setState({ searchQuery: query });
  };
  render() {
    return (
      <>
        <Section>
          <Searchbar onSubmit={this.onSubmit} />
        </Section>
        <Section>
          <ImageGallery query={this.state.searchQuery} />
        </Section>
      </>
    );
  }
}

export default App;
