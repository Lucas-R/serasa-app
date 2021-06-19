import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Propostas from "./Pages/Propostas";
import Notfound from "./Pages/Not-found";

export default function mainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/Propostas/:nome/:cpf/:email/:ocup/:renda/:id" element={<Propostas />}/>
            </Route>

            <Route path="/*" element={ <Notfound /> }/>
        </Routes>
    );
}