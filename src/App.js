import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import './style.css'
import Heading from "./components/Hader";
import BodyLayout from "./components/body";
import About from "./components/About";
import Contact from './components/Contact';
import ErrorMessage from "./components/Errormessage";
import UserLogin from "./utility/userContext";
import {
    createBrowserRouter,
    RouterProvider, Outlet
} from "react-router-dom";
import { Provider } from "react-redux";

import RestaurantList from "./components/RestaurantList"
import appStore from "./utility/appStore";
import CardDetails from "./components/Cart";
const Grasary = lazy(() => import('./components/Grasary'))
const Applayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "saravanan vanakkam"
        }
        setUserName(data.name)
    }, [])
    return (
        <div>
            <Provider store={appStore}>
                <UserLogin.Provider value={{ loggedInUser: userName, setUserName }}>
                    <Heading />

                    <Outlet />
                </UserLogin.Provider>
            </Provider>
        </div>
    );
};
const routComponents = createBrowserRouter([
    {
        path: '/',
        element: <Applayout />,
        children: [
            {
                path: '/',
                element: [<BodyLayout />,]
            },
            {
                path: '/about',
                element: [<About />,]
            },
            {
                path: '/contact',
                element: [<Contact />]
            },
            {
                path: '/restaurantlist/:resid',
                element: [<RestaurantList />]
            },
            {
                path: '/grasary',
                element: <Suspense fallback="loading"><Grasary /></Suspense>
            },
            {
                path: '/cart',
                element: <CardDetails />
            }
        ],
        errorElement: <ErrorMessage />
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routComponents} />)