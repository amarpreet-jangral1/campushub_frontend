import { ToastContainer } from "react-toastify";
import HodPageHeader from "./HodPageHeader";
// import { ToastContainer } from "react-toastify";
// import HodPageHeader from "./HodPageHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';


export default function HodHome() {
  // return (
  //   <>
  //     {/* Header Start */}
  //     <HodPageHeader
  //       backgroundImage="/assets/img/admin.webp"
  //       title="HOD Dashboard"
  //     />
  //     <ToastContainer position="top-center" autoClose={2000} theme="colored" />

  //     {/* Header end */}
  //   </>

  // )

  const [showMore, setShowMore] = useState(false);
    
  const slides = [
    {
      // img: '/assets/img/home/img1.webp',
      img: '/assets/img/admin1.avif',
      quote: '"Big dreams start here."',
    },
    {
      img: '/assets/img/photo15.jpg',
      // img: '/assets/img/admin3.jpg',
      // img: '/assets/img/home/img2.webp',
      quote:'"What we think, we become."',
    },
    {
      // img: '/assets/img/home/img3.jpg',
      img: '/assets/img/photo21.jpg',
      quote: '"Together we study, together we succeed."',
    },
  ];
  return(
      <>
{/* Header Start */}
      {/* <HodPageHeader
        backgroundImage="/assets/img/admin.webp"
        title="HOD Dashboard"
      />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" /> */}

  {/* Header end */}
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
                      <h3 className=" text-white animated slideInDown">Home</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
  </Swiper>
  {/* Header end */}
{/* Categories Start */}
<div className="container-xxl py-5 category">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Categories
      </h6>
      <h1 className="mb-5">Courses Categories</h1>
    </div>
    <div className="row g-3">
      <div className="col-lg-7 col-md-6">
        <div className="row g-3">
          <div
            className="col-lg-12 col-md-12 wow zoomIn"
            data-wow-delay="0.1s"
          >
            <a className="position-relative d-block overflow-hidden" href="">
              <img className="img-fluid" src="/assets/img/photo6.png" alt="" />
              {/* <img className="img-fluid" src="/assets/img/photo8.jpg" alt="" /> */}
              {/* <img className="img-fluid" src="/assets/img/cat-1.jpg" alt="" /> */}
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: 1 }}
              >
                <h5 className="m-0">BCA</h5>
              </div>
            </a>
          </div>
          <div
            className="col-lg-6 col-md-12 wow zoomIn"
            data-wow-delay="0.3s"
          >
            <a className="position-relative d-block overflow-hidden" href="">
              <img className="img-fluid" src="/assets/img/photo9.jpg" alt="" />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: 1 }}
              >
                <h5 className="m-0">B.Tech</h5>
              </div>
            </a>
          </div>
          <div
            className="col-lg-6 col-md-12 wow zoomIn"
            data-wow-delay="0.5s"
          >
            <a className="position-relative d-block overflow-hidden" href="">
              <img className="img-fluid" src="/assets/img/photo2.jpg" alt="" />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: 1 }}
              >
                <h5 className="m-0">BSc</h5>
      
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="col-lg-7 col-md-6">
        <div className="row g-3">
          {courses.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "col-lg-12 col-md-12" : "col-lg-6 col-md-12"
              } wow zoomIn`}
              data-wow-delay={`${0.1 + index * 0.2}s`}
            >
              <a className="position-relative d-block overflow-hidden" href="">
                <img
                  className="img-fluid"
                  src={course.image || "/assets/img/default-course.jpg"}
                  alt={course.title}
                />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">{course.title}</h5>
                  <small className="text-primary">
                    {course.totalCourses || "49"} Courses
                  </small>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div> */}

      <div
        className="col-lg-5 col-md-6 wow zoomIn"
        data-wow-delay="0.7s"
        style={{ minHeight: 350 }}
      >
        <a
          className="position-relative d-block h-100 overflow-hidden"
          href=""
        >
          <img
            className="img-fluid position-absolute w-100 h-100"
            src="/assets/img/photo8.jpg"
            // src="/assets/img/cat-4.jpg"
            alt=""
            style={{ objectFit: "cover" }}
          />
          <div
            className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
            style={{ margin: 1 }}
          >
            <h5 className="m-0">BBA</h5>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
{/* Categories Start */}
{/* Courses Start */}
<div className="container-xxl py-5">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Courses
      </h6>
      <h1 className="mb-5">Popular Courses</h1>
    </div>
    <div className="row g-4 justify-content-center">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="course-item bg-light">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid" src="/assets/img/home/home6.jpg" alt="" />
            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
              <a
                href="#"
                className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                style={{ borderRadius: "30px 0 0 30px" }}
              >
                Read More
              </a>
              <a
                href="#"
                className="flex-shrink-0 btn btn-sm btn-primary px-3"
                style={{ borderRadius: "0 30px 30px 0" }}
              >
                Join Now
              </a>
            </div>
          </div>
          <div className="text-center p-4 pb-0">
            <h3 className="mb-0">3 Years</h3><br />
            <h5 className="mb-4">
              Bachelors of Science
            </h5><br />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="course-item bg-light">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid" src="/assets/img/course-2.jpg" alt="" />
            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
              <a
                href="#"
                className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                style={{ borderRadius: "30px 0 0 30px" }}
              >
                Read More
              </a>
              <a
                href="#"
                className="flex-shrink-0 btn btn-sm btn-primary px-3"
                style={{ borderRadius: "0 30px 30px 0" }}
              >
                Join Now
              </a>
            </div>
          </div>
          <div className="text-center p-4 pb-0">
            <h3 className="mb-0">4 Years</h3><br />
            <h5 className="mb-4">
              {/* Web Design &amp; Development Course for Beginners */}
              Bachelors of Technology
            </h5><br />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="course-item bg-light">
          <div className="position-relative overflow-hidden">
            <img className="img-fluid" src="/assets/img/photo15.jpg" alt="" />
            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
              <a
                href="#"
                className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                style={{ borderRadius: "30px 0 0 30px" }}
              >
                Read More
              </a>
              <a
                href="#"
                className="flex-shrink-0 btn btn-sm btn-primary px-3"
                style={{ borderRadius: "0 30px 30px 0" }}
              >
                Join Now
              </a>
            </div>
          </div>
          <div className="text-center p-4 pb-0">
            <h3 className="mb-0">3 Years</h3><br />
            <h5 className="mb-4">
              {/* Web Design &amp; Development Course for Beginners */}
              Bachelors of Bussiness Administrator
            </h5><br />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Courses End */}
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