
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function ManageProfile() {
  const navigate = useNavigate();

  const [profiledata, setProfiledata] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    email: "",
    contact: "",
    gender: "",
    // enrollment_year: "",
  });
  const getData = () => {
    ApiServices.studentProfile()
      .then((res) => {
        const data = res.data.data;
        setProfiledata(data);
        setUpdatedData({
          name: data.name || "",
          email: data.email || "",
          contact: data.contact || "",
          gender: data.gender || "",
        //   enrollment_year: data.enrollment_year || "",
        });
      })
      .catch((err) => {
        console.log("error is", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedProfileData = {
      _id: profiledata._id,
      ...updatedData,
    };

    ApiServices.updateStudent(updatedProfileData)
      .then((res) => {
        if (res.data.success) {
          setProfiledata((prev) => ({
            ...prev,
            ...updatedProfileData,
          }));
          setShowModal(false);
        } else {
          alert("Update failed!");
        }
      })
      .catch((err) => {
        console.error("Update error", err);
      });
  };
function handleLogout() {
  console.log("handle logout calls");
  
    sessionStorage.clear()
    toast.success("Logout successfully !!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
     setTimeout(() => {
        navigate("/login")
      }, 2500);   // Redirect to homepage after logout
  }
  return (
    <>
      {/* Profile Section Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="h5 section-title bg-white text-center text-primary px-3">
              Profile
            </h6>
           
          </div>

          <div className="row align-items-center g-5">
      <ToastContainer  />
            <div className="col-md-4 pb-5 d-flex justify-content-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  width: "250px",
                  height: "350px",
                }}
              >
                <img
                  src={profiledata?.image}
                  alt="Student"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </div>
            <div className="col-lg-8">
              <h3 className="mb-3">{profiledata?.name}</h3>
              <p><strong>Department:</strong> {profiledata?.departmentId?.dept_name}</p>
              <p><strong>Course:</strong> {profiledata?.courseId?.course_name} <small>({profiledata?.courseId?.course_code})</small></p>
              <p><strong>Email:</strong> {profiledata?.email}</p>
              <p><strong>Phone:</strong> {profiledata?.contact}</p>
              <p><strong>Gender:</strong> {profiledata?.gender}</p>
              <p><strong>Enrollment Year:</strong> {profiledata?.enrollment_year}</p>

            <div className="d-flex gap-3 mt-3">
                <button className="btn btn-primary mt-3" onClick={() => setShowModal(true)}>
                    Update Profile
                </button>
                <Link to="/student/changePassword" className="btn btn-warning mt-3">
                  Change Password
                </Link>
                <button className="btn btn-danger text-white mt-3" onClick={handleLogout}>
                  Logout
                </button>
            </div>

            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">Update Profile</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={updatedData.name} onChange={handleInputChange} />
                  </div>
                  <div className="mb-3">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" value={updatedData.email} onChange={handleInputChange} 
                    pattern="^[a-zA-Z0-9_-]+@[a-z]+\.[a-z]{2,}$"
                    title="Enter a valid email address"/>
                  </div>
                  <div className="mb-3">
                    <label>Contact</label>
                    <input type="text" name="contact" className="form-control" value={updatedData.contact} onChange={handleInputChange}
                    pattern="^[6-9]\d{9}$"
                    title="Enter a valid Contact Number"/>
                  </div>
                  <div className="mb-3">
                    <label>Gender</label>
                    <input type="text" name="gender" className="form-control" value={updatedData.gender} onChange={handleInputChange} />
                  </div>
                  
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="submit" className="btn btn-success">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
