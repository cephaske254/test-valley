import { useCallback, useMemo, useRef, useState } from "react";
import { Collection } from "@/@types/collection";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CollectionItem from "./item";
import { Swiper, SwiperClass, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SliderControls, { SliderControlsRef } from "./controls";

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

  const breakpoints = useMemo(
    () => ({
      0: {
        slidesPerView: 2,
        slidesPerGroup: Math.round(collection.items.length / 2),
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
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
          modules={[Autoplay]}
          autoplay={{
            delay: 2000 + index * 1000,
            disableOnInteraction: true,
            reverseDirection: true,
          }}
          grid={{
            fill: "column",
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
