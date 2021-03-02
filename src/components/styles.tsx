import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const Header = styled.header`
  background-color: #5d6ee0;
  position: relative;
  display: flex;
  padding: 0.8%; 
  justify-content: space-evenly;
`;

export const Navibar = styled.nav`
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
`;

export const P = styled.p`
  color: white;
  font-size: 18px;
  &:hover {
    color: red;
    transition: 0.5s;
  }
`;

export const H1 = styled.h1`
  font-size: 35px;
  color: white;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 0.3rem;
  border: none;
  color: #5d6ee0;
  font-size: 20px;
  &:hover {
    color: white;
    background-color: red;
    transition: 0.5s;
  }
`; 