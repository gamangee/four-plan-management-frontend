import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import { worker } from './mocks/worker';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const App = lazy(() => import('./App'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Login = lazy(() => import('./pages/user/Login'));
const Signup = lazy(() => import('./pages/user/SignUp'));
const UserAnnaul = lazy(() => import('./pages/user/UserAnnaul'));
const UserInfo = lazy(() => import('./pages/user/UserInfo'));
const Main = lazy(() => import('./pages/Main'));
const Management = lazy(() => import('./pages/admin/Management'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <DarkModeProvider>
        <NotFound />
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
        <NotFound />
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
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
