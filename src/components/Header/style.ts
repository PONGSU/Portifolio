import styled from 'styled-components';
import { mainTheme } from '../../styles/theme';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: ${mainTheme.colors.black};
  .header {
    width: 100%;
    padding: 13px 0;
    display: flex;
    justify-content: space-between;
    height: 85px;

    .logo-box {
      display: flex;
      align-items: center;
      gap: 13px;
      h2 {
        font-family: ${mainTheme.fonts.primary};
        font-weight: 700;
        font-size: 23px;
        text-align: center;
        color: ${mainTheme.colors.grey100};
      }
    }

    .desktop-menu {
      display: none;
      align-items: center;
      gap: 25px;
      a {
        color: ${mainTheme.colors.grey200};
        font-size: 20px;
        font-weight: 400;
      }
      a:hover {
        text-decoration: underline;
        text-decoration-color: ${mainTheme.colors.secondary00};
        text-underline-offset: 7px;
      }
    }

    #mobile-menu {
    }
  }

  @media (min-width: 620px) {
    .header {
      .desktop-menu {
        display: flex;
      }
    }
    .bm-burger-button {
      display: none;
    }
  }
  @media (max-width: 350px) {
    .header {
      .logo-box {
        h2 {
          font-size: 18px;
        }
      }
    }
  }

  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    right: 36px;
    top: 25px;
  }

  .bm-burger-bars {
    border-radius: 50px;
    background: ${mainTheme.colors.grey100};
  }

  .bm-burger-bars-hover {
    background: ${mainTheme.colors.secondary00};
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: ${mainTheme.colors.grey100};
  }

  .bm-menu-wrap {
    position: fixed;
    left: -5vw;
    height: 100%;
  }

  .bm-menu {
    background: ${mainTheme.colors.secondary400};
    padding: 2.5em 1.5em 0;
    font-size: 20px;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    color: #b8b7ad;
    padding: 20px;
  }

  .bm-item {
    margin-top: 20px;
    color: #b8b7ad;
    padding-left: 50px;
  }

  .bm-overlay {
    background-color: rgba(0, 0, 0, 0.9) !important;
  }
`;
