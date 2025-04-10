import { useEffect, useState } from "react";

import {
  ProfileContainer,
  ProfileBody,
  AvatarImage,
  ProfileInfo,
  GitHubInfo,
  Bio,
  GitHubLink,
} from "./style";

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
      const response = await fetch("https://api.github.com/users/igormtt");
      const responseData = await response.json();

      setData(responseData);
    }

    fetchData();
  }, []);

  console.log(data);
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
            <span> {data?.login} </span>
            <span>{data?.company ? data.company : "Sem empresa"}</span>
            <span>{data?.followers}</span>
          </GitHubInfo>
        </ProfileInfo>

        <GitHubLink>
          <a href="#">GITHUB</a>
        </GitHubLink>
      </ProfileBody>
    </ProfileContainer>
  );
}
