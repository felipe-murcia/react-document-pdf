import React, { ReactNode } from 'react';
import './index.css'; 

interface ContainerSectionProps {
  children: ReactNode;
}

const SidebarPage = () => {
  return (
    <div className="container">
      <div>
        <h1 className='title'> 
          Documentos 2
        </h1>
      </div>
      <div className="inner-container">
       
      </div>
    </div>
  );
};

export default SidebarPage;
