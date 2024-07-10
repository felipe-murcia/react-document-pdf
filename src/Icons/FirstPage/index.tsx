import React from "react";


interface Props{
    color?: string
  }
  
export const  FirstPage = ({ color = "#008767" }: Props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24.025}
    height={24}
    data-name="Componente 9 \u2013 2" 
  >
    <path fill="none" d="M.025 0h24v24h-24z" data-name="Rect\xE1ngulo 516" />
    <path
      fill="none"
      d="M0 24V0h24v24Z"
      data-name="Trazado 5851"
      opacity={0.87}
    />
    <path
      fill="#022e55"
      d="M7.41 18.41 12 13.82l4.59 4.59L18 17l-6-6-6 6ZM6 8V6h12v2Z"
      data-name="Trazado 5852"
    />
  </svg>
  );
}
 