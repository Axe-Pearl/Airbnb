import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
const clientId =
  '294919751121-s8ulcrq81jsivanrv88mub8tmqpv6jjt.apps.googleusercontent.com';

function Logout() {
  const navigate = useNavigate();
  const onSuccess = () => {
    localStorage.setItem("user", null);
    console.log('Logout made successfully');
    alert('Logout made successfully ');
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;