import { Outlet, useNavigate } from "react-router-dom";
import HodFooter from "./HodFooter";
import HodHeader from "./HodHeader";
import { useEffect } from "react";

export default function HodMaster(){
    const nav=useNavigate()
    useEffect(()=>{
        var userType = sessionStorage.getItem("userType")
        if(userType != 2){
        nav("/login")
        }
    },[])
    return(
        <>
        <HodHeader/>
        <Outlet/>
        <HodFooter/>
        </>
    )
}