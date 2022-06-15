import React, {useState} from 'react'
import RegisterForm from '../components/Register/RegisterForm';
import Notification from '../components/Notification/Notification';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();

  const registerUser = async (inputs) => {
    try{
      const res = await fetch(`https://lobster-app-qc8ib.ondigitalocean.app/v1/auth/register`, 
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        }, 
        body: JSON.stringify(inputs),
      });
      const data = await res.json();

      if(data.err){
        return setError(data.err)
      } 

      navigate("/");
    } catch(err){
      setError(err.message);
    }
  };

  return (
    <>
      {error && <Notification>{error}</Notification>}
      <RegisterForm handleSubmit={registerUser}/>
    </>
  )
}

export default Register;