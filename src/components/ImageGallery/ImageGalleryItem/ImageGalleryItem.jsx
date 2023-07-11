import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, smallImage, largeImage, alt }) => {
  return (
    <Item id={id}>
      <Image src={smallImage} alt={alt} />
    </Item>
  );
};
