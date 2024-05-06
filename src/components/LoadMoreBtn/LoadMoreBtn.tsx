import css from "./LoadMoreBtn.module.css";

type LoadMoreProps = {
  handleClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreProps> = ({ handleClick }) => {
  return (
    <button
      className={css.loadMoreBtn}
      id={"load"}
      onClick={handleClick}
      type="button"
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
