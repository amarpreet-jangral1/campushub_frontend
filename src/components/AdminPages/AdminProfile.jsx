// import { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import PageHeader from "./PageHeader";
// import { Link } from "react-router-dom";
// import ApiServices from "../ApiServices";

// export default function AdminProfile() {
//     var [profiledata, setProfiledata] = useState([])

//     const getData = () => {
//         ApiServices.adminProfile()
//             .then((res) => {
//                 setProfiledata(res.data.data)
//             })
//             .catch((err) => {
//                 console.log("error is", err);
//             })
//     }

//     useEffect(() => {
//         getData()
//     }, [])

    
//     return (
//         <main className="main">
//             {/* Hero Section */}
//             <PageHeader
//                 backgroundImage="/assets/img/photo21.jpg"
//                 // backgroundImage="/assets/img/manage.webp"
//                 title="Profile"
//             />
//             <ToastContainer position="top-center" autoClose={2000} theme="colored" />

//             {/* /Hero Section */}
//             <div className="container  py-5 my-5">
//                 <div className=" table-responsive" data-aos-delay={500}>
//                     <table className="table table-bordered table-dark">
//                         <tbody>
//                             <tr>
//                                 <th>Name</th>
//                                 <td>{profiledata.name}</td>
//                             </tr>
//                             <tr>
//                                 <th>Email</th>
//                                 <td>{profiledata.email}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                     {/* <div className="d-flex gap-3 mt-3"> */}
//                         <Link to="/admin/changepassword" className="btn btn-dark mt-3">
//                         Change Password
//                         </Link>
//                     {/* </div> */}
//                 </div>
//             </div>
//         </main>
//     )
// }
































import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import ApiServices from "../ApiServices";
import { useNavigate } from "react-router-dom";

export default function AdminProfile() {
    const [profiledata, setProfiledata] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [oldpassword, setOldPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const nav = useNavigate();

    const getData = () => {
        ApiServices.adminProfile()
            .then((res) => {
                setProfiledata(res.data.data);
            })
            .catch((err) => {
                console.log("error is", err);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            oldpassword: oldpassword,
            userId: sessionStorage.getItem("_id"),
            newpassword: newpassword,
            confirmpassword: confirmpassword
        };

        ApiServices.changePassword(data)
            .then((res) => {
                setLoading(false);
                if (res.data.success === true) {
                    toast.success(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });

                    sessionStorage.clear();
                    nav("/login");
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
                toast.error("Something went wrong!", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "colored",
                });
                console.error(err);
            });
    };

    return (
        <main className="main">
            <PageHeader backgroundImage="/assets/img/photo21.jpg" title="Profile" />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            <div className="container py-5 my-5">
                <div className="table-responsive" data-aos-delay={500}>
                    <table className="table table-bordered table-dark">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{profiledata.name}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{profiledata.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-dark mt-3" onClick={() => setShowModal(true)}>
                        Change Password
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="modal d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-3">
                            <div className="modal-header">
                                <h5 className="modal-title text-primary text-center w-100">CHANGE PASSWORD</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <div className="modal-body">
                                    <div className="mb-3">
                                        <label>Old Password</label>
                                        <input
                                            type="password"
                                            name="oldpassword"
                                            className="form-control"
                                            value={oldpassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>New Password</label>
                                        <input
                                            type="password"
                                            name="newpassword"
                                            className="form-control"
                                            value={newpassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            // pattern="^[A-Za-z0-9@#$-_]{6,}$"
                                            // title="Password must be at least 6 characters long and can include uppercase and lowercase letters, numbers, and @ # $ - _ "
                                    
                                            required
                                        />
                                        {/* {
                                    newpassword.length > 0 &&
                                    !/^(?=.*[A-Za-z])(?=.*[\d@#$-_])[A-Za-z\d@#$-_]{6,}$/.test(newpassword) && (
                                        <p style={{ color: "red", fontSize: "14px" }}>
                                        Password must be at least 6 characters, include letters and at least one number or special character (@, #, $, -, _)
                                        </p>
                                    )
                                } */}
                                    </div>
                                    <div className="mb-3">
                                        <label>Confirm Password</label>
                                        <input
                                            type="password"
                                            name="confirmpassword"
                                            className="form-control"
                                            value={confirmpassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            // pattern="^[A-Za-z0-9@#$-_]{6,}$"
                                            // title="Password must be at least 6 characters long and can include uppercase and lowercase letters, numbers, and @ # $ - _ "
                                    
                                            required
                                        />
                                        {/* {
                                            confirmpassword &&
                                            newpassword !== confirmpassword && (
                                                <p style={{ color: "red", fontSize: "14px" }}>
                                                Passwords do not match
                                                </p>
                                            )
                                        } */}
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    {/* <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                        Cancel
                                    </button> */}
                                    
                                    
                                    <button type="submit" className=" col-md-12 btn btn-primary rounded-pill py-2" disabled={loading}>
                                        {loading ? "Updating..." : "Confirm"}
                                    </button>    

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}









// import { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import PageHeader from "./PageHeader";
// import { Link } from "react-router-dom";
// import ApiServices from "../ApiServices";

// export default function AdminProfile() {
//     var [profiledata, setProfiledata] = useState([])
//     const [showModal, setShowModal] = useState(false);

//     const getData = () => {
//         ApiServices.adminProfile()
//             .then((res) => {
//                 setProfiledata(res.data.data)
//             })
//             .catch((err) => {
//                 console.log("error is", err);
//             })
//     }

//     useEffect(() => {
//         getData()
//     }, [])

    
//     return (
//         <main className="main">
//             {/* Hero Section */}
//             <PageHeader
//                 backgroundImage="/assets/img/photo21.jpg"
//                 title="Profile"
//             />
//             <ToastContainer position="top-center" autoClose={2000} theme="colored" />

//             {/* /Hero Section */}
//             <div className="container  py-5 my-5">
//                 <div className=" table-responsive" data-aos-delay={500}>
//                     <table className="table table-bordered table-dark">
//                         <tbody>
//                             <tr>
//                                 <th>Name</th>
//                                 <td>{profiledata.name}</td>
//                             </tr>
//                             <tr>
//                                 <th>Email</th>
//                                 <td>{profiledata.email}</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                     {/* <div className="d-flex gap-3 mt-3"> */}
//                         <button className="btn btn-dark mt-3" onClick={() => setShowModal(true)}>
//                         Change Password
//                         </button>
//                     {/* </div> */}
//                 </div>
//             </div>
//             {showModal && (
//         <div className="modal d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
//           <div className="modal-dialog">
//             <div className="modal-content p-3">
//               <div className="modal-header">
//                 <h5 className="modal-title">Change Password</h5>
//                 <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
//               </div>
//               <form onClick={}>
//                 <div className="modal-body">
//                   <div className="mb-3">
//                     <label>Old password</label>
//                     <input type="text" name="name" className="form-control" value={updatedData.name} onChange={handleInputChange} />
//                   </div>
//                   <div className="mb-3">
//                     <label>New password</label>
//                     <input type="email" name="email" className="form-control" value={updatedData.email} onChange={handleInputChange} 
//                     pattern="^[a-zA-Z0-9_-]+@[a-z]+\.[a-z]{2,}$"
//                     title="Enter a valid email address"/>
//                   </div>
//                   <div className="mb-3">
//                     <label>Confirm password</label>
//                     <input type="text" name="contact" className="form-control" value={updatedData.contact} onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
//                   <button type="submit" className="btn btn-success">Confirm</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//         </main>
//     )
// }
