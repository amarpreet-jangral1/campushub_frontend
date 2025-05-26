import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
import ApiServices from "../ApiServices";
import { PulseLoader } from "react-spinners";

export default function Login() {

  var [Username, setUsername] = useState("");//usestate hook
  var [Password, setPassword] = useState("");//usestate hook
  const [loading, setLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);

  var nav = useNavigate()
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  function HandleForm(e) {
    e.preventDefault()
    setLoading(true); // Set loading state to true when form is being submitted 
    
    // console.log("form submit");
    let data = {
      email: Username,
      password: Password
    }

    ApiServices.Login(data)
      .then((res) => {
        console.log("response is", res)
        if (res.data.success == true) {
          // toast.success(res.data.message);
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          sessionStorage.setItem("token", res.data.token)
          sessionStorage.setItem("_id", res.data.data._id)
          sessionStorage.setItem("email", res.data.data.email)
          sessionStorage.setItem("userType", res.data.data.userType)
          if (res.data.data.userType == 1) {
            setTimeout(() => {
              nav("/admin")
            }, 2000);
          }
          else if (res.data.data.userType == 2) {
            setTimeout(() => {
              nav("/hod")
            }, 2000);
          }
          else if (res.data.data.userType == 3) {
            setTimeout(() => {
              nav("/student")
            }, 2000);
          }
        }
        else {
          toast.error(res.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }

      })
      .catch((err) => {
        console.log("error is", err)
        toast.error("Something went Wrong!!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      })
      setTimeout(() => {
        setLoading(false);
      }, 2500);   
      setUsername(""),
      setPassword("")

  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('assets/img/manage4.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        margin: 0,
        padding: 0,
      }}
    >

      <ToastContainer />
      <div
        className="p-5 shadow-lg"
        // data-aos="zoom-in"
        data-aos="fade-up" data-aos-delay={500}
        style={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: "25px",
          // backgroundColor: "rgba(0, 0, 0, 0.50)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        {loading && (
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(1px)",
              zIndex: 2,
              borderRadius: "20px",
            }}
          >
            <PulseLoader color="#3fb2d1" size={12} loading={loading}/>
          </div>
        )}
        <form onSubmit={HandleForm}>
          <h3 className="mb-4 fw-semibold text-center text-black">Login</h3>
          <div className="mb-4">
            <input
              type="email"
              className="form-control form-control-lg border-0 shadow-sm"
              placeholder="Username or Email Address"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* <div className="mb-4">
            <input
              type="password"
              className="form-control form-control-lg border-0 shadow-sm"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div> */}
          <div className="mb-4 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control form-control-lg border-0 shadow-sm pe-5"
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="position-absolute top-50 end-0 translate-middle-y me-3"
              style={{ cursor: "pointer", zIndex: 10 }}
            >
              <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
            </span>
          </div>


          <button className="btn btn-primary w-100 py-3 rounded-pill" type="submit">
            LOGIN
          </button>

          {/*<p className="text-center mt-4 mb-0 text-dark fs-5">
            <Link to="/ForgotPass" className="text-dark">Forget Password?</Link><br />
            Don’t have an account? <Link to="/register" className="fw-bold">Sign Up</Link>
          </p>*/}
          
        </form>
      </div>
    </div>
  );
}
