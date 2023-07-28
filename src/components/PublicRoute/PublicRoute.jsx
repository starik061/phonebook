import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/" replace /> : <>{component}</>;
};

export default PublicRoute;
