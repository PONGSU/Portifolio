import { ReactNode } from 'react';
import { SwiperProps } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import StyledSlider from './style';

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <StyledSlider modules={[Autoplay, Navigation, Pagination, A11y]} {...settings}>
      {children}
    </StyledSlider>
  );
}
