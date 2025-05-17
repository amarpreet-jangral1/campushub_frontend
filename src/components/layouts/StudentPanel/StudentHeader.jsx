
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
export default function StudentHeader() {
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
    sessionStorage.clear()
    navigate("/login"); // Redirect to homepage after logout
  }
  return (
    <>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/student"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            {/* <i className="fa fa-book me-3" /> */}
            <img src="/assets/img/newlogo.png" style={{height:"90px",width:"90px"}}/>
            CampusHub
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

        {/* <div className="navbar-nav ms-auto p-4 p-lg-0">
        <Link to="/" className="nav-item nav-link active" style={{fontSize:"16px"}}>
          Home
        </Link>
        </div> */}
          <div className="navbar-nav ms-auto p-4 p-lg-0" >
            <Link to="/student" className="nav-item nav-link active" style={{fontSize:"14px"}} >
              Home
            </Link>
            <Link to="/student/department" className="nav-item nav-link" style={{fontSize:"14px"}}>
              Department
            </Link>
            <Link to="/student/courses" className="nav-item nav-link" style={{fontSize:"14px"}}>
              Course
            </Link>
            {/* <Link to="/student/payment" className="nav-item nav-link " style={{fontSize:"14px"}} >
              Fees
            </Link> */}
           
            {/* <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                View
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/student/courses" className="dropdown-item">
                  Courses
                </Link>
                <Link to="/student/department" className="dropdown-item">
                  Department
                </Link>
                <Link to="/student/department" className="dropdown-item">
                  Certificate Status
                </Link>
                <Link to="/student/department" className="dropdown-item">
                  Complaint Status
                </Link>
              </div>
            </div> */}
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown" 
                style={{fontSize:"14px"}}
              >
                Certificate 
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/student/certificates" className="dropdown-item" >
                  Apply for Certificate
                </Link>
                <Link to="/student/viewcertificates" className="dropdown-item" >
                  View Certificate
                </Link>
              </div>
            </div>

            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown" 
                style={{fontSize:"14px"}}
              >
                Gatepass
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/student/gatepass" className="dropdown-item" >
                  Apply for Gatepass
                </Link>
                <Link to="/student/viewgatepass" className="dropdown-item" >
                  View Gatepass
                </Link>
              </div>
            </div>
           
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown" 
                style={{fontSize:"14px"}}
              >
                Complaint
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/student/complaints" className="dropdown-item">
                  New Complaint
                </Link>
                <Link to="/student/viewcomplaints" className="dropdown-item">
                  Track Complaint
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown" 
                style={{fontSize:"14px"}}
              >
                Fees 
              </Link>
              <div className="dropdown-menu fade-down m-0">
                <Link to="/student/payment" className="dropdown-item" >
                  Pay Fees
                </Link>
                <Link to="/student/paymenthistory" className="dropdown-item" >
                  Payment History
                </Link>
              </div>
            </div>
            <Link to="/student/profile" className="nav-item nav-link" style={{fontSize:"14px"}}>
              Profile
            </Link>
            {/* <Link to="/student/changePassword" className="nav-item nav-link" >
              ChangePassword
            </Link> */}
          </div>
          <Link className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"  onClick={openModal} style={{fontSize:"14px"}}>
            LOGOUT
            <i className="fa fa-arrow-right ms-3" />
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
        </div>
      </nav>
      {/* Navbar End */}
    </>

  )
}