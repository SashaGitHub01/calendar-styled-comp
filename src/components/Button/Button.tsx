import React from "react";
import { ButtonStyled } from "./styles";

export interface IButton {
   type?: 'submit' | 'button',
   disabled?: boolean,
   size?: 'small' | 'default',
   onClick?: () => void
}

const Button: React.FC<IButton> = ({ children, ...props }) => {
   return (
      <ButtonStyled
         {...props}
      >
         {children}
      </ButtonStyled>
   )
}

export default Button
