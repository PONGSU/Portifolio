import styled from 'styled-components';

export const StyledContactPage = styled.main`
  display: flex;
  justify-content: center;

  .contacts-card {
    margin: auto;
    display: flex;
    gap: 20px;
    padding: 25px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.black};
    max-width: 500px;
    border-radius: 4px;

    span {
      display: flex;
      color: ${({ theme }) => theme.colors.grey100};
      align-items: center;
      justify-content: space-between;

      svg {
        height: 30px;
        width: 30px;
      }

      .copy-icon {
        cursor: pointer;
        width: 25px;
        height: 25px;
      }

      .copy-icon:hover {
        color: ${({ theme }) => theme.colors.secondary00};
      }
    }

    a {
      color: ${({ theme }) => theme.colors.grey100};
      display: flex;
      align-items: center;
      gap: 13px;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.secondary00};
    }
  }

  @media (max-width: 480px) {
    .contacts-card {
      span a svg {
        font-size: 12px;
        height: 18px;
        width: 18px;
      }
      span a h3 {
        margin-left: -5px;
        font-size: 12px;
        font-weight: 300;
      }
    }
  }
`;
