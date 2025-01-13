import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
function App(){
    return (
        <>
        <Header/>
        <Body/>
        </>
    )
}

const root =  createRoot(document.getElementById('root'));
root.render(<App/>);