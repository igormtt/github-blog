import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 26rem); // duas colunas
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const Card = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;
  flex-direction: column;

  width: 26rem;
  height: 16.25rem;

  gap: 3.625rem;
  cursor: pointer;
  p {
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 300;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  h1 {
    line-height: 1.6;
    width: 90%;
    font-size: 1.1rem;

    font-weight: bold;
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
  }
`;
