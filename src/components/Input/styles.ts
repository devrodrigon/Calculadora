import styled from "styled-components";

interface ContainerProps {
  error: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: ${({ theme }) => theme.gray[200]};
  }

  span {
    color: ${({ theme, error }) => (error ? "red" : theme.gray[100])};
    font-size: 12px;
  }
`;
