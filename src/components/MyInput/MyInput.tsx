import React from "react";
import { MyInputStyled } from "./styles";

export interface IMyInput {
   placeholder?: string,
   type?: 'password' | 'text' | 'email',
   error?: boolean
}

const MyInput: React.FC<IMyInput> = ({ ...props }) => {
   return (
      <MyInputStyled
         {...props}
      />
   )
}

export default MyInput
