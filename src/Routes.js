import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Propostas from "./Pages/Propostas";

export default function mainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/Propostas" element={<Propostas />}/>
            </Route>

            <Route path="/*" element={<h1> Not-Found </h1>}/>
        </Routes>
    );
}