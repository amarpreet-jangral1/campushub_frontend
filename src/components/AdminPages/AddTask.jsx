import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import ApiServices from "../ApiServices";
import { useNavigate, useParams } from "react-router-dom";
export default function AddTask() {

    const [deadline, setdeadline] = useState("");
    const [hodId, sethodId] = useState("");
    var [hodlist, setHodlist] = useState([])
    let param = useParams()
    let compId = param.complaintId
    let nav = useNavigate()

    const getData = () => {
        ApiServices.manageHod({ status: true })
            .then((res) => {
                setHodlist(res.data.data)
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    function HandleForm(e) {
        e.preventDefault();
        let data = {
            complaintId: compId,
            deadline: deadline,
            hodId: hodId
        }

        ApiServices.addTask(data)
            .then((res) => {

                if (res.data.success) {
                    // setLoad(false)
                    toast.success(res.data.message)
                    // Clear input fields
                    deadline("");
                    hodId("");
                    nav('/admin/complaints')
                }
                else {
                    // setLoad(false)
                    toast.error(res.data.message)
                }

            })
            // .catch((err) => {
            //     // setLoad(false)
            //     toast.error("Something went wrong!!")
            // })

    }
    return (
        <>
            <PageHeader
                backgroundImage="/assets/img/home/img3.jpg"
                title="Assign Task"
            //   quote="Knowledge is the path to success"
            />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            <div className="d-flex justify-content-center align-items-center min-vh-100 ">
                <div className="card shadow-lg p-4 rounded-3 " style={{ maxWidth: "500px", width: "100%" }}>
                    <h2 className="text-center text-primary">Allot Task</h2>
                    <form onSubmit={HandleForm}>
                        <div className=" form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={deadline}
                                onChange={(e) => setdeadline(e.target.value)}
                                placeholder="Title"
                            />
                            <label for="taskTitle">Title</label>
                        </div>

                        <div className=" form-floating mb-3">
                            <select
                                type="text"
                                className="form-control"
                                value={hodId}
                                onChange={(e) => sethodId(e.target.value)}
                                placeholder="Assigned To"
                            >
                                <option value="" selected disabled>Select HOD</option>
                                {hodlist?.map((el, index) => (
                                    <option key={index} value={el?._id}>{el.name} - {el.email}</option>
                                ))}
                            </select>
                            <label for="assigned_to">Assigned To</label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-pill py-3 ">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}