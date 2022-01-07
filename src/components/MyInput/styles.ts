import styled from 'styled-components';
import { IMyInput } from './MyInput';

export const MyInputStyled = styled.input<IMyInput>`
display: block;
width: 100%;
border: 1px solid ${({ theme, error }) => error ? theme.colors.danger : theme.colors.border};
padding: 0.4rem 1rem; 
border-radius: 4px;
font-size: 14px;

&::placeholder {
   opacity: 0.5;
}
`