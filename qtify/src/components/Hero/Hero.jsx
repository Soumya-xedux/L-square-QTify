import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>100 Thousand Songs, ad-free</h1>
        <h2 className={styles.subTitle}>
          Over thousands podcast episodes
        </h2>
      </div>
      <div className={styles.right}>
        <img
          src={require("../../assets/hero_headphones.png")}
          width={212}
          alt="headphones"
        />
      </div>
    </section>
  );
}

// ------------------------

// import React from "react";
// import styles from "./Hero.module.css";

// function Hero() {
//   return (
//     <div className={styles.hero}>
//       <div>
//         <h1>100 Thousand Songs, ad-free</h1>
//         <h1>Over thousands podcast episodes</h1>
//       </div>
//       <div>
//         <img
//           src={require("../../assets/hero_headphones.png")}
//           width={212}
//           alt="headphones"
//         />
//       </div>
//     </div>
//   );
// }

// export default Hero;
