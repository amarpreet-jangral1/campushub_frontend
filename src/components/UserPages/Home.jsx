import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { Fade, Slide,Zoom } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useState } from 'react';
// export default function Home(){
//   const slides = [
//     {
//       // img: '/assets/img/home/img1.webp',
//       img: '/assets/img/admin1.avif',
//       quote: '"Big dreams start here."',
//     },
//     {
//       img: '/assets/img/home/img2.webp',
//       quote:'The future belongs to those who read.',
//     },
//     {
//       img: '/assets/img/home/img3.jpg',
//       quote: '"Together we study, together we succeed."',
//     },
//   ];
//     return(
//         <>
//   {/* Header Start */}
//     <Swiper
//             modules={[Autoplay, Pagination]}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             loop={true}
//             pagination={{ clickable: true }}
//             className="mb-5"
//           >
//             {slides.map((slide, idx) => (
//               <SwiperSlide key={idx}>
//                 <div
//                   className="position-relative d-flex align-items-center justify-content-center"
//                   style={{
//                     backgroundImage: `url(${slide.img})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     height: '550px',
//                   }}
//                 >
//                   {/* Dark overlay */}
//                   <div
//                     style={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       backgroundColor: 'rgba(0, 0, 0, 0.40)',
//                       zIndex: 1,
//                     }}
//                   ></div>

//                   {/* Text content */}
//                   <div
//                     className="container py-5 my-5"
//                     style={{ position: 'relative', zIndex: 2 }}
//                   >
//                     <div className="row justify-content-center align-items-center">
//                       <div className="col-lg-10 text-center">
//                         <h6 className=" display-6 lead text-white mb-5 animated slideInUp">
//                           {slide.quote}
//                         </h6>
//                         <h3 className=" text-white animated slideInDown">Home</h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//     </Swiper>
//     {/* Header end */}
//   {/* Service Start */}
//   <div className="container-xxl py-5">
//     <div className="container">
//       <div className="row g-4">
//         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
//           <div className="service-item text-center pt-3">
//             <div className="p-4">
//               <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
//               <h5 className="mb-3">Skilled Instructors</h5>
//               {/* <p>
//                 Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
//                 amet diam
//               </p> */}
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
//           <div className="service-item text-center pt-3">
//             <div className="p-4">
//               <i className="fa fa-3x fa-globe text-primary mb-4" />
//               <h5 className="mb-3">Online Classes</h5>
//               {/* <p>
//                 Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
//                 amet diam
//               </p> */}
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
//           <div className="service-item text-center pt-3">
//             <div className="p-4">
//               <i className="fa fa-3x fa-home text-primary mb-4" />
//               <h5 className="mb-3">Home Projects</h5>
//               {/* <p>
//                 Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
//                 amet diam
//               </p> */}
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
//           <div className="service-item text-center pt-3">
//             <div className="p-4">
//               <i className="fa fa-3x fa-book-open text-primary mb-4" />
//               <h5 className="mb-3">Book Library</h5>
//               {/* <p>
//                 Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
//                 amet diam
//               </p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Service End */}
//   {/* About Start */}
//   <div className="container-xxl py-5">
//     <div className="container">
//       <div className="row g-5">
//         <div
//           className="col-lg-6 wow fadeInUp"
//           data-wow-delay="0.1s"
//           style={{ minHeight: 400 }}
          
//         >

//           <div className="position-relative h-100 "
//           >
//             <img
//               className="img-fluid position-absolute w-100 h-100"
//               src="/assets/img/about.jpg"
//               alt=""
//               style={{ objectFit: "cover", borderRadius: "20px" }}
//             />
//           </div>

