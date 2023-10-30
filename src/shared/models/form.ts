import { FieldError, FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

export interface InputProps<T extends FieldValues> {
  label: string;
  name: FieldPath<FieldValues>;
  register: UseFormRegister<T>;
  validationSchema?: yup.AnySchema;
  error?: FieldError;
}

export interface SelectProps {
  label: string;
  name: FieldPath<FieldValues>;
  register: UseFormRegister<FieldValues>;
  options: { value: string; label: string }[];
}
