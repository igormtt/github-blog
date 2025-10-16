import { ReactNode } from "react";
import Header from "../components/Header/Header";
import { GlobalStyle } from "../styles/global";
import { Outlet } from "react-router-dom";
import { Container } from "./style";

interface ChildrenProps {
  children: ReactNode;
}

export function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Header />

      <Container>{children}</Container>

      <GlobalStyle />
      <Outlet />
    </>
  );
}
