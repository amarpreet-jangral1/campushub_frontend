import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import HodPageHeader from "./HodPageHeader";


export default function HodStatus(){
    const [status, setStatus] = useState("Pending");
    function Confirm(){
            toast.success('🦄Status Updated Successfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
        }
        const [tasks, settasks] = useState([
            {id:"1001", title: "Assignment", assigned_to: "Amar", deadline:"11-april-2025", status:"" },
            {id:"1002" ,title: "Project", assigned_to: "Chandan", deadline:"11-may-2025", status:""},
            {id:"1003" ,title: "Frontend Project", assigned_to: "Paras", deadline:"11-jun-2025", status:"" },
          ])
    return(
        <>
        <HodPageHeader
            backgroundImage="/assets/img/change_status.jpg"
          title="Change Task Details"
        />
        <div className="container-xxl py-5">
        <div className="container">
        <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
          <div className="row g-4">
          <table className="table table-striped">
        <thead>
            <tr className="text-center text-uppercase table-dark">
            <th>Task ID</th>
            <th>Task Title</th>
            <th>Assigned to(faculty name)</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {tasks.map((task, index) => (
                <tr key={index} className="text-center">
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.assigned_to}</td>
                  <td>{task.deadline}</td>
                  <td>
                    <select className="btn btn-primary btn-sm">
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                  </td>
                    <td>
                        <button onClick={() => editDepartment(dept)} className="btn btn-primary btn-sm">Edit</button>
                        <button onClick={() => deleteDepartment(dept.id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  
                </tr>
              ))}
        </tbody>
        </table>
            </div>
        </div>
        </div>
        
        </>
    )
}
