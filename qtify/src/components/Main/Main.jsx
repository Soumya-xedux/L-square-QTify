import Card from "../Card/Card";
import styles from "./Main.module.css";
import { useState } from "react";
const Main = () => {
  const [clickStatus, setClickStatus] = useState(false);
  const handleClick = () => {
    setClickStatus(!clickStatus);
    const x = document.getElementById("ct1");
    // eslint-disable-next-line no-unused-expressions
    x.style.overflow === "hidden" ? 
    x.style.overflow = "visible" : 
    x.style.overflow = "hidden";
    }
  return (
    <>
      <button onClick={handleClick} id="btn1">
        {clickStatus ? "Hide Albums" : "Show Albums"}
      </button>
      <div className={styles.container} id="ct1">
        {/* Top Albums Section*/}
        <Card
          imgLink={require("../../assets/demoCard_img.png")}
          follow={100}
          albumName="New English Songs"
        />
        <Card
          imgLink={require("../../assets/demoCard_img.png")}
          follow={100}
          albumName="New English Songs"
        />
        <Card
          imgLink={require("../../assets/demoCard_img.png")}
          follow={100}
          albumName="New English Songs"
        />
        <Card
          imgLink={require("../../assets/demoCard_img.png")}
          follow={100}
          albumName="New English Songs"
        />
        <Card
          imgLink={require("../../assets/demoCard_img.png")}
          follow={100}
          albumName="New English Songs"
        />
        <Card
          imgLink={require("../../assets/demoCard_img.png")}
          follow={100}
          albumName="New English Songs"
        />

        {/* New Albums */}

        {/* Songs */}
      </div>
    </>
  );
};
export default Main;
