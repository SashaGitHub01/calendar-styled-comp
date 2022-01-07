import { DatePicker, Form, Select } from "antd";
import { Moment } from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IEvent } from "../../models/IEvent";
import { fetchCreate } from "../../store/thunks/events";
import { fetchUsers } from "../../store/thunks/users";
import { formatDate } from "../../utils/formatDate";
import { rules } from "../../utils/rules";
import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import MyInput from "../MyInput/MyInput";

interface ICreateForm {
   events: IEvent[],
   createError: null | string,
   handleCancel: () => void
}

const CreateForm: React.FC<ICreateForm> = ({ events, createError, handleCancel }) => {
   const [date, setDate] = useState('');
   const [form] = Form.useForm();
   const dispatch = useDispatch();

   const { users } = useTypedSelector(state => state.users)
   const { user } = useTypedSelector(state => state.auth)

   useEffect(() => {
      dispatch(fetchUsers());
   }, [])

   const initial = {
      date: '',
      guests: [],
      description: ''
   }

   const onSubmit = async (vals: any) => {
      await dispatch(fetchCreate({
         ...vals,
         date
      }))

      if (!createError) {
         form.resetFields();
         handleCancel()
      }
   }

   const onChange = (pick: Moment | null) => {
      if (!pick) return;

      setDate(formatDate(pick));
   }


   return (
      <Form
         onFinish={onSubmit}
         initialValues={initial}
         form={form}
      >
         <Form.Item
            name='description'
            rules={[rules.required()]}
         >
            <MyInput placeholder="Название события" />
         </Form.Item>
         <Form.Item
            name='date'
            rules={[rules.required(), rules.correctDate(events)]}
         >
            <DatePicker
               style={{ width: '50%' }}
               onChange={onChange}
               placeholder='Выберите дату'
            />
         </Form.Item>
         <Form.Item
            rules={[rules.required()]}
            name='guests'
         >
            <Select
               mode="multiple"
               allowClear
               style={{ width: '100%' }}
               placeholder="Выберите пользователей"
            >
               {users
                  && users.map(({ username, id }) => (
                     <Select.Option key={id} disabled={user?.id === id}>
                        {username}
                     </Select.Option>
                  ))}
            </Select>
         </Form.Item>
         <Flex jf="center">
            <Button type="submit">
               Создать
            </Button>
         </Flex>
      </Form>
   )
}

export default CreateForm
