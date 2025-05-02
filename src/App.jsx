import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/UserPages/Home'
import Master from './components/layouts/UserPanel/Master'
import About from './components/UserPages/About'
import Contact from './components/UserPages/Contact'
import Courses from './components/UserPages/Courses'
import Login from './components/UserPages/Login'
import Register from './components/UserPages/Register'
import AdminMaster from './components/layouts/AdminPanel/AdminMaster'
import HodMaster from './components/layouts/HodPanel/HodMaster'
import AdminDashboard from './components/AdminPages/AdminDashboard'
import Department from './components/UserPages/Department'
import Complaints from './components/UserPages/Complaints'
import ViewStatus from './components/UserPages/ViewStatus'
import Certificates from './components/UserPages/Certificates'
import Gatepass from './components/UserPages/Gatepass'
import ManageProfile from './components/UserPages/ManageProfile'
import AddStudent from './components/AdminPages/AddStudent'
import HodCourses from './components/HodPages/HodCourses'
import HodDept from './components/HodPages/HodDept'
import HodTask from './components/HodPages/HodTask'
import HodStatus from './components/HodPages/HodStatus'
import HodProfile from './components/HodPages/HodProfile'
import AddDepartment from './components/AdminPages/AddDepartment'

import AddCourse from './components/AdminPages/AddCourse'
import UpdateStudent from './components/AdminPages/UpdateStudent'
import AddCertificate from './components/AdminPages/AddCertificate'
import AddGatepass from './components/AdminPages/AddGatepass'
import UpdateGatepass from './components/AdminPages/UpdateGatepass'
import UpdateCertificate from './components/AdminPages/UpdateCertificate'
import AddHod from './components/AdminPages/AddHod'
import AddTask from './components/AdminPages/AddTask'
import UpdateTask from './components/AdminPages/UpdateTask'
import HodHome from './components/HodPages/HodHome'
// import ForgotPass from './components/UserPages/ForgotPass'
import AdminComplaints from './components/AdminPages/AdminComplaints'
import StudentMaster from './components/layouts/StudentPanel/StudentMaster'
import ManageHod from './components/AdminPages/ManageHod'
import UpdateHod from './components/AdminPages/UpdateHod'
import ManageDepartment from './components/AdminPages/ManageDepartment'
import ManageCourse from './components/AdminPages/ManageCourse'
import UpdateDepartment from './components/AdminPages/UpdateDepartment'
import UpdateCourse from './components/AdminPages/UpdateCourse'
import ManageStudent from './components/AdminPages/ManageStudent'
import ViewTask from './components/AdminPages/ViewTask'
import ManageCertificate from './components/AdminPages/ManageCertificate'
import ManageGatePass from './components/AdminPages/ManageGatePass'
import ComplaintResponse from './components/HodPages/ComplaintResponse'
import ViewCertificate from './components/UserPages/ViewCertificate'
import ViewGatepass from './components/UserPages/ViewGatepass'
import ViewComplaint from './components/UserPages/ViewComplaint'
import AdminProfile from './components/AdminPages/AdminProfile'
// import ChangePassword from './components/AdminPages/changePassword'
import ChangePassword from './components/AdminPages/ChangePassword'
import HodChangePassword from './components/HodPages/HodChangePassword'
import StudentChangePassword from './components/UserPages/StudentChangePassword'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/department' element={<Department />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path='/student' element={<StudentMaster />}>
            <Route path='/student' element={<Home />} />
            <Route path='/student/about' element={<About />} />
            <Route path='/student/contact' element={<Contact />} />
            <Route path='/student/courses' element={<Courses />} />
            <Route path='/student/department' element={<Department />} />
            <Route path='/student/complaints' element={<Complaints />} />
            <Route path='/student/viewcomplaints' element={<ViewComplaint />} />
            <Route path='/student/status' element={<ViewStatus />} />
            <Route path='/student/certificates' element={<Certificates />} />
            <Route path='/student/viewcertificates' element={<ViewCertificate />} />
            <Route path='/student/gatepass' element={<Gatepass />} />
            <Route path='/student/viewgatepass' element={<ViewGatepass />} />
            <Route path='/student/profile' element={<ManageProfile />} />
            <Route path='/student/changePassword' element={<StudentChangePassword />} />
            <Route path='/student/login' element={<Login />} />
            <Route path='/student/register' element={<Register />} />
          </Route>

          <Route path='/admin' element={<AdminMaster />}>
            <Route path='/admin' element={<AdminDashboard />} />


            <Route path='/admin/department_add' element={<AddDepartment />} />
            <Route path='/admin/department_manage' element={<ManageDepartment />} />
            <Route path='/admin/department_update/:id' element={<UpdateDepartment />} />

            <Route path='/admin/course_add' element={<AddCourse />} />
            <Route path='/admin/course_update/:id' element={<UpdateCourse />} />
            <Route path='/admin/course_manage' element={<ManageCourse />} />

            <Route path='/admin/student_add' element={<AddStudent />} />
            <Route path='/admin/student_manage' element={<ManageStudent />} />
            <Route path='/admin/student_update/:id' element={<UpdateStudent />} />

            <Route path='/admin/certificate_add/:_id' element={<AddCertificate />} />
            <Route path='/admin/manageCertificate' element={<ManageCertificate />} />
            <Route path='/admin/certificate_update' element={<UpdateCertificate />} />

            <Route path='/admin/gatepass_add/:_id' element={<AddGatepass />} />
            <Route path='/admin/manageGatepass' element={<ManageGatePass />} />
            <Route path='/admin/gatepass_update' element={<UpdateGatepass />} />


            <Route path='/admin/hod_add' element={<AddHod />} />
            <Route path='/admin/hod_manage' element={<ManageHod />} />
            <Route path='/admin/hod_update/:id' element={<UpdateHod />} />
            <Route path='/admin/task_add/:complaintId' element={<AddTask />} />
            <Route path='/admin/viewTask' element={<ViewTask />} />
            <Route path='/admin/task_update' element={<UpdateTask />} />
            <Route path='/admin/complaints' element={<AdminComplaints />} />
            <Route path='/admin/profile' element={<AdminProfile />} />
            <Route path='/admin/changepassword' element={<ChangePassword/>} />


          </Route>
          <Route path='/hod' element={<HodMaster />}>
            <Route path='/hod' element={<HodHome />} />
            <Route path='/hod/hodcourses' element={<HodCourses />} />
            <Route path='/hod/hoddept' element={<HodDept />} />
            <Route path='/hod/hodtask' element={<HodTask />} />
            <Route path='/hod/hodstatus' element={<HodStatus />} />
            <Route path='/hod/hodprofile' element={<HodProfile />} />
            <Route path='/hod/changepassword' element={<HodChangePassword />} />

            <Route path='/hod/complaintResponse/:id' element={<ComplaintResponse />} />

          </Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
