import React from 'react'
import '../App.css'

const Home = () => {

    const handleLogin = () => {
     
        window.location.href = '/login';
    };

    const handleSignup = () => {
     
        window.location.href = '/signup';
    };

    return (
      <div className='HomeCont'>
        <h1>Welcome to MoEngage Assignment</h1>
        <p>Please login or signup to continue.</p>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </div>
    );
  };
  
  export default Home;
  