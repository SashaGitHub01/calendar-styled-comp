import React from "react";
import { SpanStyled } from "./styles";

export interface ISpan {
   fz?: string,
   lh?: string,
   fw?: 400 | 500 | 600,
   overflow?: boolean,
   color?: 'main' | 'secondary' | 'event',
   [i: string]: any
}

const Span: React.FC<ISpan> = ({ children, ...props }) => {
   return (
      <SpanStyled {...props}>
         {children}
      </SpanStyled>
   )
}

export default Span
