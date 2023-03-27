import styled, { createGlobalStyle } from 'styled-components';
import { mainTheme } from './theme';

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar{
    width: 10px;
    background-color: rgba(0, 0, 0, 0.13);
  }

  ::-webkit-scrollbar-thumb{
    background-color: rgba(0,0,0,0.3);
    border-radius: 10px;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;    
    user-select: none;    
    font-family: ${mainTheme.fonts.primary};
  }

  body{
    background-color: ${mainTheme.colors.grey600};;
  }

  img{
    max-width: 100%;
    max-height: 100%;
  }
    
  button{
    cursor: pointer;
    border: none;
  }
  
  dialog{
    display: unset;
    position: unset;
  }
`;

export const Container = styled.div`
  max-width: 90vw;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 800px) {
    max-width: 85vw;
  }
`;
