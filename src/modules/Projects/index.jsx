import { useEffect, useState } from "react";
import Table from "../../components/Table";
import TableLoader from "../../components/TableLoader";
import { API_GET_PROJECTS } from "../../api";
import { requiredColumns } from "./config";
import styles from "./style.module.css";

const Projects = () => {

  /* =======================================
  ********** STATE MANAGEMENT **************
  =========================================*/

  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);


  /* =======================================
  ************ FETCHING DATA **************
  =========================================*/

  const fetchProjectList = async () => {
    const response = await API_GET_PROJECTS();
    setProjectList(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProjectList();
  }, []);


  /* =======================================
  ************** RETURNING UI **************
  =========================================*/

  if (isLoading) {
    return (
      <div className={styles.parentWrapper}>
        <TableLoader rowCount={itemsPerPage} columnHeadings={requiredColumns} />;
      </div>
    )
  }

  return (
    <div className={styles.parentWrapper}>
      <Table
        data={projectList}
        requiredColumns={requiredColumns}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Projects;