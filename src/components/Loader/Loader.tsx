import React from "react";
import styled from 'styled-components';

const LoaderDiv = styled.div`
margin: 0 auto;
  width: 60px;
  height: 50px;
  text-align: center;
  font-size: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`
const Bar = styled.div`
height: 100%;
width: 8px;
display: inline-block;
margin-left: 2px;
-webkit-animation: delay 0.8s infinite ease-in-out;
animation: delay 0.8s infinite ease-in-out;
`
const Bar1 = styled(Bar)`
background-color: #754fa0 ;
`
const Bar2 = styled(Bar)`
background-color: #09b7bf;
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
`
const Bar3 = styled(Bar)`
background-color: #90d36b;
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
`
const Bar4 = styled(Bar)`
background-color: #f2d40d;
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
`
const Bar5 = styled(Bar)`
background-color: #fcb12b;
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
`
const Bar6 = styled(Bar)`
background-color: #ed1b72;
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;


@keyframes delay {
  0%, 40%, 100% { 
    transform: scaleY(0.05);
    -webkit-transform: scaleY(0.05);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
`

const Loader = () => {
   return (
      <LoaderDiv>
         <Bar1></Bar1>
         <Bar2></Bar2>
         <Bar3></Bar3>
         <Bar4></Bar4>
         <Bar5></Bar5>
         <Bar6></Bar6>
      </LoaderDiv>
   )
}

export default Loader
