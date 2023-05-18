import styled from 'styled-components';

export const StyledProjectsPage = styled.main`
  .toast-info {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.grey100};
  }

  .other-projects-title {
    font-size: 30px;
    margin-top: 50px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.grey100};
  }

  .other-projects-section {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      font-size: 15px;

      svg {
        height: 20px;
        width: 20px;
        margin-bottom: -5px;
      }
    }

    li:hover {
      cursor: pointer;
      border: 2px solid ${({ theme }) => theme.colors.grey100};

      svg {
        color: ${({ theme }) => theme.colors.grey100};
      }
    }
  }

  .selected-false {
    background-color: ${({ theme }) => theme.colors.backGreen300};
    color: ${({ theme }) => theme.colors.grey600};
    border: 2px solid ${({ theme }) => theme.colors.backGreen300};
    height: 93px;
    border-radius: 8px;
  }

  .selected-true {
    height: 123px;
    background-color: ${({ theme }) => theme.colors.backGreen400};
    border: 2px solid ${({ theme }) => theme.colors.backGreen400};
    border-radius: 8px 8px 0 0;
    color: ${({ theme }) => theme.colors.grey100};
    animation: appear4 ease 1.4s;
  }

  .other-projects-expands {
    background-color: ${({ theme }) => theme.colors.backGreen400};
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 50px;
    animation: appear ease 1.4s;
    margin-top: -50px;
  }
  .other-projects-section {
    transition: all 0.5s ease-in-out;
  }

  .other-projects-expands-box {
    animation: appear 1.4s;
  }

  .other-project-text {
    overflow-x: hidden;
    overflow-y: hidden;

    p {
      white-space: nowrap;
      overflow-x: hidden;
      animation: appear3 ease-in-out 1.4s;
    }
  }
  .skills-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    animation: appear2 ease-in-out 0.7s;
  }

  .other-project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    animation: appear2 ease-in-out 1.4s;
  }

  @media (max-width: 968px) {
    .other-projects-section {
      li {
        font-size: 12px;
        padding: 10px 10px;
      }
    }
  }

  @media (max-width: 690px) {
    .other-projects-section {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;

      li {
        flex-direction: row;
        gap: 23px;
        padding: 0 10px;
        height: 70px;
      }
    }

    .skills-chips {
      animation: appear2 ease-in-out 1.4s;
      height: min-content;
    }

    .other-projects-expands {
      border-radius: 0 4px 4px 4px;
    }

    .selected-true {
      animation: appear4 ease 1.4s;
    }

    .mobile-falsefalsetrue,
    .mobile-falsetruefalse {
      display: none !important;
    }

    iframe {
      height: 430px;
    }
  }

  @media (max-width: 470px) {
    iframe {
      height: 300px;
    }
  }

  .certificate-box {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
    }
  }

  iframe {
    border: none;
    border-radius: 4px;
    background-color: transparent;
    background: transparent;
    max-width: 100%;

    div {
      padding: 0;
      margin: 0;
      background-color: transparent;
      background: transparent;
    }
  }
  .swiper-slide div {
    animation: appear3 ease-in-out 1.4s;
  }
  @keyframes appear {
    0% {
      white-space: nowrap;
      overflow-y: hidden;
      overflow-x: hidden;
    }
    99% {
      height: max-content;
    }
  }

  @keyframes appear2 {
    0% {
      overflow-x: hidden;
      overflow-y: hidden;
      filter: opacity(0);
    }
    99% {
      filter: opacity(1);
    }
  }

  @keyframes appear2-2 {
    0% {
      height: 0;
      overflow-x: hidden;
      white-space: nowrap;
      overflow-y: hidden;
    }
    70% {
      height: 61px;
    }
  }

  @keyframes appear3 {
    0% {
      height: 0;
      white-space: nowrap;
      overflow-x: hidden;
      overflow-y: hidden;
      color: transparent;
    }
    80% {
      color: transparent;
    }
    99% {
      height: 250px;
    }
    100% {
      height: min-content;
    }
  }

  @keyframes appear4 {
    0% {
      height: 93px;
      overflow-x: hidden;
      white-space: nowrap;
      overflow-y: hidden;
    }
    99% {
      height: 123px;
    }
  }

  .arrowUp {
    animation: rotation ease 1s;
  }

  .arrowDown {
    animation: rotation ease 1s;
  }

  @keyframes rotation {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .api-link {
    color: ${({ theme }) => theme.colors.grey100};
  }
`;

export const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  display: 'flex',
  flexDirection: 'column' as 'column',
  gap: '25px',
  color: '#CCCCCC',
  bgcolor: '#373A3E',
  boxShadow: 24,
  p: '20px',
  borderRadius: '4px',
};
