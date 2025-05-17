import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; 
import PageHeader from "./PageHeader";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import dayjs from "dayjs";
import PulseLoader from "react-spinners/PulseLoader"; 
import ApiServices from "../ApiServices";

export default function AllPayments(){
  var[payment, setpayment]=useState([])
  const [loading, setLoading] = useState(true); 

  const getpayment=()=>{
  setLoading(true);

    // axios.post("http://localhost:9000/apis/payment/getall",{},{headers: { Authorization: sessionStorage.getItem("token") }})
    ApiServices.allpayment()
    .then((res)=>{
      console.log("payments data is",res);
      setpayment(res.data.data)
    })
    .catch((err)=>{
      console.log("error is",err);
      
    })
    .finally(() => {
        setLoading(false); // ✅ Stop loader
    });
  }
useEffect(() => {
getpayment()
}, [])
    return(
        <main className="main">
        {/* Hero Section */}
        <PageHeader
          backgroundImage="/assets/img/photo15.jpg"
          title="View Fees Details"
        />
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />


        {/* /Hero Section */}
        <div className="container  py-5 my-5">
            <div className="table-responsive"  data-aos-delay={500}>
            {
            loading ? (
              <div className="text-center text-muted fs-4" style={{ height: "200px" }}>
              {/* <PulseLoader color="#36d7b7" size={15} /> */}
              <PulseLoader color="#3fb2d1" size={15} loading={loading}/> {/* Bootstrap primary color */}
              </div>
            ) : (
            <table className="table table-bordered  table-hover" style={{cursor:"pointer"}}>
            <thead className="table-dark text-uppercase text-center">
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Semester</th>
                <th>Phone Number</th>
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((payment, index) => (
                <tr key={index} className="text-center">
                  <td>{index+1}</td>
                  <td>{payment.userId.name}</td>
                  <td>{payment.userId.email}</td>
                  <td>{payment.sem}</td>
                  <td>{payment.userId.contact}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.paymentStatus==="unpaid"?"Unpaid ❌":"Paid ✅"}</td>
                  {/* <td>{payment.createdAt}</td> */}
                  <td>{dayjs(payment.createdAt).format('MMM DD, YYYY - hh:mm A')}</td>
                  
                  
                </tr>
              ))}
            </tbody>
          </table>
           
            )
          }
        </div>
        </div>
      </main>
    )
}