//         </div>
//         <div className="col-lg-6 wow fadeInUp " data-wow-delay="0.3s">
//           {/* <Slide direction="up" cascade triggerOnce> */}
//           <h1 className="mb-4">
//           <div className="feature">Welcome to CampusHub</div>
//           </h1>
//           {/* <p className="mb-4 feature">
//             Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
//             diam amet diam et eos. Clita erat ipsum et lorem et sit.
//           </p> */}
//           {/* </Slide> */}
//           <p className="mb-4">
//           – your ultimate digital companion for campus life!
//           Whether you're a fresher or a final-year student, CampusHub is here to make your academic journey smoother, smarter, and more connected.
//           </p>
//           <div className="row gy-2 gx-4 mb-4">
//             <div className="col-sm-6">
//               <p className="mb-0">
//                 <i className="fa fa-arrow-right text-primary me-2" />
//                 Skilled Instructors
//               </p>
//             </div>
//             <div className="col-sm-6">
//               <p className="mb-0">
//                 <i className="fa fa-arrow-right text-primary me-2" />
//                 Online Classes
//               </p>
//             </div>
//             <div className="col-sm-6">
//               <p className="mb-0">
//                 <i className="fa fa-arrow-right text-primary me-2" />
//                 International Certificate
//               </p>
//             </div>
//             <div className="col-sm-6">
//               <p className="mb-0">
//                 <i className="fa fa-arrow-right text-primary me-2" />
//                 Skilled Instructors
//               </p>
//             </div>
//             <div className="col-sm-6">
//               <p className="mb-0">
//                 <i className="fa fa-arrow-right text-primary me-2" />
//                 Online Classes
//               </p>
//             </div>
//             <div className="col-sm-6">
//               <p className="mb-0">
//                 <i className="fa fa-arrow-right text-primary me-2" />
//                 International Certificate
//               </p>
//             </div>
//           </div>
//           <a className="btn btn-primary py-3 px-5 mt-2" href="">
//             Read More
//           </a>
//         </div>
//       </div>
//     </div>

//   </div>
//   {/* About End */}
//    {/* Call To Action Section */}
//    <section
//     id="call-to-action"
//     className="call-to-action section dark-background "
//   >
//     <img src="assets/img/parallex.webp" alt="" 
//     style={{ zIndex: '-2', filter: 'brightness(40%)' }}
//     />
//     <div className="container">
//       <div className="row text-white " data-aos="zoom-in " data-aos-delay={100}>
//         <div className="col-xl-9 text-center text-xl-start">
//           <h3>Call To Action</h3>
//           <p >
//             Duis aute irure dolor in reprehenderit in voluptate velit esse
//             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//             cupidatat non proident, sunt in culpa qui officia deserunt mollit
//             anim id est laborum.
//           </p>
//         </div>
//         <div className="col-xl-3 cta-btn-container text-center">
//                 <a
//                   href="#"
//                   className="cta-btn align-middle flex-shrink-0 btn btn-sm  px-3 "
//                 >
//                   Call To Action
//                 </a>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* /Call To Action Section */}


