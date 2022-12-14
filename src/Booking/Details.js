import React from 'react'
import { useLocation } from "react-router-dom";
import Footer from '../Home/Footer';
import Header from "../Home/Header";
import Review from '../Review/Review';
import "./Details.css"
import Reserve from './Reserve';

function Details() {
  const location = useLocation();
  const { propt } = location.state;
  console.log("this is propt",propt);
  const photos  = (propt.allImgs).split(",");
  console.log("photos",photos);
  return (
    <>
    <Header />
    <div className='parentContainer'>
      <div className='details'>
        <h2>{propt.title}</h2>
        <img alt ="" src = {propt.imgUrl} className = "main-img"></img>
        <br /><br />
        <h2>The Entire Villa hosted by {propt.hostedby}</h2>
        <Reserve data = {propt} />
        <Review revs = {propt} />
      </div>
      <div className='photoGrid'>
           {
            photos.map((photo, index) =>{
              const radius = (index === photos.length-1 || index === 1) ? 15 : 0;
              return (
                 <img alt="" className ="photos" src = {photo} style = {{borderTopRightRadius:`${radius}px`,borderBottomRightRadius:`${radius}px`}}/>
              )}
          )}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Details