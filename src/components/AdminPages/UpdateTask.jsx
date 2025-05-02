import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; 
import PageHeader from "./PageHeader";
import { ToastContainer } from "react-toastify";
import axios from "axios";
export default function UpdateTask(){
  var[tasks,settasks]=useState([])
  useEffect(()=>{
    axios.post("http://localhost:9000/apis/tasks/getall")
    .then((res)=>{
      console.log("data is",res.data.data);
      settasks(res.data.data)
    })
    .catch((err)=>{
      console.log("error is",err);
      
    })
  },[])
   // const [tasks, settasks] = useState([
    //     { title: "Assignment", assigned_to: "Amar", desc: "Python Assignment", deadline:"11-april-2025", status:"Pending" },
    //     { title: "Project", assigned_to: "Chandan", desc: "CampusHub Mern Project",deadline:"11-may-2025", status:"In Progress"},
    //     { title: "Frontend Project", assigned_to: "Paras", desc: "Frontend of CampusHub",deadline:"11-jun-2025", status:"Completed" },
    //   ]);
    return(
        <main className="main">
        {/* Hero Section */}
        <PageHeader
          backgroundImage="/assets/img/manage.webp"
          title="Manage Task"
        />
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />

        {/* /Hero Section */}
        <div className="container  py-5 my-5">
            <div className="table-responsive"  data-aos-delay={500}>
          <table className="table table-bordered">
            <thead className="table-dark text-uppercase text-center">
              <tr>
                <th>Sr.No</th>
                <th>Title</th>
                <th>Assigned To</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} className="text-center">
                  <td>{index+1}</td>
                  <td>{task.desc}</td>
                  <td>{task.desc}</td>
                  <td>{task.desc}</td>
                  <td>{task.deadline}</td>
                  <td>{task.status===true?"true":"false"}</td>
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
