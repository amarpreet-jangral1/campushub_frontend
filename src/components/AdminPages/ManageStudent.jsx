import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import ApiServices from "../ApiServices";

export default function ManageStudent() {
    var [students, setstudents] = useState([])
    const getData = () => {
        ApiServices.manageStudent({ status: true })
            .then((res) => {
                setstudents(res.data.data)
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const deletestudent = (_id) => {
        window.confirm("Are you sure to proceed ?")
        // console.log(_id);/
        let data = {
            _id: _id,
            status: "false"
        };
        ApiServices.deleteStudent(data)
            .then((res) => {
                setTimeout(() => {
                    toast.success("Data deleted successfully");
                }, 1000);
                getData()
            })
            .catch((err) => {
                setLoading(true)
            });
    };

    return (
        <main className="main">
            {/* Hero Section */}
            <PageHeader
                backgroundImage="/assets/img/manage.webp"
                title="Manage Student"
            />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            {/* /Hero Section */}
            <div className="container  py-5 my-5">
                <div className="table-responsive" data-aos-delay={500}>
                    <table className="table table-bordered">
                        <thead className="table-dark text-uppercase text-center">
                            <tr>
                                <th>Sr No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Department</th>
                                <th>Course</th>
                                <th>Gender</th>
                                <th>Enrollment Year</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students?.map((el, index) => (
                                <tr key={index} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.contact}</td>
                                    <td>{el?.departmentId?.dept_name}</td>
                                    <td>{el?.courseId?.course_name} - {el?.courseId?.course_code}</td>
                                    <td>{el?.gender}</td>
                                    <td>{el?.enrollment_year}</td>
                                    <td>
                                        <img src={el?.image} className="img-fluid" style={{ "width": "100px" }} />
                                    </td>
                                    <td>{el?.status === true ? "Active" : "Inactive"}</td>
                                    <td>
                                        <Link to={"/admin/student_update/" + el?._id}><button className="btn btn-info btn-sm mx-2">Edit</button></Link></td>
                                    <td>
                                        <button onClick={() => deletestudent(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main >
    )
}