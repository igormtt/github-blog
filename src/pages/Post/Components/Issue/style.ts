import styled from "styled-components";

export const IssueContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -66px;
`;

export const IssueBody = styled.div`
  display: flex;
  width: 54rem;
  align-items: center;
  justify-content: space-around;
  padding: 2.5rem;
  gap: 2rem;
  height: 13.25rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
`;

export const IssueInfo = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-self: flex-start;
  flex-direction: column;

  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};
    line-height: 1.3;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .back a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
  }

  .back p {
    color: ${(props) => props.theme.blue};
    cursor: pointer;
  }
`;

export const GitHubInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  span {
    display: flex;
    gap: 2px;
    align-items: center;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const Bio = styled.div`
  p {
    line-height: 1.6;
    font-size: 1.5rem;
    font-weight: 500;

    color: ${(props) => props.theme["base-title"]};
  }
`;

export const GitHubLink = styled.div`
  display: flex;
  align-self: flex-start;

  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    color: ${(props) => props.theme.blue};
    text-decoration: none;
    line-height: 1.6;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;
