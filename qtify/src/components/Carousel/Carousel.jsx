// src/components/Carousel/Carousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";

// MUI icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = ({ children }) => {
  return (
    <div className={styles.carouselWrapper}>
      {/* Previous Button */}
      <button
        className={`${styles.navBtn} ${styles.prevBtn}`}
        id="prevBtn"
      >
        <ArrowBackIosNewIcon className={styles.arrow} />
      </button>

      {/* Next Button — Green Circular */}
      <button
        className={`${styles.navBtn} ${styles.nextBtn}`}
        id="nextBtn"
      >
        <ArrowForwardIosIcon className={styles.arrow} />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: "#nextBtn",
          prevEl: "#prevBtn",
        }}
        spaceBetween={20}
        slidesPerView="auto"
        className={styles.swiper}
      >
        {React.Children.map(children, (child, i) => (
          <SwiperSlide key={i} style={{ width: 180 }}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;



// ----------------

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper";
// import styles from "./Carousel.module.css";

// // 🔥 Generic carousel that receives `children`
// const Carousel = ({ children }) => {
//   return (
//     <div className={styles.carouselWrapper}>
//       <Swiper
//         modules={[Navigation]}
//         navigation
//         spaceBetween={20}
//         slidesPerView={"auto"}
//         className={styles.swiper}
//       >
//         {React.Children.map(children, (child, i) => (
//           <SwiperSlide key={i} style={{ width: "180px" }}>
//             {child}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Carousel;
