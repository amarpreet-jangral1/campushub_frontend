import { Outlet } from "react-router-dom";
import HodFooter from "./HodFooter";
import HodHeader from "./HodHeader";

export default function HodMaster(){
    return(
        <>
        <HodHeader/>
        <Outlet/>
        <HodFooter/>
        </>
    )
}