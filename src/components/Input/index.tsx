import { InputHTMLAttributes } from "react";
import TextField from "@mui/material/TextField";
import { useForm, UseFormRegister } from "react-hook-form";

import { Container } from "./styles";
import { FormData } from "../../App";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  textHelp?: string;
  nameField: "amount" | "installments" | "mdr";
  register: UseFormRegister<FormData>;
}

export const Input = ({ label, textHelp, nameField, register, ...rest }: InputProps) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <TextField id={label} type="search" {...register(nameField)} />
      {textHelp && <span>{textHelp}</span>}
    </Container>
  );
};
