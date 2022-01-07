import styled from 'styled-components';

export const Wrapper = styled.div`
   flex: 1 1 auto;
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   position: relative;
   background-color: ${({ theme }) => theme.colors.body};
`

export const Main = styled.main`
   background: #fff;
   width: 100%;
   height: 100%;
   flex: 1 1 auto;
   border-radius: 15px;
   padding: 1.2rem;
   display: flex;
   flex-direction: column;
`
export const Container = styled.div`
flex: 1 1 auto;
position: relative;
max-width: 1180px;
padding: 15px 15px;
margin: 0 auto;
width: 100%;
display: flex;
flex-direction: column;
`