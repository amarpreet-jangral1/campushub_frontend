import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; 
import PageHeader from "../AdminPages/PageHeader";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import dayjs from "dayjs";
export default function PaymentHistory(){
  var[payment, setpayment]=useState([])
  const getpayment=()=>{
    axios.post("http://localhost:9000/apis/payment/getall",{},{headers: { Authorization: sessionStorage.getItem("token") }})
    .then((res)=>{
    console.log("res of all payments is",res);
    const allPayments = res.data.data;
    const sessionId=sessionStorage.getItem("_id")
    console.log("session storage _id stored is",sessionId);
    const filteredPayments = allPayments.filter(
      (payment) => payment.sessionId?._id === sessionId
    );
    console.log("Filtered user payments are", filteredPayments);
      setpayment(filteredPayments);

    
    })
    .catch((err)=>{
      console.log("error is",err);
      
    })
  }
useEffect(() => {
getpayment()
}, [])
    return(
        <main className="main">
        {/* Hero Section */}
        <PageHeader
          backgroundImage="/assets/img/photo15.jpg"
          title="Payment History"
        />
        <ToastContainer position="top-center" autoClose={2000} theme="colored" />
        {/* /Hero Section */}
        <div className="container  py-5 my-5">
            <div className="table-responsive"  data-aos-delay={500}>
            {
              payment.length===0 ? (
                <div className="text-center text-muted fs-4">No Payment Yet</div>
              ):(
            <table className="table  table-hover" style={{cursor:"pointer"}}>
            {/* <table className="table table-bordered  table-hover" style={{cursor:"pointer"}}> */}
            <thead className="table text-uppercase text-center">
            {/* <thead className="table-dark text-uppercase text-center"> */}
              <tr>
                <th>Sr No.</th>
                <th>Email</th>
                <th>Semester</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((payment, index) => (
                <tr key={index} className="text-center">
                  <td>{index+1}</td>
                  <td>{payment.userId.email}</td>
                  <td>{payment.sem}</td>
                  <td>{payment.amount}</td>
                  <td>{dayjs(payment.createdAt).format('MMM DD, YYYY - hh:mm A')}</td>
                  <td>{payment.paymentStatus==="unpaid"?"Unpaid ❌":"Paid ✅"}</td>
                  
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