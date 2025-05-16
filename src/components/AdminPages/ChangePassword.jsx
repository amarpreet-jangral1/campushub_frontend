import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import axios from "axios";
import { PulseLoader } from "react-spinners"; // 👈 PulseLoader here
import ApiServices from "../ApiServices";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const [loading, setLoading] = useState(false);
    const nav = useNavigate()

    function handleFormSubmit(e) {
        e.preventDefault();
        setLoading(true);

        let data = {
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

                    sessionStorage.clear()
                    nav("/login")
                } else {
                    toast.error(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });
                }
            })
        // .catch((err) => {
        //     setLoading(false);
        //     toast.error("Something Went Wrong!!", {
        //         position: "top-center",
        //         autoClose: 2000,
        //         theme: "colored",
        //     });
        // });
    }

    return (
        <>
            {/* <PageHeader
                // backgroundImage="/assets/img/departments.jpg"
                backgroundImage="/assets/img/photo21.jpg"
                title="Change Password"
            // quote="Knowledge is the path to success"
            /> */}
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            <div
                className="d-flex justify-content-center align-items-center min-vh-100 position-relative"
            >
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
                        <h2 className="text-center text-primary">Change Password</h2>

                        <form onSubmit={handleFormSubmit} className="py-4">
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={oldpassword}
                                    onChange={(e) => setOldpassword(e.target.value)}
                                    placeholder="Old Password"
                                    required
                                    disabled={loading}
                                />
                                <label htmlFor="oldpassword">Old Password</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={newpassword}
                                    onChange={(e) => setNewpassword(e.target.value)}
                                    placeholder="New Password"
                                    pattern="^[A-Za-z0-9@#$-_]{6,}$"
                                    title="Password must be at least 6 characters long and can include uppercase and lowercase letters, numbers, and @ # $ - _ "
                                    required
                                    disabled={loading}
                                />
                                <label htmlFor="newpassword">New Password</label>
                                {
                                    newpassword.length > 0 &&
                                    !/^(?=.*[A-Za-z])(?=.*[\d@#$-_])[A-Za-z\d@#$-_]{6,}$/.test(newpassword) && (
                                        <p style={{ color: "red", fontSize: "14px" }}>
                                        Password must be at least 6 characters, include letters and at least one number or special character (@, #, $, -, _)
                                        </p>
                                    )
                                }
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={confirmpassword}
                                    onChange={(e) => setConfirmpassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    pattern="^[A-Za-z0-9@#$-_]{6,}$"
                                    title="Password must be at least 6 characters long and can include uppercase and lowercase letters, numbers, and @ # $ - _ "
                                    required
                                    disabled={loading}
                                />
                                <label htmlFor="confirmpassword">Confirm Password</label>
                                 {
                                    confirmpassword &&
                                    newpassword !== confirmpassword && (
                                        <p style={{ color: "red", fontSize: "14px" }}>
                                        Passwords do not match
                                        </p>
                                    )
                                }
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100 py-3 rounded-pill"
                                disabled={loading || !/^[A-Za-z0-9@#$-_]{6,}$/.test(newpassword) || newpassword !== confirmpassword}

                            >
                                {loading ? "Processing..." : "Confirm"}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}










// import { useRef, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import PageHeader from "./PageHeader";
// import axios from "axios";
// import { PulseLoader } from "react-spinners"; // 👈 PulseLoader here
// import ApiServices from "../ApiServices";
// import { useNavigate } from "react-router-dom";

// export default function ChangePassword() {
//     const [oldpassword, setOldpassword] = useState("");
//     const [newpassword, setNewpassword] = useState("");
//     const [confirmpassword, setConfirmpassword] = useState("");

//     const [loading, setLoading] = useState(false);
//     const nav = useNavigate()

//     function handleFormSubmit(e) {
//         e.preventDefault();
//         setLoading(true);

//         let data = {
//             oldpassword: oldpassword,
//             userId: sessionStorage.getItem("_id"),
//             newpassword: newpassword,
//             confirmpassword: confirmpassword
//         };

//         ApiServices.changePassword(data)
//             .then((res) => {
//                 setLoading(false);

//                 if (res.data.success === true) {
//                     toast.success(res.data.message, {
//                         position: "top-center",
//                         autoClose: 2000,
//                         theme: "colored",
//                     });

//                     sessionStorage.clear()
//                     nav("/login")
//                 } else {
//                     toast.error(res.data.message, {
//                         position: "top-center",
//                         autoClose: 2000,
//                         theme: "colored",
//                     });
//                 }
//             })
//         // .catch((err) => {
//         //     setLoading(false);
//         //     toast.error("Something Went Wrong!!", {
//         //         position: "top-center",
//         //         autoClose: 2000,
//         //         theme: "colored",
//         //     });
//         // });
//     }

//     return (
//         <>
//             <ToastContainer position="top-center" autoClose={2000} theme="colored" />

//             <div
//                 className="d-flex justify-content-center align-items-center min-vh-100 position-relative"
//             >
//                 {loading ? (
//                     <div
//                         className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
//                         style={{
//                             backdropFilter: "blur(5px)",
//                             backgroundColor: "rgba(255, 255, 255, 0.5)",
//                             zIndex: 1000,
//                             borderRadius: "0.75rem",
//                         }}
//                     >
//                         <PulseLoader color="#3fb2d1" size={15} />
//                     </div>
//                 ) : (
//                     <div
//                         className="card shadow-lg p-4 rounded-3"
//                         style={{ maxWidth: "450px", width: "100%", opacity: loading ? 0.5 : 1 }}
//                     >
//                         <h2 className="text-center text-primary">Change Password</h2>
                            
// <form onSubmit={handleFormSubmit}>
//   <div className="form-group">
//     <label>Old Password</label>
//     <input
//       type="password"
//       className="form-control"
//       value={oldpassword}
//       onChange={(e) => setOldpassword(e.target.value)}
//       required
//     />
//   </div>

//   <div className="form-group">
//     <label>New Password</label>
//     <input
//       type="password"
//       className="form-control"
//       value={newpassword}
//       onChange={(e) => setNewpassword(e.target.value)}
//       pattern="^[A-Za-z0-9@#$-_]{6,}$"
//       title="Password must be at least 6 characters long and can include A-Z, a-z, 0-9, @, #, $, -, _"
//       required
//     />
//     {/* {
//     newpassword.length > 0 &&
//     !/^[A-Za-z0-9@#$-_]{6,}$/.test(newpassword) && (
//         <p style={{ color: "red", fontSize: "14px" }}>
//         Password must be at least 6 characters and include only A-Z, a-z, 0-9, @, #, $, -, _
//         </p>
//     )
//     } */}
// {
//   newpassword.length > 0 &&
//   !/^(?=.*[A-Za-z])(?=.*[\d@#$-_])[A-Za-z\d@#$-_]{6,}$/.test(newpassword) && (
//     <p style={{ color: "red", fontSize: "14px" }}>
//       Password must be at least 6 characters, include letters and at least one number or special character (@, #, $, -, _)
//     </p>
//   )
// }

//   </div>

//   <div className="form-group">
//     <label>Confirm Password</label>
//     <input
//       type="password"
//       className="form-control"
//       value={confirmpassword}
//       onChange={(e) => setConfirmpassword(e.target.value)}
//       required
//     />
//     {
//       confirmpassword &&
//       newpassword !== confirmpassword && (
//         <p style={{ color: "red", fontSize: "14px" }}>
//           Passwords do not match
//         </p>
//       )
//     }
//   </div>

//   <button
//     type="submit"
//     className="btn btn-primary"
//     disabled={
//       !/^[A-Za-z0-9@#$-_]{6,}$/.test(newpassword) || newpassword !== confirmpassword
//     }
//   >
//     Change
//   </button>
// </form>
                       
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// }
