import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";
import HomePage from "./components/HomePage/HomePage";
import Search from "./components/Search/Search";
import ActivityPage from "./components/ActivityPage/ActivityPage";
import AddActivity from "./components/AddActivity/AddActivity";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/about",
                element: <AboutUsPage/>
            },
            {
                path: "/search",
                element: <Search/>
            },

            {
                path: "/activity-page",
                element: <ActivityPage/>
            },

            {
                path: "/add-activity",
                element: <AddActivity/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

