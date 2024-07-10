import React, { ReactNode } from 'react';
import './index.css';

interface ContainerSectionProps {
  children: ReactNode;
}

const ContainerSection: React.FC<ContainerSectionProps> = ({ children }) => {
  return (
    <div className="container">
      <div>
        <h1 className='title'> 
          Documentos 2
        </h1>
      </div>
      <div className="inner-container">
        {children}
      </div>
    </div>
  );
};

export default ContainerSection;

