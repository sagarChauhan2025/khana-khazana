import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Instamart from "./components/Instamart";
const Instamart = lazy( ()=> import("./components/Instamart"))
function App(){
    return (
        <>
        <Header/>
        <Outlet />
        </>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element:  <Body/>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element : <Contact/>
            },
            {
                path: '/restaurant/:resId',
                element:  <RestaurantMenu/>
            },
            {
                path: '/instamart',
                element: <Suspense fallback = {<h1>loadding....</h1>}><Instamart /></Suspense>
            }
            
        ]
    }
])
const root =  createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}>
    <App/>
</RouterProvider>);