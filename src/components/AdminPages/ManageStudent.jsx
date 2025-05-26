import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../ApiServices";
import PulseLoader from "react-spinners/PulseLoader"; 
import { Modal } from "react-bootstrap";

export default function ManageStudent() {
    var [students, setstudents] = useState([])
  const [loading, setLoading] = useState(true); 

    const getData = () => {
    setLoading(true);

        ApiServices.manageStudent({})
        // ApiServices.manageStudent({ status: true })
            .then((res) => {
                setstudents(res.data.data)
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
    function handleinactive(_id){
    // console.log("handle inactive fun call",_id);
    let data ={
      _id:_id,
      status:"false"
    }
    ApiServices.deleteStudent(data)  
    .then((res)=>{
          // console.log(res);
          if(res.data.success){
            toast.success(res.data.message, {
              position: "top-center",
              autoClose: 2000,
              theme: "colored",
              });
            // setLoading(true);
            getData()
          }
          else{
            // toast.error(res.data.message)
            toast.error(res.data.message, {
              position: "top-center",
              autoClose: 2000,
              theme: "colored",
              });
          } 
      })
      .catch((err)=>{
        // toast.error("Something went wrong!!")
        toast.success("Something went wrong!!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          });
        // setLoading(true);
      })
      .finally(()=>{
        setLoading(false);

      })
    }
    function handleactive(_id){
      // console.log("handle active fun call",_id);

      // let data = new FormData();
      // data.append("_id", _id);
      // data.append("status", "true");
      let data ={
        _id:_id,
        status:true
      }
      ApiServices.deleteStudent(data)  
      .then((res)=>{
            // console.log(res);
            if(res.data.success){
              // toast.success(res.data.message)
              toast.success(res.data.message, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
                });
              // setLoading(true);
              getData();
            }
            else{
              // toast.error(res.data.message)
              toast.error(res.data.message, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
                });
            } 
        })
        .catch((err)=>{
          toast.error("Something went wrong!!",{
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
            });
          // setLoading(true);
        })
        .finally(()=>{
        setLoading(false);

      })
      }
    // const deletestudent = (_id) => {
    //     window.confirm("Are you sure to proceed ?")
    //     // console.log(_id);/
    //     let data = {
    //         _id: _id,
    //         status: "false"
    //     };
    //     ApiServices.deleteStudent(data)
    //         .then((res) => {
    //             setTimeout(() => {
    //                 toast.success("Data deleted successfully");
    //             }, 1000);
    //             getData()
    //         })
    //         .catch((err) => {
    //             setLoading(true)
    //         });
    // };



    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedId, setSelectedId] = useState(null);

  function openModal(id) {
    // console.log("open modal runs");
    setSelectedId(id);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedId(null);
  }

  function deleteStudent() {
    if (!selectedId) {
      return;
    }
   let data={ _id: selectedId }
    ApiServices.permanentdeleteStudent(data)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
        // setLoading(true);
        closeModal();
        getData()
      })
      .catch((err) => {
        toast.error("Something Went Wrong!!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
        closeModal();
      })
    // setLoading(true);
    .finally(()=>{
    setLoading(false);

    })
  }
  const navigate= useNavigate()
  const handleEdit = (el) => {
    if (!el.status) {
    // window.confirm("Editing is restricted. Please activate the status first.")
    window.confirm("Action Restricted. Please activate to enable editing.")

    } else {
      navigate(`/admin/student_update/${el._id}`);
    }
  };
    return (
        <main className="main">
            {/* Hero Section */}
            <PageHeader
                backgroundImage="/assets/img/manage.webp"
                title="Manage Student"
            />
            {/* <ToastContainer position="top-center" autoClose={2000} theme="colored" /> */}

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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Department</th>
                                <th>Course</th>
                                <th>Gender</th>
                                <th>Enrollment Year</th>
                                <th>Image</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students?.map((el, index) => (
                                <tr key={index} className="text-center">
                                    <td>{index + 1}</td>
                                    <td>{el?.name}</td>
                                    <td>{el?.email}</td>
                                    <td>{el?.contact}</td>
                                    <td>{el?.departmentId?.dept_name}</td>
                                    <td>{el?.courseId?.course_name} - {el?.courseId?.course_code}</td>
                                    <td>{el?.gender}</td>
                                    <td>{el?.enrollment_year}</td>
                                    <td>
                                        <img src={el?.image} className="img-fluid" style={{ "width": "100px" }} />
                                    </td>
                                    {/* <td >
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>

                                    {el?.status === true ? "Active" : "Inactive"}
                                    <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                                            {el.status === true ? (
                                            <Link onClick={() => handleinactive(el._id)}>
                                                <i className="fas fa-toggle-on text-success me-1" style={{ fontSize: "20px" }}></i></Link>
                                            ) : (
                                            <Link onClick={() => handleactive(el._id)} >
                                                <i className="fas fa-toggle-off text-danger me-1" style={{ fontSize: "20px" }}></i> </Link>
                                            )
                                            } 
                                    </span>
                                    </div>
                                    </td> */}
                                    <td>
                                    <div style={{ display: "flex", justifyContent: "space-between" , minWidth: "30px" }}>
                                        <span style={{ fontWeight: "500",alignItems: "center" }}>
                                            {el?.status === true ? "Active" : "Inactive"}
                                        </span>
                                        <span style={{alignItems: "center"}}>
                                        {el?.status === true ? (
                                            <Link onClick={() => handleinactive(el._id)} style={{ marginLeft: "10px" }}>
                                                <i className="fas fa-toggle-on text-success" style={{ fontSize: "20px" }}></i>
                                            </Link>
                                            ) : (
                                            <Link onClick={() => handleactive(el._id)} style={{ marginLeft: "10px" }}>
                                                <i className="fas fa-toggle-off text-danger" style={{ fontSize: "20px" }}></i>
                                            </Link>
                                        )}

                                        </span>
                                    </div>
                                    </td>
                                

                                    <td>
                                        <button className="btn btn-info btn-sm mx-2" onClick={()=>{handleEdit(el)}}>Edit</button>
                                        {/* <Link to={"/admin/student_update/" + el?._id}><button className="btn btn-info btn-sm mx-2">Edit</button></Link> */}
                                    </td>
                                    <td>
                                        <button onClick={() => openModal(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                                        {/* <button onClick={() => deletestudent(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button> */}
                                        {/* {el.status === true ? (
                                            <Link onClick={() => handleinactive(el._id)}>
                                                <i className="fas fa-toggle-on text-success me-1" style={{ fontSize: "20px" }}></i></Link>
                                            ) : (
                                            <Link onClick={() => handleactive(el._id)} >
                                                <i className="fas fa-toggle-off text-danger me-1" style={{ fontSize: "20px" }}></i> </Link>
                                            )
                                            }  */}
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                </table>
          
            )
          }                   
                </div>
            </div>
    <Modal
        show={modalIsOpen}
        onHide={closeModal}
        centered
        // backdrop="static"
        backdrop="blur(5px)"
        // backdropFilter: "blur(5px)" // **Blurred background effect**
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-center">Are you sure you want to delete?</h5>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <button className="btn btn-danger px-4" onClick={deleteStudent}>
            Yes, Delete
          </button>
          <button className="btn btn-secondary px-4" onClick={closeModal}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
        </main >
    )
}