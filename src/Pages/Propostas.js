import React, {useState, useEffect} from "react";
import { Formik, Field, Form } from "formik";
import Schema from "../Component/Schema";
import "../Styles/Propostas.css";
import data from "../Component/Propostas.json";
import { useParams, useNavigate } from "react-router-dom";

export default function Propostas(){
    const navigate = useNavigate();
    const [propostas, setPropostas] = useState([]);
    const [proposta, setProposta] = useState([]);
    const url    = useParams();
    const [user, setUser] = useState([]);
    const link = (
        user.nome + '/' + 
        user.cpf + '/' + 
        user.email + '/' + 
        user.ocup + '/' + 
        user.renda
    );

    useEffect(() => {
        setUser(url);
    },[url]);

    //MODAL
    const handleClose = () => {
        document.getElementById("lente").classList.remove("active");
    }
    const handleMore = (propostaId) => {
        document.getElementById("lente").classList.add("active");
        navigate("/Propostas/"+ link + "/" + propostaId);
    }
    useEffect(() => {
        propostas.map(proposta => {
           if(proposta.id == url.id){
               return setProposta([
                   {id: proposta.id},
                   {title: proposta.title},
                   {bank: proposta.bank},
                   {desc: proposta.desc},
                   {class: proposta.class}
               ])
           }
       })
   },[url.id]) 

   useEffect(() => {
       setPropostas(data);
   }, [propostas]);

    function onSubmit(values){
        console.log(values)
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
                        <p> {modal.desc} </p>
                        <p> {modal.class} </p>
                    </div>
                    )}
                    <Formik 
                        validationSchema = {Schema}
                        validateOnMount
                        onSubmit = {onSubmit}
                        initialValues = {{
                            nome: user.nome,
                            cpf: user.cpf,
                            email: user.email,
                            ocup: user.ocup,
                            renda: user.renda
                        }}
                        render  = {({errors, isValid}) => (
                            <Form id="form-avaliation">
                                <div className="box-input">
                                    <small className="form-label"> Nome completo: {errors.nome && (<span>{errors.nome}</span>)}</small>
                                    <Field name="nome" className="modal-input" type="text"  placeholder="Ex.: Lucas Rodrigues" />
                                </div>
                                <div className="box-input">
                                    <small className="form-label"> CPF : {errors.cpf && (<span>{errors.cpf}</span>)}</small>
                                    <Field name="cpf" className="modal-input" type="text" placeholder="Ex.: 000.000.000-00"/>
                                </div>
                                <div className="box-input">
                                    <small className="form-label"> Email : {errors.email && (<span>{errors.email}</span>)}</small>
                                    <Field  name="email" className="modal-input" type="text" placeholder="Lucas@email.com"/>
                                </div>
                                <div className="box-input">
                                    <small className="form-label"> Ocupação : {errors.ocup && (<span>{errors.ocup}</span>)}</small>
                                    <Field  name="ocup" className="modal-input" type="text" placeholder=" Ex.: Médico "/>
                                </div>
                                <div className="box-input">
                                    <small className="form-label"> Valor da salario : {errors.renda && (<span>{errors.renda}</span>)}</small>
                                    <Field name="renda" className="modal-input" type="text" placeholder="Ex.: R$ 1.000,00"/>
                                    <small> Se houver renda extra, somar os valores. </small>
                                </div>
                                <button type="submit" className="form-button" disabled={!isValid}> Contratar </button>
                            </Form>
                        )}
                    />
                </div>
            </div>
        </>
    )
}