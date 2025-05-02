import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <Link
      to="/"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h2 className="m-0 text-primary">
      <img src="/assets/img/newlogo.png" style={{height:"90px",width:"90px"}}/>
        {/* <i className="fa fa-book me-3" /> */}
        CampusHub
      </h2>
    </Link>

{/* <Link
  to="/"
  className="navbar-brand d-flex align-items-center px-4 px-lg-5"
>
  <h2 className="m-0 text-primary">
    <img
      src="assets/img/campus1.png"
      alt="CampusHub Logo"
      className="img-fluid"
      style={{
        height: '150px',     // Lower height for better header fit
        width: '500px',      // Maintains aspect ratio
        maxWidth: '220px',  // Adjust this value to extend width
        // objectFit: 'contain'
      }}
    />
  </h2>
</Link> */}


    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
        <Link to="/" className="nav-item nav-link active" style={{fontSize:"16px"}}>
          Home
        </Link>
        {/* <Link to="/about" className="nav-item nav-link">
          About
        </Link>
        <Link to="/courses" className="nav-item nav-link">
          Courses
        </Link>
        <Link to="/department" className="nav-item nav-link">
          Departments
        </Link>
        <Link to="/contact" className="nav-item nav-link">
          Contact Us
        </Link> */}
      </div>
      <Link to="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
        LOGIN
        <i className="fa fa-arrow-right ms-3" />
      </Link>
    </div>
  </nav>
  {/* Navbar End */}
</>

    )
}