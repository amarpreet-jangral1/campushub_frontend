import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./HodPageHeader";
import { Link } from "react-router-dom";
import ApiServices from "../ApiServices";
import PulseLoader from "react-spinners/PulseLoader"; 

export default function HodDept() {
  var [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true); 

  const getData = () => {
    ApiServices.manageDepartment({ })
    // ApiServices.manageDepartment({ status: true })
      .then((res) => {
        // console.log("data is",res.data.data);
        setDepartments(res.data.data)

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

  return (
    <main className="main">
      {/* Hero Section */}
      <PageHeader
      
        backgroundImage="/assets/img/dept_bg.jpg"
        // backgroundImage="/assets/img/manage.webp"
        title="Department"
        
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
                <th>Sr No.</th>
                <th>Department Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((el, index) => (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{el?.dept_name}</td>
                  <td>{el?.status === true ? "Active" : "Inactive"}</td>
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