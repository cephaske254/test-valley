"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, Breakpoint } from "@mui/material/styles";

type Direction = "up" | "down" | "between";

const useResponsive = (
  direction: Direction,
  from: Breakpoint,
  to: null | Breakpoint = null
): boolean => {
  const value = useMediaQuery<Theme>((theme) => {
    if (direction === "between") {
      return theme.breakpoints.between(from, to!);
    }

    return theme.breakpoints[direction](from);
  });

  return value;
};

export default useResponsive;
