
import { useRef, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import axios from "axios";
import ApiServices from "../ApiServices";
import { PulseLoader } from "react-spinners";
export default function AddHod() {
    const [name, setName] = useState("");
    const [dept_name, setdept_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [qualification, setQualification] = useState("");
    const [address, setAddress] = useState("");
    const [image, setimage] = useState("");
    const fileInputRef = useRef(null);

    var [departments, setDepartments] = useState([])
    const [loading, setLoading] = useState(false);

    const getData = () => {
        ApiServices.manageDepartment({ status: true })
            .then((res) => {
                // console.log("data is",res.data.data);
                setDepartments(res.data.data)

            })
            .catch((err) => {
                console.log("error is", err);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    function HandleForm(e) {
        e.preventDefault();
        setLoading(true);

        let data = new FormData()
        data.append("name", name)
        data.append("qualification", qualification)
        data.append("departmentId", dept_name)
        data.append("email", email)
        data.append("password", password)
        data.append("contact", contact)
        data.append("address", address)
        data.append("image", image)

        ApiServices.addHod(data)
            .then((res) => {

                if (res.data.success) {
                    // setLoad(false)
                    toast.success(res.data.message)
                    // Clear input fields
                    setName("");
                    setdept_name("");
                    setEmail("");
                    setPassword("");
                    setContact("");
                    setAddress("");
                    setContact("");
                    setQualification("");
                    setimage(null);
                    if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                    }
                }
                else {
                    // setLoad(false)
                    toast.error(res.data.message)
                }

            })
            .catch((err) => {
                setLoad(false)
                toast.error("Something went wrong!!")
            })
            .finally(()=>{
                setLoading(false)
            })

    }
    return (
        <>
            <PageHeader
                backgroundImage="/assets/img/admin_student.webp"
                title="Add HOD"
            //  quote="Knowledge is the path to success"
            />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            <div className="d-flex justify-content-center align-items-center " style={{ minHeight: "110vh" }}>
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
                <div className="card shadow-lg p-4 rounded-3" style={{ maxWidth: "1000px", width: "100%" }}>
                    <h2 className="text-center text-primary">Add HOD</h2>
                    <form onSubmit={HandleForm}
                        className="py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="HOD Name"
                                        required
                                    />
                                    <label> Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <select
                                        className="form-control"
                                        value={dept_name}
                                        onChange={(e) => setdept_name(e.target.value)}
                                        placeholder="Department_name"
                                        required
                                    >
                                        <option value="" selected disabled>Select Department</option>
                                        {departments.map((el, index) => (
                                            <option key={index} value={el?._id}>{el.dept_name}</option>
                                        ))}
                                    </select>
                                    <label>Departmemt</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        pattern="^[a-zA-Z0-9_-]+@[a-z]+\.[a-z]{2,}$"
                                        title="Enter a valid email address"
                                        required
                                    />
                                    <label>Email</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="password"
                                         pattern="^[A-Za-z0-9@#$-_]{6,}$"
                                        title="Password must be at least 6 characters long and can include uppercase and lowercase letters, numbers, and @ # $ - _ "
                                        required   
                                    />
                                    <label>password</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        placeholder="contact"
                                        pattern="^[6-9]\d{9}$"
                                        title="Enter a valid Contact Number"
                                        required

                                    />
                                    <label >contact</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Address"
                                        required
                                    />
                                    <label >Address</label>
                                </div>
                            </div>
                            <div className="col-md-6"><div className="form-floating mb-3">
                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".pdf, .jpg, .png"
                                    ref={fileInputRef}
                                    onChange={(e) => setimage(e.target.files[0])}
                                    required
                                />
                                <label className="form-label" >Upload  (PDF, JPG, PNG)</label>
                            </div></div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={qualification}
                                        onChange={(e) => setQualification(e.target.value)}
                                        placeholder="Qualification"
                                        required
                                    />
                                    <label >Qualification</label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-pill py-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}