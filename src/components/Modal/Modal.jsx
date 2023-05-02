import { React, Component } from 'react';
import { PropTypes } from 'prop-types';
import { ModalBackgrop, ModalStyled } from './Modal.styled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleESC);
  }

  handleESC = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { image } = this.props;
    return (
      <ModalBackgrop onClick={this.handleBackdropClick}>
        <div className="modal">
          <ModalStyled src={image} loading="lazy" alt="Fullscreen image" />
        </div>
      </ModalBackgrop>
    );
  }
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
