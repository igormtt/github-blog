import { styled } from "styled-components";

export const FormComponent = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 4.5rem;
`;

export const FormItems = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  input[type="text"] {
    min-width: 54rem;
    height: 3.125rem;
    padding: 12px 16px;
    border-radius: 6px;
    font-size: 1rem;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    outline: none;
    color: ${(props) => props.theme["base-label"]};
    line-height: 1.6;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`;

export const Publications = styled.div`
  p {
    justify-self: flex-start;
    font-weight: bold;
    line-height: 0.5;
    font-size: 0.875;

    color: ${(props) => props.theme["base-span"]};
  }
`;

export const FormTitle = styled.h1`
  p {
    justify-self: flex-start;
    font-weight: bold;
    line-height: 1.6;
    font-size: 1.125rem;

    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
