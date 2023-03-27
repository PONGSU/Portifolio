import styled from 'styled-components';

export const StyledArticle = styled.article`
  position: relative;
  display: flex;
  height: 400px;
  width: 1000px;
  background-color: ${({ theme }) => theme.colors.grey500};
  padding: 13px;
  gap: 23px;
  border-radius: 4px;
  margin-bottom: 13px;

  video {
    min-width: 500px;
  }

  aside {
    min-width: 450px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.grey100};
  }

  p {
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.grey200};
    font-size: 15px;
  }

  span {
    position: fixed;
    bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    width: 450px;
    padding: 0 13px 0 5px;

    a {
      display: flex;
      align-items: center;
      gap: 7px;
      color: ${({ theme }) => theme.colors.grey100};
    }

    a:hover {
      color: ${({ theme }) => theme.colors.secondary00};
    }
  }

  @media (max-width: 1270px) {
    width: 800px;
    video {
      min-width: 300px;
    }
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    width: 800px;
    height: 500px;

    max-width: 90vw;
    video {
      width: 100%;
      max-height: 160px;
    }
    aside {
      min-width: 100%;
      max-width: 100%;
    }

    h2 {
      font-size: 21px;
    }
    p {
      font-size: 13px;
    }
  }

  span {
    width: 350px;
  }

  @media (max-width: 600px) {
    height: 570px;
  }

  @media (max-width: 480px) {
    height: 646px;
    span {
      width: 280px;
      a {
        font-size: 13px;
      }
    }
  }

  @media (max-width: 360px) {
    video {
      max-width: 260px;
      min-width: 260px;
    }
  }
`;
