import React from 'react';
import { Navigate, } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

    
    const PrivateRoute = ({ children }) => {
      const {user,isLoading} =useAuth();
      if(isLoading){
        return (
          <div class="spinner-grow text-dark text-center" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        )
      }
  return  user.email ? children : <Navigate to="/login" />;
};

export default PrivateRoute;