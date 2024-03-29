import { Scrollbar, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import CardHome from "../cardHome/cardHome";
import ButtonIcon from "../buttonIcon/buttonIcon";

import "swiper/css";
import styles from "./homeSwiper.module.scss";

import { IHome } from "../../utils/interfaces";
import { MouseEventHandler } from "react";

interface IHomeSwiper {
  homeList: Array<IHome>;
}

const HomeSwiper = ({ homeList }: IHomeSwiper) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Наши дома</h2>
      <Swiper
        className={styles.swiper}
        breakpoints={{
          1680: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={40}
        modules={[Navigation, Scrollbar]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        scrollbar={{
          el: ".scrollbar",
          dragClass: styles.scrollbarDrag,
          draggable: true,
        }}
      >
        {homeList.map((homeData, index) => (
          <SwiperSlide key={index}>
            <CardHome home={homeData} className={styles.slide}></CardHome>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigation}>
        <ButtonIcon
          className="swiper-button-prev"
          type="button"
          icon="arrow_back"
        />
        <div className={styles.scrollbar + " " + "scrollbar"}>
          <div className={styles.scrollbarDrag}></div>
        </div>
        <ButtonIcon
          className="swiper-button-next"
          type="button"
          icon="arrow_forward"
        />
      </div>
    </section>
  );
};

export default HomeSwiper;
