import styled from 'styled-components';

export interface IFlex {
   gap?: string,
   jf?: string,
   ai?: string,
   direction?: string,
   p?: string
}

const Flex = styled.div<IFlex>`
display: flex;
flex-direction: ${({ direction }) => direction || 'row'};
justify-content: ${({ jf }) => jf || 'flex-start'};
align-items: ${({ ai }) => ai || 'start'};
padding: ${({ p }) => p && p || 0};
gap: ${({ gap }) => gap || 0};
`

export default Flex
