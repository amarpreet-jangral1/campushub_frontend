import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import ApiServices from "../ApiServices";
import PulseLoader from "react-spinners/PulseLoader"; 
import { Modal } from "react-bootstrap";

export default function ManageCourse() {
  var [courses, setcourses] = useState([])
  const [loading, setLoading] = useState(true); 
const navigate=useNavigate()
  const getData = () => {
  setLoading(true);

    // ApiServices.manageCourse({ status: true })
    ApiServices.manageCourse({})
      .then((res) => {
        setcourses(res.data.data)
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

  function handleinactive(_id){
    // console.log("handle inactive fun call",_id);
    let data ={
      _id:_id,
      status:"false"
    }
    // axios.post("http://localhost:9000/apis/course/statusUpdate",data,{ headers: { Authorization: sessionStorage.getItem("token") } })
    ApiServices.deleteCourse(data)  
    .then((res)=>{
          console.log(res);
          if(res.data.success){
            toast.success(res.data.message, {
              position: "top-center",
              autoClose: 2000,
              theme: "colored",
              });
            setLoading(true);
          }
          else{
            toast.error(res.data.message, {
              position: "top-center",
              autoClose: 2000,
              theme: "colored",
              });
          } 
      })

      .catch((err)=>{
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
          });
        setLoading(true);
      })
  }
    function handleactive(_id){
      // console.log("handle active fun call",_id);
      let data ={
        _id:_id,
        status:true
      }
      // axios.post("http://localhost:9000/apis/course/statusUpdate",data,{ headers: { Authorization: sessionStorage.getItem("token") } })   
      ApiServices.deleteCourse(data)  
      .then((res)=>{
            // console.log(res);
            if(res.data.success){
              toast.success(res.data.message, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
                });
              setLoading(true);
            }
            else{
              toast.error(res.data.message, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
                });
            } 
        })

        .catch((err)=>{
          toast.error("Something went wrong!!", {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
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
      function deleteCourse(){
        if (!selectedId) {
          return;
        }
      let data={_id: selectedId}
      ApiServices.permanentdeleteCourse(data)
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
        
  // const deletecourse = (_id) => {
  //   window.confirm("Are you sure to proceed ?")
  //   // console.log(_id);/
  //   let data = {
  //     _id: _id,
  //     status: "false"
  //   };
  //   ApiServices.deleteCourse(data)
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
const handleEdit = (el) => {
    if (!el.status) {
    // window.confirm("Editing is restricted. Please activate the status first.")
    window.confirm("Action Restricted. Please activate to enable editing.")

    } else {
      navigate(`/admin/course_update/${el._id}`);
    }
  };
  return (
    <main className="main">
      {/* Hero Section */}
      <PageHeader
        backgroundImage="/assets/img/manage.webp"
        title="Manage Course"
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
                <th>Course Name</th>
                <th>Course Code</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((el, index) => (
                <tr key={index} className="text-center">
                  <td>{index + 1}</td>
                  <td>{el?.Dept_id?.dept_name}</td>
                  <td>{el?.course_name}</td>
                  <td>{el?.course_code}</td>
                  <td style={{ position: "relative", textAlign: "center",minWidth: "100px"  }}>
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
                  </td>
                  <td>
                    {/* <Link to={"/admin/course_update/" + el?._id}> */}
                    <button className="btn btn-info btn-sm mx-2" onClick={()=>{handleEdit(el)}}>Edit</button>
                    {/* </Link> */}
                  {/* <Link
                    onClick={() => {
                      if (el?.status === false) {
                        toast.error("Inactive status can't be updated");
                      } else {
                        navigate(`/admin/course_update/${el?._id}`);
                      }
                    }}
                    className="btn btn-info btn-sm mx-2"
                  >
                    Edit
                  </Link> */}
                    <button onClick={() => openModal(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                    {/* <button onClick={() => deletecourse(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button> */}
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
          <button className="btn btn-danger px-4" onClick={deleteCourse}>
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