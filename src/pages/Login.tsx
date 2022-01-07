import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from 'styled-components';
import LoginForm from "../components/LoginForm/LoginForm";
import Span from "../components/Span/Span";
import { useTypedSelector } from "../hooks/useTypedSelector";

const LoginPage = styled.div`
   flex: 1 1 auto;
   display: flex; 
   align-items: center;
   justify-content: center;
`

const Window = styled.div`
   width: 40%;
   border: 1px solid ${({ theme }) => theme.colors.border_light};
   min-width: 250px;
`

const Head = styled.div`
padding: 1rem;
text-align: center;
border-bottom: 1px solid ${({ theme }) => theme.colors.border_light};
`

const Login = () => {
   const { isAuth } = useTypedSelector(state => state.auth);
   const nav = useNavigate();

   useEffect(() => {
      if (isAuth) nav('/')
   }, [isAuth])

   return (
      <LoginPage>
         <Window>
            <Head>
               <Span fw={600} fz="2rem" >
                  Вход в учетную запись
               </Span>
            </Head>
            <LoginForm />
         </Window>
      </LoginPage>
   )
}

export default Login
