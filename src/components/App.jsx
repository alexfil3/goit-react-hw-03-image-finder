import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './ImageGallery/Modal/Modal';
import { AppWrapper } from './App.styled';
import './App.css';

export class App extends Component {
  state = {
    imageName: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { showModal } = this.state;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery imageName={this.state.imageName} />
        {/* <Button></Button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Heloooo</h1>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        <button type="button" onClick={this.toggleModal}>
          Open
        </button>
      </AppWrapper>
    );
  }
}
