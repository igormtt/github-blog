import { useEffect, useState } from "react";

import {
  ProfileContainer,
  ProfileBody,
  AvatarImage,
  ProfileInfo,
  GitHubInfo,
  Bio,
  GitHubLink,
  LinkGH,
} from "./style";
import { FaGithub, FaRegBuilding, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProfileProps {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  followers: string;
  company: string;
}

export function Profile() {
  const [data, setData] = useState<ProfileProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/igormtt", {
        headers: {
          Authorization: import.meta.env.VITE_GITHUB_TOKEN,
        },
      });
      const responseData = await response.json();

      setData(responseData);
    }

    fetchData();
  }, []);

  return (
    <ProfileContainer>
      <ProfileBody>
        <AvatarImage>
          <img src={data?.avatar_url} alt="" />
        </AvatarImage>

        <ProfileInfo>
          <div>
            <h1>{data?.name}</h1>
          </div>
          <Bio>
            <p>{data?.bio}</p>
          </Bio>

          <GitHubInfo>
            <span>
              <FaGithub fill="#3A536B" /> {data?.login}
            </span>
            <span>
              <FaRegBuilding fill="#3A536B" />
              {data?.company ? data.company : "Sem empresa"}
            </span>
            <span>
              <FaUserFriends fill="#3A536B" /> {data?.followers}
            </span>
          </GitHubInfo>
        </ProfileInfo>

        <GitHubLink>
          <Link to="https://github.com/igormtt">GITHUB</Link>
          <LinkGH fill="#3294F8" />
        </GitHubLink>
      </ProfileBody>
    </ProfileContainer>
  );
}
