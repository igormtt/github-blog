import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  width: 54.0625rem;
  min-height: 26.375rem;
  flex-direction: column;
  padding: 40px 32px;

  .markdown-body {
    background: transparent !important;
  }

  .markdown-body pre {
    background: #0f1720; /* apenas o code block */
  }
`;
