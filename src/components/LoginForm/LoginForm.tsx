import React from "react";
import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import Button from "../Button/Button";
import MyInput from "../MyInput/MyInput";
import { rules } from "../../utils/rules";
import Span from "../Span/Span";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../store/thunks/auth";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const LoginForm = () => {
   const dispatch = useDispatch();
   const { loginError } = useTypedSelector(state => state.auth);

   const initialValues = {
      username: '',
      password: ''
   }

   const [form] = useForm();

   const onSubmit = async (vals: typeof initialValues) => {
      await dispatch(fetchLogin(vals));

      if (!loginError) {
         form.resetFields();
      }
   }

   return (
      <Form
         onFinish={onSubmit}
         form={form}
         initialValues={initialValues}
         style={{
            padding: '1.6rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
         }}
      >
         <Form.Item
            labelAlign="left"
            rules={[rules.required(), rules.length(3, 30)]}
            name={'username'}
            style={{
               flexDirection: 'column',
               width: '100%'
            }}
            label={<Span fw={600} fz="1.6rem" color='secondary'>
               Имя пользователя
            </Span>}
         >
            <MyInput />
         </Form.Item>
         <Form.Item
            labelAlign="left"
            labelCol={{ lg: 77 }}
            rules={[rules.required(), rules.length(3, 30)]}
            name={'password'}
            style={{
               flexDirection: 'column',
               width: '100%'
            }}
            label={<Span fw={600} fz="1.6rem" color='secondary'>
               Пароль
            </Span>}
         >
            <MyInput type='password' />
         </Form.Item>
         <Button
            type="submit"
         >
            Войти
         </Button>
      </Form>
   )
}

export default LoginForm
