import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import { Link } from "react-router-dom";
import ApiServices from "../ApiServices";

export default function ManageDepartment() {
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

  const deleteDepartment = (_id) => {
    window.confirm("Are you sure to proceed ?")
    let data = {
      _id: _id,
      status: "false"
    };
    ApiServices.deleteDepartment(data)
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
        title="Manage Department"
      />
      <ToastContainer position="top-center" autoClose={2000} theme="colored" />

      {/* /Hero Section */}
      <div className="container  py-5 my-5">
        <div className="table-responsive" data-aos-delay={500}>
          <table className="table table-bordered">
            <thead className="table-dark text-uppercase text-center">
              <tr>
                <th>Sr No.</th>
                <th>Department Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((el, index) => (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{el?.dept_name}</td>
                  <td>{el?.status === true ? "Active" : "Inactive"}</td>
                  {/* <td>{el?.image}</td> */}
                  <td>
                    <Link to={"/admin/department_update/" + el?._id}><button className="btn btn-info btn-sm mx-2">Edit</button></Link>
                    <button onClick={() => deleteDepartment(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button>
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