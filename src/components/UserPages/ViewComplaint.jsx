import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ViewComplaint() {

    var [complaints, setcomplaints] = useState([])
    const getData = () => {
        ApiServices.manageComplaint({ status: true })
            .then((res) => {
                setcomplaints(res.data.data)
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const changeStatus = (_id, status) => {
        window.confirm("Are you sure to proceed ?")
        // console.log(_id);/
        let data = {
            _id: _id,
            complaintStatus: status
        };
        ApiServices.updateComplaint(data)
            .then((res) => {
                setTimeout(() => {
                    toast.success("Proceed successfully");
                }, 1000);
                getData()
            })
            .catch((err) => {
                setLoading(true)
            });
    };

    return (
        <main className="main">
            {/* Hero Section */}
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
                                        Track your Complaint
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

            {/* /Hero Section */}
            <div className="container  py-5 my-5">
                <div className="table-responsive" data-aos-delay={500}>
                    <table className="table table-bordered">
                        <thead className="table-dark text-uppercase text-center">
                            <tr>
                                <th>Sr.No</th>
                                <th>Student Name</th>
                                <th>Complaint Title</th>
                                <th>Department</th>
                                <th>Email</th>
                                <th>Description</th>
                                <th>Response</th>
                                <th>Attachment</th>
                                <th>Assigned HOD</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.map((el, index) => (
                                <tr key={index} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{el?.studentId?.name}</td>
                                    <td>{el?.complaintRegarding}</td>
                                    <td>{el?.departmentId?.dept_name}</td>
                                    <td>{el?.studentId?.email}</td>
                                    <td>{el?.complaintDescription}</td>
                                    <td>{el?.complaintResponse}</td>
                                    <td>
                                        {el?.image ? <><a href={el?.image} className="btn btn-dark" target="_blank">View</a></> : <></>}
                                    </td>
                                    <td>{el?.hodId?.name} - {el?.hodId?.email}</td>
                                    <td><p style={{ fontWeight: "bolder", fontSize: "15px" }}>{el.complaintStatus}</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}