import React, { useEffect, useMemo, useState } from "react";
import styles from "./Main.module.css";

import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
// If you used CarouselSwiper.jsx instead, import that instead:
// import Carousel from "../Carousel/CarouselSwiper";

import {
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
  fetchGenres, // fetchGenres will be implemented below in services/api or you can inline it
} from "../../services/api"; // 🔥 CHANGED: services/api.js must export these functions

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIosOutlined";


/* Helper small components used inside Main.jsx only
   (This keeps Main.jsx self-contained for the full page)
*/

// Small Accordion for FAQ
const FAQItem = ({ q, a, open, onToggle }) => {
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={onToggle}>
        <div>{q}</div>
        <div className={styles.faqToggle}>{open ? "▴" : "▾"}</div>
      </button>
      {open && <div className={styles.faqAnswer}>{a}</div>}
    </div>
  );
};

// Minimal sticky player at bottom
const MusicPlayer = ({ track = null }) => {
  return (
    <div className={styles.player}>
      <div className={styles.playerLeft}>
        <img
          src={track ? track.image : require("../../../src/assets/demoCard_img.png")}
          alt="song"
          className={styles.playerThumb}
        />
        <div>
          <div className={styles.playerTitle}>{track ? track.title : "Song name"}</div>
          <div className={styles.playerAlbum}>{track ? track.album : "Album name"}</div>
        </div>
      </div>
      <div className={styles.playerCenter}>
        <button className={styles.playButton}>▶</button>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: "25%" }} />
        </div>
        <div className={styles.time}>3:38</div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, rightNode }) => (
  <div className={styles.sectionHeader}>
    <h3 className={styles.sectionTitle}>{title}</h3>
    <div className={styles.sectionRight}>{rightNode}</div>
  </div>
);

export default function Main() {
  // data states
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  // UI states
  const [topCollapsed, setTopCollapsed] = useState(false); // false => grid view; true => carousel
  const [newCollapsed, setNewCollapsed] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  // Songs tabs
  const [selectedGenre, setSelectedGenre] = useState("All");

  // fetch data
  useEffect(() => {
    let mounted = true;
    fetchTopAlbums()
      .then((data) => mounted && setTopAlbums(Array.isArray(data) ? data : []))
      .catch(() => mounted && setTopAlbums([]));

    fetchNewAlbums()
      .then((data) => mounted && setNewAlbums(Array.isArray(data) ? data : []))
      .catch(() => mounted && setNewAlbums([]));

    fetchSongs()
      .then((data) => mounted && setSongs(Array.isArray(data) ? data : []))
      .catch(() => mounted && setSongs([]));

    // fetch genres; if your services/api.js does not have fetchGenres implement it to call /genres
    (async () => {
      try {
        const g = await fetchGenres();
        if (mounted) {
          // ensure "All" exists first
          setGenres(["All", ...(Array.isArray(g) ? g.map((x) => x.name || x) : [])]);
        }
      } catch {
        if (mounted) setGenres(["All", "Rock", "Pop", "Jazz", "Blues"]);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Derived song list by genre
  const filteredSongs = useMemo(() => {
    if (!songs || selectedGenre === "All") return songs;
    return songs.filter((s) => {
      // each song object likely has genres array or genre field
      if (Array.isArray(s.genres)) return s.genres.includes(selectedGenre);
      if (s.genre) return s.genre === selectedGenre;
      // fallback: check tag or categories
      return false;
    });
  }, [songs, selectedGenre]);

  // small handlers
  const toggleTop = () => setTopCollapsed((v) => !v);
  const toggleNew = () => setNewCollapsed((v) => !v);

  // FAQ data
  const faqs = [
    { q: "Is QTify free to use?", a: "Yes! It is 100% free, and has 0% ads!" },
    { q: "Can I download and listen to songs offline?", a: "Sorry, we don't provide downloads at the moment." },
  ];

  return (
    <main className={styles.mainWrapper}>
      {/* HERO area is above in App; we build sections below */}

      {/* Top Albums */}
      <section className={styles.sectionBlock}>
        <SectionHeader
          title="Top Albums"
          rightNode={
            <button className={styles.collapseBtn} onClick={toggleTop}>
              {topCollapsed ? "Collapse" : "Show all"}
            </button>
          }
        />

        {topCollapsed ? (
          // Carousel view when collapsed (show all)
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
        ) : (
          // Grid view when not collapsed
          <div className={styles.grid}>
            {topAlbums.map((album) => (
              <Card
                key={album.id}
                imgLink={album.image}
                follow={album.follows}
                albumName={album.title}
              />
            ))}
          </div>
        )}
      </section>

      {/* New Albums */}
      <section className={styles.sectionBlock}>
        <SectionHeader
          title="New Albums"
          rightNode={
            <button className={styles.collapseBtn} onClick={toggleNew}>
              {newCollapsed ? "Collapse" : "Show all"}
            </button>
          }
        />

        {newCollapsed ? (
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
        ) : (
          <div className={styles.grid}>
            {newAlbums.map((album) => (
              <Card
                key={album.id}
                imgLink={album.image}
                follow={album.follows}
                albumName={album.title}
              />
            ))}
          </div>
        )}
      </section>

      {/* Songs Section */}
      <section className={styles.sectionBlock}>
        <div className={styles.songsHeader}>
          <h3 className={styles.sectionTitle}>Songs</h3>

          {/* Tabs for genres */}
          <Box sx={{ borderBottom: 1, borderColor: "transparent" }}>
            <Tabs
              value={selectedGenre}
              onChange={(e, val) => setSelectedGenre(val)}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="song-genres"
            >
              {/* ensure genres includes "All" */}
              {genres.length === 0
                ? ["All", "Rock", "Pop", "Jazz", "Blues"].map((g) => (
                    <Tab key={g} value={g} label={g} />
                  ))
                : genres.map((g) => <Tab key={g} value={g} label={g} />)}
            </Tabs>
          </Box>
        </div>

        {/* Always carousel for songs */}
        <Carousel>
          {filteredSongs.map((song) => (
            <Card
              key={song.id}
              imgLink={song.image}
              follow={song.likes ?? song.follows ?? 0}
              albumName={song.title}
            />
          ))}
        </Carousel>
      </section>

      {/* FAQ section */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqHeading}>FAQs</h2>
        <div className={styles.faqList}>
          {faqs.map((f, idx) => (
            <FAQItem
              key={idx}
              q={f.q}
              a={f.a}
              open={faqOpenIndex === idx}
              onToggle={() => setFaqOpenIndex(faqOpenIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </section>

      {/* Sticky Player */}
      <MusicPlayer />
    </main>
  );
}





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
