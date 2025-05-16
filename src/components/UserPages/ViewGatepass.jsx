import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PulseLoader from "react-spinners/PulseLoader"; 

export default function ViewGatepass() {

    var [gatepasses, setgatepasses] = useState([])
    const [loading, setLoading] = useState(true); 

    const getData = () => {
        setLoading(true);
        
        ApiServices.manageGatepass({ status: true })
           .then((res) => {
                var sessionId = sessionStorage.getItem("_id")
                const allgatepass = res.data.data;
                // Filter certificates where studentId._id matches logged-in userId
                const filteredgatepass = allgatepass.filter(
                (gatepass) => gatepass.studentId?.userId === sessionId
                );
                setgatepasses(filteredgatepass);
                // setLoading(false);
            })
            .catch((err) => {
                console.log("error is", err);
            })
            .finally(() => {
                setLoading(false); // ✅ Stop loader
            });
    }

    useEffect(() => {
        getData()
    }, [])

    const changeDate = (dateTime) => {
        let d = dateTime.split('T')
        let formatchange = d[0].split('-')
        let fc = formatchange[2] + "-" + formatchange[1] + "-" + formatchange[0]
        return fc
    }


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
                            backgroundImage: `url(/assets/img/apply_gatepass.jpeg)`,
                            // backgroundSize: 'cover',
                            backgroundSize: '100% 150%',
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
                                        View Gatepass
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
                    {
                        loading ? (
                        <div className="text-center text-muted fs-4" style={{ height: "200px" }}>
                            {/* <PulseLoader color="#36d7b7" size={15} /> */}
                            <PulseLoader color="#3fb2d1" size={15} loading={loading}/> {/* Bootstrap primary color */}
                        </div>
                    ) : (
                        gatepasses.length===0?
                        (
                        <div className="text-center text-muted fs-4">No Gatepass found</div>
                        ):(
                        <table className="table table-bordered">
                            <thead className="table-dark text-uppercase text-center">
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Student Name <br /> <small>(Email)</small></th>
                                    <th>Description</th>
                                    <th>Start Date - End Date</th>
                                    <th>Enrollment Year</th>
                                    <th>Attachment</th>
                                    <th>Department</th>
                                    <th>Course</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gatepasses?.map((el, index) => (
                                    <tr key={index} className="text-center">
                                        <td>{index + 1}</td>
                                        <td>{el?.studentId?.name} <br /> <small>{el?.studentId?.email}</small> </td>
                                        <td>{el?.description}</td>
                                        <td>{changeDate(el?.startDate)} - {changeDate(el?.endDate)}</td>
                                        <td>{el?.studentId?.enrollment_year}</td>
                                        <td>
                                            {el?.image != "no_image.jpg" ? <><a href={el?.image} className="btn btn-dark" target="_blank">View</a> </> : <></>}
                                        </td>
                                        <td>{el?.departmentId?.dept_name}</td>
                                        <td>{el?.courseId?.course_name} <br /> <small>({el?.courseId?.course_code})</small></td>
                                        <td><p style={{ fontWeight: "bolder", fontSize: "15px" }}>{el?.requestStatus}</p></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        )
                    )
                    }
                </div>
            </div>
        </main>
    )
}