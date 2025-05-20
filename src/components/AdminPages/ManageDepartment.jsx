import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../ApiServices";
import PulseLoader from "react-spinners/PulseLoader"; 
import { Modal } from "react-bootstrap";

export default function ManageDepartment() {
  var [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true); 

  const getData = () => {
  setLoading(true);

    ApiServices.manageDepartment({ })
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
  }, [loading])


//status update api connection

   function handleinactive(_id) {
    let data = {
      _id: _id,
      status: "false",
    };
    ApiServices.deleteDepartment(data)
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
            });
          setLoading(true);
        } 
        else {
          toast.error(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
            });
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          });
        setLoading(true);
      });
  }

  function handleactive(_id) {
    let data = {
      _id: _id,
      status: "true",
    };
    ApiServices.deleteDepartment(data)
      .then((res) => {
        // console.log(res);
        if (res.data.success) {
          toast.success(res.data.message,{
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
            });
          setLoading(true);
        } 
        else {
          toast.error(res.data.message, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
            });
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          });
        setLoading(true);
      });
  }

  //permanent delete api
  
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
  // const deleteDepartment = (_id) => {
  //   window.confirm("Are you sure to proceed ?")
  //   let data = {
  //     _id: _id,
  //     status: "false"
  //   };
  //   ApiServices.deleteDepartment(data)
  //     .then((res) => {
  //       setTimeout(() => {
  //         toast.success("Data deleted successfully");
  //       }, 1000);
  //       getData()
  //     })
  //     .catch((err) => {
  //       setLoading(true)
  //     });
  // };


  function deleteDepartment() {
    if (!selectedId) {
      return;
    }
    let data={ _id: selectedId }
    ApiServices.permanentdeleteDepartment(data)
      .then((res) => {
        console.log("delete",res);
        
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
        setLoading(true);
        closeModal();
      })
      .catch((err) => {
        toast.error("Something Went Wrong!!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        });
        closeModal();
      });
    setLoading(true);
  }
  const navigate= useNavigate()
  const handleEdit = (el) => {
    if (!el.status) {
    window.confirm("Action Restricted. Please activate to enable editing.")
    // window.confirm("Editing is restricted. Please activate the status first.")

    } else {
      navigate(`/admin/department_update/${el._id}`);
    }
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
                  {/* <th>Status Update</th> */}
                  <th>Actions</th>

                </tr>
              </thead>
              <tbody>
                {departments.map((el, index) => (
                  <tr key={index} className="text-center">
                    <td>{index + 1}</td>
                    <td>{el?.dept_name}</td>
                    {/* <td>{el?.status === true ? "Active" : "Inactive"}
                    {el?.status === true ? (
                        <Link onClick={() => handleinactive(el._id)}>
                          <i
                            className="fas fa-toggle-on text-success me-1"
                            style={{ fontSize: "20px" }}
                          ></i>
                        </Link>
                      ) : (
                        <Link onClick={() => handleactive(el._id)}>
                          <i
                            className="fas fa-toggle-off text-danger me-1"
                            style={{ fontSize: "20px" }}
                          ></i>
                        </Link>
                      )}</td> */}

                       <td style={{ position: "relative", textAlign: "center" }}>
                        {el?.status === true ? "Active" : "Inactive"}

                        <span style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                          {el?.status === true ? (
                            <Link onClick={() => handleinactive(el._id)}>
                              <i
                                className="fas fa-toggle-on text-success"
                                style={{ fontSize: "20px" }}
                              ></i>
                            </Link>
                          ) : (
                            <Link onClick={() => handleactive(el._id)}>
                              <i
                                className="fas fa-toggle-off text-danger"
                                style={{ fontSize: "20px" }}
                              ></i>
                            </Link>
                          )}
                        </span>
                      </td>


                    <td>
                      <button className="btn btn-info btn-sm mx-2" onClick={()=>{handleEdit(el)}}>Edit</button>
                      {/* <Link to={"/admin/department_update/" + el?._id}><button className="btn btn-info btn-sm mx-2">Edit</button></Link> */}
                      <button onClick={() => openModal(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                      {/* <button onClick={() => deleteDepartment(el?._id)}  onClick={() => openModal(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button> */}
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
          <button className="btn btn-danger px-4" onClick={deleteDepartment}>
            Yes, Delete
          </button>
          <button className="btn btn-secondary px-4" onClick={closeModal}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </main>
  )
}