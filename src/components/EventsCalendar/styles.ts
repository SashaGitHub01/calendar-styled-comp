import styled from 'styled-components';

export const Ceil = styled.div`
`

export const Circle = styled.div`
display: flex;
align-items: center;
justify-content:center;
background-color: #fff;
width: 24px;
height: 24px;
position: absolute;
border-radius: 50%;
background-color: ${({ theme }) => theme.colors.danger};
font-size: 2rem;
color: #Fff;
left: 0;
top: 0;
z-index: 144;
transform: translateY(-40%) translateX(-40%);

&:hover {
   background-color: ${({ theme }) => theme.colors.danger_hover}
}
`