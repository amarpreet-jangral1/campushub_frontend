import { toast, ToastContainer } from "react-toastify";
import PageHeader from "./PageHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { Link } from "react-router-dom";

export default function ManageCertificate() {

    var [certificates, setcertificates] = useState([])

    const getData = () => {
        ApiServices.manageCertificate({ status: true })
            .then((res) => {
                setcertificates(res.data.data)
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const changeStatus = (_id, status) => {
        window.confirm("Are you sure to proceed ?")
        // console.log(_id);/
        let data = {
            _id: _id,
            requestStatus: status
        };
        ApiServices.updateCertificate(data)
            .then((res) => {
                setTimeout(() => {
                    toast.success("Proceed successfully");
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
                backgroundImage="/assets/img/apply_certi.jpg"
                title="Requested Certificates"
            />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            {/* /Hero Section */}
            <div className="container  py-5 my-5">
                <div className="table-responsive" data-aos-delay={500}>
                    <table className="table table-bordered">
                        <thead className="table-dark text-uppercase text-center">
                            <tr>
                                <th>Sr.No</th>
                                <th>Student Name <br /> <small>(Email)</small></th>
                                <th>Description</th>
                                <th>Enrollment Year</th>
                                <th>Attachment</th>
                                <th>Department</th>
                                <th>Course</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certificates?.map((el, index) => (
                                <tr key={index} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{el?.studentId?.name} <br /> <small>{el?.studentId?.email}</small> </td>
                                    <td>{el?.description}</td>
                                    <td>{el?.studentId?.enrollment_year}</td>
                                    <td>
                                        {el?.image != "no_image.jpg" ? <><a href={el?.image} className="btn btn-dark" target="_blank">View</a> </> : <></>}
                                    </td>
                                    <td>{el?.departmentId?.dept_name}</td>
                                    <td>{el?.courseId?.course_name} <br /> <small>({el?.courseId?.course_code})</small></td>
                                    <td><p style={{ fontWeight: "bolder", fontSize: "15px" }}>{el?.requestStatus}</p></td>
                                    <td>
                                        {el?.requestStatus == "Pending" ? <>
                                            <Link to={"/admin/certificate_add/" + el?._id}><button className="btn btn-info btn-sm mx-2 d-flex">Accept</button></Link>
                                            
                                            <button onClick={() => changeStatus(el?._id,"Decline")} className="btn btn-danger btn-sm mx-2 d-flex">Decline</button>
                                        </> : <></>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}