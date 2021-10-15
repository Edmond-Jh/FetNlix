import React, { useEffect, useState } from "react";
import Content from "./Content/Content";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";

import HomeBg from "../../../img/home/home__bg.jpg";
import HomeBg2 from "../../../img/home/home__bg2.jpg";
import HomeBg3 from "../../../img/home/home__bg3.jpg";
import HomeBg4 from "../../../img/home/home__bg4.jpg";
import HomeBg5 from "../../../img/home/home__bg5.jpg";

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel";

import { Swiper, SwiperSlide } from "swiper/react";

// import styles bundle
import "swiper/swiper-bundle.min.css";

import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Navigation]);
export default function Home() {
  const [post, setPost] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  return (
    <>
      <section className="home">
        {/* <!-- home bg --> */}
        <div className="owl-carousel home__bg">
          <div className="item home__cover" data-bg={HomeBg}></div>
          <div className="item home__cover" data-bg={HomeBg2}></div>
          <div className="item home__cover" data-bg={HomeBg3}></div>
          <div className="item home__cover" data-bg={HomeBg4}></div>
          <div className="item home__cover" data-bg={HomeBg5}></div>
        </div>
        {/* <!-- end home bg --> */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="home__title">
                <b>Most </b>Popular
              </h1>

              <button className="home__nav home__nav--prev" type="button">
                <i className="icon ion-ios-arrow-round-back"></i>
              </button>
              <button className="home__nav home__nav--next" type="button">
                <i className="icon ion-ios-arrow-round-forward"></i>
              </button>
            </div>

            <div className="col-12">
              <Swiper
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={4}
                navigation={true}
              >
                {post?.results.map((data) => {
                  return (
                    <SwiperSlide key={data.id}>
                      <div className="card card--big">
                        <div className="card__cover">
                          <img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                            alt=""
                            style={{ objectFit: "cover" }}
                          />
                          <Link to={`posts/${data.id}`} className="card__play">
                            <i className="icon ion-ios-play"></i>
                          </Link>
                          <span className="card__rate card__rate--green">
                            {data.vote_average}
                          </span>
                        </div>
                        <div className="card__content">
                          <h3 className="card__title">
                            <a href="#">{data.original_title}</a>
                          </h3>
                          <span className="card__category">
                            <a href="#">Action</a>
                            <a href="#">Triler</a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <Content />
      <SectionOne />
      <SectionTwo />
    </>
  );
}
