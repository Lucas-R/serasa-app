import React, {useState, useEffect} from "react";
import "../Styles/Propostas.css";
import data from "../Component/Propostas.json";

export default function Propostas(){
    const [propostas, setPropostas] = useState([]);
    useEffect(() => {
        setPropostas(data);
    }, [propostas]);

    const handleProposta = (propostaId) => {
        alert(propostaId);
    }
    
    propostas.map((proposta) =>console.log(proposta));

    return(
        <>
            <h1 className="proposta-title"> Estas são as melhores propostas para você : </h1>

            {propostas.map((proposta) =>
                <div className="propostas" key={proposta.id}>
                    <div className="proposta">
                        <div className="proposta-header">
                            <h1> {proposta.title} </h1>
                            <p> {proposta.bank} </p>
                        </div>
                        <p id="proposta"> {proposta.desc} </p>
                        <button onClick={() => handleProposta(proposta.id)} className="proposta-button proposta-more"> Saber mais </button>
                        <button className="proposta-button proposta-confirm"> Contratar </button>
                    </div>
                </div>
            )}
        </>
    )
}