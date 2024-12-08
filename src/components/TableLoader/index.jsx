import styles from "./style.module.css";

const TableLoader = ({ rowCount, columnHeadings }) => {
  return (
    <div className={styles.tableLoader}>
      <table>

        <thead>
          <tr>
            {columnHeadings.map(column => (
              <th key={column.key}>{column.heading}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {[...Array(rowCount)].map((_, index) => (
            <tr key={index}>
              {columnHeadings.map(column => (
                <td key={column.key}>
                  <div className={styles.skeleton}></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default TableLoader