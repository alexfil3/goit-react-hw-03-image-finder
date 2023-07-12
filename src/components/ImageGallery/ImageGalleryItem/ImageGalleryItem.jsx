import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { id, webformatURL, tags },
  onClick,
}) => {
  return (
    <Item id={id} onClick={onClick}>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};
