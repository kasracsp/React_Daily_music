import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const Carrousel = () => {
  const carrouselList = [
    {
      image:
        "https://m.media-amazon.com/images/I/41nmT9dY5EL._UX250_FMwebp_QL85_.jpg",
      artist: "gipsy king",
      title: "halelua warmplay warmplay warmplay warmplay ",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41s9dkecCOL._UX250_FMwebp_QL85_.jpg",
      artist: "coldplay king",
      title: "halelua",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/51ZulxmF20L._UX250_FMwebp_QL85_.jpg",
      artist: "gipsy king",
      title: "sholsaea",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41otdejFdTL._UX250_FMwebp_QL85_.jpg",
      artist: "warmplay",
      title: "warmplay warmplay warmplay warmplay",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41vDP5rLixL._UX250_FMwebp_QL85_.jpg",
      artist: "warmplay warmplay warmplay warmplay",
      title: "warmplay warmplay",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41nmT9dY5EL._UX250_FMwebp_QL85_.jpg",
      artist: "gipsy king",
      title: "halelua warmplay warmplay warmplay warmplay ",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41s9dkecCOL._UX250_FMwebp_QL85_.jpg",
      artist: "coldplay king",
      title: "halelua",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/51ZulxmF20L._UX250_FMwebp_QL85_.jpg",
      artist: "gipsy king",
      title: "sholsaea",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41otdejFdTL._UX250_FMwebp_QL85_.jpg",
      artist: "warmplay",
      title: "warmplay warmplay warmplay warmplay",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41vDP5rLixL._UX250_FMwebp_QL85_.jpg",
      artist: "warmplay warmplay warmplay warmplay",
      title: "warmplay warmplay",
    },
  ];
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
          <h2>albums</h2>
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
          <Link className="see-all">see all</Link>
        </div>

        {carrouselList.map((item, index) => (
          <SwiperSlide key={index} className="slide">
            <div className="image-container">
              <Link>
                <img src={item.image} alt={item.title} />
              </Link>
              <div className="overlay">
                <button
                  className="material-icons"
                  onClick={() => console.log("play")}
                >
                  play_arrow
                </button>
              </div>
              <div className="shadow-overlay"></div>
            </div>
            <Link>
              <p className="slide-title">{item.title}</p>
            </Link>
            <p className="slide-artist">{item.artist}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrousel;
