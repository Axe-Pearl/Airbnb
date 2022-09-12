import React from 'react';
import './Home.css';
import Header from "./Header"
import Footer from './Footer';
import Card from '../DisplayHome/Card'


function Home() {
    return (
        <div className='home'>
            <Header />
            <div className='homeContainer'>
               <Card />
            </div> 
            <Footer />
        </div>
    )
}

export default Home