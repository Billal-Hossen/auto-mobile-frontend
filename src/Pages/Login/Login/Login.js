import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const {signInUsingGoogle} = useAuth()
  return (
    <div className='text-center'>
      <h1>Login Here</h1>
      <button onClick={signInUsingGoogle} className='btn btn-danger'> Sign in With Google</button>
    </div>
  );
};

export default Login;