//   {/* Categories Start */}
//   <div className="container-xxl py-5 category">
//     <div className="container">
//       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
//         <h6 className="section-title bg-white text-center text-primary px-3">
//           Categories
//         </h6>
//         <h1 className="mb-5">Courses Categories</h1>
//       </div>
//       <div className="row g-3">
//         <div className="col-lg-7 col-md-6">
//           <div className="row g-3">
//             <div
//               className="col-lg-12 col-md-12 wow zoomIn"
//               data-wow-delay="0.1s"
//             >
//               <a className="position-relative d-block overflow-hidden" href="">
//                 <img className="img-fluid" src="/assets/img/cat-1.jpg" alt="" />
//                 <div
//                   className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
//                   style={{ margin: 1 }}
//                 >
//                   <h5 className="m-0">Web Design</h5>
//                   <small className="text-primary">49 Courses</small>
//                 </div>
//               </a>
//             </div>
//             <div
//               className="col-lg-6 col-md-12 wow zoomIn"
//               data-wow-delay="0.3s"
//             >
//               <a className="position-relative d-block overflow-hidden" href="">
//                 <img className="img-fluid" src="/assets/img/cat-2.jpg" alt="" />
//                 <div
//                   className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
//                   style={{ margin: 1 }}
//                 >
//                   <h5 className="m-0">Graphic Design</h5>
//                   <small className="text-primary">49 Courses</small>
//                 </div>
//               </a>
//             </div>
//             <div
//               className="col-lg-6 col-md-12 wow zoomIn"
//               data-wow-delay="0.5s"
//             >
//               <a className="position-relative d-block overflow-hidden" href="">
//                 <img className="img-fluid" src="/assets/img/cat-3.jpg" alt="" />
//                 <div
//                   className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
//                   style={{ margin: 1 }}
//                 >
//                   <h5 className="m-0">Video Editing</h5>
//                   <small className="text-primary">49 Courses</small>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div
//           className="col-lg-5 col-md-6 wow zoomIn"
//           data-wow-delay="0.7s"
//           style={{ minHeight: 350 }}
//         >
//           <a
//             className="position-relative d-block h-100 overflow-hidden"
//             href=""
//           >
//             <img
//               className="img-fluid position-absolute w-100 h-100"
//               src="/assets/img/cat-4.jpg"
//               alt=""
//               style={{ objectFit: "cover" }}
//             />
//             <div
//               className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
//               style={{ margin: 1 }}
//             >
//               <h5 className="m-0">Online Marketing</h5>
//               <small className="text-primary">49 Courses</small>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Categories Start */}
//   {/* Courses Start */}
//   <div className="container-xxl py-5">
//     <div className="container">
//       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
//         <h6 className="section-title bg-white text-center text-primary px-3">
//           Courses
//         </h6>
//         <h1 className="mb-5">Popular Courses</h1>
//       </div>
//       <div className="row g-4 justify-content-center">
//         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
//           <div className="course-item bg-light">
//             <div className="position-relative overflow-hidden">
//               <img className="img-fluid" src="/assets/img/course-1.jpg" alt="" />
//               <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
//                 <a
//                   href="#"
//                   className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
//                   style={{ borderRadius: "30px 0 0 30px" }}
//                 >
//                   Read More
//                 </a>
//                 <a
//                   href="#"
//                   className="flex-shrink-0 btn btn-sm btn-primary px-3"
//                   style={{ borderRadius: "0 30px 30px 0" }}
//                 >
//                   Join Now
//                 </a>
//               </div>
//             </div>
//             <div className="text-center p-4 pb-0">
//               <h3 className="mb-0">$149.00</h3>
//               <div className="mb-3">
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small>(123)</small>
//               </div>
//               <h5 className="mb-4">
//                 Web Design &amp; Development Course for Beginners
//               </h5>
//             </div>
//             <div className="d-flex border-top">
//               <small className="flex-fill text-center border-end py-2">
//                 <i className="fa fa-user-tie text-primary me-2" />
//                 Gurvinder Singh
//               </small>
//               <small className="flex-fill text-center border-end py-2">
//                 <i className="fa fa-clock text-primary me-2" />
//                 2 Hrs
//               </small>
//               <small className="flex-fill text-center py-2">
//                 <i className="fa fa-user text-primary me-2" />
//                 30 Students
//               </small>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
//           <div className="course-item bg-light">
//             <div className="position-relative overflow-hidden">
//               <img className="img-fluid" src="/assets/img/course-2.jpg" alt="" />
//               <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
//                 <a
//                   href="#"
//                   className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
//                   style={{ borderRadius: "30px 0 0 30px" }}
//                 >
//                   Read More
//                 </a>
//                 <a
//                   href="#"
//                   className="flex-shrink-0 btn btn-sm btn-primary px-3"
//                   style={{ borderRadius: "0 30px 30px 0" }}
//                 >
//                   Join Now
//                 </a>
//               </div>
//             </div>
//             <div className="text-center p-4 pb-0">
//               <h3 className="mb-0">8000</h3>
//               <div className="mb-3">
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small>(123)</small>
//               </div>
//               <h5 className="mb-4">
//                 Full Stack  &amp; Development Course for Beginners
//               </h5>
//             </div>
//             <div className="d-flex border-top">
//               <small className="flex-fill text-center border-end py-2">
//                 <i className="fa fa-user-tie text-primary me-2" />
//                 Khushi
//               </small>
//               <small className="flex-fill text-center border-end py-2">
//                 <i className="fa fa-clock text-primary me-2" />
//                 1.50 Hrs
//               </small>
//               <small className="flex-fill text-center py-2">
//                 <i className="fa fa-user text-primary me-2" />
//                 30 Students
//               </small>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
//           <div className="course-item bg-light">
//             <div className="position-relative overflow-hidden">
//               <img className="img-fluid" src="/assets/img/course-3.jpg" alt="" />
//               <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
//                 <a
//                   href="#"
//                   className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
//                   style={{ borderRadius: "30px 0 0 30px" }}
//                 >
//                   Read More
//                 </a>
//                 <a
//                   href="#"
//                   className="flex-shrink-0 btn btn-sm btn-primary px-3"
//                   style={{ borderRadius: "0 30px 30px 0" }}
//                 >
//                   Join Now
//                 </a>
//               </div>
//             </div>
//             <div className="text-center p-4 pb-0">
//               <h3 className="mb-0">10,000</h3>
//               <div className="mb-3">
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small className="fa fa-star text-primary" />
//                 <small>(123)</small>
//               </div>
//               <h5 className="mb-4">
//                 Mobile  &amp; Development Course for Beginners
//               </h5>
//             </div>
//             <div className="d-flex border-top">
//               <small className="flex-fill text-center border-end py-2">
//                 <i className="fa fa-user-tie text-primary me-2" />
//                 Shruti
//               </small>
//               <small className="flex-fill text-center border-end py-2">
//                 <i className="fa fa-clock text-primary me-2" />
//                 1.40 Hrs
//               </small>
//               <small className="flex-fill text-center py-2">
//                 <i className="fa fa-user text-primary me-2" />
//                 30 Students
//               </small>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Courses End */}
//   {/* Team Start */}
//   <div className="container-xxl py-5">
//     <div className="container">
//       <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
//         <h6 className="section-title bg-white text-center text-primary px-3">
//           Instructors
//         </h6>
//         <h1 className="mb-5">Expert Instructors</h1>
//       </div>
//       <div className="row g-4">
//         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
//           <div className="team-item bg-light">
//             <div className="overflow-hidden">
//               <img className="img-fluid" src="/assets/img/team-1.jpg" alt="" />
//             </div>
//             <div
//               className="position-relative d-flex justify-content-center"
//               style={{ marginTop: "-23px" }}
//             >
//               <div className="bg-light d-flex justify-content-center pt-2 px-1">
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-facebook-f" />
//                 </a>
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-twitter" />
//                 </a>
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-instagram" />
//                 </a>
//               </div>
//             </div>
//             <div className="text-center p-4">
//               <h5 className="mb-0">Gurvinder Singh</h5>
//               <small>Web designer</small>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
//           <div className="team-item bg-light">
//             <div className="overflow-hidden">
//               <img className="img-fluid" src="/assets/img/team-2.jpg" alt="" />
//             </div>
//             <div
//               className="position-relative d-flex justify-content-center"
//               style={{ marginTop: "-23px" }}
//             >
//               <div className="bg-light d-flex justify-content-center pt-2 px-1">
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-facebook-f" />
//                 </a>
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-twitter" />
//                 </a>
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-instagram" />
//                 </a>
//               </div>
//             </div>
//             <div className="text-center p-4">
//               <h5 className="mb-0">Shruti</h5>
//               <small>Mobile app developer</small>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
//           <div className="team-item bg-light">
//             <div className="overflow-hidden">
//               <img className="img-fluid" src="/assets/img/team-3.jpg" alt="" />
//             </div>
//             <div
//               className="position-relative d-flex justify-content-center"
//               style={{ marginTop: "-23px" }}
//             >
//               <div className="bg-light d-flex justify-content-center pt-2 px-1">
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-facebook-f" />
//                 </a>
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-twitter" />
//                 </a>
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-instagram" />
//                 </a>
//               </div>
//             </div>
//             <div className="text-center p-4">
//               <h5 className="mb-0">Varun</h5>
//               <small>Digital Marketing</small>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
//           <div className="team-item bg-light">
//             <div className="overflow-hidden">
//               <img className="img-fluid" src="/assets/img/team-4.jpg" alt="" />
//             </div>
//             <div
//               className="position-relative d-flex justify-content-center"
//               style={{ marginTop: "-23px" }}
//             >
//               <div className="bg-light d-flex justify-content-center pt-2 px-1">
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-facebook-f" />
//                 </a>
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-twitter" />
//                 </a>
//                 <a className="btn btn-sm-square btn-primary mx-1" href="">
//                   <i className="fab fa-instagram" />
//                 </a>
//               </div>
//             </div>
//             <div className="text-center p-4">
//               <h5 className="mb-0">Khushi</h5>
//               <small>Full Stack developer</small>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Team End */}
  
