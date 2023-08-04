import React from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import styles from "../../styles/Home.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  selectedResources: string;
  handleChange: (key: SelectChangeEvent) => void;
  resources: string[];
}

// Drop down component
const DropDown = (props: Props) => {
  const { selectedResources, handleChange, resources } = props;
  return (
    <FormControl size="small" style={{ margin: "20px 0", minWidth: "120px" }}>
      <InputLabel id="demo-select-small-label">Resources</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedResources}
        label="Resources"
        onChange={handleChange}
      >
        {resources?.map((u: string) => {
          return (
            <MenuItem value={u} key={u}>
              {u}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DropDown;
