import Pagination from "../Pagination";
import styles from "./style.module.css";

const Table = ({ data, requiredColumns, itemsPerPage, currentPage, onPageChange }) => {

  /* =======================================
  *********** PAGINATION LOGIC ************
  =========================================*/

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };


  /* =======================================
  ************** RETURNING UI **************
  =========================================*/

  return (
    <div>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              {requiredColumns.map(column => <th key={column.key}>{column.heading}</th>)}
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item, index) => {
              return (
                <tr key={index}>
                  {requiredColumns.map((column) => {
                    return (
                      <td key={column.key}>
                        <span className={styles.prefix}>{column.valuePrefix}</span>
                        <span className={styles.value}>{item[column.key]}</span>
                        <span className={styles.postfix}>{column.valuePostfix}</span>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
};

export default Table;