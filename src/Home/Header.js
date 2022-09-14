import React, { useState } from 'react'
import './Header.css'
import Logout from '../Components/Login/Logout';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar } from "@mui/material"
import { Link } from "react-router-dom";

function Header() {
  const [opened,setOpened] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem('user'));
  console.log("CUrrent user: ",currentUser);
  const handleOpener = ()=>{
    const dropBox  = document.querySelector(".options");
    if(opened) dropBox.style.display = "none";
    else{
        dropBox.style.display = "flex";
        dropBox.style.flexDirection ="column";
    }
    setOpened(!opened);
  }
  return (
    <>
    <div className='header'>
    <Link to='/'>
        <img
            className="icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt="airbnb-icon"
        />
    </Link>
    <div className='searchContainer'>
        <input type="text" />
        <SearchIcon />
    </div>

    <div className='header__right'>
        <p>Become a host</p>
        <LanguageIcon />
        {currentUser ? <img alt =""className ="profilepic" src={currentUser.imageUrl} onClick = {handleOpener} />:<Avatar className ="avatar" onClick = {handleOpener} />}
            <div className="options">
                {currentUser ? <span>Welcome {currentUser.name}</span>:<Link to = "/signin" className='links'><span>Login</span></Link>}
                {currentUser ? <Logout />:""}
                <div style={{width:"100%", borderTop:"1px solid lightgray",margin:"3px 0px"}}></div>
                <span>Host your Home</span>
                <span>Host an experience</span>
                <span>Help</span>
        </div>
    </div>
</div>
<div style = {{borderTop:"0.5px lightgrey solid", height:"0px",position:"sticky",zIndex:-1}}></div>
</>
  )
}

export default Header