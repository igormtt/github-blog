import { Link } from "react-router-dom";
import { CardContainer, Card as CardComponent, CardHeader } from "./style";

interface CardProps {
  title: string;
  days: string;
  description: string;
  number: number;
  githubUser: string;
  url: string;
}

export function Card({
  title,
  days,
  description,
  number,
  githubUser,
  url,
}: CardProps) {
  return (
    <CardContainer>
      <CardComponent>
        <Link
          to={`/post/${number - 1}`}
          state={{ number, days, description, title, githubUser }}
        >
          <CardHeader>
            <div>
              <h1>{title}</h1>
            </div>
            <div>
              <span>{days}</span>
            </div>
          </CardHeader>
          <div>
            {number}
            <p>{description.substring(-1, 180) + "..."}</p>
          </div>
        </Link>
      </CardComponent>
      <input type="hidden" value={url} />
    </CardContainer>
  );
}

