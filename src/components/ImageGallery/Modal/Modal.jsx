import React, { Component } from 'react';
import styled from 'styled-components';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleClick);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClick}>
        <ModalWindow>
          {/* <img src="" alt="" /> */}
          {this.props.children}
        </ModalWindow>
      </Overlay>
    );
  }
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: white;
`;
