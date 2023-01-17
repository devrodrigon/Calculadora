import * as yup from "yup";

export const schema = yup.object({
  amount: yup
    .number()
    .required("Campo obrigatório")
    .min(1000, "Valor da venda deve ser maior ou igual a 1000"),
  installments: yup.number().required().min(1).max(12),
  mdr: yup.number().required("Campo obrigatório"),
});
