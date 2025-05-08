import React from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from "react-router-dom";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    width: "300px",
    textAlign: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Darker overlay
    backdropFilter: "blur(6px)", // **Blurred background effect**
    zIndex: "1000",
  },
};
export default function AdminHeader() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleLogout() {
    closeModal();
    navigate("/"); // Redirect to homepage after logout
  }
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/admin"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <img src="/assets/img/newlogo.png" style={{height:"90px",width:"90px"}}/>
            {/* <i className="fa fa-book me-3" /> */}
            Admin
          </h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0" >
            {/* <Link to="/admin" className="nav-item nav-link active" style={{fontSize:"14px"}}> 
              Dashboard
              
            </Link> */}

            <div className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{fontSize:"14px"}}
              >
                Department
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/admin/department_add" className="dropdown-item">
                  Add
                </Link>
                <Link to="/admin/department_manage" className="dropdown-item">
                  Manage
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{fontSize:"14px"}}
              >
                Course
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/admin/course_add" className="dropdown-item">
                  Add
                </Link>
                <Link to="/admin/course_manage" className="dropdown-item">
                  Manage
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{fontSize:"14px"}}
              >
                Student
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/admin/student_add" className="dropdown-item">
                  Add
                </Link>
                <Link to="/admin/student_manage" className="dropdown-item">
                  Manage
                </Link>
                <Link to="/admin/AllPayments" className="dropdown-item">
                  Fees Details
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{fontSize:"14px"}}
              >
                HOD
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/admin/hod_add" className="dropdown-item">
                  Add
                </Link>
                <Link to="/admin/hod_manage" className="dropdown-item">
                  Manage
                </Link>
              </div>
            </div>

            <Link to="/admin/complaints" className="nav-item nav-link" style={{fontSize:"14px"}}>
              Complaint
            </Link>

            <Link to="/admin/viewTask" className="nav-item nav-link" style={{fontSize:"14px"}}>
              Task
            </Link>

            <Link to="/admin/manageCertificate" className="nav-item nav-link" style={{fontSize:"14px"}}>
              Certificate
            </Link>

            <Link to="/admin/manageGatepass" className="nav-item nav-link" style={{fontSize:"14px"}}>
              Gatepass
            </Link>
            {/* <div className="nav-item dropdown active">
              <Link
                to="/admin/profile"
                className="nav-link dropdown-toggle active"
                data-bs-toggle="dropdown"
                style={{fontSize:"14px"}}
              >
                profile
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/admin/AllPayments" className="dropdown-item">
                  Fees Details
                </Link>
                <Link to="/admin/profile" className="dropdown-item">
                  Profile
                </Link>
              </div>
            </div> */}
            <Link to="/admin/profile" className="nav-item nav-link active" style={{fontSize:"14px"}}>
              Profile
            </Link>
          </div>
        </div>
        <Link className="btn btn-primary py-4 px-lg-5 d-none d-lg-block" onClick={openModal}>
          LOGOUT
        </Link>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Logout Confirmation"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="btn-close position-absolute top-0 end-0 m-2"
          ></button>

          {/* Modal Content */}
          <h4 className="fw-bold mt-3">Are you sure you want to log out?</h4>
          <p className="text-muted">You will be redirected to the homepage.</p>

          {/* Action Buttons */}
          <div className="d-flex justify-content-center mt-3">
            <button
              className="btn btn-danger rounded-pill px-4 me-3 mb-3"
              onClick={handleLogout}
            >
              Yes, Logout
            </button>
            <button
              className="btn btn-secondary rounded-pill px-4 mb-3"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </Modal>


      </nav>
      {/* Navbar End */}
    </>

  )
}