import styled from 'styled-components';
import { IFlex } from './Flex';

export const FlexStyled = styled.div<IFlex>`
display: flex;
flex-direction: ${({ direction }) => direction || 'row'};
justify-content: ${({ jf }) => jf || 'flex-start'};
align-items: ${({ ai }) => ai || 'start'};
padding: ${({ p }) => p || 0};
gap: ${({ gap }) => gap || 0};
`