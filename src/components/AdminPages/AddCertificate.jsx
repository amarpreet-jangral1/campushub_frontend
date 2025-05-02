import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import { PulseLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../ApiServices";

export default function AddCertificate() {
  // State variables
  const [certificate_file, setCertificateFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  let param = useParams()
  let _id = param._id
  let nav = useNavigate()

  function HandleForm(e) {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is being submitted

    let data = new FormData();
    data.append("_id", _id);
    data.append("requestStatus", "Approved");
    data.append("image", certificate_file);

    ApiServices.updateCertificate(data)
      .then((res) => {
        setLoading(false);
        if (res.data.success === true) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
          });

          // Reset the form fields after successful submission
          nav("/admin/manageCertificate")
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
        title="Add Certificate"
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
          <h2 className="text-center text-primary">Add Certificate</h2>

          <form onSubmit={HandleForm} className="py-4">

            {/* File Upload Input */}
            <div className="form-floating mb-3">
              <input
                type="file"
                className="form-control"
                ref={fileInputRef}
                id="certificate_file"
                accept=".pdf, .jpg, .png"
                onChange={(e) => setCertificateFile(e.target.files[0])}
              />
              <label className="form-label">Upload Certificate (PDF, JPG, PNG)</label>
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
