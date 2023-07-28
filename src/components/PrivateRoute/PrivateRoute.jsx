import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Navigate to="/login" replace /> : <>{component}</>;
};

export default PrivateRoute;
