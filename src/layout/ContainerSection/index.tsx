import React, { ReactNode } from 'react';
import './index.css';
import { text } from 'stream/consumers';
import Button from '../../components/Button';

interface ContainerSectionProps {
  children: ReactNode;
  onClickButton: () => void;
  textButton?: string;
}

const ContainerSection: React.FC<ContainerSectionProps> = ({ children, onClickButton, textButton }) => {
  return (
    <div className="container">
      <div style={{flexDirection:'row', display:'flex', justifyContent:'space-between', alignItems:'center', padding:10}}>

        <h1 className='title' onClick={()=>{window.location.href='/'}}> 
          Documentos 
        </h1>

        <Button
            title={textButton || 'Texto'}
            onClick={()=>onClickButton()}
            width='400px'
          /> 

      </div>
      <div className="inner-container">
        {children}
      </div>
    </div>
  );
};

export default ContainerSection;

