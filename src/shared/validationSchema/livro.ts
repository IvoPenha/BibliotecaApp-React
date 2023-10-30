import { defaultsValidations } from '.';
import * as Yup from 'yup';

export const createLivroSchema = Yup.object().shape({
  titulo: defaultsValidations.nome,
  autor: defaultsValidations.nome,
  ano: defaultsValidations.ano,
});