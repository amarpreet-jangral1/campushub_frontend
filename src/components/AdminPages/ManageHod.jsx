
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../ApiServices";
import PulseLoader from "react-spinners/PulseLoader"; 
import { Modal } from "react-bootstrap";

export default function ManageHod() {
  var [hoddata, sethoddata] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getdata = () => {
  setLoading(true);
    
    ApiServices.manageHod({})
    // ApiServices.manageHod({ status: true })
      .then((res) => {
        // console.log("res of getdata",res);
        sethoddata(res.data.data)
      })
      .catch((err) => {
        console.log("error is", err);

      })
      .finally(() => {
        setLoading(false); // ✅ Stop loader
      });
  }

  useEffect(() => {
    getdata()
  }, [loading])

  function handleinactive(_id){
      console.log("handle inactive fun call",_id);
      let data ={
        _id:_id,
        status:"false"
      }
      // axios.post("http://localhost:9000/apis/hod/statusUpdate",data,{ headers: { Authorization: sessionStorage.getItem("token") } })
      ApiServices.deleteHod(data)
      .then((res)=>{
            console.log(res);
            if(res.data.success){
              // toast.success(res.data.message)
              toast.success(res.data.message, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
                });          
              setLoading(true);
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
          toast.error("Something went wrong!!", {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
          });
          setLoading(true);
        })
      }
      function handleactive(_id){
        console.log("handle active fun call",_id);
        let data ={
          _id:_id,
          status:true
        }
        // axios.post("http://localhost:9000/apis/hod/statusUpdate",data,{ headers: { Authorization: sessionStorage.getItem("token") } })
      ApiServices.deleteHod(data)
      .then((res)=>{
              console.log(res);
              if(res.data.success){
                // toast.success(res.data.message)
              toast.success(res.data.message,{
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
              });              
                setLoading(true);
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
            toast.error("Something went wrong!!", {
            ee: "colored",
            });          
            setLoading(true);
          })
        }

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
  function deleteHod(){
        if (!selectedId) {
          return;
        }
      let data={ _id: selectedId }
      ApiServices.permanentdeleteHod(data)

      .then((res) => {
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
  // const deletehod = (_id) => {
  //   window.confirm("Are you sure to proceed ?")
  //   // console.log(_id);/
  //   let data = {
  //     _id: _id,
  //     status: "false"
  //   };
  //   ApiServices.deleteHod(data)
  //     .then((res) => {
  //       setTimeout(() => {
  //         toast.success("Data deleted successfully");
  //       }, 1000);
  //       getdata()
  //     })
  //     .catch((err) => {
  //       setLoading(true)
  //     });
  // };

const navigate= useNavigate()
  const handleEdit = (el) => {
    if (!el.status) {
    // window.confirm("Editing is restricted. Please activate the status first.")
    window.confirm("Action Restricted. Please activate to enable editing.")

    } else {
      navigate(`/admin/hod_update/${el._id}`);
    }
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
          {
            loading ? (
              <div className="text-center text-muted fs-4" style={{ height: "200px" }}>
              {/* <PulseLoader color="#36d7b7" size={15} /> */}
              <PulseLoader color="#3fb2d1" size={15} loading={loading}/> {/* Bootstrap primary color */}
              </div>
            ) : (
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
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{el?.name}</td>
                  <td>{el?.email}</td>
                  <td>{el?.departmentId?.dept_name}</td>
                  <td>{el?.qualification}</td>
                  <td>{el?.contact}</td>
                  <td>{el?.address}</td>
                  {/* <td><img src={el?.image} alt = "no image" style={height:"100px",width:"100px"}/></td> */}
                  <td><img src={el?.image} alt="no image" style={{ height: "100px", width: "100px" }} /></td>

                  {/* <td>{el?.status === true ? "Active" : "Inactive"}</td> */}
                  {/* <td>
                    {el.status === true ? (
                          <Link onClick={() => handleinactive(el._id)}>
                            <i className="fas fa-toggle-on text-success me-1" style={{ fontSize: "20px" }}></i></Link>
                        ) : (
                          <Link onClick={() => handleactive(el._id)} >
                            <i className="fas fa-toggle-off text-danger me-1" style={{ fontSize: "20px" }}></i> </Link>
                        )
                        }
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
                    {/* <Link to={"/admin/hod_update/" + el?._id}><button className="btn btn-info btn-sm mx-2">Edit</button></Link> */}
                    <button onClick={() => openModal(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                    {/* <button onClick={() => deletehod(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button> */}
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
          <button className="btn btn-danger px-4" onClick={deleteHod}>
            Yes, Delete
          </button>
          <button className="btn btn-secondary px-4" onClick={closeModal}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}