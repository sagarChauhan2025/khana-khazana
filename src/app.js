import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
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
            }
            
        ]
    }
])
const root =  createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}>
    <App/>
</RouterProvider>);