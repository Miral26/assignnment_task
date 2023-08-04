import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  fetchResources,
  fetchResourcesWithName,
} from "../services/global.services";
import styles from "../styles/Home.module.css";
import DropDown from "../views/drop-down/DropDown";
import DataTable from "../views/data-table/DataTable";
import { SelectChangeEvent } from "@mui/material/Select";
import { Resource } from "../types/resource";
import Loader from "../views/loader/Loader";

const Home: NextPage = () => {
  const [resources, setResources] = useState<string[]>([]);
  const [selectedResources, setSelectedResources] = useState("");
  const [resourceList, setResourceList] = useState<Resource[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  // Fetching all the resources
  const getResources = async () => {
    const data = await fetchResources();
    setResources(data);
    setSelectedResources(data[0]);
  };

  // Fetching resources with name
  useEffect(() => {
    const getResourcesData = async (key: string) => {
      setLoader(true);
      const result = await fetchResourcesWithName(key);
      setResourceList(result);
      setLoader(false);
    };
    if (selectedResources) getResourcesData(selectedResources);
  }, [selectedResources]);

  const handleChange = (event: SelectChangeEvent) => {
    const key = event.target.value;
    setSelectedResources(key);
  };

  // Fetching all the resources on page load
  useEffect(() => {
    getResources();
  }, []);

  return (
    <Box className={styles.main_container}>
      <DropDown
        selectedResources={selectedResources}
        handleChange={handleChange}
        resources={resources}
      />
      {loader ? (
        <Loader />
      ) : (
        resourceList.length > 0 && <DataTable resourceList={resourceList} />
      )}
    </Box>
  );
};

export default Home;
