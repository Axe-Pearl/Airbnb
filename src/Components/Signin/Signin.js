import React, { useEffect } from 'react'
import { gapi } from "gapi-script";
import Login from "../Login/Login";

const clientId = "294919751121-s8ulcrq81jsivanrv88mub8tmqpv6jjt.apps.googleusercontent.com";

function Signin() {
    useEffect(()=>{
       function start(){
        gapi.client.init({
            clientId:clientId,
            scope:""
        })
       };
       gapi.load("client:auth2",start)
    });
  return (
    <div>
        <Login />
    </div>
  )
}

export default Signin