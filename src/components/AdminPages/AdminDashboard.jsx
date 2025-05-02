
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import ApiServices from '../ApiServices';
import { useEffect } from 'react';

export default function AdminDashboardCards() {
  const slides = [
    {
      // img: '/assets/img/admin1.avif',
      img: '/assets/img/home/img1.webp',
      quote: '"Learn today, lead tomorrow"',
    },
    {
      img: '/assets/img/admin.jpg',
      quote: '"Success is the sum of small efforts, repeated day in and day out."',
      author: '— Robert Collier',
    },
    {
      img: '/assets/img/admin3.webp',
      quote: '"What we think, we become."',
      author: '— Buddha',
    },
  ];

  const [totalHOD, setTotalHOD] = useState(0)
  const [totalStudent, setTotalStudent] = useState(0)
  const [totalUser, setTotalUser] = useState(0)

  const getDashboard = () => {
    ApiServices.Dashboard({})
      .then(res => {
        // console.log(res.data)
        setTotalHOD(res.data.total_HOD)
        setTotalStudent(res.data.total_Students)
        setTotalUser(res.data.total_Users)
      })
  }

  useEffect(() => {
    getDashboard()
  }, [])
  return (
    <>
      {/* Swiper Slider */}
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
              <div
                className="container py-5 my-5"
                style={{ position: 'relative', zIndex: 2 }}
              >
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-10 text-center">
                    <h6 className="display-6 lead text-white animated slideInUp">
                      {slide.quote}
                    </h6>
                    <p className="text-white fst-italic mb-5">{slide.author}</p>
                    <h3 className="text-white animated slideInDown">Home</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dashboard Overview Cards (No Loop) */}
      <div className="container-xxl">
        <div className="container">
          <div className="row g-4">
            <h2 className="display-5 text-3xl font-bold text-center mb-5 text-gray-800">
              Overview
            </h2>
          </div>

          <div className="row pb-5">

            <div className="col-md-4 pb-5">
              <motion.div whileHover={{ scale: 1.05, cursor: "pointer" }} transition={{ type: 'spring', stiffness: 300 }} className="card text-black bg-light mb-3 h-100 shadow-lg rounded">
                <div className="card-header text-center font-weight-bold bg-primary text-white" style={{ fontSize: "25px" }}>
                  Total Students
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title display-4">{totalStudent}</h5>
                  {/* <p className="card-text font-weight-bold">Enrolled students in the system.</p> */}
                </div>
              </motion.div>
            </div>

            <div className="col-md-4 pb-5">
              <motion.div whileHover={{ scale: 1.05, cursor: "pointer" }} transition={{ type: 'spring', stiffness: 300 }} className="card text-black bg-light mb-3 h-100 shadow-lg rounded">
                <div className="card-header text-center font-weight-bold bg-primary text-white" style={{ fontSize: "25px" }}>
                  Total HODs
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title display-4">{totalHOD}</h5>
                  {/* <p className="card-text font-weight-bold">Heads of Departments managing branches.</p> */}
                </div>
              </motion.div>
            </div>

            <div className="col-md-4 pb-5">
              <motion.div whileHover={{ scale: 1.05, cursor: "pointer" }} transition={{ type: 'spring', stiffness: 300 }} className="card text-black bg-light mb-3 h-100 shadow-lg rounded">
                <div className="card-header text-center font-weight-bold bg-primary text-white" style={{ fontSize: "25px" }}>
                  Total User
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title display-4">{totalUser}</h5>
                  {/* <p className="card-text font-weight-bold">Certificates generated by admin panel.</p> */}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

