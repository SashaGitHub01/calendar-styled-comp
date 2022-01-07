import styled from 'styled-components';

export interface IButton {
   type?: 'submit' | 'button',
   disabled?: boolean,
   size?: 'small' | 'default',
   onClick?: () => void
}

const Button = styled.button<IButton>`
font-size: ${({ size }) => size == 'small'
      ? '1.4rem'
      : '1.7rem'};
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ theme }) => theme.colors.primary};
min-height: ${({ size }) => size == 'small'
      ? '26px'
      : '32px'};
padding: ${({ size }) => size == 'small'
      ? '0 1.4rem'
      : '0 1.8rem'};
color: #fff;
text-align: center;
border-radius: ${({ theme }) => theme.borderRadius};

&:hover {
   background-color:${({ theme }) => theme.colors.primary_hover} ;
}

&:disabled {
   opacity: 0.6;
   pointer-events: none;
}
`
export default Button
