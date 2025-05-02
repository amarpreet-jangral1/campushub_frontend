import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./HodPageHeader";
import { PulseLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../ApiServices";

export default function complaintResponse() {
    // State variables
    const [complaintResponse, setcomplaintResponse] = useState("");
    const [loading, setLoading] = useState(false);
    let param = useParams()
    let _id = param.id
    let nav = useNavigate()

    function HandleForm(e) {
        e.preventDefault();
        setLoading(true); // Set loading state to true when form is being submitted

        let data = {
            _id: _id,
            complaintResponse: complaintResponse
        }

        ApiServices.updateComplaint(data)
            .then((res) => {
                setLoading(false);
                if (res.data.success === true) {
                    toast.success(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });

                    // Reset the form fields after successful submission
                    nav("/hod/hodtask")
                } else {
                    toast.error(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });
                }
            })
            .catch((err) => {
                setLoading(false);
                toast.error("Something Went Wrong!!", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "colored",
                });
            });
    }

    return (
        <>
            <PageHeader
                backgroundImage="/assets/img/admin_certificates.webp"
                title="Response to Complaint"
            // quote="Knowledge is the path to success"
            />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            <div className="d-flex justify-content-center align-items-center min-vh-100">
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
                        <PulseLoader color="#3fb2d1" size={15} /> {/* Bootstrap primary color */}
                    </div>
                )}
                <div className="card shadow-lg p-4 rounded-3" style={{ maxWidth: "500px", width: "100%" }}>
                    <h2 className="text-center text-primary">Response to Complaint</h2>

                    <form onSubmit={HandleForm} className="py-4">

                        {/* File Upload Input */}
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={complaintResponse}
                                id="complaint_response"
                                onChange={(e) => setcomplaintResponse(e.target.value)}
                            />
                            <label className="form-label">Write Complaint Response</label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill" disabled={loading}>
                            {loading ? "Processing..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
