import { ThemeOptions } from "@mui/material/styles";

export const fonts = {
  pretendard: {
    fontFamily: "'Pretendard', sans-serif",
    fontWeights: {
      300: 300,
      400: 400,
      500: 500,
      600: 600,
      700: 700,
    },
  },
};

const typography: ThemeOptions["typography"] = () => {
  return {
    fontFamily: fonts.pretendard.fontFamily,
    fontWeightLight: fonts.pretendard.fontWeights[500],


    caption:{
      fontWeight: 500,
    }
  };
};

export default typography;
