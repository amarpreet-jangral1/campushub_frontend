import { toast, ToastContainer } from "react-toastify";
import PageHeader from "./PageHeader";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";

export default function ViewTask() {

    var [tasks, settasks] = useState([])

    const getData = () => {
        ApiServices.manageTask({ status: true })
            .then((res) => {
                settasks(res.data.data)
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
            complaintStatus: status
        };
        ApiServices.updateComplaint(data)
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
                backgroundImage="/assets/img/manage.webp"
                title="View Task"
            />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            {/* /Hero Section */}
            <div className="container  py-5 my-5">
                <div className="table-responsive" data-aos-delay={500}>
                    <table className="table table-bordered">
                        <thead className="table-dark text-uppercase text-center">
                            <tr>
                                <th>Sr.No</th>
                                <th>Complaint Title</th>
                                <th>Description</th>
                                <th>Response</th>
                                <th>Attachment</th>
                                <th>Assigned HOD</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks?.map((el, index) => (
                                <tr key={index} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{el?.complaintId?.complaintRegarding}</td>
                                    <td>{el?.complaintId?.complaintDescription}</td>
                                    <td>{el?.complaintId?.complaintResponse}</td>
                                    <td>
                                        {el?.complaintId?.image ? <><a href={el?.complaintId?.image} className="btn btn-dark" target="_blank">View</a></> : <></>}
                                    </td>
                                    <td>{el?.hodId?.name} - {el?.hodId?.email}</td>
                                    <td><p style={{ fontWeight: "bolder", fontSize: "15px" }}>{el?.complaintId?.complaintStatus}</p></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}