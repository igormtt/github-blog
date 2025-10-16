import { createContext, ReactNode, useEffect, useState } from "react";

interface IssuesProps {
  title: string;
  created_at: string;
  body: string;
  number: number;
  user: {
    login: string;
  };
  html_url: string;
}

interface DefaultDataProps {
  name: string;
  company: string;
}

interface GithubContextProps {
  issues: IssuesProps[] | null;
  defaultData: DefaultDataProps | null;
  findIssue: (q?: string) => Promise<void>;
}

export const useGithub = createContext({} as GithubContextProps);

export function GithubProvider({ children }: { children: ReactNode }) {
  const [issues, setIssues] = useState<IssuesProps[] | null>([]);
  const [defaultData, setDefaultData] = useState<DefaultDataProps | null>(null);

  // 🔹 função genérica para buscar issues (com ou sem filtro)
  async function findIssue(q?: string) {
    const url =
      q && q.trim()
        ? `https://api.github.com/search/issues?q=${encodeURIComponent(
            q + "*"
          )}+repo:igormtt/github-blog+in:title`
        : `https://api.github.com/repos/igormtt/github-blog/issues`;

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar issues: ${response.status}`);
    }

    const data = await response.json();
    setIssues(data.items ?? data);
  }

  async function findDefaultData() {
    const response = await fetch("https://api.github.com/users/igormtt");
    const data = await response.json();
    setDefaultData(data);
  }

  useEffect(() => {
    findIssue(); // busca inicial (todas as issues)
    findDefaultData();
  }, []);

  return (
    <useGithub.Provider value={{ issues, defaultData, findIssue }}>
      {children}
    </useGithub.Provider>
  );
}
