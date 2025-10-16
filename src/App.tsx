import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/Home/Home";
import { Post } from "./pages/Post/Post";
import { GithubProvider } from "./hooks/useGithub";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:title" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </GithubProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}
