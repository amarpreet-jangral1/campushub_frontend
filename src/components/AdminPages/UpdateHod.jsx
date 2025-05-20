
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../ApiServices";
import { PulseLoader } from "react-spinners";
export default function UpdateHod() {
    const [name, setName] = useState("");
    const [dept_name, setdept_name] = useState("");
    const [email, setEmail] = useState("");
    const [qualification, setQualification] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [image, setimage] = useState("");
    const [loading,setLoading]=useState(false)
    const fileInputRef = useRef(null);
    const params = useParams()
    const hodid = params.id

    var [departments, setDepartments] = useState([])

    const nav = useNavigate()

    const getData = () => {
        ApiServices.manageDepartment({ status: true })
            .then((res) => {
                // console.log("getdata data is",res);
                setDepartments(res.data.data)
            })
            .catch((err) => {
                // console.log("error is", err);
            })
    }
    const gethodsingledata = ()=>{
        ApiServices.getSingleHod({ _id: hodid })
        .then((res) => {
            console.log("Single api called",res);
            // console.log("Singleeee",res.data.data);

            setName(res.data.data.name)
            // setdept_name(res.data.data.address)
            setdept_name(res.data.data.departmentId._id)
            setEmail(res.data.data.email)
            setQualification(res.data.data.qualification)
            setContact(res.data.data.contact)
            setAddress(res.data.data.address)
            setimage(res.data.data.image)
        })
        .catch((err) => {
            toast.error("Something went wrong!!")
        })
    }
    useEffect(() => {
        getData(),
        gethodsingledata()
    }, [])

    
    function HandleForm(e) {
        e.preventDefault();
        setLoading(true)
        let data = new FormData()
        data.append("name", name)
        data.append("departmentId", dept_name)
        data.append("email", email)
        data.append("qualification", qualification)
        data.append("contact", contact)
        data.append("address", address)
        data.append("_id", hodid)
        if (image)
            data.append("image", image)

        ApiServices.updateHod(data)
            .then((res) => {
            console.log("handle form res",res);

                if (res.data.success) {
                    // setLoad(false)
                     toast.success(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });
                    // Clear input fields
                    setName("");
                    setdept_name("");
                    setEmail("");
                    setQualification("");
                    setContact("");
                    setAddress("");
                    setimage(null);
                    if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                    }
                    setTimeout(() => 
                        nav("/admin/hod_manage"), 2000
                    );
                }
                else {
                    // setLoad(false)
                     toast.error(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });
                }

            })
            .catch((err) => {
                setLoad(false)
                // console.log("err is", err);
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
                title="Update HOD"
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
                    <h2 className="text-center text-primary">Update HOD</h2>
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
                                    >
                                        <option value=""  disabled>Select Department</option>
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
                                    />
                                    <label>Email</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={qualification}
                                        onChange={(e) => setQualification(e.target.value)}
                                        placeholder="Qualification"
                                    />
                                    <label>Qualification</label>
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
                                    />
                                    <label >Address</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-floating mb-3">
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept=".pdf, .jpg, .png"
                                        ref={fileInputRef}
                                        onChange={(e) => setimage(e.target.files[0])}
                                    />
                                    <label className="form-label" >Upload  (PDF, JPG, PNG)</label>
                                </div>
                            </div>

                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-pill py-3">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}