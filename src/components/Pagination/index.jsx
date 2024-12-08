import Select from "react-select";
import styles from "./style.module.css";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  onPrevious,
  onNext
}) => {

  const options = Array.from({ length: totalPages }, (_, index) => {
    const pageNumber = index + 1;
    return {
      value: pageNumber,
      label: `Page ${pageNumber}`,
    };
  });

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <Select
        value={options.find(option => option.value === currentPage)}
        onChange={(option) => onPageChange(option.value)}
        options={options}
        className={styles.paginationSelect}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            width: "150px",
            height: "100%",
          }),
        }}
        theme={(theme) => ({
          ...theme,
          colors: { ...theme.colors, primary: '#459f6f' },
        })}
      />

      <button
        className={styles.paginationButton}
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;