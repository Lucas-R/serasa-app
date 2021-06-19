import React, {useState} from "react";
import "../Styles/Header.css"
import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();

    function FormAvaliation({
        initialValues
    }){
    

        const [values, setValues] = useState(initialValues);
    
    
        function handleChange(ev){
            const fieldName = ev.target.getAttribute('name');
            const value = ev.target.value;
            setValues({
                ...values,
                [fieldName]: value,
            });
        }
        return{
            values,  
            handleChange
        }
    }


    const form = FormAvaliation({
        initialValues: {
            nome: '',
            cpf: '',
            email: '',
            ocup: '',
            renda: ''
        }  
    });

    function handleClickSubmit(e) {
        e.preventDefault();
        const link = (form.values.nome + '/' + form.values.cpf + '/' + form.values.email + '/' + form.values.ocup + '/' + form.values.renda);
        document.getElementById("form-avaliation").classList.remove("active");
        document.getElementById("content-home").classList.add("disable");
        document.getElementById("content-proposta").classList.add("active");
        console.log(link)
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
                <form className="form-avaliation" id="form-avaliation" onSubmit={handleClickSubmit}>
                    <h1> Agora precisamos que você se identifique... </h1>
                    <div className="box-input">
                        <label className="form-label"> Nome completo: </label>
                        <input name="nome" onChange={form.handleChange} value={form.values.nome} className="form-input" type="text" placeholder="Ex.: Lucas Rodrigues"/>
                    </div>
                    <div className="box-input">
                        <label className="form-label"> CPF : </label>
                        <input name="cpf" onChange={form.handleChange} value={form.values.cpf} className="form-input" type="text" placeholder="Ex.: 000.000.000-00"/>
                    </div>
                    <div className="box-input">
                        <label className="form-label"> Email : </label>
                        <input name="email" onChange={form.handleChange} value={form.values.email} className="form-input" type="text" placeholder="Lucas@email.com"/>
                    </div>
                    <div className="box-input">
                        <label className="form-label"> Ocupação : </label>
                        <input name="ocup" onChange={form.handleChange} value={form.values.ocup} className="form-input" type="text" placeholder=" Ex.: Médico "/>
                    </div>
                    <div className="box-input">
                        <label className="form-label"> Valor da salario : </label>
                        <input name="renda" onChange={form.handleChange} value={form.values.renda} className="form-input" type="text" placeholder="Ex.: R$ 1.000,00"/>
                        <small> Se houver renda extra, somar os valores. </small>
                    </div>
                    <button type="submit" className="form-button"> Avaliar </button>
                </form>
            </nav>
        </header>
    );
}