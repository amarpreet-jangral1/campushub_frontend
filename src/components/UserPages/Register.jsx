import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

export default function Register(){
  // var[Username,setUsername]=useState("");
  //   var[Password,setPassword]=useState("");
    var nav=useNavigate()
      useEffect(() => {
        AOS.init({ duration: 600 });
      }, []);

    function HandleForm(e){
        e.preventDefault()
        console.log("form submit");
        toast.success('✅Register Successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          setTimeout(() => {
              nav("/")
          }, 2000);               
    }
    return(
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
        <form onSubmit={HandleForm}>
          <h3 className="mb-4 fw-semibold text-center text-black">Sign Up</h3>
          
          <div className="mb-4">
            <input
              type="Number"
              className="form-control form-control-lg border-0 shadow-sm"
              placeholder="Phone Number"
              // value={Password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>



          <div className="mb-4">
            <input
              type="email"
              className="form-control form-control-lg border-0 shadow-sm"
              placeholder="Email Address"
              // value={Username}
              // onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control form-control-lg border-0 shadow-sm"
              placeholder="Password"
              // value={Password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control form-control-lg border-0 shadow-sm"
              placeholder="Confirm Password"
              // value={Password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary w-100 py-3 rounded-pill" type="submit">
            SIGN UP
          </button>
          <p className="text-center mt-4 mb-0 text-dark fs-5">
             Already have an account?{" "}
             <a href="/login" className="text-decoration-none fw-semibold">
              Log In
            </a>
          </p>
        </form>
      </div>
    </div>


    //     <div className="container-xxl py-5">
    //     <div className="container d-flex flex-column align-items-center text-center">
       
    //     <ToastContainer
    //             position="top-center"
    //             autoClose={5000}
    //             hideProgressBar={false}
    //             newestOnTop={false}
    //             closeOnClick={false}
    //             rtl={false}
    //             pauseOnFocusLoss
    //             draggable
    //             pauseOnHover
    //             theme="colored"
    //         />
       
    //   <div className="col-lg-5 mx-auto " data-aos="fade-up" data-aos-delay={500}>
    //     <form
    //       action=""
    //       method="post"
    //       className="p-5 rounded-4 shadow-lg bg-white"
    //       style={{
    //         maxWidth: "500px",
    //         backdropFilter: "blur(6px)",
    //         opacity: "0.95",
    //       }}
    //       onSubmit={HandleForm}
    //     >
    //       <h3 className="h3 mb-4 fw-semibold text-black">Sign Up</h3>

    //       <div className="mb-4">
    //         <input
    //           type="Number"
    //           className="form-control form-control-lg border-0 shadow-sm"
    //           placeholder="Phone Number"
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <input
    //           type="email"
    //           className="form-control form-control-lg border-0 shadow-sm"
    //           placeholder="Email Address"
    //           required
    //         />
    //       </div>

    //       <div className="mb-4">
    //         <input
    //           type="password"
    //           className="form-control form-control-lg border-0 shadow-sm"
    //           placeholder="Password"
    //           required
    //         />
    //       </div>

    //       <div className="mb-4">
    //         <input
    //           type="password"
    //           className="form-control form-control-lg border-0 shadow-sm"
    //           placeholder="Confirm Password"
    //           required
    //         />
    //       </div>

    //       <button className="btn btn-primary w-100 py-3 rounded-pill" type="submit">
    //         SIGN UP
    //       </button>
    //       <p className="text-center mt-4 mb-0 text-dark fs-5">
    //         Already have an account?{" "}
    //         <a href="/login" className="text-decoration-none fw-semibold">
    //           Log In
    //         </a>
    //       </p>
    //     </form>
    // </div>
    //     </div>
    //         {/* </div>
    //       </div> */}
    //     {/* </div> */}
    //   </div>
    )
}