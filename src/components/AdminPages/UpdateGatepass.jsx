import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; 
import PageHeader from "./PageHeader";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
export default function UpdateGatepass(){
  var[gatepass, setgatepass]=useState([])
  useEffect(()=>{
    axios.post("http://localhost:9000/apis/gatepass/getall")
    .then((res)=>{
      console.log("data is",res.data.data);
      setgatepass(res.data.data)
    })
    .catch((err)=>{
      console.log("error is",err);
      
    })
  },[])

  function editDepartment() {
    toast.success("Request Approved!!")
  }
  function deleteDepartment() {
    toast.error("Request Rejected!!")
  }

    
    // const [gatepass, setgatepass] = useState([
    //     { name: "Amar", id: "101", department: "CSE", file: "syllabus.pdf" },
    //     { name: "Chandan", id: "102", department: "MSC", file: "curriculum.docx" },
    //     { name: "Paras", id: "103", department: "CSE", file: "outline.pdf" },
    //   ]);
    return(
        <main className="main">
        {/* Hero Section */}
        <PageHeader
          backgroundImage="/assets/img/manage.webp"
          title="Manage Gatepass"
        />
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />


        {/* /Hero Section */}
        <div className="container  py-5 my-5">
            <div className="table-responsive"  data-aos-delay={500}>
          <table className="table table-bordered">
            <thead className="table-dark text-uppercase text-center">
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Course</th>
                <th>Purpose</th>
                <th>time_of_exit</th>
                <th>time_of_return</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {gatepass.map((gatepass, index) => (
                <tr key={index} className="text-center">
                  <td>{index+1}</td>
                  <td>{gatepass.name}</td>
                  <td>{gatepass.course}</td>
                  <td>{gatepass.gatepass_purpose}</td>
                  <td>{gatepass.time_of_exit}</td>
                  <td>{gatepass.time_of_return}</td>
                  <td>{gatepass.status===true?"true":"false"}</td>

                  <td>
                <button onClick={() => editDepartment()} className="btn btn-info btn-sm">Approve</button>&nbsp;&nbsp;
                <button onClick={() => deleteDepartment()} className="btn btn-danger btn-sm">Reject</button>
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