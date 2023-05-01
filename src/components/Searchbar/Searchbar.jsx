import { React, Component } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
// import { propTypes } from 'prop-types';
import { Header, Form, Button, Input } from './Searchbar.styled.jsx';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();
    if (this.state.query.trim() === '') {
      return console.log('query is empty');
    }
    onSubmit(this.state.query);
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" aria className="button">
            <BiSearchAlt2 style={{ width: 20, height: 20 }} />
          </Button>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;
