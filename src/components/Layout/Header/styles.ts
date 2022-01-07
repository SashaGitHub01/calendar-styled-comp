import styled from 'styled-components';
import Flex from '../../Flex/Flex';
import Span from '../../Span/Span';

export const HeaderStyled = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
height: 75px;
padding: 0.5rem 2.5rem;
background-color: ${({ theme }) => theme.colors.header};
`

export const LogoCont = styled.div<{ width: string }>`
display: block;
width: ${({ width }) => width};
display: flex;
justify-content:center;
cursor: pointer;
`

export const Logo = styled.img`
`

export const Nav = styled.nav`
display: flex;
align-items: center;

& ${Span.toString()} {
   cursor: pointer;
}
`

