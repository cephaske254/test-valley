import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useState,
} from "react";
import { SwiperClass, SwiperRef } from "swiper/react";

import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";

import ChevronLeftRounded from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";

type SliderControlsState = {
  canSlideNext: boolean;
  canSlidePrev: boolean;
  currentSlide: number;
};

type SliderControlsProps = {
  swiperElRef: React.MutableRefObject<SwiperRef | null>;
};
const SliderControls = forwardRef<SliderControlsRef, SliderControlsProps>(
  ({ swiperElRef }, ref) => {
    const [state, setState] = useState<SliderControlsState>({
      canSlideNext: false,
      canSlidePrev: false,
      currentSlide: 0,
    });

    const evaluateProgress = useCallback((swiper: SwiperClass) => {
      const hasOverflow =
        swiper.params.slidesPerView !== "auto" &&
        swiper.slides.length > swiper.params.slidesPerView!;

      let canSlideNext = hasOverflow && !swiper.isEnd;
      let canSlidePrev = hasOverflow && !swiper.isBeginning;

      setState({
        canSlideNext,
        canSlidePrev,
        currentSlide: swiper.realIndex,
      });
    }, []);

    const slidePrev = useCallback(() => {
      swiperElRef.current?.swiper.slidePrev();
    }, []);

    const slideNext = useCallback(() => {
      swiperElRef.current?.swiper.slideNext();
    }, []);

    useImperativeHandle(ref, () => ({ recalculate: evaluateProgress }), [
      evaluateProgress,
    ]);

    return (
      <ButtonGroup>
        <IconButton onClick={slidePrev} disabled={!state.canSlidePrev}>
          <ChevronLeftRounded />
        </IconButton>
        <IconButton onClick={slideNext} disabled={!state.canSlideNext}>
          <ChevronRightRounded />
        </IconButton>
      </ButtonGroup>
    );
  }
);

export type SliderControlsRef = {
  recalculate: (slide: SwiperClass) => void;
};

export default memo(SliderControls);
