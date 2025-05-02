import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <>
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light footer pt-5 a wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-2 col-md-6">
          <h4 className="text-white mb-3">Quick Link</h4>
          <Link className="btn btn-link" to="/about">
            About Us
          </Link>
          <Link className="btn btn-link" to="/contact">
            Contact Us
          </Link>
          <Link className="btn btn-link" to="">
            Privacy Policy
          </Link>
          <Link className="btn btn-link" to="">
            Terms &amp; Condition
          </Link>
          <Link className="btn btn-link" to="">
            FAQs &amp; Help
          </Link>
        </div>
        <div className="col-lg-4 col-md-6">
          <h4 className="text-white mb-3">Contact</h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            Jalandhar, Punjab
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +91 8765456788
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            example@gmail.com
          </p>
          <div className="d-flex pt-2">
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-twitter" />
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-youtube" />
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-linkedin-in" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Gallery</h4>
          <div className="row g-2 pt-2">
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-1.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-2.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-3.jpg"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid bg-light p-1"
                src="/assets/img/course-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-3">Newsletter</h4>
          <p>This site is made by Amarpreet.</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <Link className="border-bottom" to="#">
              CampusHub
            </Link>
            , All Right Reserved.
            <br />
            <br />
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <Link to="">Home</Link>
              <Link to="">Cookies</Link>
              <Link to="">Help</Link>
              <Link to="">FQAs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
</>

    )
}