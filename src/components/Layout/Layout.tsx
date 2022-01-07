import React from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import { Container, Main, Wrapper } from './styles';

const Layout: React.FC = ({ children }) => {
   return (
      <Wrapper>
         <Header />
         <Container>
            <Main>
               {children}
            </Main>
         </Container>
      </Wrapper>
   )
}

export default Layout
