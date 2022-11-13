import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
	Outlet,
	Link
} from "react-router-dom";
import LoginPage from './components/loginPage/loginPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App username="user1"/>
	},
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/signup",
    element:<h1>Signup page</h1>
  },
  {
    path:"/2",
    element:<App username="user2"/>
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

