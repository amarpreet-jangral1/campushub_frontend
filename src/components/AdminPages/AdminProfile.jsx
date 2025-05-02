import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import { Link } from "react-router-dom";
import ApiServices from "../ApiServices";

export default function AdminProfile() {
    var [profiledata, setProfiledata] = useState([])

    const getData = () => {
        ApiServices.adminProfile()
            .then((res) => {
                setProfiledata(res.data.data)
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    
    return (
        <main className="main">
            {/* Hero Section */}
            <PageHeader
                backgroundImage="/assets/img/photo21.jpg"
                // backgroundImage="/assets/img/manage.webp"
                title="Profile"
            />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            {/* /Hero Section */}
            <div className="container  py-5 my-5">
                <div className=" table-responsive" data-aos-delay={500}>
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
                    {/* <div className="d-flex gap-3 mt-3"> */}
                        <Link to="/admin/changepassword" className="btn btn-dark mt-3">
                        Change Password
                        </Link>
                    {/* </div> */}
                </div>
            </div>
        </main>
    )
}