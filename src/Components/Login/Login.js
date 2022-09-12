import React,{ useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshTokenSetup';

const clientId =
  '294919751121-s8ulcrq81jsivanrv88mub8tmqpv6jjt.apps.googleusercontent.com';

function Login() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    localStorage.setItem('user', JSON.stringify(res.profileObj));
    setUser(res.profileObj);
    navigate("/",{state:{payload: user}});
    alert(
      `Logged in successfully welcome ${res.profileObj.name}`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  return (
    <div>
      <h1>Login Here</h1>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}

      />
    </div>
  );
}

export default Login;