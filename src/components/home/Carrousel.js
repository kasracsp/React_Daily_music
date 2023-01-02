import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import Card from "../../shared/Card";

const Carrousel = ({categoryTitle,categoryList}) => {
  const [mySwiper, setMySwiper] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="carrousel-wrapper">
      <Swiper
        className="carrousel"
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        onInit={(ev) => {
          setMySwiper(ev);
        }}
        spaceBetween={10}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          576: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          992: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        }}
      >
        <div className="carrousel-btns">
          <h2>{categoryTitle}</h2>
          <button
            className="swipperPrev"
            onClick={() => mySwiper.slidePrev()}
            disabled={currentIndex === 0}
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <button
            className="swipperNext"
            onClick={() => mySwiper.slideNext()}
            disabled={mySwiper.isEnd}
          >
            <span className="material-icons">chevron_right</span>
          </button>
          <Link to={`chart/${categoryTitle}`} className="see-all">see all</Link>
        </div>

        {categoryList.map((item, index) => (
          <SwiperSlide key={index} className="slide">
            {categoryTitle === "albums" && (
              <Card
                categoryTitle={categoryTitle}
                image={item.cover_medium}
                title={item.title}
                name={item.artist.name}
                id={item.id}
              />
            )}
            {categoryTitle === "artists" && (
              <Card
                categoryTitle={categoryTitle}
                image={item.picture_medium}
                title={item.name}
                id={item.id}
              />
            )}
            {categoryTitle === "playlists" && (
              <Card
                categoryTitle={categoryTitle}
                image={item.picture_medium}
                title={item.title}
                id={item.id}
              />
            )}
            {categoryTitle === "podcasts" && (
              <Card
                categoryTitle={categoryTitle}
                image={item.picture_medium}
                title={item.title}
                id={item.id}
              />
            )}
            {categoryTitle === "tracks" && (
              <Card
                categoryTitle={categoryTitle}
                image={item.album.cover_medium}
                title={item.title}
                name={item.artist.name}
                id={item.id}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrousel;
