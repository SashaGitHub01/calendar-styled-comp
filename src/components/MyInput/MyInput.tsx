import styled from 'styled-components';

export interface IMyInput {
   placeholder?: string,
   type?: 'password' | 'text' | 'email',
   error?: boolean
}

const MyInput = styled.input<IMyInput>`
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

export default MyInput