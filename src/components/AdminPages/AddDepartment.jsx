import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import axios from "axios";
import { PulseLoader } from "react-spinners"; // 👈 PulseLoader here
import ApiServices from "../ApiServices";

export default function AddDepartment() {
  const [dept_name, setDeptName] = useState("");

  const [loading, setLoading] = useState(false);


  function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);

    let data = {
      dept_name: dept_name
    };

    ApiServices.addDepartment(data)
      .then((res) => {
        setLoading(false);

        if (res.data.success === true) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
          });

          setDeptName("");
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
        backgroundImage="/assets/img/dept_bg.jpg"
        title="Add Department"
        // quote="Knowledge is the path to success"
      />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

      <div
        className="d-flex justify-content-center align-items-center min-vh-100 position-relative"
       style={{marginTop:"-100px"}}>
        {loading ? (
          <div
            className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              zIndex: 1000,
              borderRadius: "0.75rem",
              
            }}
          >
            <PulseLoader color="#3fb2d1" size={15} />
          </div>
        ) : (
          <div
            className="card shadow-lg p-4 rounded-3"
            style={{ maxWidth: "450px", width: "100%", opacity: loading ? 0.5 : 1 }}
          >
            <h2 className="text-center text-primary">Add Department</h2>

            <form onSubmit={handleFormSubmit} className="py-4">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={dept_name}
                  onChange={(e) => setDeptName(e.target.value)}
                  placeholder="Name"
                  required
                  disabled={loading}
                />
                <label htmlFor="dept_name">Name</label>
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
        )}
      </div>
    </>
  );
}

