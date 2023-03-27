import styled from 'styled-components';

export const StyledTechsLogos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 13px;

  .tech-box {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.grey500};

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  .tech-box:hover {
    box-shadow: 2px 1px 1px 1px ${({ theme }) => theme.colors.secondary00};
  }

  .SCRUM {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;

    img {
      margin-top: -10px;
      max-height: 95%;
    }

    h4 {
      color: #1e7cc0;
      margin-top: -12px;
      font-size: 16px;
      font-weight: bolder;
    }
  }
`;
