import { toast, ToastContainer } from "react-toastify";
import PageHeader from "./PageHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import ApiServices from "../ApiServices";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader"; 

export default function ManageGatePass() {

    var [gatepass, setgatepass] = useState([])
  const [loading, setLoading] = useState(true); 

    const getData = () => {
  setLoading(true);

        ApiServices.manageGatepass({ status: true })
            .then((res) => {
                setgatepass(res.data.data)
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
            requestStatus: status
        };
        ApiServices.updateGatepass(data)
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

    const changeDate = (dateTime) => {
        let d = dateTime.split('T')
        let formatchange = d[0].split('-')
        let fc = formatchange[2]+"-"+formatchange[1]+"-"+formatchange[0]
        return fc
    }

    return (
        <main className="main">
            {/* Hero Section */}
            <PageHeader
                backgroundImage="/assets/img/gatepass.jpg"
                title="Requested Gatepass"
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
                                <th>Student Name <br /> <small>(Email)</small></th>
                                <th>Description</th>
                                <th>Enrollment Year</th>
                                <th>Start Date - End Date</th>
                                <th>Attachment</th>
                                <th>Department</th>
                                <th>Course</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gatepass?.map((el, index) => (
                                <tr key={index} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{el?.studentId?.name} <br /> <small>{el?.studentId?.email}</small> </td>
                                    <td>{el?.description}</td>
                                    <td>{el?.studentId?.enrollment_year}</td>
                                    <td>{changeDate(el?.startDate)} - {changeDate(el?.endDate)}</td>
                                    <td>
                                        {el?.image != "no_image.jpg" ? <><a href={el?.image} className="btn btn-dark" target="_blank">View</a> </> : <></>}
                                    </td>
                                    <td>{el?.departmentId?.dept_name}</td>
                                    <td>{el?.courseId?.course_name} <br /> <small>({el?.courseId?.course_code})</small></td>
                                    <td><p style={{ fontWeight: "bolder", fontSize: "15px" }}>{el?.requestStatus}</p></td>
                                    <td>
                                        {el?.requestStatus == "Pending" ? <>
                                            <Link to={"/admin/gatepass_add/" + el?._id}><button className="btn btn-info btn-sm mx-2">Accept</button></Link>

                                            <button onClick={() => changeStatus(el?._id, "Decline")} className="btn btn-danger btn-sm mx-2">Decline</button>
                                        </> : <></>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
          
            )
          }a
                </div>
            </div>
        </main>
    )
}