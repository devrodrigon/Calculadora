import { Aside, Container, Content, Form } from "./app";
import { Input } from "./components/Input";
import { useForm } from "react-hook-form";

import { api } from "./services/api";

export interface FormData {
  amount: number;
  installments: number;
  mdr: number;
}

function App() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const response = await api.post("/", data);

    console.log({ response, data });
  };

  return (
    <Container>
      <Content>
        <main>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Simule sua Antecipação</h1>
            <Input label="Informe o valor da venda *" nameField="amount" register={register} />
            <Input
              label="Em quantas parcelas *"
              textHelp="Máximo de 12 parcelas"
              nameField="installments"
              register={register}
            />
            <Input label="Informe o percentual de MDR *" nameField="mdr" register={register} />
            <button type="submit" hidden>
              Calcular
            </button>
          </Form>
        </main>
        <Aside>
          <h2>Você receberá</h2>
          <h3>
            Amanhã <span>R$ 0,00</span>
          </h3>
          <h3>
            Em 15 dias <span>R$ 0,00</span>
          </h3>
          <h3>
            Em 30 dias <span>R$ 0,00</span>
          </h3>
          <h3>
            Em 90 dias <span>R$ 0,00</span>
          </h3>
        </Aside>
      </Content>
    </Container>
  );
}

export default App;
