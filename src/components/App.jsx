import { React, Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

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
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery query={this.state.searchQuery} />
        <Button />
      </>
    );
  }
}

export default App;
