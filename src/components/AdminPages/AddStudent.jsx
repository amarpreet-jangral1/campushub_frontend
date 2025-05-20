
import { useRef, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import axios from "axios";
import ApiServices from "../ApiServices";
import { PulseLoader } from "react-spinners";

export default function AddStudent() {
    // State variables
    const [student_name, setstudent_name] = useState("");
    // const [student_id, setstudent_id] = useState("");
    const [student_email, setstudent_email] = useState("");
    const [student_password, setstudent_password] = useState("");
    const [student_phone, setstudent_phone] = useState("");
    const [student_gender, setstudent_gender] = useState("");
    const [student_course, setstudent_course] = useState("");
    const [student_dept, setstudent_dept] = useState("");
    const [student_enroll, setstudent_enroll] = useState("");
    const [image, setimage] = useState("");
    const fileInputRef = useRef(null);

    var [departments, setDepartments] = useState([])
    var [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(false);

    const getDepartmentData = () => {
        ApiServices.manageDepartment({ status: true })
            .then((res) => {
                // console.log("data is",res.data.data);
                setDepartments(res.data.data)
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }

    const getCourseData = () => {
        ApiServices.manageCourse({ status: true })
            .then((res) => {
                // console.log("data is",res.data.data);
                setCourses(res.data.data)
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }

    useEffect(() => {
        getDepartmentData(),
            getCourseData()
    }, [])

    function HandleForm(e) {
        e.preventDefault();
    setLoading(true);

        let data = new FormData()
        data.append("name", student_name)
        data.append("email", student_email)
        data.append("password", student_password)
        data.append("gender", student_gender)
        data.append("contact", student_phone)
        data.append("courseId", student_course)
        data.append("departmentId", student_dept)
        data.append("enrollment_year", student_enroll)
        data.append("image", image)

        ApiServices.addStudent(data)
            .then((res) => {
                console.log("res is", res);
                if (res.data.success == true) {
                    // setLoad(false)
                    toast.success(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                    });
                    // Clear input fields
                    setstudent_name("");
                    setstudent_email("");
                    setstudent_password("");
                    setstudent_gender("");
                    setstudent_phone("");
                    setstudent_course("");
                    setstudent_dept("");
                    setstudent_enroll("");
                    setimage(null);
                    // Clear file input
                    if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                    }
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
            .finally(()=>{
                setLoading(false);
            })
    }


    return (
        <>
            <PageHeader
                backgroundImage="/assets/img/photo6.png"
                // backgroundImage="/assets/img/carousel-2.jpg"
                title="Add Student"
            //  quote="Knowledge is the path to success"
            />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />
            <div className="d-flex justify-content-center align-items-center   py-5" style={{ minHeight: "120vh" }} >
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
                    <h2 className="text-center text-primary">Add Student</h2>
                    <form onSubmit={HandleForm}
                        className="py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={student_name}
                                        onChange={(e) => setstudent_name(e.target.value)}
                                        placeholder="Name"
                                        required
                                    />
                                    <label for="student_name">Student Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        value={student_phone}
                                        onChange={(e) => setstudent_phone(e.target.value)}
                                        placeholder="Phone Number"
                                        pattern="^[6-9]\d{9}$"
                                        title="Enter a valid Phone Number"
                                        required
                                    />
                                    <label for="student_phone">Phone Number</label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={student_email}
                                        onChange={(e) => setstudent_email(e.target.value)}

                                        pattern="^[a-zA-Z0-9_-]+@[a-z]+\.[a-z]{2,}$"
                                        title="Enter a valid email address"
                                        placeholder="Email"
                                        required
                                    />
                                    <label for="student_email">Student Email</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={student_password}
                                        onChange={(e) => setstudent_password(e.target.value)}
                                        
                                        // pattern="^[A-Za-z0-9@#$-_]{6,}$"
                                        // title="Password must be at least 6 characters long and can include uppercase and lowercase letters, numbers, and @ # $ - _ "
                                        placeholder="Password"
                                        required
                                    />
                                    <label>Student password</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <select
                                        className="form-control"
                                        value={student_dept}
                                        onChange={(e) => setstudent_dept(e.target.value)}
                                        placeholder="Code"
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
                                    <select
                                        type="text"
                                        className="form-control"
                                        value={student_course}
                                        onChange={(e) => setstudent_course(e.target.value)}
                                        placeholder="Course"
                                        required
                                    >
                                        <option value="" selected disabled>Select Course</option>
                                        {courses?.map((el, index) => (
                                            <option key={index} value={el?._id}>{el?.course_name} - {el?.course_code}</option>
                                        ))}
                                    </select>
                                    <label for="student_course">Course</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <select
                                        className="form-select pt-2"
                                        value={student_gender}
                                        onChange={(e) => setstudent_gender(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>

                                    </select>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={student_enroll}
                                        onChange={(e) => setstudent_enroll(e.target.value)}
                                        placeholder="Enrollment Year"
                                        required
                                    />
                                    <label for="student_enroll">Enrollment Year</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="file"
                                className="form-control"
                                ref={fileInputRef}
                                onChange={(e) => { setimage(e.target.files[0]) }}
                                placeholder="image"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-pill py-3">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}