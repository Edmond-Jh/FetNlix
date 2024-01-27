import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function TvSeriesPage() {
  const params = useParams();
  const [data, setData] = useState();
  const [video, setvideo] = useState();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${params.id}/videos?api_key=7d4244b6d7ea0eeafb4fdb3d41003845&language=en-US`
    )
      .then((response) => response.json())
      .then((response) => setvideo(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(video);
  return (
    <>
      <section
        className="section section--details section--bg"
        data-bg="img/section/details.jpg"
      >
        <div className="container">
          <div className="row">
            {/* <!-- title --> */}
            <div className="col-12">
              <h1>
                <a className="section__title" href={data?.homepage}>
                  {data?.name}
                </a>
              </h1>
            </div>
            {/* <!-- end title --> */}

            {/* <!-- content --> */}
            <div className="col-12 col-lg-6">
              <div className="card card--details">
                <div className="row">
                  {/* <!-- card cover --> */}
                  <div className="col-12 col-sm-5 col-lg-6 col-xl-5">
                    <div className="card__cover">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                        alt=""
                      />
                      <span className="card__rate card__rate--green">
                        {data?.vote_average}
                      </span>
                    </div>
                  </div>
                  {/* <!-- end card cover --> */}

                  {/* <!-- card content --> */}
                  <div className="col-12 col-sm-7 col-lg-6 col-xl-7">
                    <div className="card__content">
                      <ul className="card__meta">
                        <li>
                          <span>Status:</span> {data?.status}
                        </li>
                        <li>
                          <span>Cast:</span>
                        </li>
                        <li>
                          <span>Genre:</span>
                          {data?.genres.map((data) => {
                            return (
                              <a key={data.id} href="#">
                                {data.name}
                              </a>
                            );
                          })}
                        </li>
                        <li>
                          <span>First Episode: </span>
                          <a href="#">{data?.first_air_date}</a>
                        </li>
                        <li>
                          <span>
                            Episodes :<a> {data?.number_of_episodes} Episode</a>
                          </span>
                        </li>
                        <li>
                          <span>
                            Seasons :<a> {data?.number_of_seasons} Season</a>
                          </span>
                        </li>
                        <li>
                          <span>IMDB ID: </span> <a href="#">{data?.imdb_id}</a>
                        </li>
                        <li>
                          <span>Budget : </span> <a href="#">{data?.budget}</a>
                        </li>
                        <li>
                          <span>Country:</span>
                          {data?.production_countries.map((data) => {
                            return (
                              <a key={data.name} href="#">
                                {data.name}
                              </a>
                            );
                          })}
                        </li>
                        <li>
                          <span>Companies:</span>
                          {data?.production_companies.map((data) => {
                            return (
                              <a key={data.id} className="prSpan">
                                {data.name}
                              </a>
                            );
                          })}
                        </li>
                      </ul>
                      <div className="card__description">{data?.overview}</div>
                    </div>
                  </div>
                  {/* <!-- end card content --> */}
                </div>
              </div>
            </div>
            {/* <!-- end content --> */}

             {/* <!-- player --> */}
             <iframe
                width="520"
                height="300"
                src={`https://www.youtube.com/embed/${video?.results[0].key}`}
              ></iframe>
          </div>
        </div>
        {/* <!--end details content--> */}
      </section>
    </>
  );
}
