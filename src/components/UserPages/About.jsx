import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function About(){
const slides = [
    {
      img: '/assets/img/about/pic1.jpg',
      quote: '"Code your way into the future."',
    },
    {
      img: '/assets/img/about/pic2.jpg',
      quote: '"Big dreams start here."',
    },
    {
      img: '/assets/img/about/pic3.jpg',      
      quote: '"Learn today, lead tomorrow."',

    },
  ];
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
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="position-relative d-flex align-items-center justify-content-center"
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '550px',
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
                  backgroundColor: 'rgba(0, 0, 0, 0.50)',
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
                    <h6 className=" display-6 lead text-white mb-5 animated slideInUp">
                      {slide.quote}
                    </h6>
                    <h3 className=" text-white animated slideInDown">About Us</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    {/* Header end */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
              <h5 className="mb-3">Skilled Instructors</h5>
              {/* <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p> */}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-globe text-primary mb-4" />
              <h5 className="mb-3">Online Classes</h5>
              {/* <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p> */}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-home text-primary mb-4" />
              <h5 className="mb-3">Home Projects</h5>
              {/* <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p> */}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-book-open text-primary mb-4" />
              <h5 className="mb-3">Book Library</h5>
              {/* <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="/assets/img/about.jpg"
              alt=""
              style={{ objectFit: "cover", borderRadius: "20px"  }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">
            About Us
          </h6>
          <h1 className="mb-4">Welcome to CampusHub</h1>
          {/* <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p> */}
          <p className="mb-4">
          – your ultimate digital companion for campus life!
          Whether you're a fresher or a final-year student, CampusHub is here to make your academic journey smoother, smarter, and more connected.
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Skilled Instructors
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Online Classes
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                International Certificate
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Skilled Instructors
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Online Classes
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                International Certificate
              </p>
            </div>
          </div>
          <a className="btn btn-primary py-3 px-5 mt-2" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Instructors
        </h6>
        <h1 className="mb-5">Expert Instructors</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-1.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-2.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-3.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-4.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-twitter" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Instructor Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</>

    )
}