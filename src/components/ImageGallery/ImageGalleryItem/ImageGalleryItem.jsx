import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { id, webformatURL, tags, key },
  onClick,
}) => {
  return (
    <Item key={key} id={id} onClick={onClick}>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};
