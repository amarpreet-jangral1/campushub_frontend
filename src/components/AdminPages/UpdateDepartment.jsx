import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import axios from "axios";
import { PulseLoader } from "react-spinners"; // 👈 PulseLoader here
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../ApiServices";

export default function UpdateDepartment() {
  const [dept_name, setDeptName] = useState("");
  const [loading, setLoading] = useState(false);
  const params = useParams()
  const nav = useNavigate()

  const dept_id = params.id

  const getSingle = () => {
    ApiServices.getSingleDepartment({ _id: dept_id })
      .then((res) => {
        // console.log("Single api called", res);
        setDeptName(res.data.data.dept_name)
      })
      .catch((err) => {
        toast.error("Something went wrong!!")
      })
  }

  useEffect(() => {
    getSingle()
  }, [])

  function handleFormSubmit(e) {
    e.preventDefault();
    setLoading(true);

    let data = {
      dept_name: dept_name,
      _id: dept_id
    };

    ApiServices.updateDepartment(data)
      .then((res) => {
        setLoading(false);

        if (res.data.success === true) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
          });
          // setDeptName("");
           setTimeout(() => 
            nav("/admin/department_manage"), 2000
        );
          
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
        title="Update Department"
      // quote="Knowledge is the path to success"
      />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

      <div
        className="d-flex justify-content-center align-items-center position-relative" style={{ minHeight: "70vh" }}
      >
        {loading && (
          <div
            className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              backdropFilter: "blur(1px)",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              zIndex: 1000,
              borderRadius: "0.75rem",
            }}
          >
            <PulseLoader color="#3fb2d1" size={15} /> {/* Bootstrap primary color */}
          </div>
        )}
          <div
            className="card shadow-lg p-4 rounded-3"
            style={{ maxWidth: "450px", width: "100%", opacity: loading ? 0.5 : 1 }}
          >
            <h2 className="text-center text-primary">Update Department</h2>

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
      </div>
    </>
  );
}

