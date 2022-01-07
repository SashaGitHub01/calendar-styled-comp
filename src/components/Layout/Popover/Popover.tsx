import React from "react";
import { useDispatch } from "react-redux";
import { fetchLogout } from "../../../store/thunks/auth";
import Flex from "../../Flex/Flex";
import Span from "../../Span/Span";
import { IoMdClose as Close } from 'react-icons/io';
import styled from "styled-components";

const Wrap = styled.div`
cursor: pointer;
width: 100%;

& .icon {
color: red;
}

&:hover {
text-decoration: underline;
}
`

const PopupContent = () => {
   const dispatch = useDispatch();

   const handleLogout = () => {
      dispatch(fetchLogout())
   }

   return (
      <Wrap>
         <Flex ai="center" gap="0.5rem">
            <Close size={'2rem'} className='icon' />
            <Span fz="1.6rem" onClick={handleLogout}>
               Выйти
            </Span>
         </Flex>
      </Wrap>
   )
}

export default PopupContent
