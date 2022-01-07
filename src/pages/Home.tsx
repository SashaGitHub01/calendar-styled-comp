import { Calendar, Modal } from "antd";
import { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import Button from "../components/Button/Button";
import EventsCalendar from "../components/EventsCalendar/EventsCalendar";
import Flex from "../components/Flex/Flex";
import Span from "../components/Span/Span";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchEvents } from "../store/thunks/events";

export const HomePage = styled.div`

`

export const Title = styled.div`
padding-bottom: 0.9rem;
text-align: center;
`

const Home = () => {
   const dispatch = useDispatch();
   const {
      isCreating, createError, isFetching, events, removeError, isRemoving
   } = useTypedSelector(state => state.events);

   useEffect(() => {
      dispatch(fetchEvents());
   }, [])


   return (
      <HomePage>
         <Title>
            <Span fz={'2.4rem'} fw={600}>
               События
            </Span>
         </Title>
         <EventsCalendar
            isRemoving={isRemoving}
            removeError={removeError}
            createError={createError}
            events={events}
            isCreating={isCreating}
         />
      </HomePage>

   )
}

export default Home
