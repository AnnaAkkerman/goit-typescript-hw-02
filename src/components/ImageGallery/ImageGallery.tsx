import { Photo, Photos } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

type ImageGalleryProps = {
  photos: Photos;
  openModal: (photo: Photo) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal }) => {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => {
        return (
          <li className={css.galleryItem} key={photo.id}>
            <ImageCard openModal={openModal} photo={photo} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