// </>

//     )
// }






export default function Home(){
  const [showMore, setShowMore] = useState(false);

const slides = [
  {
    // img: '/assets/img/home/img1.webp',
    img: '/assets/img/admin1.avif',
    quote: '"Big dreams start here."',
  },
  {
    // img: '/assets/img/home/img2.webp',
    // quote:'"What we think, we become."',
    img: '/assets/img/about/pic1.jpg',
      quote: '"Code your way into the future."',
  },
  {
    img: '/assets/img/photo6.png',
    quote: '"Together we study, together we succeed."',
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
                    backgroundColor: 'rgba(0, 0, 0, 0.45)',
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
            {/* Left Content */}
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h6>
              <h1 className="mb-4">Welcome to CampusHub</h1>
              <p className="mb-4">
                – your ultimate digital companion for campus life! Whether you're a fresher or a final-year student, CampusHub is here to make your academic journey smoother, smarter, and more connected.
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
                    Gate Pass System
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Certificate Management
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Payment History & Tracking
                  </p>
                </div>
              </div>

              <button
                className="btn btn-primary py-3 px-5 mt-2"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>

            {/* Right Image */}
            <div
              className="col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="/assets/img/about/pic4.jpg"
                  // src="/assets/img/about.jpg"
                  alt="About CampusHub"
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                />
              </div>
            </div>
            {/* Full-width Read More */}
            {showMore && (
              <div className="col-12 mt-4">
                <div className="p-4 bg-light rounded">
                  <p>
                    CampusHub is more than just a platform—it's a comprehensive ecosystem designed to simplify, streamline, and enhance the entire campus experience. Our vision is to empower students, faculty, and institutions by leveraging smart digital tools that make everyday academic and administrative tasks easier, faster, and more transparent.
                  </p>
                  <p>
                    In today’s dynamic educational environment, managing campus-related activities can be overwhelming. From accessing certificates and requesting gate passes to tracking payments and planning travel, students often face challenges due to outdated systems and lack of centralization. CampusHub solves this by bringing all essential services under one roof.
                  </p>
                  <p>
                    What sets CampusHub apart is our commitment to user-centric design and innovation. With an intuitive interface and responsive design, the platform is accessible across all devices. Whether it’s the certificate module that stores downloadable documents, or the real-time gate pass tracking, CampusHub ensures everything is seamless.
                  </p>
                  <p>
                    Students benefit from complete control over their data and experience, including real-time payment updates, budgeting assistance, and even travel planning features. Institutions enjoy streamlined management, security, and improved communication across departments.
                  </p>
                  <p>
                    CampusHub continues to evolve based on user feedback and technological advancements, ensuring we remain aligned with the goals of modern education. By reducing paperwork, centralizing tools, and digitizing workflows, we’re redefining how campuses operate.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* About End */}
 {/* Call To Action Section */}
 <section
  id="call-to-action"
  className="call-to-action section dark-background "
>
  <img src="assets/img/parallex.webp" alt="" 
  style={{ zIndex: '-2', filter: 'brightness(40%)' }}
  />
  <div className="container">
    <div className="row text-white " data-aos="zoom-in " data-aos-delay={100}>
      <div className="col-xl-9 text-center text-xl-start">
        <h3>"Your Campus Journey Starts Here"</h3>
        <p >
        "Connect, learn, and travel with CampusHub. Empower your academic journey and beyond."
        </p>
      </div>
      <div className="col-xl-3 cta-btn-container text-center">
      <Link
        to="/login"
       className="cta-btn align-middle flex-shrink-0 btn btn-sm  px-3 "
      >
        Start Now
      </Link>
      </div>
    </div>
  </div>
</section>
{/* /Call To Action Section */}


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
      <div className="col-lg-8 col-md-6">
        <div className="row g-3">
          <div
            className="col-lg-6 col-md-12 wow zoomIn"
            data-wow-delay="0.3s"
          >
            <a className="position-relative d-block overflow-hidden" href="">

              <img className="img-fluid" src="/assets/img/home/home1.jpg" alt="" />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: 1 }}
              >
                <h5 className="m-0">B.Tech</h5>
                <small className="text-primary">4 year</small>
              </div>
            </a>
          </div>
          <div
            className="col-lg-6 col-md-12 wow zoomIn"
            data-wow-delay="0.5s"
          >
            <a className="position-relative d-block overflow-hidden" href="">
              <img className="img-fluid" src="/assets/img/home/home2.jpg" alt="" />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: 1 }}
              >
                <h5 className="m-0">B.Sc</h5>
                <small className="text-primary">3 year</small>
              </div>
            </a>
          </div>
          <div
            className="col-lg-6 col-md-12 wow zoomIn"
            data-wow-delay="0.3s"
          >
            <a className="position-relative d-block overflow-hidden" href="">
              <img className="img-fluid" src="/assets/img/home/home3.jpg" alt="" />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: 1 }}
              >
                <h5 className="m-0">B.A</h5>
                <small className="text-primary">3 year</small>
              </div>
            </a>
          </div>
          <div
            className="col-lg-6 col-md-12 wow zoomIn"
            data-wow-delay="0.5s"
          >
            <a className="position-relative d-block overflow-hidden" href="">
              <img className="img-fluid" src="/assets/img/home/home4.jpg" alt="" />
              <div
                className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                style={{ margin: 1 }}
              >
                <h5 className="m-0">B.Com</h5>
                <small className="text-primary">3 year</small>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        className="col-lg-4 col-md-6 wow zoomIn"
        data-wow-delay="0.7s"
        style={{ minHeight: 350 }}
      >
        <a
          className="position-relative d-block h-100 overflow-hidden"
          href=""
        >
          <img
            className="img-fluid position-absolute w-100 h-100"
            src="/assets/img/home/home5.jpg"
            alt=""
            style={{ objectFit: "cover" }}
          />
          <div
            className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
            style={{ margin: 1 }}
          >
            <h5 className="m-0">BCA</h5>
            <small className="text-primary">3 year</small>
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
               <h5 className="mb-0">Gurvinder Singh</h5>
               <small>Web designer</small>
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
               <h5 className="mb-0">Shruti</h5>
               <small>Mobile app developer</small>
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
               <h5 className="mb-0">Varun</h5>
               <small>Digital Marketing</small>
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
               <h5 className="mb-0">Khushi</h5>
               <small>Full Stack developer</small>
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
