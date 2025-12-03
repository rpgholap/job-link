import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "../css/AboutUs.css";
import Working from "./MainPage/Working";

const AboutUs = () => {
  useEffect(() => {
    ScrollReveal().reveal(".emerge", {
      scale: 0.7,
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div className="slider-area my-5">
        <div className="single-slider section-overly slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5 top-side">
                <h2 className="display-6">About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-img-blur"></div> */}

      <Working></Working>

      <div className="bg-img-blur"></div>

      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div
              className="d-block w-100"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "70vh",
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary display-6">Deepa Jadhav</h5>
                <p className="lh-lg lead">Full Stack Developer</p>
                <p className="text-muted small">
                  “I am at an age where I just want to be fit and healthy our
                  bodies are our responsibility! So start caring for your body
                  and it will care for you. Eat clean it will care for you and
                  workout hard.”
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div
              className="d-block w-100"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "70vh",
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary display-6">Pranali Mahadik</h5>
                <p className="lh-lg lead">Full Stack Developer</p>
                <p className="text-muted small">
                  “I am at an age where I just want to be fit and healthy our
                  bodies are our responsibility! So start caring for your body
                  and it will care for you. Eat clean it will care for you and
                  workout hard.”
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div
              className="d-block w-100"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "70vh",
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary display-6">Rutuja Gholap</h5>
                <p className="lh-lg lead">Full Stack Developerr</p>
                <p className="text-muted small">
                  “I am at an age where I just want to be fit and healthy our
                  bodies are our responsibility! So start caring for your body
                  and it will care for you. Eat clean it will care for you and
                  workout hard.”
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="bg-img-blur"></div>
    </>
  );
};

export default AboutUs;
