import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import axios from "axios";
import ApiServices from "../ApiServices";

export default function AddCourse() {
    var [course_name, setcourse_name] = useState("");
    var [Dept_id, set_deptid] = useState("");
    var [course_code, setcourse_code] = useState("");
    var [departments, setDepartments] = useState([])

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

        let data = {
            course_name: course_name,
            Dept_id: Dept_id,
            course_code: course_code
        }

        ApiServices.addCourse(data)
            .then((res) => {

                if (res.data.success) {
                    // setLoad(false)
                    toast.success(res.data.message, {
                        position: "top-center",
                        autoClose: 2000,
                        theme: "colored",
                      });
                    
                    // Clear input fields
                    setcourse_name("");
                    set_deptid("");
                    setcourse_code("");
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
                toast.error("Something went wrong!!")
            })

    }

    return (
        <>
            <PageHeader
                backgroundImage="/assets/img/course.jpg"
                title="Add Courses"
            // quote="Knowledge is the path to success"
            />

            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="card shadow-lg p-4 rounded-3" style={{ maxWidth: "450px", width: "100%" }}>
                    <ToastContainer/>
                    <h2 className="text-center text-primary ">Add Course</h2>

                    <form onSubmit={HandleForm}
                        className="py-4">
                        <div className="form-floating mb-3">
                            <select
                                className="form-control"
                                value={Dept_id}
                                onChange={(e) => set_deptid(e.target.value)}
                                placeholder="Code"
                            >
                                <option value="" selected disabled>Select Department</option>
                                {departments.map((el, index) => (
                                    <option key={index} value={el?._id}>{el.dept_name}</option>
                                    ))}
                            </select>
                            <label>Departmemt</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={course_name}
                                onChange={(e) => setcourse_name(e.target.value)}
                                placeholder="Name"
                            />
                            <label for="course_name">Course Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={course_code}
                                onChange={(e) => setcourse_code(e.target.value)}
                                placeholder="Code"
                            />
                            <label for="course_code">Course Code</label>
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
