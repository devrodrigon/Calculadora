import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.blue[100]};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.gray[300]};
`;

export const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${({ theme }) => theme.white};

  h1 {
    color: ${({ theme }) => theme.gray[300]};
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 36px;

  background-color: ${({ theme }) => theme.blue[200]};

  padding: 80px 36px;

  h2 {
    color: ${({ theme }) => theme.blue[500]};
    border-bottom: 2px solid ${({ theme }) => theme.blue[300]};
  }

  h3 {
    color: ${({ theme }) => theme.blue[300]};

    span {
      color: ${({ theme }) => theme.blue[400]};
      font-weight: bold;
    }
  }
`;
