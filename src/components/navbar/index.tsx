"use client";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import Search from "@mui/icons-material/Search";
import CloseOutlined from "@mui/icons-material/CloseOutlined";

import { NAVBAR_HEIGHT } from "./constants";
import Logo from "../logo";
import { SearchContext } from "@/contexts/search-context";
import NavbarSearch from "./search";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  height: NAVBAR_HEIGHT,
  backgroundColor: theme.palette.common.white,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const RootContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
});

const Navbar = () => {
  return (
    <StyledAppBar position="fixed" elevation={0} color="transparent">
      <RootContainer>
        <Stack direction="row" flex={1} spacing={4} alignItems="center">
          <Logo />
          <NavbarSearch />
        </Stack>
      </RootContainer>
    </StyledAppBar>
  );
};

export default Navbar;
