import { Component } from 'react';
import {
  StyledCloseBtn,
  StyledModal,
  StyledOverlayForModal,
} from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeydown);
  }

  onKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    // const { img, tags } = this.props.data;
    return (
      <StyledOverlayForModal onClick={this.onOverlayClick}>
        <StyledModal>
          {/* <img src={} alt={} /> */}
          <StyledCloseBtn>&times;</StyledCloseBtn>
        </StyledModal>
      </StyledOverlayForModal>
    );
  }
}
