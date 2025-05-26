import { Outlet, useNavigate } from "react-router-dom";
import StudentHeader from "./StudentHeader";
import Footer from "../UserPanel/Footer";
import { useEffect } from "react";

export default function StudentMaster(){
    const nav=useNavigate()
    useEffect(()=>{
        var userType = sessionStorage.getItem("userType")
        if(userType != 3){
        nav("/login")
        }
    },[])
    return(
        <>
        <StudentHeader/>
        <Outlet/>
        <Footer/>
        </>
    )
}