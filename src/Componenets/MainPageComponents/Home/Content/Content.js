import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import cover4 from "../../../../img/covers/cover4.jpg";

export default function Content() {
  const [Post, setPost] = useState();
  const [TvS, setTvS] = useState();
  const [Movie, setMovie] = useState();
  const [Genre, setGenre] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  // Top Rated Fetch
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setTvS(data));
  }, []);
  // Top TV shows
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US&page=1"
    )
      .then((r) => r.json())
      .then((data) => setMovie(data));
  }, []);
  // Top Movies
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => setGenre(data));
  }, []);
  //  Genres
  return (
    <section className="content">
      <div className="content__head">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- content title --> */}
              <h2 className="content__title">New items</h2>
              {/* <!-- end content title --> */}

              {/* <!-- content tabs nav --> */}
              <ul
                className="nav nav-tabs content__tabs"
                id="content__tabs"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tab-1"
                    role="tab"
                    aria-controls="tab-1"
                    aria-selected="true"
                  >
                    Top Rated
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tab-2"
                    role="tab"
                    aria-controls="tab-2"
                    aria-selected="false"
                  >
                    MOVIES
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tab-3"
                    role="tab"
                    aria-controls="tab-3"
                    aria-selected="false"
                  >
                    TV SERIES
                  </a>
                </li>
              </ul>
              {/* <!-- end content tabs nav --> */}

              {/* <!-- content mobile tabs nav --> */}
              <div className="content__mobile-tabs" id="content__mobile-tabs">
                <div
                  className="content__mobile-tabs-btn dropdown-toggle"
                  role="navigation"
                  id="mobile-tabs"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <input type="button" value="New releases" />
                  <span></span>
                </div>

                <div
                  className="content__mobile-tabs-menu dropdown-menu"
                  aria-labelledby="mobile-tabs"
                >
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="1-tab"
                        data-toggle="tab"
                        href="#tab-1"
                        role="tab"
                        aria-controls="tab-1"
                        aria-selected="true"
                      >
                        NEW RELEASES
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="2-tab"
                        data-toggle="tab"
                        href="#tab-2"
                        role="tab"
                        aria-controls="tab-2"
                        aria-selected="false"
                      >
                        MOVIES
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="3-tab"
                        data-toggle="tab"
                        href="#tab-3"
                        role="tab"
                        aria-controls="tab-3"
                        aria-selected="false"
                      >
                        TV SERIES
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end content mobile tabs nav --> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <!-- content tabs --> */}
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="tab-1"
            role="tabpanel"
            aria-labelledby="1-tab"
          >
            <div className="row">
              {Post?.results.map((data) => {
                return (
                  <div
                    key={data.id}
                    className="col-6 col-sm-4 col-md-3 col-xl-2"
                  >
                    <div className="card">
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
                        <span className="genres">
                          {data?.genre_ids?.map((genreId, index) => {
                            const foundGenre = Genre?.genres.find(
                              (genre) => genre.id === genreId
                            );
                            return (
                              <span key={index}>
                                {foundGenre
                                  ? foundGenre.name
                                  : `Genre with ID ${genreId} not found`}
                                {"  "}
                              </span>
                            );
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* <!-- card -->  Top Rated https://api.themoviedb.org/3/movie/top_rated?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US&page=1*/}

              {/* <!-- end card --> */}
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="tab-2"
            role="tabpanel"
            aria-labelledby="2-tab"
          >
            <div className="row">
              {Movie?.results.map((data) => {
                return (
                  <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                    <div className="card">
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
                        <span className="genres">
                          {data?.genre_ids?.map((genreId, index) => {
                            const foundGenre = Genre?.genres.find(
                              (genre) => genre.id === genreId
                            );
                            return (
                              <span key={index}>
                                {foundGenre
                                  ? foundGenre.name
                                  : `Genre with ID ${genreId} not found`}
                                {"  "}
                              </span>
                            );
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="tab-3"
            role="tabpanel"
            aria-labelledby="3-tab"
          >
            <div className="row">
              {TvS?.results.map((data) => {
                return (
                  <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                    <div className="card">
                      <div className="card__cover">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                          alt=""
                        />
                        <Link
                          className="card__play"
                          to={`tvseries/${data?.id}`}
                        >
                          <i className="icon ion-ios-play"></i>
                        </Link>
                        <span className="card__rate card__rate--green">
                          {Math.round(data.vote_average * 10) / 10}
                        </span>
                      </div>
                      <div className="card__content">
                        <h3 className="card__title">
                          <Link to={`posts/${data.id}`}>{data?.name}</Link>
                        </h3>
                        <span className="genres">
                          {data?.genre_ids?.map((genreId, index) => {
                            const foundGenre = Genre?.genres.find(
                              (genre) => genre.id === genreId
                            );
                            return (
                              <span key={index}>
                                {foundGenre
                                  ? foundGenre.name
                                  : `Genre with ID ${genreId} not found`}
                                {"  "}
                              </span>
                            );
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div
            className="tab-pane fade"
            id="tab-4"
            role="tabpanel"
            aria-labelledby="4-tab"
          >
            <div className="row">
              <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                <div className="card">
                  <div className="card__cover">
                    <img src={cover4} alt="" />
                    <a href="#" className="card__play">
                      <i className="icon ion-ios-play"></i>
                    </a>
                    <span className="card__rate card__rate--green">7.9</span>
                  </div>
                  <div className="card__content">
                    <h3 className="card__title">
                      <a href="#">Blindspotting</a>
                    </h3>
                    <span className="card__category">
                      <a href="#">Comedy</a>
                      <a href="#">Drama</a>-
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <!-- end content tabs --> */}
      </div>
    </section>
  );
}
