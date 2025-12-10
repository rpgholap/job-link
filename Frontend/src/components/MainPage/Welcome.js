import React, { useEffect } from "react";
import "../../css/MainPage/Welcome.css";
import ScrollReveal from "scrollreveal";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedRecruiter } from "../../redux/slices/Recruiter/RecruiterSlice";
import { getLoggedJobSeeker } from "../../redux/slices/JobSeeker/JobSeekerSlice";
import { toast } from "react-toastify";

export default function Welcome() {
  const recruiter = useSelector(getLoggedRecruiter);
  const jobSeeker = useSelector(getLoggedJobSeeker);

  useEffect(() => {
    ScrollReveal().reveal(".headingMain", {
      scale: 0.7,
      duration: 1500,
    });
  }, []);

  return (
    <div className="welcome">
      <div class="container text-center mt-5">
        <div className="row">
          <div class="col-sm-10 col-md-10 col-lg-5 text-start headingMain">
            <div className="text-start mt-5 mb-4">
              <div className="display-4 pt-md-5 pt-lg-5 fw-bold text-primary ">
                Search Match Hire!!
              </div>
            </div>

            <div className="mt-2 fs-5 text-muted ">
              <span>
                We’ve taken the complexity out of the job hunt. <br /> Easily
                explore thousands of verified openings, get matched with roles
                that fit your lifestyle, and apply with a single tap. Finding
                your perfect job has never been this straightforward.
              </span>
            </div>
            <div className="mt-5 ">
              <NavLink
                to={
                  recruiter.email == "" && jobSeeker.email == ""
                    ? "/register/jobseeker"
                    : ""
                }
              >
                <button
                  className="btn btn-warning btn-lg me-4"
                  onClick={() =>
                    recruiter.email == "" && jobSeeker.email == ""
                      ? ""
                      : toast.warn("Already Logged In")
                  }
                >
                  Apply Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
