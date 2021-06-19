import React from "react";
import { Outlet } from "react-router-dom";
import "../Styles/Home.css";

export default function Home(){
    
    return(
        <>
            <div className="home">
                <div className="content-home" id="content-home">
                    <div className="content">
                        <h1> Bem Vindo </h1>

                        <h2> - Esta a procura de crédito ? </h2>
                        <h2> - Sim ! </h2>
                        <h2> Então esta no lugar certo. </h2>
                        <h3> A empresa CréditoParaTodxs é uma empresa multinacional que ajuda milhões de pessoas a conseguirem crédito pessoal. </h3>
                    </div>
                </div>
                <div className="content-proposta" id="content-proposta">
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </> 
    )
}