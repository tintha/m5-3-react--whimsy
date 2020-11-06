import React from 'react';
import styled, { keyframes } from "styled-components";

const PoppingCircle = ({size, color}) => {
  
  return (
    <Wrapper size={size} color={`${color}`} />
  )
}

const scale = keyframes`
  0%   {transform: scale(0.2)}
  25%  {transform: scale(0.4)}
  50%  {transform: scale(0.6)}
  75%  {transform: scale(0.8)}
  100% {transform: scale(1)}
`;

const fade = keyframes`
  0%   {opacity: 0.2;}
  25%  {opacity: 0.4;}
  50%  {opacity: 0.6;}
  75%  {opacity: 0.8;}
  99%  {opacity: 0.4;}
  100% {opacity: 0;}
`;

const Wrapper = styled.div`
  background-color: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  animation: ${fade} 500ms forwards, ${scale} 500ms forwards;
`;

export default PoppingCircle;