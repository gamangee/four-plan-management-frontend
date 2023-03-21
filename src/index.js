import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import NotFound from './pages/NotFound';
import Login from './pages/user/Login';
import Signup from './pages/user/SignUp';
import UserAnnaul from './pages/user/UserAnnaul';
import UserInfo from './pages/user/UserInfo';
import Main from './pages/Main';
import Management from './pages/admin/Management';
import AdminLogin from './pages/admin/AdminLogin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <DarkModeProvider>
        <NotFound />,
      </DarkModeProvider>
    ),
    children: [
      { index: true, element: <Login /> },
      { path: '/main', element: <Main /> },
      { path: '/signup', element: <Signup /> },
      { path: '/userinfo', element: <UserInfo /> },
      { path: '/userannaul', element: <UserAnnaul /> },
    ],
  },
  {
    path: '/admin',
    element: <App />,
    errorElement: (
      <DarkModeProvider>
        <NotFound />,
      </DarkModeProvider>
    ),
    children: [
      { index: true, element: <AdminLogin /> },
      { path: '/admin/main', element: <Main /> },
      { path: '/admin/management', element: <Management /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
