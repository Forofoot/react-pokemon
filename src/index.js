import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider, } from "react-router-dom";
import Pokemon from './containers/Pokemon';
import Bookmark from './containers/Bookmark';
import Type from './containers/Type';


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
    path:'/pokemon/:slug',
    element: <Pokemon/>
  },
  {
    path:'/bookmark',
    element: <Bookmark/>
  },
  {
    path:'/type',
    element: <Type/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
