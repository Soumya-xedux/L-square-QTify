import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";

/* 🔥 CHANGED:
   - kept your DOM structure (wrapper + TextField + iconBox)
   - ensured disableUnderline so default MUI underline doesn't show
   - kept Autocomplete renderOption same
   - no new class names in JSX; CSS targets MUI internal elements where needed
*/

export default function Search({ searchData, placeholder }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Autocomplete
        freeSolo
        options={searchData || []}
        getOptionLabel={(opt) => opt.title || ""}
        onChange={(event, value) => {
          if (value) {
            navigate(`/album/${value.slug}`);
          }
        }}
        renderOption={(props, option) => {
          const artists = option.songs.reduce((acc, cur) => {
            acc.push(...cur.artists);
            return acc;
          }, []);

          return (
            <li {...props} className={styles.listElement}>
              <div>
                <p className={styles.albumTitle}>{option.title}</p>
                <p className={styles.albumArtists}>
                  {truncate(artists.join(", "), 40)}
                </p>
              </div>
            </li>
          );
        }}
        renderInput={(params) => (
          <div className={styles.wrapper}>
            <TextField
              {...params}
              placeholder={placeholder}
              className={styles.search}
              variant="standard"
              InputProps={{ ...params.InputProps, disableUnderline: true }}
            />

            <div className={styles.iconBox} role="button" aria-label="search">
              <SearchIcon />
            </div>
          </div>
        )}
        classes={{
          paper: styles.dropdown,
          listbox: styles.listbox,
        }}
      />
    </div>
  );
}



// ------------------old code part-2

// import React from "react";
// import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import { truncate } from "../../helpers/helpers";
// import { useNavigate } from "react-router-dom";

// export default function Search({ searchData, placeholder }) {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.container}>
//       <Autocomplete
//         freeSolo
//         options={searchData || []}
//         getOptionLabel={(opt) => opt.title || ""}
//         onChange={(event, value) => {
//           if (value) {
//             navigate(`/album/${value.slug}`);
//           }
//         }}
//         renderOption={(props, option) => {
//           const artists = option.songs.reduce((acc, cur) => {
//             acc.push(...cur.artists);
//             return acc;
//           }, []);

//           return (
//             <li {...props} className={styles.listElement}>
//               <div>
//                 <p className={styles.albumTitle}>{option.title}</p>
//                 <p className={styles.albumArtists}>
//                   {truncate(artists.join(", "), 40)}
//                 </p>
//               </div>
//             </li>
//           );
//         }}
//         renderInput={(params) => (
//           <div className={styles.wrapper}>
//             <TextField
//               {...params}
//               placeholder={placeholder}
//               className={styles.search}
//               variant="standard"
//                 InputProps={{ ...params.InputProps, disableUnderline: true }}
//             />

//             <div className={styles.iconBox}>
//               <SearchIcon />
//             </div>
//           </div>
//         )}
//         classes={{
//           paper: styles.dropdown, // custom dropdown
//           listbox: styles.listbox,
//         }}
//       />
//     </div>
//   );
// }

// -------------------------------old code part-1

// import React from "react";
// import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
// // import useAutocomplete from '@mui/base/AutocompleteUnstyled';
// import Autocomplete from "@mui/material/Autocomplete";
// import TextField from "@mui/material/TextField";
// import { margin, styled } from "@mui/system";
// import { truncate } from "../../helpers/helpers";
// import { useNavigate } from "react-router-dom";
// import { Tooltip, InputAdornment, InputBase, IconButton } from "@mui/material";

// const Listbox = styled("ul")(({ theme }) => ({
//   width: "100%",
//   margin: 0,
//   padding: 0,
//   position: "absolute",
//   borderRadius: "0px 0px 10px 10px",
//   border: "1px solid var(--color-primary)",
//   top: 60,
//   height: "max-content",
//   maxHeight: "500px",
//   zIndex: 10,
//   overflowY: "scroll",
//   left: 0,
//   bottom: 0,
//   right: 0,
//   listStyle: "none",
//   backgroundColor: "var(--color-black)",
//   overflow: "auto",
//   "& li.Mui-focused": {
//     backgroundColor: "#4a8df6",
//     color: "white",
//     cursor: "pointer",
//   },
//   "& li:active": {
//     backgroundColor: "#2977f5",
//     color: "white",
//   },
// }));

// function Search({ searchData, placeholder }) {

//   return (
//     <div style={{ position: "relative" }} className={styles.search}>
//         <InputBase
//             sx={{ ml: 1, flex: 1 }}
//             placeholder={placeholder}
//             inputProps={{ 'aria-label': 'search google maps' }}
//         />
//       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
//         <SearchIcon />
//       </IconButton>
//     </div>

//   );
// }

// export default Search;
