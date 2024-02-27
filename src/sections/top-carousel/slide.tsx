"use client";
import { styled } from "@mui/material/styles";
import { Banner } from "@/@types/banner";

const ImageWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{
  isMobile?: boolean;
}>(({ isMobile, theme }) => ({
  ...(!isMobile && {
    width: theme.breakpoints.values.md,
    overflow: "hidden",
  }),

  "& img": {
    width: isMobile ? "100%" : theme.breakpoints.values.md,
    height: "100%",
  },
}));

const CarouselSlide: React.FC<CarouselSlideProps> = ({ banner, isMobile }) => {
  return (
    <ImageWrapper isMobile={isMobile}>
      <img
        src={isMobile ? banner.mobileImageUrl : banner.pcImageUrl}
        alt={banner.title}
      />
    </ImageWrapper>
  );
};

type CarouselSlideProps = {
  banner: Banner;
  isMobile: boolean;
};

export default CarouselSlide;
