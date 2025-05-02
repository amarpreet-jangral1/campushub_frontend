import { Outlet } from "react-router-dom";
import StudentHeader from "./StudentHeader";
import Footer from "../UserPanel/Footer";

export default function StudentMaster(){
    return(
        <>
        <StudentHeader/>
        <Outlet/>
        <Footer/>
        </>
    )
}