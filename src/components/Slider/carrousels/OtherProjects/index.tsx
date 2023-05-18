import { FaGithub, FaGlobe } from 'react-icons/fa';

import { Slider, Slide, SliderProps } from '../..';
import { StyledCard } from './style';

export const OtherProjectsSlider = ({
  projectsList,
  openModal,
}: {
  projectsList: {
    description: string;
    page: string;
    repository: string;
    modalMsg?: string;
    apiLink?: string;
  }[];
  openModal: (index: number) => void;
}) => {
  const settings: SliderProps = {
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    spaceBetween: 45,
    navigation: true,
    pagination: {
      clickable: false,
    },
    draggable: true,
    loop: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      570: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      930: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
  };

  return (
    <Slider settings={settings}>
      {projectsList.map((project, index) => {
        return (
          <Slide key={index}>
            <StyledCard>
              <p className='other-project-text'>
                {project.description}
                {project.modalMsg && (
                  <span className='api-modal-link' onClick={() => openModal(index)}>
                    É preciso rodar a API localmente
                  </span>
                )}
              </p>
              <span className='spacer'></span>
              <span className='other-project-links'>
                <a href={project.page} target='_blank'>
                  <FaGlobe /> Site
                </a>
                <a href={project.repository} target='_blank'>
                  <FaGithub /> Repositório
                </a>
              </span>
            </StyledCard>
          </Slide>
        );
      })}
    </Slider>
  );
};
