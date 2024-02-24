"use client";

import Navbar from "@/components/navbar";
import { NAVBAR_HEIGHT } from "@/components/navbar/constants";
import { styled } from "@mui/material/styles";

const Main = styled("main")`
  padding-top: ${NAVBAR_HEIGHT}px;
  min-height: 100vh;
`;

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Main>
      <Navbar />

      {children}
    </Main>
  );
};

export default DefaultLayout;
