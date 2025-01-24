import React from "react";


interface Props{
    color?: string
  }
  
export const  LastPage = ({ color = "#008767" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24.025} height={24} >
    <g data-name="Componente 9 \u2013 3">
      <path fill="none" d="M24 24H0V0h24z" data-name="Rect\xE1ngulo 516" />
      <path
        fill="none"
        d="M24.025 0v24h-24V0Z"
        data-name="Trazado 5851"
        opacity={0.87}
      />
      <path
        fill="#022e55"
        d="m16.615 5.59-4.59 4.59-4.59-4.59L6.025 7l6 6 6-6ZM18.025 16v2h-12v-2Z"
        data-name="Trazado 5852"
      />
    </g>
  </svg>
  );
}
 