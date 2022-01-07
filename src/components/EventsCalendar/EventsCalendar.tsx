import { Calendar, Form, Modal } from "antd";
import { Moment } from "moment";
import React, { useState } from "react";
import { IEvent } from "../../models/IEvent";
import { formatDate } from "../../utils/formatDate";
import CreateForm from "../CreateForm/CreateForm";
import Span from "../Span/Span";
import { Ceil, Circle } from "./styles";
import { IoMdClose as Close } from 'react-icons/io';
import Flex from "../Flex/Flex";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchRemove } from "../../store/thunks/events";
import Button from "../Button/Button";

interface IEventsCalendar {
   isCreating: boolean,
   isRemoving: boolean,
   events: IEvent[],
   createError: null | string,
   removeError: null | string,
}

const EventsCalendar: React.FC<IEventsCalendar> = ({
   isCreating, events, createError, removeError, isRemoving
}) => {
   const [visible, setVisible] = useState(false);
   const [visibleRem, setVisibleRem] = useState(false);
   const [removePrepare, setRemovePrepare] = useState<IEvent | null>(null);
   const dispatch = useDispatch();
   const { user, isInitialized } = useTypedSelector(state => state.auth)

   const dateCeilRender = (moment: Moment) => {
      const formated = formatDate(moment)

      return (
         <Ceil>
            {events?.map((item) => {
               if (formated !== item.date) return;

               return <Flex jf="center" key={item.date + item.description}>
                  {user?.id === item.creator
                     && <Circle onClick={() => onSelect(item)}>
                        <Close />
                     </Circle>}
                  <Span
                     fw={500}
                     key={item.date}
                     color="event"
                     lh='2rem'
                  >
                     {item.description}
                  </Span>
               </Flex>
            })}
         </Ceil>
      )
   }


   const handleOpen = () => {
      setVisible(true)
   }

   const handleOpenRem = () => {
      setVisibleRem(true)
   }

   const handleRemove = async () => {
      if (!removePrepare) return;

      await dispatch(fetchRemove(removePrepare.id))

      if (!removeError) {
         handleCancelRemove();
      }
   }

   const handleCancel = () => {
      setVisible(false)
   }

   const handleCancelRemove = () => {
      setVisibleRem(false)
      setRemovePrepare(null)
   }

   const onSelect = (item: IEvent) => {
      setRemovePrepare(item);
      handleOpenRem();
   }

   return (
      <>
         {isInitialized && events
            && <Calendar dateCellRender={dateCeilRender} />}
         <Modal
            title="Создать событие"
            visible={visible}
            confirmLoading={isCreating}
            onCancel={handleCancel}
            footer={false}
         >
            <CreateForm
               handleCancel={handleCancel}
               events={events}
               createError={createError}
            />
         </Modal>
         <Modal
            title="Удалить событие"
            visible={visibleRem}
            confirmLoading={isRemoving}
            onOk={handleRemove}
            onCancel={handleCancelRemove}
         >
            <Span>Вы действительно хотите удалить событие </Span>
            <Span fw={600} fz="1.6rem">
               "{removePrepare?.description}"
            </Span>
         </Modal>
         <Flex ai="center" jf="center" p='1.5rem 0 0 0 '>
            <Button onClick={handleOpen}>
               Добавить событие
            </Button>
         </Flex>
      </>
   )
}

export default EventsCalendar
