import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: ${({ theme }) => theme.gray[200]};
  }

  span {
    color: ${({ theme }) => theme.gray[100]};
    font-size: 12px;
  }
`;
