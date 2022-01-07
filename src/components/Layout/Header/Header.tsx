import React from "react";
import Flex from "../../Flex/Flex";
import logo from '../../../assets/logo.png';
import { HeaderStyled, Logo, LogoCont, Nav } from "./styles";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Span from "../../Span/Span";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { Popover } from "antd";
import PopupContent from "../Popover/Popover";

const Header = () => {
   const { isAuth, user } = useTypedSelector(state => state.auth);
   const nav = useNavigate();

   const handleClick = () => {
      nav('/login');
   }

   return (
      <HeaderStyled>
         <Flex jf="space-between" ai="center">
            <LogoCont width="80px">
               <Link to='/'>
                  <Logo src={logo} />
               </Link>
            </LogoCont>
            <Nav>
               {!isAuth
                  ? <Button onClick={handleClick}>
                     Войти
                  </Button>
                  : <Flex gap="3rem" ai="center" p="1.2rem">
                     <Popover content={PopupContent} >
                        <Span fz="1.6rem" fw={500} color='secondary'>
                           {user?.username}
                        </Span>
                     </Popover>
                  </Flex>}
            </Nav>
         </Flex>
      </HeaderStyled>
   )
}

export default Header
