import React, {useState, useEffect} from "react";
import { Formik, Field, Form } from "formik";
import Schema from "../Component/Schema";
import "../Styles/Propostas.css";
import data from "../Component/Propostas.json";
import { useParams, useNavigate } from "react-router-dom";

export default function Propostas(){
    const navigate = useNavigate();
    const [propostas, setPropostas] = useState([]);
    const [modal, setModal] = useState([]);
    const url    = useParams();
    const nome  =    url.nome;
    const cpf   =     url.cpf;
    const email =   url.email;
    const ocup  =     url.ocup;
    const renda =   url.renda;
    const link  = (
        nome    + '/' + 
        cpf     + '/' + 
        email   + '/' + 
        ocup    + '/' + 
        renda
    );

    console.log(link)

    useEffect(() => {
        data.map(proposta => {
           if(renda >= proposta.class){
               return setPropostas(propostas =>[...propostas, proposta]);
           }
       })
    },[renda]);

    //MODAL
    const handleClose = () => {
        document.getElementById("lente").classList.remove("active");
    }
    const handleMore = (propostaId) => {
        document.getElementById("lente").classList.add("active");
        navigate("/Propostas/"+ link + "/" + propostaId);
    }
   
   useEffect(() => {
        propostas.map(modal => {
            if(url.id == modal.id){
                return setModal([
                    {id: modal.id},
                    {title: modal.title},
                    {subtitle: modal.subtitle},
                    {desc: modal.desc},
                    {class: modal.class}
                ]);
            }
        })
    },[url.id]);

    function onSubmit(values){
        const link = (
            values.nome    + '/' + 
            values.cpf     + '/' + 
            values.email   + '/' + 
            values.ocup    + '/' + 
            values.renda
        );

        navigate("/Last-Page/"+ link + "/" + url.id);
    }

    return(
        <>
            <h1 className="proposta-title"> Estas são as melhores propostas para você : </h1>
            {propostas.map(proposta =>
                <div className="propostas" key={proposta.id}>
                    <div className="proposta">
                        <div className="proposta-header">
                            <h1> {proposta.title} </h1>
                            <p> {proposta.bank} </p>
                        </div>
                        <div className="proposta-desc">
                            <p id="proposta"> {proposta.desc} </p>
                        </div>
                        <small> {proposta.subtitle} </small>
                        <button onClick={() => handleMore(proposta.id)} className="proposta-button proposta-more"> Saber mais </button>
                    </div>
                </div>
            )}

            <div className="lente" id="lente">
                <div className="modal">
                    <button className="modal-button" onClick={handleClose}> X </button>
                    {modal.map((modal) =>
                    <div>
                        <h1>{modal.title}</h1>
                        <p> {modal.desc} </p>
                    </div>
                    )}
                    <Formik 
                        initialValues = {{
                            nome: nome,
                            cpf: cpf,
                            email: email,
                            ocup: ocup,
                            renda: renda,
                        }}
                        validationSchema = {Schema}
                        validateOnMount
                        onSubmit = {onSubmit}
                        render  = {({values, errors, isValid}) => (
                            <Form>
                                <div className="box-input">
                                    <small className="form-label"> Nome completo: {errors.nome && (<span>{errors.nome}</span>)}</small>
                                    <Field name="nome" value={values.nome} className="modal-input" type="text"  placeholder="Ex.: Lucas Rodrigues" />
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
                                    <label className="form-label"> Valor da salario : {errors.renda && (<span>{errors.renda}</span>)}</label>
                                    <Field as="select" name="renda" className="modal-input">
                                    <option value="0"> Selecione sua renda </option>
                                    <option value="1"> Renda até R$1000,00 </option>
                                    <option value="2"> Renda até R$2.000,00 </option>
                                    <option value="3"> Renda até R$3.000,00</option>
                                    <option value="4"> Renda até R$4.000,00</option>
                                    <option value="5"> Renda até R$5.000,00</option>
                                    <option value="6"> a cima de R$5.000,00</option>
                                    </Field>
                                </div>´
                                <br />
                                <button type="submit" className="form-button" disabled={!isValid}> Contratar </button>
                            </Form>
                        )}
                    />
                </div>
            </div>
        </>
    )
}