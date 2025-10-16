import { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { CardContainer } from "../../components/Card/style";
import { Form } from "../../components/Form/Form";
import { Profile } from "../../components/Profile/Profile";
import { Layout } from "../../layout/Layout";
import { FormContainer } from "./style";
import { useGithub } from "../../hooks/useGithub";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Home() {
  const { issues } = useContext(useGithub);

  return (
    <Layout>
      <Profile />

      <FormContainer>
        <Form />
      </FormContainer>

      <CardContainer>
        {issues && issues.length > 0 ? (
          issues.map((issue) => (
            <Card
              key={issue.number}
              title={issue.title}
              days={formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
              description={issue.body}
              number={issue.number}
              githubUser={issue.user.login}
              url={issue.html_url}
            />
          ))
        ) : (
          <p>Nenhuma publicação encontrada 😕</p>
        )}
      </CardContainer>
    </Layout>
  );
}
