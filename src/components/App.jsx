import { useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import ContactsPage from 'pages/ContactsPage';
import Homepage from 'pages/Homepage';
import LoginPage from 'pages/LoginPage';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

import RegisterPage from '../RegisterPage';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import SharedHeader from './SharedHeader/SharedHeader';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="#757ce8"
        secondaryColor="white"
      />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedHeader />}>
        <Route index element={<Homepage />} />
        <Route
          path="contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        />
        <Route
          path="login"
          element={<PublicRoute component={<LoginPage />} />}
        />
        <Route
          path="register"
          element={<PublicRoute component={<RegisterPage />} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
