// 🔥 CHANGED: new imports
import Section from "../Section/Section";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./Main.module.css";

import { useState, useEffect } from "react";
import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
} from "../../services/api"; // 🔥 NEW

const Main = () => {
  // 🔥 CHANGED: Data states
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  // 🔥 CHANGED: Load all sections on mount
  useEffect(() => {
    fetchTopAlbums().then(setTopAlbums);
    fetchNewAlbums().then(setNewAlbums);
    fetchSongs().then(setSongs);
  }, []);

  return (
    <div className={styles.mainWrapper}>
      {/* 🔥 TOP ALBUMS */}
      <Section title="Top Albums">
        <Carousel>
          {topAlbums.map((album) => (
            <Card
              key={album.id}
              imgLink={album.image}
              follow={album.follows}
              albumName={album.title}
            />
          ))}
        </Carousel>
      </Section>

      {/* 🔥 NEW ALBUMS */}
      <Section title="New Albums">
        <Carousel>
          {newAlbums.map((album) => (
            <Card
              key={album.id}
              imgLink={album.image}
              follow={album.follows}
              albumName={album.title}
            />
          ))}
        </Carousel>
      </Section>

      {/* 🔥 SONGS */}
      <Section title="Songs">
        <Carousel>
          {songs.map((song) => (
            <Card
              key={song.id}
              imgLink={song.image}
              follow={song.likes}
              albumName={song.title}
            />
          ))}
        </Carousel>
      </Section>
    </div>
  );
};

export default Main;






// -----------------------



// import Card from "../Card/Card";
// import styles from "./Main.module.css";
// import { useState } from "react";
// const Main = () => {
//   const [clickStatus, setClickStatus] = useState("hidden");
//   const handleClick = () => {
//     const next = clickStatus === "hidden" ? "visible" : "hidden"
//     setClickStatus(next);
//     const x = document.getElementById("ct1");
//     // eslint-disable-next-line no-unused-expressions
//     x.style.overflow = next;
//     }
//   return (
//     <>
//       <button onClick={handleClick}>
//         {clickStatus === "hidden" ? "Show Albums" : "Hide Albums"}
//       </button>
//       <div className={styles.container} id="ct1">
//         {/* Top Albums Section*/}
//         <Card
//           imgLink={require("../../assets/demoCard_img.png")}
//           follow={100}
//           albumName="New English Songs"
//         />
//         <Card
//           imgLink={require("../../assets/demoCard_img.png")}
//           follow={100}
//           albumName="New English Songs"
//         />
//         <Card
//           imgLink={require("../../assets/demoCard_img.png")}
//           follow={100}
//           albumName="New English Songs"
//         />
//         <Card
//           imgLink={require("../../assets/demoCard_img.png")}
//           follow={100}
//           albumName="New English Songs"
//         />
//         <Card
//           imgLink={require("../../assets/demoCard_img.png")}
//           follow={100}
//           albumName="New English Songs"
//         />
//         <Card
//           imgLink={require("../../assets/demoCard_img.png")}
//           follow={100}
//           albumName="New English Songs"
//         />

//         {/* New Albums */}

//         {/* Songs */}
//       </div>
//     </>
//   );
// };
// export default Main;
