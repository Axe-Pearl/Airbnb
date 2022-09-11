import React from 'react';
import Properties from "../allproperties";
import './Card.css'

function Card() {
    return (
        <>
          {
            Properties.map((Property) =>{
                return(
                  <div className='card'>
                    <img src={Property.imgUrl} alt="" />
                    <div className="card__info">
                     <h2>{Property.title}</h2>
                     <h4>{Property.description}</h4>
                     <h3>{Property.price}</h3>
                    </div>
                  </div>
                );
            })
          }  
        </>
    )
}

export default Card