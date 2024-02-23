"use client";

import { styled } from "@mui/material/styles";

const LogoImage = styled("img")({
  height: 25,
});

const Logo = () => {
  return <LogoImage src="/logo-wide.svg" />;
};

export default Logo;
