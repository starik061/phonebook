import { Navigate, Route, Routes } from 'react-router-dom';
import SharedHeader from './SharedHeader/SharedHeader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPAge from 'pages/RegisterPAge';
import PublicRoute from './PublicRoute/PublicRoute';
import Homepage from 'pages/Homepage';

export const App = () => {
  return (
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
          element={<PublicRoute component={<RegisterPAge />} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
