import React from "react";
import cover from "../../../../img/covers/cover.jpg";
import cover2 from "../../../../img/covers/cover2.jpg";
import cover3 from "../../../../img/covers/cover3.jpg";
import cover4 from "../../../../img/covers/cover4.jpg";
import cover5 from "../../../../img/covers/cover5.jpg";
import cover6 from "../../../../img/covers/cover6.jpg";
// import "./SectionOne.css";
import sectionpicture from "../../../../img/section/section.jpg";
export default function SectionOne() {
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
                Expected premiere
              </h2>

              <div className="section__nav-wrap">
                <a href="#" className="section__view">
                  View All
                </a>

                <button
                  className="section__nav section__nav--prev"
                  type="button"
                  data-nav="#carousel1"
                >
                  <i className="icon ion-ios-arrow-back"></i>
                </button>

                <button
                  className="section__nav section__nav--next"
                  type="button"
                  data-nav="#carousel1"
                >
                  <i className="icon ion-ios-arrow-forward"></i>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- end section title --> */}

          {/* <!-- carousel --> */}
          <div className="col-12">
            <div className="owl-carousel section__carousel" id="carousel1">
              {/* <!-- card --> */}
              <div className="card cardItems">
                <div className="card__cover">
                  <img src={cover6} alt="" />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play"></i>
                  </a>
                  <span className="card__rate card__rate--green">7.1</span>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Benched</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                  </span>
                </div>
              </div>
              {/* <!-- end card --> */}

              {/* <!-- card --> */}
              <div className="card cardItems">
                <div className="card__cover">
                  <img src={cover5} alt="" />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play"></i>
                  </a>
                  <span className="card__rate card__rate--green">8.4</span>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">I Dream in Another Language</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Action</a>
                    <a href="#">Triler</a>
                  </span>
                </div>
              </div>
              {/* <!-- end card --> */}

              {/* <!-- card --> */}
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
                    <a href="#">Drama</a>
                  </span>
                </div>
              </div>
              {/* <!-- end card --> */}

              {/* <!-- card --> */}
              <div className="card">
                <div className="card__cover">
                  <img src={cover3} alt="" />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play"></i>
                  </a>
                  <span className="card__rate card__rate--red">6.3</span>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Whitney</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Romance</a>
                    <a href="#">Drama</a>
                    <a href="#">Music</a>
                  </span>
                </div>
              </div>
              {/* <!-- end card --> */}

              {/* <!-- card --> */}
              <div className="card">
                <div className="card__cover">
                  <img src={cover2} alt="" />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play"></i>
                  </a>
                  <span className="card__rate card__rate--green">7.1</span>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">Benched</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Comedy</a>
                  </span>
                </div>
              </div>
              {/* <!-- end card --> */}

              {/* <!-- card --> */}
              <div className="card">
                <div className="card__cover">
                  <img src={cover} alt="" />
                  <a href="#" className="card__play">
                    <i className="icon ion-ios-play"></i>
                  </a>
                  <span className="card__rate card__rate--green">8.4</span>
                </div>
                <div className="card__content">
                  <h3 className="card__title">
                    <a href="#">I Dream in Another Language</a>
                  </h3>
                  <span className="card__category">
                    <a href="#">Action</a>
                    <a href="#">Triler</a>
                  </span>
                </div>
              </div>
              {/* <!-- end card --> */}
            </div>
          </div>
          {/* <!-- carousel --> */}
        </div>
      </div>
    </section>
  );
}
