import { Outlet, useNavigate } from "react-router-dom";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function AdminMaster(){
    const nav=useNavigate()
    useEffect(()=>{
        var userType = sessionStorage.getItem("userType")
        if(userType != 1){
        nav("/login")
        }
    },[])
    return(
        <>
        <AdminHeader/>
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />
        <Outlet/>
        <AdminFooter/>
        </>
    )
}