import React from "react";


interface Props{
    color?: string
  }
  
export const  BackPage = ({ color = "#008767" }: Props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24.025}
    height={24}
    data-name="Componente 9 \u2013 4" 
  >
    <path fill="none" d="M.025 0h24v24h-24z" data-name="Rect\xE1ngulo 516" />
    <g data-name="Grupo 490">
      <path fill="none" d="M0 24V0h24v24Z" data-name="Trazado 5849" />
    </g>
    <g data-name="Grupo 491">
      <path
        fill="#022e55"
        d="M20.23 17.77 22 16 12 6 2 16l1.77 1.77L12 9.54Z"
        data-name="Trazado 5850"
      />
    </g>
  </svg>
  );
}
 