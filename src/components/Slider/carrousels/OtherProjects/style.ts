import styled from 'styled-components';

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.grey500};
  color: ${({ theme }) => theme.colors.grey100};
  width: 270px;
  height: max-content;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 15px;
  gap: 20px;
  margin-bottom: 20px;

  .spacer {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey400};
    margin-top: -10px;
    margin-bottom: -10px;
  }

  span {
    display: flex;
    justify-content: space-between;
  }

  a {
    color: ${({ theme }) => theme.colors.grey00};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondary00};
  }

  .api-modal-link {
    cursor: pointer;
    text-decoration: underline;
  }

  .api-modal-link:hover {
    color: ${({ theme }) => theme.colors.secondary00};
  }
`;
