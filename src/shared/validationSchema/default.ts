import * as yup from "yup";

const email = yup
  .string()
  .required("Campo obrigatório")
  .email("E-mail inválido")
  .max(255, "O e-mail deve ter no máximo 255 caracteres")
  .min(5, "O e-mail deve ter no mínimo 5 caracteres");

const nome = yup
  .string()
  .required("Campo obrigatório")
  .min(3, "O nome deve ter no mínimo 3 caracteres")
  .max(100, "O nome deve ter no máximo 30 caracteres");

const telefone = yup
  .string()
  .required("Campo obrigatório")
  .min(11, "O telefone deve ter no mínimo 11 caracteres")
  .matches(/^[0-9]+$/, "O telefone deve conter apenas números")
  .max(11, "O telefone deve ter no máximo 11 caracteres");

const ano = yup
  .number()
  .required("Campo obrigatório")
  .min(1400, "O ano deve ser maior ou igual a 1400")
  .max(new Date().getFullYear(), "O ano deve ser menor ou igual ao ano atual")




export const defaultsValidations = {
  email,
  telefone,
  nome,
  ano
};
