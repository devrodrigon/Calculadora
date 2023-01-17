import { InputHTMLAttributes } from "react";
import TextField from "@mui/material/TextField";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

import { Container } from "./styles";
import { FormData } from "../../App";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  textHelp?: string;
  nameField: "amount" | "installments" | "mdr";
  register: UseFormRegister<FormData>;
  errors: Partial<DeepMap<FormData, FieldError>>;
}

export const Input = ({ label, textHelp, nameField, register, errors, ...rest }: InputProps) => {
  return (
    <Container error={!!errors.installments}>
      <label htmlFor={label}>{label}</label>
      <TextField
        id={label}
        type="search"
        error={!!errors[nameField]}
        helperText={nameField === "installments" ? "" : errors[nameField]?.message}
        {...register(nameField)}
      />
      {textHelp && <span>{textHelp}</span>}
    </Container>
  );
};
