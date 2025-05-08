import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "react-toastify/dist/ReactToastify.css";


import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiServices from '../ApiServices';
import { useNavigate } from 'react-router-dom';

export default function Complaints() {
  // State variables
  const [complaintRegarding, setcomplaintRegarding] = useState("");
  const [complaintDescription, setcomplaintDescription] = useState("");
  const [image, setimage] = useState("");
  const fileInputRef = useRef(null);
  const nav = useNavigate()

  function HandleForm(e) {
    e.preventDefault();
    let data = new FormData()
    data.append("complaintRegarding", complaintRegarding)
    data.append("complaintDescription", complaintDescription)
    data.append("image", image)

    ApiServices.addComplaint(data)
      .then((res) => {
        // console.log("res is", res);
        if (res.data.success == true) {
          // setLoad(false)
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
          });

          nav("/student/viewcomplaints")
          // Clear input fields
          complaintRegarding("");
          complaintDescription("");
          setimage(null);
          // Clear file input
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
          }
        }
        else {
          // setLoad(false)
          toast.error(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
          });


        }
      })
  }


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
              // backgroundImage: `url(/assets/img/certification.jpg)`,
              backgroundImage: `url(/assets/img/complaint.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
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
                  <h6 className="display-6 lead text-white mb-3 animated slideInUp">
                    Add Complaint
                  </h6>
                  <h3 className="text-white animated slideInDown">
                    {/* "Empowering your achievements with official recognition." */}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Header end */}

      <ToastContainer position="top-center" autoClose={2000} theme="colored" />
      <div className="d-flex justify-content-center align-items-center min-vh-100  py-5" >
        <div className="card shadow-lg p-4 rounded-3" style={{ maxWidth: "500px", width: "100%" }}>
          <h2 className="text-center text-primary">Add Complaint</h2>

          <form onSubmit={HandleForm}
            className="py-4">
            {/* <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                value={complaintRegarding}
                onChange={(e) => setcomplaintRegarding(e.target.value)}
                placeholder="Complaint Title"
                required
              />
              <label for="complaintRegarding">Complaint Title</label>
            </div> */}
            <div className="form-floating  mb-4">
                <select
                  className="form-select pt-2"
                  value={complaintRegarding}
                  onChange={(e) => setcomplaintRegarding(e.target.value)}
                  >
                  <option value="" disabled>Complaint Regarding</option>
                  <option value="Academic">Academic</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Administrative">Administrative</option>
                  <option value="Other">Other</option>
                </select>
            </div>            

            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                value={complaintDescription}
                onChange={(e) => setcomplaintDescription(e.target.value)}
                placeholder="Describe Your Complaint"
                required
              />
              <label for="complaintDescription">Describe Your Complaint</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="file"
                className="form-control"
                ref={fileInputRef}
                onChange={(e) => { setimage(e.target.files[0]) }}
                placeholder="image"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}