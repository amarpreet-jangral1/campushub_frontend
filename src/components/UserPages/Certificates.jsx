import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ApiServices from '../ApiServices';

export default function Certificates() {
    const [description, setdescription] = useState("");
    const [loading, setLoading] = useState(false);

    const handleForm = (e) => {
        e.preventDefault();
        setLoading(true);

        let data = {
            description: description
        };

        ApiServices.addCertificate(data)
            .then((res) => {
                // console.log(res.data)
                setLoading(false);
                if (res.data.success) {
                    toast.success(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });

                    setdescription("");
                } else {
                    toast.error(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });
                }
            })
            // .catch((err) => {
            //     setLoading(false);
            //     toast.error("Something Went Wrong!!", {
            //         position: "top-center",
            //         autoClose: 2000,
            //         theme: "colored",
            //     });
            // });

    };

    return (
        <>
        
            {/* Header Start */}
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                // className="mb-5"
            >
                <SwiperSlide>
                    <div
                        className="position-relative d-flex align-items-center justify-content-center"
                        style={{
                            // backgroundImage: `url(/assets/img/apply_certi.jpg)`,
                            backgroundImage: `url(/assets/img/apply_certi.jpg)`,
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
                                        Apply Certificate
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

            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="card shadow-lg p-4 rounded-3" style={{ maxWidth: "500px", width: "100%" }}>
                    <h2 className="text-center text-primary">Apply Certificate</h2>
                    <form onSubmit={handleForm} className="py-4">
                        <div className="form-floating mb-4">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Description of Certificate"
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                                required
                            ></textarea>
                            <label htmlFor="description">Description of Certificate</label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-pill py-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}
