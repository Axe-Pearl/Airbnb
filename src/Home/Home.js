import React from 'react';
import './Home.css';
import Header from "./Header"
import Card from '../DisplayHome/Card'


function Home() {
    return (
        <div className='home'>
            <Header />
            <div style = {{borderTop:"1px grey solid", height:"0px"}}></div>
            <div className='homeContainer'>
               <Card />
            </div> 
        </div>
    )
}

export default Home