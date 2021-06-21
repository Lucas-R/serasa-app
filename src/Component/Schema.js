import * as Yup from "yup";

export default Yup.object().shape({
    nome: Yup
        .string()
        .min(10, 'necessario no minimo 10 caracteres')
        .required('Nome obrigatório')
        .matches(/^[aA-zZ\s]/, "Only alphabets are allowed for this field "),

    cpf: Yup
        .string()
        .required('CPF obrigatório')
        .matches(/^[/0-9/]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/, 'CPF invalido'),  
       

    email: Yup
        .string()
        .email()
        .required('Email obrigatório'),

    ocup: Yup
        .string()
        .min(5)
        .required('Ocupação obrigatório')
        .matches(/^[aA-zZ\s]/, " Caracter invalido "),
})