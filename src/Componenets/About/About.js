import { Link } from "react-router-dom";
import bgpictture from "../../img/section/section.jpg";
const About = () => {
  return (
    <>
      <section
        className="section section--first section--bg"
        data-bg={bgpictture}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__wrap">
                {/* <!-- section title --> */}
                <h2 className="section__title">About Us</h2>
                {/* <!-- end section title --> */}

                {/* <!-- breadcrumb --> */}
                <ul className="breadcrumb">
                  <li className="breadcrumb__item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb__item breadcrumb__item--active">
                    About Us
                  </li>
                </ul>
                {/* <!-- end breadcrumb --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      ;{/* <!-- end page title --> */}
      {/* <!-- about --> */}
      <section className="section section--grid">
        <div className="container">
          <div className="row">
            {/* <!-- section title --> */}
            <div className="col-12">
              <h2 className="section__title">
                <b>FetNlix</b> – Best Place for Movies
              </h2>
            </div>
            {/* <!-- end section title --> */}

            {/* <!-- section text --> */}
            <div className="col-12">
              <p className="section__text">
                Welcome to my website, where you can explore and discover movies
                that capture your interest. Built with React, this platform
                combines my passion for movies with cutting-edge technologies.
                Leveraging tools like React Redux, Axios, React Toastify, and
                React Swiper, I've crafted a fully dynamic website. It not only
                allows you to review and search for movies but also boasts a
                seamless single-page form experience. Join me on this cinematic
                journey, and let's explore the world of movies together
              </p>

            </div>
            {/* <!-- end section text --> */}

            {/* <!-- feature --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <i className="icon ion-ios-tv feature__icon"></i>
                <h3 className="feature__title">Ultra HD</h3>
                <p className="feature__text">
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text.
                </p>
              </div>
            </div>
            {/* <!-- end feature --> */}

            {/* <!-- feature --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <i className="icon ion-ios-film feature__icon"></i>
                <h3 className="feature__title">Film</h3>
                <p className="feature__text">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first.
                </p>
              </div>
            </div>
            {/* <!-- end feature --> */}

            {/* <!-- feature --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <i className="icon ion-ios-trophy feature__icon"></i>
                <h3 className="feature__title">Awards</h3>
                <p className="feature__text">
                  It to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining.
                </p>
              </div>
            </div>
            {/* <!-- end feature --> */}

            {/* <!-- feature --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <i className="icon ion-ios-notifications feature__icon"></i>
                <h3 className="feature__title">Notifications</h3>
                <p className="feature__text">
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose.
                </p>
              </div>
            </div>
            {/* <!-- end feature --> */}

            {/* <!-- feature --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <i className="icon ion-ios-rocket feature__icon"></i>
                <h3 className="feature__title">Rocket</h3>
                <p className="feature__text">
                  It to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting.
                </p>
              </div>
            </div>
            {/* <!-- end feature --> */}

            {/* <!-- feature --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <i className="icon ion-ios-globe feature__icon"></i>
                <h3 className="feature__title">Multi Language Subtitles </h3>
                <p className="feature__text">
                  Various versions have evolved over the years, sometimes by
                  accident, sometimes on purpose.
                </p>
              </div>
            </div>
            {/* <!-- end feature --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
