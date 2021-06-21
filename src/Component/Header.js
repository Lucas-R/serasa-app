import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import Schema from "./Schema";
import "../Styles/Header.css"

export default function Header(){
    const navigate = useNavigate();
    function onSubmit(values){
        document.getElementById("content-proposta").classList.add("active");
        document.getElementById("form-avaliation").classList.remove("active");
        document.getElementById("content-home").classList.add("disable");
        const link = (
            values.nome + '/' + 
            values.cpf + '/' + 
            values.email + '/' + 
            values.ocup + '/' + 
            values.renda
        );

        navigate('/Propostas/' + link + "/0");
    }
    
    const handleClickMenu = () => {
        document.getElementById("form-avaliation").classList.toggle("active");
    }

    return(
        <header className="header">
            <nav>
                <a className="logo" href="/"> Crédito Para Todxs </a>
                <div className="menu" onClick={handleClickMenu}>
                    <button className="nav-button"> Consultar </button>
                </div>
                <Formik 
                    validationSchema = {Schema}
                    validateOnMount
                    onSubmit = {onSubmit}
                    initialValues = {{
                        nome: '',
                        cpf: '',
                        email: '',
                        ocup: '',
                        renda: ''
                    }}
                    render  = {({errors, isValid}) => (
                        <Form className="form-avaliation" id="form-avaliation">
                            <h1> Agora precisamos que você se identifique... </h1>
                            <div className="box-input">
                                <label className="form-label"> Nome completo: {errors.nome && (<span>{errors.nome}</span>)}</label>
                                <Field name="nome" type="text"  placeholder="Ex.: Lucas Rodrigues" className="form-input" />
                            </div>
                            <div className="box-input">
                                <label className="form-label"> CPF : {errors.cpf && (<span>{errors.cpf}</span>)}</label>
                                <Field name="cpf" className="form-input" type="text" placeholder="Ex.: 000.000.000-00"/>
                            </div>
                            <div className="box-input">
                                <label className="form-label"> Email : {errors.email && (<span>{errors.email}</span>)}</label>
                                <Field  name="email" className="form-input" type="text" placeholder="Lucas@email.com"/>
                            </div>
                            <div className="box-input">
                                <label className="form-label"> Ocupação : {errors.ocup && (<span>{errors.ocup}</span>)}</label>
                                <Field  name="ocup" className="form-input" type="text" placeholder=" Ex.: Médico "/>
                            </div>
                            <div className="box-input">
                                <label className="form-label"> Valor da salario : {errors.renda && (<span>{errors.renda}</span>)}</label>
                                <Field as="select" name="renda" className="form-input">
                                    <option value="class-F"> até R$1000,00 </option>
                                    <option value="class-E"> entre R$1000,00 e R$2.000,00</option>
                                    <option value="class-D"> entre R$2000,00 e R$3.000,00</option>
                                    <option value="class-C"> entre R$3000,00 e R$4.000,00</option>
                                    <option value="class-B"> entre R$4000,00 e R$4.000,00</option>
                                    <option value="class-A"> a cima de R$5.000,00</option>
                                </Field>
                                <small> Se houver renda extra, somar os valores. </small>
                            </div>
                            <button type="submit" className="form-button" disabled={!isValid}> Avaliar </button>
                        </Form>
                    )}
                />
            </nav>
        </header>
    );
}