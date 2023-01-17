import { useState } from "react";
import { Input } from "./components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Aside, Container, Content, Form } from "./app";
import { api } from "./services/api";
import { schema } from "./validations/schema";

export interface FormData {
  amount: number;
  installments: number;
  mdr: number;
}

interface ReceiveData {
  1?: number;
  15?: number;
  30?: number;
  90?: number;
}

function App() {
  const [receive, setReceive] = useState<ReceiveData>({
    1: 0.0,
    15: 0.0,
    30: 0.0,
    90: 0.0,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await api.post<ReceiveData>("/", data);

      setReceive(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Content>
        <main>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Simule sua Antecipação</h1>
            <Input
              label="Informe o valor da venda *"
              nameField="amount"
              register={register}
              errors={errors}
            />
            <Input
              label="Em quantas parcelas *"
              textHelp="Número de parcelas deve ser entre 1 e 12"
              nameField="installments"
              register={register}
              errors={errors}
            />
            <Input
              label="Informe o percentual de MDR *"
              nameField="mdr"
              register={register}
              errors={errors}
            />
            <button type="submit" hidden>
              Calcular
            </button>
          </Form>
        </main>
        <Aside>
          <h2>Você receberá</h2>
          <h3>
            Amanhã <span>R$ {receive[1]?.toFixed(2)}</span>
          </h3>
          <h3>
            Em 15 dias <span>R$ {receive[15]?.toFixed(2)}</span>
          </h3>
          <h3>
            Em 30 dias <span>R$ {receive[30]?.toFixed(2)}</span>
          </h3>
          <h3>
            Em 90 dias <span>R$ {receive[90]?.toFixed(2)}</span>
          </h3>
        </Aside>
      </Content>
    </Container>
  );
}

export default App;
