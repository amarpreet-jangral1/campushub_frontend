import { useEffect, useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageHeader from "./PageHeader";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ApiServices from "../ApiServices";

export default function UpdateStudent() {
  // State variables
  const [student_name, setstudent_name] = useState("");
  // const [student_id, setstudent_id] = useState("");
  const [student_email, setstudent_email] = useState("");
  const [student_phone, setstudent_phone] = useState("");
  const [student_gender, setstudent_gender] = useState("");
  const [student_course, setstudent_course] = useState("");
  const [student_dept, setstudent_dept] = useState("");
  const [student_enroll, setstudent_enroll] = useState("");
  const [image, setimage] = useState("");
  const [Load,setLoad] = useState("");
  const [oldimage, setoldimage] = useState("");
  const fileInputRef = useRef(null);

  var [departments, setDepartments] = useState([])
  var [courses, setCourses] = useState([])
  const getDepartmentData = () => {
    ApiServices.manageDepartment({ status: true })
      .then((res) => {
        // console.log("data is",res.data.data);
        setDepartments(res.data.data)
      })
      .catch((err) => {
        console.log("error is", err);
      })
  }

  const getCourseData = () => {
    ApiServices.manageCourse({ status: true })
      .then((res) => {
        // console.log("data is",res.data.data);
        setCourses(res.data.data)
      })
      .catch((err) => {
        console.log("error is", err);
      })
  }

  useEffect(() => {
    getDepartmentData(),
      getCourseData()
  }, [])


  const params = useParams()
  const student_id = params.id
  const nav = useNavigate()

  useEffect(() => {
    ApiServices.getSingleStudent({ _id: student_id })
      .then((res) => {
        console.log(res.data)
        setstudent_name(res.data.data.name)
        setstudent_email(res.data.data.email)
        setstudent_phone(res.data.data.contact)
        setstudent_gender(res.data.data.gender)
        // setstudent_course(res.data.data.courseId.course_name)
        setstudent_course(res.data.data.courseId.course_name + "-" + res.data.data.courseId.course_code)
        setstudent_dept(res.data.data.departmentId.dept_name)
        setstudent_enroll(res.data.data.enrollment_year)
        setoldimage(res.data.data.image)
      })
      .catch((err) => {
        toast.error("Something went wrong!!")
      })
  }, [])


  function HandleForm(e) {
    e.preventDefault();
    console.log("form submit");
    
    let data = new FormData()
    data.append("name", student_name)
    data.append("email", student_email)
    data.append("gender", student_gender)
    data.append("contact", student_phone)
    data.append("courseId", student_course)
    data.append("departmentId", student_dept)
    data.append("enrollment_year", student_enroll)
    data.append("_id", student_id)
    if (image) {
      data.append("image", image)
    }

    ApiServices.updateStudent(data)
      .then((res) => {
      console.log("update student res",res);

        if (res.data.success) {
          toast.success(res.data.message)
          nav("/admin/student_manage")
        }
        else {
          toast.error(res.data.message)
        }

      })
      .catch((err) => {
        setLoad(false)
        toast.error("Something went wrong!!")
      })

  }

  return (
    <>
      <PageHeader
        backgroundImage="/assets/img/photo6.png"
        title="Update Student"
      // quote="Knowledge is the path to success"
      />

      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow-lg p-4 rounded-3" style={{ maxWidth: "1000px", width: "100%" }}>
          <h2 className="text-center text-primary ">Update Student</h2>

          {/* <form onSubmit={HandleForm}
                        className="py-4">
                        <div className="form-floating mb-3">
                            <select
                                className="form-control"
                                value={Dept_id}
                                onChange={(e) => set_deptid(e.target.value)}
                                placeholder="Code"
                            >
                                <option value="" selected disabled>Select Department</option>
                                {departments.map((el, index) => (
                                    <option key={index} value={el?._id}>{el.dept_name}</option>
                                ))}
                            </select>
                            <label>Departmemt</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={course_name}
                                onChange={(e) => setcourse_name(e.target.value)}
                                placeholder="Name"
                            />
                            <label for="course_name">Course Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={course_code}
                                onChange={(e) => setcourse_code(e.target.value)}
                                placeholder="Code"
                            />
                            <label for="course_code">Course Code</label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 rounded-pill py-3">
                            Update
                        </button>
                    </form> */}

          <form onSubmit={HandleForm}
            className="py-4">
            <div className="row">
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={student_name}
                    onChange={(e) => setstudent_name(e.target.value)}
                    placeholder="Name"
                  />
                  <label for="student_name">Student Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    value={student_phone}
                    onChange={(e) => setstudent_phone(e.target.value)}
                    placeholder="Phone Number"
                  />
                  <label for="student_phone">Phone Number</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={student_email}
                    onChange={(e) => setstudent_email(e.target.value)}
                    placeholder="Email"
                  />
                  <label for="student_email">Student Email</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="file"
                    className="form-control"
                    ref={fileInputRef}
                    onChange={(e) => { setimage(e.target.files[0]) }}
                    placeholder="image"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <select
                    className="form-control"
                    value={student_dept}
                    onChange={(e) => setstudent_dept(e.target.value)}
                    placeholder="Code"
                  >
                    <option value="" selected disabled>Select Department</option>
                    {departments.map((el, index) => (
                      <option key={index} value={el?._id}>{el.dept_name}</option>
                    ))}
                  </select>
                  <label>Departmemt</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <select
                    type="text"
                    className="form-control"
                    value={student_course}
                    onChange={(e) => setstudent_course(e.target.value)}
                    placeholder="Course"
                  >
                    <option value="" selected disabled>Select Course</option>
                    {courses?.map((el, index) => (
                      <option key={index} value={el?._id}>{el?.course_name} - {el?.course_code}</option>
                    ))}
                  </select>
                  <label for="student_course">Course</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <select
                    className="form-select pt-2"
                    value={student_gender}
                    onChange={(e) => setstudent_gender(e.target.value)}
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                  </select>

                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={student_enroll}
                    onChange={(e) => setstudent_enroll(e.target.value)}
                    placeholder="Enrollment Year"
                  />
                  <label for="student_enroll">Enrollment Year</label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 rounded-pill py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}