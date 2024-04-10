import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid pt-5 bg-primary hero-header mb-5">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
              IT-ZONE
            </div>
            <h1 className="display-4 text-white mb-4 animated slideInRight">
              Repair your Laptop and Desktop computer
            </h1>
            <p className="text-white mb-4 animated slideInRight">
              We provides always our best services to our clients and always try
              to achieve our client's trust and satisfaction
            </p>
            <a
              href="/about"
              className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight"
            >
              Read More
            </a>
            <a
              href="/contact"
              className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
            >
              Contact Us
            </a>
          </div>
          <div className="col-lg-6 align-self-end text-center text-lg-end">
            <img className="img-fluid" src="img/hero-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
