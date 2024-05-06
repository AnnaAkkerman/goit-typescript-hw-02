import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const notify = (): void => {
  toast("To search for images you must enter text...", {
    icon: "🚩",
  });
};

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const inputedTopic = form.elements.namedItem("topic") as HTMLInputElement;
    inputedTopic ? onSearch(inputedTopic.value) : notify();

    form.reset();
  };

  return (
    <header>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default SearchBar;
