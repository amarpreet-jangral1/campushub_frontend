import { toast, ToastContainer } from "react-toastify";
import PageHeader from "./HodPageHeader";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

export default function HodTask() {

  var [tasks, settasks] = useState([])
  const [loading, setLoading] = useState(true); 

  const getData = () => {
  setLoading(true);
const loggedInHodId = sessionStorage.getItem("_id");
    ApiServices.manageTask({})
      .then((res) => {
        // console.log("res is",res);
        
        const filteredTasks = res.data.data.filter(
        (task) => task?.hodId?.userId === loggedInHodId
        );
      settasks(filteredTasks);
        // console.log("filteredTasks is",filteredTasks);

        // settasks(res.data.data)
      })
      .catch((err) => {
        console.log("error is", err);
      })
      .finally(() => {
        setLoading(false); // ✅ Stop loader
      });
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
                    {
            loading ? (
              <div className="text-center text-muted fs-4" style={{ height: "200px" }}>
              {/* <PulseLoader color="#36d7b7" size={15} /> */}
              <PulseLoader color="#3fb2d1" size={15} loading={loading}/> {/* Bootstrap primary color */}
              </div>
            ) : (
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
                  {/* <td>
                    {el?.complaintId?.image ? <><a href={el?.complaintId?.image} className="btn btn-dark" target="_blank">View</a></> : <></>}
                  </td> */}
                  <td>
                    {el?.complaintId?.image &&
                    el.complaintId.image !== "null" &&
                    el.complaintId.image !== "no-image.jpg" &&
                    el.complaintId.image.trim() !== "" ? (
                      <a
                        href={el.complaintId.image}
                        className="btn btn-dark"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                    ) : (
                      <span className="text-muted">No Attachment</span>
                    )}
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
            )
          }
        </div>
      </div>
    </main>
  )
}