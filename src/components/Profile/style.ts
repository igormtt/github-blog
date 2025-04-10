import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -66px;
`;

export const ProfileBody = styled.div`
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

export const AvatarImage = styled.div`
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileInfo = styled.div`
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
`;

export const GitHubInfo = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const Bio = styled.div`
  p {
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 300;

    color: ${(props) => props.theme["base-text"]};
  }
`;

export const GitHubLink = styled.div`
  display: flex;
  align-self: flex-start;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    line-height: 1.6;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;
