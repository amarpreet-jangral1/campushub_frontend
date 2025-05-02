import { toast, ToastContainer } from "react-toastify";
import PageHeader from "./HodPageHeader";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { Link } from "react-router-dom";

export default function HodTask() {

  var [tasks, settasks] = useState([])

  const getData = () => {
    ApiServices.manageTask({})
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
      status: true
    };
    ApiServices.updateTask(data)
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
        backgroundImage="/assets/img/task.jpg"
        // backgroundImage="/assets/img/manage.webp"
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks?.map((el, index) => (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{el?.complaintId?.complaintRegarding}</td>
                  <td>{el?.complaintId?.complaintDescription}</td>
                  <td>{el?.complaintId?.complaintResponse ? el?.complaintId?.complaintResponse : <><Link to={"/hod/complaintResponse/" + el?.complaintId?._id}>Add Response</Link></>}</td>
                  <td>
                    {el?.complaintId?.image ? <><a href={el?.complaintId?.image} className="btn btn-dark" target="_blank">View</a></> : <></>}
                  </td>
                  <td>{el?.hodId?.name} - {el?.hodId?.email}</td>
                  <td><p style={{ fontWeight: "bolder", fontSize: "15px" }}>{el?.complaintId?.complaintStatus}</p></td>
                  <td>
                    {el?.complaintId?.complaintStatus != "Resolved" ? <><button onClick={() => changeStatus(el?._id)} className="btn btn-danger btn-sm mx-2">Resolved</button></> : <></>}
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