import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// import useAutocomplete from '@mui/base/AutocompleteUnstyled';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { margin, styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { Tooltip, InputAdornment, InputBase, IconButton } from "@mui/material";

const Listbox = styled("ul")(({ theme }) => ({
  width: "100%",
  margin: 0,
  padding: 0,
  position: "absolute",
  borderRadius: "0px 0px 10px 10px",
  border: "1px solid var(--color-primary)",
  top: 60,
  height: "max-content",
  maxHeight: "500px",
  zIndex: 10,
  overflowY: "scroll",
  left: 0,
  bottom: 0,
  right: 0,
  listStyle: "none",
  backgroundColor: "var(--color-black)",
  overflow: "auto",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

function Search({ searchData, placeholder }) {

  return (
    <div style={{ position: "relative" }} className={styles.search}>
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
      
      
  );
}

export default Search;
