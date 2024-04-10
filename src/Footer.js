import React from "react";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <a href="index.html" className="d-inline-block mb-3">
                <h1 className="text-white">
                  IT<span className="text-primary">.</span>ZONE
                </h1>
              </a>
              <p className="mb-0">
                We always provide our best services to our clients and always
                try to achieve our client's trust and satisfaction
              </p>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>CV RAMAN NAGAR,
                BENGALURU
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+91 9909909909
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>itzone@gmail.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <h5 className="text-white mb-4">Popular Link</h5>
              <a className="btn btn-link" href="/about">
                About Us
              </a>
              <a className="btn btn-link" href="/contact">
                Contact Us
              </a>
              {/* <a className="btn btn-link" href="">Privacy Policy</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Career</a> */}
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <h5 className="text-white mb-4">Our Services</h5>
              <a className="btn btn-link" href="">
                Laptop & Computer Brands
              </a>
              <a className="btn btn-link" href="">
                CCTV Services
              </a>
              <a className="btn btn-link" href="">
                Hardware & Networking Solutions
              </a>
              <a className="btn btn-link" href="">
                Enterprise WiFi Solutions
              </a>
              <a className="btn btn-link" href="">
                Software Installation Support
              </a>
            </div>
          </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  iT-ZONE
                </a>
                , All Right Reserved. Designed By{" "}
                <a className="border-bottom" href="https://iiiqbets.com">
                  iiiQBets
                </a>{" "}
                {/* Distributed By{" "}
                <a className="border-bottom" href="https://themewagon.com">
                  ThemeWagon
                </a> */}
              </div>
              {/* <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FAQs</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default Footer;
