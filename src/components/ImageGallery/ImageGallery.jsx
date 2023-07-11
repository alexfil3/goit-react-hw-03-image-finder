import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import { Loader } from './Loader/Loader';

export class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
  };

  componentDidUpdate(prevState) {
    const URL = 'https://pixabay.com/api/1';
    const KEY = '36952134-d669c6dacbc585856e58da105';

    if (prevState.imageName !== this.props.imageName) {
      this.setState({ loading: true });
      fetch(`${URL}?key=${KEY}&q=${this.props.imageName}`)
        .then(res => res.json())
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
    console.log(this.state.error);
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loader />
        ) : (
          <List>
            {this.state.images &&
              this.state.images.hits.map(
                ({ id, webformatURL, largeImageURL, tags }) => {
                  return (
                    <ImageGalleryItem
                      key={id}
                      id={id}
                      smallImage={webformatURL}
                      largeImage={largeImageURL}
                      alt={tags}
                    />
                  );
                }
              )}
          </List>
        )}
      </>
    );
  }
}
