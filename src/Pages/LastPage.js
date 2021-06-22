import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Component/Propostas.json";

export default function LastPage(){
    const url = useParams();
    const [proposta, setProposta] = useState([]);

    useEffect(() => {
        data.map(proposta => {
           if(url.id == proposta.id){
               return setProposta(proposta);
           }
       })
   },[]);

    return(
        <>
            <h1> Muito Obrigado {url.nome} </h1>
            <h2> Crédito Para Todxs agradece pela confiança </h2>
            <br/>
            <p> A proposta de crédito contratada foi a {proposta.title} do banco {proposta.bank}, sua analise de credito foi baseada {proposta.subtitle}. </p>
            <p> Enviaremos os dados desta proposta para o email {url.email} </p>   
        </> 
    )
}