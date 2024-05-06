import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchPhotosWithTopic } from "./photos-api";
import toast from "react-hot-toast";
import { Photo, Photos, ResponseType } from "./types";

type CustomStyles = {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
  };
};

const customStyles: CustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const App = () => {
  type Status = true | false;

  const [photos, setPhotos] = useState<Photos>([]);
  const [loading, setLoading] = useState<Status>(false);
  const [topic, setTopic] = useState<string>("");
  const [photo, setPhoto] = useState<Photo | null>(null);
  const [modalIsOpen, setIsOpen] = useState<Status>(false);
  const [error, setError] = useState<Status>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (error) toast.error("Oops, something went wrong...");
  }, [error]);

  function openModal(photo: Photo): void {
    setIsOpen(true);
    setPhoto(photo);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  const handleSearch = async (inputedTopic: string): Promise<void> => {
    try {
      setError(false);
      setPhotos([]);
      setLoading(true);
      setPage(1);
      const response: ResponseType = await fetchPhotosWithTopic(
        inputedTopic,
        1
      );
      setPhotos(response.data.results);
      setTopic(inputedTopic);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async (): Promise<void> => {
    try {
      setError(false);
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      const loadingMore: ResponseType = await fetchPhotosWithTopic(
        topic,
        page + 1
      );
      const addedPhotos: Photos = loadingMore.data.results;
      setPhotos((prevPhotos: Photos) => [...prevPhotos, ...addedPhotos]);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {modalIsOpen && photo && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          customStyles={customStyles}
          photo={photo}
        />
      )}
      {error ? (
        <ErrorMessage />
      ) : (
        photos.length > 0 && (
          <ImageGallery openModal={openModal} photos={photos} />
        )
      )}

      {loading && <Loader />}
      {photos.length > 0 && !loading && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
    </div>
  );
};

export default App;
