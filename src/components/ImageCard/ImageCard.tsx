import { Photo } from "../../types";
import css from "./ImageCard.module.css";

type ImageCardProps = {
  photo: Photo;
  openModal: (photo: Photo) => void;
};

const ImageCard = ({ photo, openModal }: ImageCardProps) => {
  const handleClick: () => void = () => {
    openModal(photo);
  };

  return (
    <div className={css.itemPhotoContainer}>
      <img
        className={css.itemPhoto}
        onClick={handleClick}
        src={photo.urls.small}
        alt={photo.alt_description}
      />
    </div>
  );
};

export default ImageCard;
