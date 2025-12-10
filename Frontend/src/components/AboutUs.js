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
      <div className="slider-area my-2">
        <div className="single-slider section-overly slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5 top-side">
                {/* Purple inline style applied here */}
                <h2 className="display-6 emerge" style={{ color: "purple" }}>
                  About JobLink
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-3 my-4">
        <div className="row">
          <div className="col-12 emerge">
            <p className="lead lh-base">
              JobLink is a user-centric web platform designed to authenticate
              users while providing a seamless, intuitive, and highly
              personalized interface. Our mission is to transform the
              traditional recruitment landscape into a common digital platform
              where job seekers and employers across India can interact and
              collaborate effectively.
            </p>

            <h3 className="mt-4">Our Mission</h3>
            <p className="text-muted">
              We strive to eliminate the hurdles of paper-based recruitment by
              providing an automated, accurate, and remotely accessible
              environment. By leveraging modern web technologies, we ensure that
              the right job information reaches suitable candidates without
              delay.
            </p>

            <h3 className="mt-4">Core Offerings</h3>
            <ul>
              <li>
                <strong>For Job Seekers:</strong> A free resource to search for
                verified openings, manage applications, and receive alerts.
                Offers personalized matching based on skills and education.
              </li>
              <li>
                <strong>For Employers & Companies:</strong> A centralized hub to
                create accounts, post openings, and search through a pool of
                qualified candidates.
              </li>
              <li>
                <strong>For Administrators:</strong> Robust tools to monitor
                stakeholder information, verify approvals, and safeguard system
                security.
              </li>
            </ul>

            <h3 className="mt-4">Technology and Security</h3>
            <p>
              Built using a high-performance stack including React JS, Spring
              Boot, and MySQL. We prioritize safety through:
            </p>
            <ul>
              <li>
                <strong>Role-Based Security:</strong> Restricted access based on
                permissions.
              </li>
              <li>
                <strong>Data Reliability:</strong> Automated load balancing for
                peak performance.
              </li>
              <li>
                <strong>System Integrity:</strong> Firewalls and regular backups
                against attacks.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Working />

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
                height: "70vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary display-6">Deepa Jadhav</h5>
                <p className="lh-lg lead">Full Stack Developer</p>
                <p className="text-muted small">
                  “Your bodies are our responsibility! Start caring for your
                  body and it will care for you.”
                </p>
              </div>
            </div>
          </div>
          {/* ... Other carousel items (Pranali & Rutuja) remain the same ... */}
          <div className="carousel-item" data-bs-interval="2000">
            <div
              className="d-block w-100"
              style={{
                height: "70vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary display-6">Pranali Mahadik</h5>
                <p className="lh-lg lead">Full Stack Developer</p>
                <p className="text-muted small">
                  “Start caring for your body and it will care for you.”
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div
              className="d-block w-100"
              style={{
                height: "70vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-primary display-6">Rutuja Gholap</h5>
                <p className="lh-lg lead">Full Stack Developer</p>
                <p className="text-muted small">
                  “Eat clean it will care for you and workout hard.”
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
