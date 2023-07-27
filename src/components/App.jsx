import { Route, Routes } from 'react-router-dom';
import SharedHeader from './SharedHeader/SharedHeader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
import RegisterPAge from 'pages/RegisterPAge';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedHeader />}>
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
      </Route>
    </Routes>
  );
};
