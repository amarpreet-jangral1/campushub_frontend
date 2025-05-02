
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import ApiServices from "../ApiServices";

export default function ManageHod() {
  var [hoddata, sethoddata] = useState([]);
  const getdata = () => {
    
    ApiServices.manageHod({ status: true })
      .then((res) => {
        // console.log("res of getdata",res);
        sethoddata(res.data.data)
      })
      .catch((err) => {
        console.log("error is", err);

      })
  }

  useEffect(() => {
    getdata()
  }, [])

  const deletehod = (_id) => {
    window.confirm("Are you sure to proceed ?")
    // console.log(_id);/
    let data = {
      _id: _id,
      status: "false"
    };
    ApiServices.deleteHod(data)
      .then((res) => {
        setTimeout(() => {
          toast.success("Data deleted successfully");
        }, 1000);
        getdata()
      })
      .catch((err) => {
        setLoading(true)
      });
  };


  return (
    <>
      <PageHeader
        backgroundImage="/assets/img/manage.webp"
        title="Manage HOD"
      />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

      <div className="container  py-5 my-5">
        <div className="table-responsive" data-aos-delay={500}>
          <table className="table table-bordered table-hover" style={{ cursor: "pointer" }}>
            <thead className="table-dark text-uppercase text-center">
              <tr>
                <th>Sr no.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department Name</th>
                <th>Qualification</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Image</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {hoddata?.map((el, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el?.name}</td>
                  <td>{el?.email}</td>
                  <td>{el?.departmentId?.dept_name}</td>
                  <td>{el?.qualification}</td>
                  <td>{el?.contact}</td>
                  <td>{el?.address}</td>
                  {/* <td><img src={el?.image} alt = "no image" style={height:"100px",width:"100px"}/></td> */}
                  <td><img src={el?.image} alt="no image" style={{ height: "100px", width: "100px" }} /></td>

                  <td>{el?.status === true ? "Active" : "Inactive"}</td>
                  <td>
                    <Link to={"/admin/hod_update/" + el?._id}><button className="btn btn-info btn-sm mx-2">Edit</button></Link>
                    <button onClick={() => deletehod(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}