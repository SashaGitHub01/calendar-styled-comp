import React from 'react';
import { FlexStyled } from './styles';

export interface IFlex {
   gap?: string,
   jf?: string,
   ai?: string,
   direction?: string,
   p?: string
}

const Flex: React.FC<IFlex> = ({ children, ...props }) => {
   return (
      <FlexStyled {...props}>
         {children}
      </FlexStyled>
   )
}

export default Flex
