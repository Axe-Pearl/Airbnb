import React from 'react'
import "./Reserve.css";
import { useNavigate } from "react-router-dom";

function Reserve({data}) {
  const navigate = useNavigate();
  const handleClick = ()=>{
    const isLoggedIn = localStorage.getItem("user");
    console.log("islogged",isLoggedIn);
    isLoggedIn === "null" ? navigate("/signin"):navigate("/booked");
  }
  return (
    <>
     <div className='reserveContainer'>
        <h3>Subtotal:{data.price} night</h3>
        <button onClick = {handleClick} className='reserve-btn'>Reserve</button>
     </div>
    </>
  )
}

export default Reserve