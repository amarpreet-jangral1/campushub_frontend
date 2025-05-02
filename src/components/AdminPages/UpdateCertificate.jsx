import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; 
import PageHeader from "./PageHeader";
import { ToastContainer } from "react-toastify";
import axios from "axios";
export default function UpdateCertificate(){
  var[certificates,setcertificates]=useState([])
  useEffect(()=>{
    axios.post("http://localhost:9000/apis/certificate/getall")
    .then((res)=>{
      console.log("data is",res.data.data);
      setcertificates(res.data.data)
    })
    .catch((err)=>{
      console.log("error is",err);
      
    })
  },[])
    // const [certificates, setcertificates] = useState([
    //     { name: "Amar", id: "101", description: "NOC", file: "syllabus.pdf" },
    //     { name: "Chandan", id: "102", description: "Course Completion certificate", file: "curriculum.docx" },
    //     { name: "Paras", id: "103", description: "Academic certificate", file: "outline.pdf" },
    //   ]);
    return(
        <main className="main">
        {/* Hero Section */}
        <PageHeader
          backgroundImage="/assets/img/manage.webp"
          title="Manage Certificate"
        />
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />

        {/* /Hero Section */}
        <div className="container  py-5 my-5">
            <div className="table-responsive"  data-aos-delay={500}>
          <table className="table table-bordered">
            <thead className="table-dark text-uppercase text-center">
              <tr>
                <th>Sr No.</th>
                <th>Student Name</th>
                {/* <th>Student Id</th> */}
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((certificate, index) => (
                <tr key={index} className="text-center">
                  <td>{index+1}</td>
                  <td>{certificate.student_name}</td>
                  {/* <td>{certificate.student_name}</td> */}
                  <td>{certificate.description}</td>
                  <td>{certificate.image}</td>
                  <td>
                <button onClick={() => editDepartment(dept)} className="btn btn-info btn-sm">Edit</button>
                <button onClick={() => deleteDepartment(dept.id)} className="btn btn-danger btn-sm">Delete</button>
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