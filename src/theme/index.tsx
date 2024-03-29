"use client";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

import typography from "./typography";
import palette from "./palette";
import breakpoints from "./breakpoints";

const theme = createTheme({
  typography,
  palette,
  breakpoints,
});

export const ThemeProvider = (props: React.PropsWithChildren) => {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
};
