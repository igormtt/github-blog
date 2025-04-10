import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Header />

        <Profile />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
