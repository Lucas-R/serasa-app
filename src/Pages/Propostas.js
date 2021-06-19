import React, {useState, useEffect} from "react";
import "../Styles/Propostas.css";
import data from "../Component/Propostas.json";
import { useParams, useNavigate } from "react-router-dom";

export default function Propostas(){
    const [propostas, setPropostas] = useState([]);
    const [proposta, setProposta] = useState([]);
    const url    = useParams();
    const [user, setUser] = useState([]);
    const link = (user.nome + '/' + user.cpf + '/' + user.email + '/' + user.ocup + '/' + user.renda);

    function handleChange(ev){
        const fieldName = ev.target.getAttribute('name');
        const value = ev.target.value;
        setUser({
            ...user,
            [fieldName]: value,
        });
    }

    useEffect(() => {
        setUser(url);
    },[url]);

    useEffect(() => {
         propostas.map(proposta => {
            if(proposta.id == url.id){
                return setProposta([
                    {id: proposta.id},
                    {title: proposta.title},
                    {bank: proposta.bank},
                    {desc: proposta.desc},
                    {require: proposta.require}
                ])
            }
        })
    },[url.id])
    
    useEffect(() => {
        setPropostas(data);
    }, [propostas]);

    const handleClose = () => {
        document.getElementById("lente").classList.remove("active");
    }

    const handleMore = (propostaId) => {
        navigate("/Propostas/"+ link + "/" +propostaId);
        document.getElementById("lente").classList.add("active");
    }
    
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate("/Propostas/"+ link + "/" + url.id);
    }

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
                        <div className="proposta-desc">
                            <p id="proposta"> {proposta.desc} </p>
                        </div>
                        <button onClick={() => handleMore(proposta.id)} className="proposta-button proposta-more"> Saber mais </button>
                    </div>
                </div>
            )}

            <div className="lente" id="lente">
                <div className="modal">
                    <button className="modal-button" onClick={handleClose}> X </button>
                    {proposta.map((modal) =>
                    <div key={modal.id}>
                        <h1>{modal.title}</h1>
                        <p> {modal.bank} </p>
                        <p> {modal.desc} </p>
                        <p> {modal.require} </p>
                    </div>
                    )}
                    <form>
                        <div className="modal-input-box">
                            <label> Nome completo </label>
                            <input name="nome" onChange={handleChange} value={user.nome} />
                        </div>
                        <div className="modal-input-box">
                            <label> CPF </label>
                            <input name="cpf" onChange={handleChange} value={user.cpf} />
                        </div>
                        <div className="modal-input-box">
                            <label> Email </label>
                            <input name="email" onChange={handleChange} value={user.email} />
                        </div>
                        <div className="modal-input-box">
                            <label> Ocupação </label>
                            <input name="ocup" onChange={handleChange} value={user.ocup} />
                        </div>
                        <div className="modal-input-box">
                            <label> Renda </label>
                            <input name="renda" onChange={handleChange} value={user.renda} />
                        </div>
                    </form>
                    <button onClick={handleConfirm} className="proposta-button proposta-confirm"> Contratar </button>
                </div>
            </div>
        </>
    )
}