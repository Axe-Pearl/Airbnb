import React, { useState } from 'react';
import "./Review.css"
import { useNavigate } from 'react-router-dom';

function Review({revs}) {
  const navigate = useNavigate();
  console.log("allrevs",revs.reviews);
  const [review, setReview] = useState("");
  const [all, setAll] = useState([]);
  const handleChange =(e)=>{
    const rev = e.target.value;
    setReview(rev);
  }
  const handleSubmit =()=>{
    const isLoggedIn = localStorage.getItem("user");
    console.log("islogged",isLoggedIn);
    if(isLoggedIn == "null")  navigate("/signin");
   console.log("rev",revs.reviews);
   if(review!==""){
    const newArr = [...revs.reviews, ...all];
    newArr.push(review);
    setAll(newArr);
   }
   else alert("Cant be blank");
  }
  console.log("all",all);
  return (
    <div className='feedback'>
        <h1>Give Your Feedback</h1>
        <textarea onChange={handleChange}></textarea>
        <button className = "review-btn" onClick={handleSubmit}>Submit Feedback</button>
        <div className='allreviews'>
            <h1>All Reviews</h1>
            {
                all.map((one)=>{
                    return(
                        <>
                        <div className='Areview'>
                          <p>{one}</p>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Review