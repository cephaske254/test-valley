"use client";
import { styled} from "@mui/material/styles";
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
  },
}));

const CarouselSlide: React.FC<CarouselSlideProps> = ({ banner, isMobile }) => {
  return (
    <ImageWrapper isMobile={isMobile}>
      <img src={banner.pcImageUrl} alt={banner.title} />
    </ImageWrapper>
  );
};

type CarouselSlideProps = {
  banner: Banner;
  isMobile: boolean;
};

export default CarouselSlide;
