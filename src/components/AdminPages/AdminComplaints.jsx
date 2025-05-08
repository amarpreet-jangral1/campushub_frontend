import { toast, ToastContainer } from "react-toastify";
import PageHeader from "./PageHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { Link } from "react-router-dom";

export default function AdminComplaints() {
  var [complaints, setcomplaints] = useState([])
  const getData = () => {
    ApiServices.manageComplaint({ status: true })
      .then((res) => {
        setcomplaints(res.data.data)
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
        backgroundImage="/assets/img/complaint.jpg"
        title="View Complaints Status"
      />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

      {/* /Hero Section */}
      <div className="container  py-5 my-5">
        <div className="table-responsive" data-aos-delay={500}>
          <table className="table table-bordered">
            <thead className="table-dark text-uppercase text-center">
              <tr>
                <th>Sr.No</th>
                <th>Student Name</th>
                <th>Complaint Title</th>
                <th>Department</th>
                <th>Email</th>
                <th>Description</th>
                <th>Response</th>
                <th>Attachment</th>
                <th>Assigned HOD</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((el, index) => (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{el?.studentId?.name}</td>
                  <td>{el?.complaintRegarding}</td>
                  <td>{el?.departmentId?.dept_name}</td>
                  <td>{el?.studentId?.email}</td>
                  <td>{el?.complaintDescription}</td>
                  <td>{el?.complaintResponse}</td>
                  <td>
                    {el?.image ? <><a href={el?.image} className="btn btn-dark" target="_blank">View</a></> : <></>}
                  </td>
                  <td>{el?.hodId?.name} - {el?.hodId?.email}</td>
                  <td><p style={{ fontWeight: "bolder", fontSize: "15px" }}>{el.complaintStatus}</p></td>
                  <td>
                    {/* <button onClick={() => editcomplaints(el)} className="btn btn-info btn-sm">Edit</button>
                    <button onClick={() => deletecomplaints(el.id)} className="btn btn-danger btn-sm">Delete</button> */}
                    {el?.complaintStatus == "Pending" ? <><button onClick={() => changeStatus(el?._id, "In Process")} className="btn btn-danger btn-sm">Start</button></> : <></>}
                    {el?.complaintStatus == "In Process" ? <><Link to={'/admin/task_add/' + el?._id} className="btn btn-primary btn-sm">Assign to HOD</Link></> : <></>}
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