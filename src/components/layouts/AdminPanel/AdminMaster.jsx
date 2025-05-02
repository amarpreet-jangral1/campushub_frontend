import { Outlet } from "react-router-dom";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import { ToastContainer } from "react-toastify";

export default function AdminMaster(){
    return(
        <>
        <AdminHeader/>
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />
        <Outlet/>
        <AdminFooter/>
        </>
    )
}