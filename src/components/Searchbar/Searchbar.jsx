import { React, Component } from 'react';
import { toast } from 'react-toastify';
import { BiSearchAlt2 } from 'react-icons/bi';
import { PropTypes } from 'prop-types';
import { Header, Form, Button, Input } from './Searchbar.styled.jsx';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const query = this.state.query.toLowerCase();
    event.preventDefault();
    if (query.trim() === '') {
      return toast.warning('Please enter your request', { theme: 'dark' });
    }
    onSubmit(query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" aria-label="Search" className="button">
            <BiSearchAlt2 style={{ width: 20, height: 20 }} />
          </Button>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
