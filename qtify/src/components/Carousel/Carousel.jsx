import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styles from "./Carousel.module.css";

// 🔥 Generic carousel that receives `children`
const Carousel = ({ children }) => {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={"auto"}
        className={styles.swiper}
      >
        {React.Children.map(children, (child, i) => (
          <SwiperSlide key={i} style={{ width: "180px" }}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
