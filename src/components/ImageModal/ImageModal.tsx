import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { Photo } from "../../types";

type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  customStyles: object;
  photo: Photo;
};

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  customStyles,
  photo,
}) => {
  const { urls, alt_description, description, likes } = photo;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        appElement={document.getElementById("root") as HTMLElement}
        className={css.modal}
      >
        <button className={css.btn} onClick={closeModal}>
          x
        </button>
        <h2 className={css.title}>{alt_description}</h2>
        <div className={css.container}>
          <img
            src={urls.regular}
            alt={alt_description}
            className={css.picture}
          />
          <p className={css.description}>{description}</p>
          <p> 💗 {likes}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
