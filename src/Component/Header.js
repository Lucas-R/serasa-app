import React, {useState} from "react";
import "../Styles/Header.css";

export default function Header(){

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
        console.log(form.values.nome, form.values.cpf, form.values.email, form.values.ocup, form.values.renda);
        document.getElementById("form-avaliation").classList.remove("active");
    }

    const handleClickMenu = () => {
        document.getElementById("form-avaliation").classList.toggle("active");
    }


    return(
        <header className="header">
            <nav>
                <a className="logo" href="/"><h1> Credito Para Todox </h1></a>
                <div className="menu" onClick={handleClickMenu}>
                    <button className="form-button"> Consultar </button>
                </div>
                <form className="form-avaliation" id="form-avaliation" onSubmit={handleClickSubmit}>
                    <div className="box-input">
                        <label className="form-label"> Nome completo: </label>
                        <input name="nome" onChange={form.handleChange} value={form.values.nome} className="form-input" type="text" placeholder="ex.: Lucas Rodrigues"/>
                    </div>
                    <div className="box-input">
                        <label className="form-label"> CPF : </label>
                        <input name="cpf" onChange={form.handleChange} value={form.values.cpf} className="form-input" type="text" placeholder="ex.: 000.000.000-00"/>
                    </div>
                    <div className="box-input">
                        <label className="form-label"> Email : </label>
                        <input name="email" onChange={form.handleChange} value={form.values.email} className="form-input" type="text" placeholder="Lucas@email.com"/>
                    </div>
                    <div className="box-input">
                        <label className="form-label"> Ocupação : </label>
                        <select name="ocup" onChange={form.handleChange} value={form.values.ocup} className="form-input">
                            <option value="option-1"> Opção um </option>
                            <option value="option-2"> Opção dois </option>
                            <option value="option-3"> Opção três </option>
                            <option value="option-4"> Opção quatro </option>
                            <option value="option-5"> Opção cinco </option>
                        </select>
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