import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HodChangePassword() {
    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const [loading, setLoading] = useState(false);
    const nav = useNavigate()

    function handleFormSubmit(e) {
        e.preventDefault();
        setLoading(true);

        let data = {
            oldpassword: oldpassword,
            userId: sessionStorage.getItem("_id"),
            newpassword: newpassword,
            confirmpassword: confirmpassword
        };

        ApiServices.changePassword(data)
            .then((res) => {
                setLoading(false);

                if (res.data.success === true) {
                    toast.success(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });

                    sessionStorage.clear()
                    nav("/login")
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
    }

    return (
        <>
            {/* HOD Profile Section Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Change Password
                        </h6>
                        {/* <h1 className="mb-4">Head of Department</h1> */}
                    </div>
                    <ToastContainer position="top-center" autoClose={2000} theme="colored" />
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 mx-auto">
                            <form onSubmit={handleFormSubmit} className="py-4">
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={oldpassword}
                                        onChange={(e) => setOldpassword(e.target.value)}
                                        placeholder="Old Password"
                                        required
                                        disabled={loading}
                                    />
                                    <label htmlFor="oldpassword">Old Password</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={newpassword}
                                        onChange={(e) => setNewpassword(e.target.value)}
                                        placeholder="New Password"
                                        required
                                        disabled={loading}
                                    />
                                    <label htmlFor="newpassword">New Password</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={confirmpassword}
                                        onChange={(e) => setConfirmpassword(e.target.value)}
                                        placeholder="Confirm Password"
                                        required
                                        disabled={loading}
                                    />
                                    <label htmlFor="confirmpassword">Confirm Password</label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 py-3 rounded-pill"
                                    disabled={loading}
                                >
                                    {loading ? "Processing..." : "Submit"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* HOD Profile Section End */}
        </>
    )
}