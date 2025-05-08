import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import axios from "axios";
import { PulseLoader } from 'react-spinners';

export default function Payment() {
    const [sem, setsem] = useState("");
    const [amount, setAmount] = useState(""); // New field for amount
    const [loading, setLoading] = useState(false);

    const [students, setstudents] = useState([])
    const getData = () => {
    const student_id = sessionStorage.getItem("_id"); 
    console.log("✅ ID in sessionStorage:", student_id);
    axios.post("http://localhost:9000/apis/students/getStudentByUserId", { userId: student_id },{headers:{Authorization:sessionStorage.getItem("token")}})
    .then((res) => {
        console.log("data of single student is",res);
        setstudents(res.data.data)
    })
    .catch((err) => {
        console.log("error is", err);
    })
}
    useEffect(() => {
    getData()
    }, [])
    
    const handleForm = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            userId: students._id,
            sem: sem,
            amount: amount,
            sessionId: sessionStorage.getItem("_id")
        };
        axios.post("http://localhost:9000/apis/payment/pay", data , {headers:{Authorization:sessionStorage.getItem("token")}})
            .then((res) => {
                console.log("Response from API:", res);
                const order = res.data.order;
                const options = {
                    key: "rzp_test_tZKpEudNpEdH7d",
                    amount: order.amount,
                    currency: "INR",
                    name: "Acme Corp",
                    description: "Test Transaction",
                    image: "https://example.com/your_logo",
                    order_id: order.id,
    
                    handler: function (response) {
                        console.log("✅ Payment Success:", response);
                        toast.success("Payment Successful!", {
                            position: "top-center",
                            autoClose: 2000,
                            theme: "colored",
                        });
                        setLoading(false);
                        setAmount("");
                        setsem("");
                    },
    
                    prefill: {
                        name: "Amar",
                        email: "amar@gmail.com",
                        contact: "9876543211"
                    },
    
                    theme: {
                        color: "#3399cc"
                    }
                };
    
                const rzp1 = new window.Razorpay(options);
                rzp1.on("payment.failed", function (response) {
                    setLoading(false);
                    toast.error(response.error.description || "Payment failed");
                });
    
                rzp1.open();
            })
            .catch((err) => {
                console.error("Error in API request:", err.response || err.message);
                toast.error("Payment request failed. Please try again.");
                setLoading(false);
            });
};
    return (
        <>
            {/* Header Start */}
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div
                        className="position-relative d-flex align-items-center justify-content-center"
                        style={{
                            backgroundImage: `url(/assets/img/photo15.jpg)`,
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
                                        Payments
                                    </h6>
                                    <h3 className="text-white animated slideInDown">
                                        "Empowering your achievements with official recognition."
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* Header End */}

            {loading && (
                <div
                    className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                    style={{
                        backdropFilter: "blur(5px)",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        zIndex: 1000,
                        borderRadius: "0.75rem",
                    }}
                >
                    <PulseLoader color="#3fb2d1" size={15} loading={loading}/>
                </div>
            )}

            {/* Payment Form Section */}
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="card shadow-lg p-4 my-5 rounded-3" style={{ maxWidth: "500px", width: "100%" }}>
                    <h2 className="text-center text-primary">Payment Here</h2>
                    <form onSubmit={handleForm} className="py-4">
                        <div className="form-floating mb-4">
                            <select
                                className="form-select pt-2"
                                value={sem}
                                onChange={(e) => setsem(e.target.value)}
                                required
                            >
                                <option value="" disabled>Semester</option>
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-floating mb-4">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                            <label htmlFor="amount">Amount</label>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 rounded-pill py-3" >
                        {/* <button type="submit" className="btn btn-primary w-100 rounded-pill py-3" onClick={()=>{paymenthandle()}}> */}
                            PAY NOW
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
