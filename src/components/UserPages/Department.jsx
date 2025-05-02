import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';
import ApiServices from '../ApiServices';

export default function Department() {
  var [departments, setDepartments] = useState([])

  const getData = () => {
    ApiServices.manageDepartment({ status: true })
      .then((res) => {
        // console.log("data is",res.data.data);
        setDepartments(res.data.data)

      })
      .catch((err) => {
        console.log("error is", err);
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
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
              backgroundImage: `url(/assets/img/departments.jpg)`,
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
                backgroundColor: 'rgba(0, 0, 0, 0.60)',
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
                  <h6 className="display-6 lead text-white mb-5 animated slideInUp">
                    {/* "The right course today shapes your tomorrow." */}
                  </h6>
                  <h3 className="text-white animated slideInDown">Departments</h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Header end */}
      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Department
            </h6>
            {/* <h1 className="mb-5">Department Categories</h1> */}
          </div>
          <div className="row g-3">
            {departments.map((el, index) => (
              <div
                className="col-lg-4 col-md-4 wow zoomIn"
                data-wow-delay="0.5s" key={index}
              >
                <a className="position-relative d-block overflow-hidden" href="">
                  <img className="img-fluid" src="/assets/img/certification.jpg" alt=""  style={{height:"250px",width:"350px"}}/>
                  <div
                    className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                    style={{ margin: 1 }}
                  >
                    <h5 className="m-0">{el?.dept_name}</h5>
                    <small className="text-primary">{el?.status === true ? "Active" : "Inactive"}</small>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}