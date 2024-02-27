"use client";

import useResponsive from "@/hooks/useResponsive";
import { selectBanners } from "@/store/selectors/banners";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CarouselSlide from "./slide";
import SliderNavigation from "./navigation";

const RootStyles = styled(Box)({
  position: "relative",
  ".swiper-pagination-bullet": {
    backgroundColor: "white",
    opacity: 0.4,
    "&:hover": {
      opacity: 1,
    },
  },
  ".swiper-pagination-bullet-active": {
    backgroundColor: "white",
    opacity: 1,
  },

  ".swiper-slide": {
    zIndex: 1,
    width: "fit-content",
    overflow: "hidden",
  },
  ".swiper-slide:not(.swiper-slide-active)": {
    opacity: 0.5,
    zIndex: 0,
  },
});

const TopCarouselSection = () => {
  const { banners } = useSelector(selectBanners);
  const isMobile = useResponsive("down", "lg");

  const theme = useTheme();

  return (
    <RootStyles>
      <Swiper
        slidesPerView={2.1}
        centeredSlides
        loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Pagination]}
        spaceBetween={32}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          [theme.breakpoints.values.xs]: {
            slidesPerView: 1,
          },
          [theme.breakpoints.values.lg]: {
            slidesPerView: 2.1,
          },
        }}
        slideActiveClass="swiper-slide-active"
        slideClass="swiper-slide"
      >
        {!isMobile && <SliderNavigation />}

        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <CarouselSlide isMobile={isMobile} banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </RootStyles>
  );
};

export default TopCarouselSection;
