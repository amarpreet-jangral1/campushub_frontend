import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "react-toastify/dist/ReactToastify.css"; 
import { Link } from 'react-router-dom';


export default function Contact(){
    return(
        <>
  {/* Header Start */}
  <Swiper
    modules={[Autoplay, Pagination]}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop={true}
    pagination={{ clickable: true }}
    className="mb-5"
  >
    <SwiperSlide>
      <div
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(/assets/img/contact.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
        }}
      >
        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.64)',
            zIndex: 1,
          }}
        ></div>

        {/* Text content */}
        <div
          className="container py-5 my-5"
          style={{ position: 'relative', zIndex: 2 }}
        >
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10 text-center">
              <h6 className="display-6 lead text-white mb-3 animated slideInUp">
                Contact Us
              </h6>
              <h5 className="text-white animated slideInDown">
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link className="text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Courses
                  </li>
                </ol>
                </nav>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
        </Swiper>
  {/* Header End */}
  {/* Contact Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Contact Us
        </h6>
        <h1 className="mb-5">Contact For Any Query</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <h2>Get In Touch</h2><br />
          {/* <p className="mb-4">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax &amp; PHP in a few minutes. Just copy and
            paste the files, add a little code and you're done.{" "}
          </p> */}
          <div className="d-flex align-items-center mb-3">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-map-marker-alt text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Address</h5>
              <p className="mb-0">Jalandhar, Punjab, India</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Mobile</h5>
              <p className="mb-0">+91 7973437977</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
              style={{ width: 50, height: 50 }}
            >
              <i className="fa fa-envelope-open text-white" />
            </div>
            <div className="ms-3">
              <h5 className="text-primary">Email</h5>
              <p className="mb-0">amarpreetjangral4@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameBorder={0}
            style={{ minHeight: 300, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 150 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>

    )
}