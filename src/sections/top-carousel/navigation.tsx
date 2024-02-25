import { useSwiper } from "swiper/react";

import Box from "@mui/material/Box";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import { styled, alpha } from "@mui/material/styles";

const SliderButton = ({
  isNext,
  ...props
}: { isNext?: boolean } & IconButtonProps) => {
  return (
    <Box
      component="span"
      position="absolute"
      top={0}
      bottom={0}
      zIndex={12}
      display="flex"
      alignItems="center"
      className={isNext ? "next-container" : "prev-container"}
    >
      <IconButton {...props} className={isNext ? "next" : "prev"}>
        <ChevronLeftRounded />
      </IconButton>
    </Box>
  );
};

const SliderNavigation = () => {
  const swiper = useSwiper();

  return (
    <RootStyles>
      <SliderButton onClick={() => swiper.slidePrev()} />
      <SliderButton isNext onClick={() => swiper.slideNext()} />
    </RootStyles>
  );
};

const RootStyles = styled(Box)(({ theme: { breakpoints, palette } }) => {
  const TRANSLATE_VAL = breakpoints.values.md * 0.4;
  return {
    width: breakpoints.values.md,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",

    "& .next": {
      transform: "rotate(180deg)",
    },

    "& .prev-container": {
      transform: `translateX(${-TRANSLATE_VAL}px)`,
    },
    "& .next-container": {
      transform: `translateX(${TRANSLATE_VAL}px)`,
    },

    "& .MuiIconButton-root": {
      color: palette.common.white,
      backgroundColor: alpha(palette.common.black, 0.5),
      "&:hover": {
        backgroundColor: alpha(palette.common.black, 0.9),
      },
    },
  };
});

export default SliderNavigation;
