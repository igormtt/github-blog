import { useContext } from "react";
import {
  IssueContainer,
  IssueBody,
  IssueInfo,
  GitHubInfo,
  Bio,
  GitHubLink,
} from "./style";
import { useGithub } from "../../../../hooks/useGithub";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaCalendarDay, FaComment, FaGithub } from "react-icons/fa";
import { LinkGH } from "../../../../components/Profile/style";

interface IssueProps {
  title: string;
  created_at: string;
  comments: string;
  url: string;
}

export function Issue({ title, created_at, comments, url }: IssueProps) {
  const { defaultData } = useContext(useGithub);

  return (
    <IssueContainer>
      <IssueBody>
        <IssueInfo>
          <div className="back">
            <Link to="/">
              <IoIosArrowBack fill="#3294F8" />
              <p> Voltar</p>
            </Link>
          </div>
          <Bio>
            <p>{title}</p>
          </Bio>
          <GitHubInfo>
            <div>
              <span>
                {" "}
                <FaGithub fill="#3A536B" /> {defaultData?.name}
              </span>
              <span>
                <FaCalendarDay fill="#3A536B" />
                {created_at}
              </span>
              <span>
                <FaComment fill="#3A536B" />
                {comments}
              </span>
            </div>
          </GitHubInfo>
        </IssueInfo>

        <GitHubLink>
          <Link to={url}>
            VER NO GITHUB
            <LinkGH fill="#3294F8" />
          </Link>
        </GitHubLink>
      </IssueBody>
    </IssueContainer>
  );
}
