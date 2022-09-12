import React from 'react';
import Properties from "../allproperties";
import { Link } from "react-router-dom";
import './Card.css'

function Card() {
    const handleClick = (property)=>{
      console.log("this property",property);
    }
    return (
        <>
          {
            Properties.map((Property) =>{
                return(
                  <Link to = "/bookmychoice" state = {{propt: Property}} style ={{textDecoration:"none",color:"black"}}><div className='card' onClick={()=>handleClick(Property)}>
                    <img src={Property.imgUrl} alt="" />
                    <div className="card__info">
                     <h3>{Property.location}</h3>
                     <p>{Property.special}</p>
                     <p>{Property.distance}</p>
                     <h3>₹{Property.price}</h3>
                    </div>
                  </div></Link>
                );
            })
          }  
        </>
    )
}

export default Card