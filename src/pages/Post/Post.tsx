import { useLocation } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { Issue } from "./Components/Issue/Issue";
import { PostContainer } from "./style";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface issuesProps {
  body: string;
  created_at: string;
  comments: string;
  html_url: string;
}

export function Post() {
  const location = useLocation();
  const { number, title } = location.state || {};

  const [issues, setIssues] = useState<issuesProps>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/igormtt/github-blog/issues/${number}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    })
      .then(async (response) => {
        const data = await response.json();
        setIssues(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [number]);

  const markdown = issues?.body;
  return (
    <Layout>
      <Issue
        title={title}
        created_at={
          issues?.created_at
            ? formatDistanceToNow(new Date(issues.created_at), {
                addSuffix: true,
                locale: ptBR,
              })
            : "..."
        }
        comments={issues?.comments ?? "0"}
        url={issues?.html_url ?? ""}
      />

      <PostContainer
        className="markdown-body"
        style={{ backgroundColor: "transparent" }}
      >
        <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>
      </PostContainer>
    </Layout>
  );
}
