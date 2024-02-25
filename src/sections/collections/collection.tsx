import { useCallback, useMemo, useRef } from "react";
import { Collection } from "@/@types/collection";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CollectionItem from "./item";
import { Swiper, SwiperClass, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import SliderControls, { SliderControlsRef } from "./controls";
import { SwiperOptions } from "swiper/types";

const CollectionStack: React.FC<CollectionStackProps> = ({
  collection,
  index,
}) => {
  const swiperElRef = useRef<SwiperRef>(null);
  const controlsRef = useRef<SliderControlsRef>(null);

  const onProgress = useCallback((swiper: SwiperClass) => {
    controlsRef?.current?.recalculate(swiper);
  }, []);

  const onInit = useCallback((swiper: SwiperClass) => {
    controlsRef?.current?.recalculate(swiper);
  }, []);

  const breakpoints = useMemo<SwiperOptions["breakpoints"]>(
    () => ({
      0: {
        enabled: false,
        slidesPerView: 2,
        grid: {
          fill: "row",
          rows: Math.ceil(collection.items.length / 2),
        },
      },
      768: {
        enabled: true,
        slidesPerView: 3,
        grid: {
          fill: "column",
          rows: 1,
        },
      },
      1024: {
        enabled: true,
        slidesPerView: 4,
        grid: {
          fill: "column",
          rows: 1,
        },
      },
    }),
    [collection.items.length]
  );

  return (
    <Stack
      direction={{
        xs: "column",
        lg: "row",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        width={{
          xs: "auto",
          lg: 200,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          {collection.title}
        </Typography>

        <Typography variant="caption" color="grey.500" component="p">
          {collection.subtitle}
        </Typography>

        <div style={{ flexGrow: 1 }} />

        <SliderControls swiperElRef={swiperElRef} ref={controlsRef} />
      </Box>

      <Box width={{ xs: "auto", lg: `calc(100% - 200px)` }}>
        <Swiper
          breakpoints={breakpoints}
          spaceBetween={8}
          ref={swiperElRef}
          modules={[Grid, Autoplay]}
          autoplay={{
            delay: 2000 + index * 1000,
            disableOnInteraction: true,
            reverseDirection: true,
          }}
          speed={500}
          onProgress={onProgress}
          onAfterInit={onInit}
          onResize={onInit}
        >
          {collection.items.map((item, index) => {
            return (
              <SwiperSlide key={item.key} virtualIndex={index}>
                <CollectionItem item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Stack>
  );
};

type CollectionStackProps = { collection: Collection; index: number };

export default CollectionStack;
