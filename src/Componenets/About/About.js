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
                <b>HotFlix</b> – Best Place for Movies
              </h2>
            </div>
            {/* <!-- end section title --> */}

            {/* <!-- section text --> */}
            <div className="col-12">
              <p className="section__text">
                It is a long <b>established</b> fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to
                using.
              </p>

              <p className="section__text section__text--last-with-margin">
                'Content here, content here', making it look like{" "}
                <a href="/">readable</a> English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose (injected humour and the like).
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
      ;{/* <!-- end about --> */}
      {/* <!-- how it works --> */}
      <section className="section section--grid section--border">
        <div className="container">
          <div className="row">
            {/* <!-- section title --> */}
            <div className="col-12">
              <h2 className="section__title section__title--no-margin">
                How it works?
              </h2>
            </div>
            {/* <!-- end section title --> */}

            {/* <!-- how box --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="how">
                <span className="how__number">01</span>
                <h3 className="how__title">Create an account</h3>
                <p className="how__text">
                  It has never been an issue to find an old movie or TV show on
                  the internet. However, this is not the case with the new
                  releases.
                </p>
              </div>
            </div>
            {/* <!-- ebd how box --> */}

            {/* <!-- how box --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="how">
                <span className="how__number">02</span>
                <h3 className="how__title">Choose your Plan</h3>
                <p className="how__text">
                  It has never been an issue to find an old movie or TV show on
                  the internet. However, this is not the case with the new
                  releases.
                </p>
              </div>
            </div>
            {/* <!-- ebd how box --> */}

            {/* <!-- how box --> */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="how">
                <span className="how__number">03</span>
                <h3 className="how__title">Enjoy MovieGo</h3>
                <p className="how__text">
                  It has never been an issue to find an old movie or TV show on
                  the internet. However, this is not the case with the new
                  releases.
                </p>
              </div>
            </div>
            {/* <!-- ebd how box --> */}
          </div>
        </div>
      </section>
      ;{/* <!-- end how it works --> */}
      {/* <!-- partners --> */}
      <section className="section section--grid section--border">
        <div className="container">
          <div className="row">
            {/* <!-- section title --> */}
            <div className="col-12">
              <h2 className="section__title section__title--no-margin">
                Our Partners
              </h2>
            </div>
            {/* <!-- end section title --> */}

            {/* <!-- section text --> */}
            <div className="col-12">
              <p className="section__text section__text--last-with-margin">
                It is a long <b>established</b> fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to
                using.
              </p>
            </div>
            {/* <!-- end section text --> */}

            {/* <!-- partner --> */}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="/" className="partner">
                <img
                  src="img/partners/themeforest-light-background.png"
                  alt=""
                  className="partner__img"
                />
              </a>
            </div>
            {/* <!-- end partner --> */}

            {/* <!-- partner --> */}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="/" className="partner">
                <img
                  src="img/partners/audiojungle-light-background.png"
                  alt=""
                  className="partner__img"
                />
              </a>
            </div>
            {/* <!-- end partner --> */}

            {/* <!-- partner --> */}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="/" className="partner">
                <img
                  src="img/partners/codecanyon-light-background.png"
                  alt=""
                  className="partner__img"
                />
              </a>
            </div>
            {/* <!-- end partner --> */}

            {/* <!-- partner --> */}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="/" className="partner">
                <img
                  src="img/partners/photodune-light-background.png"
                  alt=""
                  className="partner__img"
                />
              </a>
            </div>
            {/* <!-- end partner --> */}

            {/* <!-- partner --> */}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="/" className="partner">
                <img
                  src="img/partners/activeden-light-background.png"
                  alt=""
                  className="partner__img"
                />
              </a>
            </div>
            {/* <!-- end partner --> */}

            {/* <!-- partner --> */}
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="/" className="partner">
                <img
                  src="img/partners/3docean-light-background.png"
                  alt=""
                  className="partner__img"
                />
              </a>
            </div>
            {/* <!-- end partner --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
