import * as yup from 'yup';
import { defaultsValidations } from '.';

export const createUsuarioValidation = yup.object().shape({
  nome: defaultsValidations.nome,
  email: defaultsValidations.email,
  telefone: defaultsValidations.telefone,
});