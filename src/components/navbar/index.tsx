"use client";

import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import MenuList from "@mui/material/MenuList";
import Divider from "@mui/material/Divider";

import Search from "@mui/icons-material/Search";
import CloseOutlined from "@mui/icons-material/CloseOutlined";

import { NAVBAR_HEIGHT } from "./constants";
import Logo from "../logo";
import { SearchContext } from "@/contexts/search-context";
import NavbarSearch from "./search";
import useResponsive from "@/hooks/useResponsive";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  height: NAVBAR_HEIGHT,
  backgroundColor: theme.palette.common.white,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const RootContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",

  ".MuiMenuItem-root": {
    "&:hover": {
      backgroundColor: "transparent",
    },

    "&.primary": {
      color: theme.palette.primary.main,
      display: "flex",
      alignItems: "center",
    },
  },
}));

const Navbar = () => {
  const isMobile = useResponsive("down", "md");
  return (
    <StyledAppBar position="fixed" elevation={0} color="transparent">
      <RootContainer>
        <Stack direction="row" flex={1} spacing={4} alignItems="center">
          <Logo />

          {!isMobile && (
            <>
              <MenuItem disableRipple disableTouchRipple className="primary">
                <img src="/icon-category.svg" />
                <Typography ml={1} variant="body2">
                  카테고리
                </Typography>
              </MenuItem>

              <NavbarSearch />

              <MenuList sx={{ display: "flex" }} disableListWrap>
                <MenuItem
                  disableRipple
                  disableTouchRipple
                  disableGutters
                  sx={{ px: 1.5 }}
                >
                  <img src="/home-event.svg" />
                </MenuItem>
                <Divider flexItem orientation="vertical" variant="middle" />
                <MenuItem
                  disableRipple
                  disableTouchRipple
                  disableGutters
                  sx={{ px: 1 }}
                >
                  <Typography ml={0.5} variant="caption" color="grey.900">
                    로그인 / 회원가입
                  </Typography>
                </MenuItem>
              </MenuList>
            </>
          )}

          {isMobile && (
            <Stack
              flexGrow={1}
              justifyContent="flex-end"
              direction="row"
              spacing={2}
            >
              <IconButton>
                <img src="/bell.svg" height={20} width={20} />
              </IconButton>
              <IconButton>
                <img src="/search.svg" height={20} width={20} />
              </IconButton>
            </Stack>
          )}
        </Stack>
      </RootContainer>
    </StyledAppBar>
  );
};

export default Navbar;
