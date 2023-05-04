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
    const { onCloseModal } = this.props;

    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  handleBackdropClick = e => {
    const { onCloseModal } = this.props;

    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  render() {
    const { modalImage, tags } = this.props;
    return (
      <ModalBackgrop onClick={this.handleBackdropClick}>
        <div className="modal">
          <ModalStyled src={modalImage} loading="lazy" alt={tags} />
        </div>
      </ModalBackgrop>
    );
  }
}

export default Modal;

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
