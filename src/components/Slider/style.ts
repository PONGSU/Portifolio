import styled from 'styled-components';
import { Swiper } from 'swiper/react';

const StyledSlider = styled(Swiper)`
  @media only screen and (max-width: 470px) {
    .swiper-button-prev {
      display: none;
    }

    .swiper-button-next {
      display: none;
    }

    &.swiper {
      padding-bottom: 32px;
      padding-top: 32px;
    }
  }

  @media only screen and (min-width: 400px) {
    &.swiper {
      padding: 32px;
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.backGreen00};
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.primary200};
  }

  .swiper-button-prev {
    left: -1px;
    color: ${({ theme }) => theme.colors.backGreen00};
  }

  .swiper-button-next {
    right: 1px;
    color: ${({ theme }) => theme.colors.backGreen00};
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: ${({ theme }) => theme.colors.secondary00};
  }

  .swiper-notification {
    display: none;
  }
`;

export default StyledSlider;
