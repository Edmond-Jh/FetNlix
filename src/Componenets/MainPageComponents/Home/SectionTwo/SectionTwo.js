import React from "react";

export default function SectionTwo() {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section__title">
              <b>HotFlix</b> – Best Place for Movies
            </h2>
            <p className="section__text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of <b>using Lorem</b> Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>

            <p className="section__text">
              Content here, content here, making it look like{" "}
              <a href="#">readable</a> English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will uncover many web sites
              still in their infancy. Various versions have evolved over the
              years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
