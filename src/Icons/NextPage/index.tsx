import React from "react";


interface Props{
    color?: string
  }
  
export const  NextPage = ({ color = "#008767" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24.025} height={24} >
    <g data-name="Componente 9 \u2013 5">
      <path fill="none" d="M24 24H0V0h24z" data-name="Rect\xE1ngulo 516" />
      <g data-name="Grupo 490">
        <path fill="none" d="M24.025 0v24h-24V0Z" data-name="Trazado 5849" />
      </g>
      <g data-name="Grupo 491">
        <path
          fill="#022e55"
          d="M3.795 6.23 2.025 8l10 10 10-10-1.77-1.77-8.23 8.23Z"
          data-name="Trazado 5850"
        />
      </g>
    </g>
  </svg>
  );
}
 