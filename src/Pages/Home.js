import React from "react";
import { Outlet } from "react-router-dom";
import "../Styles/Home.css";

export default function Home(){
    return(
        <>
            <div className="home">
                <Outlet />
            </div>
        </> 
    )
}