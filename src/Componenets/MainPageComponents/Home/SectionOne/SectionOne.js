import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import "./SectionOne.css";
import sectionpicture from "../../../../img/section/section.jpg";
export default function SectionOne() {
  const [Airing, setAiring] = useState();
  const [Genre, setGenre] = useState();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setAiring(data));
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setGenre(data));
  }, []);

  return (
    <section
      className="section section--bg"
      data-bg={sectionpicture}
      style={{
        background: "url(/static/media/section.e682b290.jpg);",
      }}
    >
      <div className="container">
        <div className="row">
          {/* <!-- section title --> */}
          <div className="col-12">
            <div className="section__title-wrap">
              <h2 className="section__title section__title--carousel">
                Upcoming Movies
              </h2>
            </div>
          </div>
          {/* <!-- end section title --> */}

          {/* <!-- carousel --> */}
          {Airing?.results.map((data) => {
            return (
              <div key={data.id} className="col-2">
                <div className="card cardItems">
                  <div className="card__cover">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                      alt=""
                    />
                    <Link className="card__play" to={`posts/${data.id}`}>
                      <i className="icon ion-ios-play"></i>
                    </Link>
                    <span className="card__rate card__rate--green">
                      {Math.round(data.vote_average * 10) / 10}
                    </span>
                  </div>
                  <div className="card__content">
                    <h3 className="card__title">
                      <Link to={`posts/${data.id}`}>{data?.title}</Link>
                    </h3>
                    <span className="card__category">
                      <div>
                        {data?.genre_ids?.map((genreId, index) => {
                          const foundGenre = Genre?.genres.find(
                            (genre) => genre.id === genreId
                          );
                          return (
                            <span key={index}>
                              {foundGenre
                                ? foundGenre.name
                                : `Genre with ID ${genreId} not found`}{" "}
                            </span>
                          );
                        })}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="owl-carousel section__carousel" id="carousel1"></div>
        </div>
        {/* <!-- carousel --> */}
      </div>
    </section>
  );
}
