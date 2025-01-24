import React, { useEffect, useState } from 'react'; 
import './index.css'; 
import ContainerSection from '../layout/ContainerSection';
import { Document, Page, pdfjs } from 'react-pdf';
import Explore from '../components/Explore';
import { PDFHistoria } from '../PDF/Historia';
import { pdf } from '@react-pdf/renderer';
import MiniPageView from '../components/MiniPage';
import { ImageComponent } from '../components/ImageComponent';
import Button from '../components/Button';
import PDFView from '../components/PDFView';

const arrayPDF = [
    'PDF Historia',
    'PDF Factura',
    'PDF Contrato'
]

const colorBackPDF = '#fbfbfb'
const colorCardBack = '#edeef3'

interface ItemElement {
  type: 'Image' | 'Title' | 'Paragraph' | 'Subtitle';
  value: any;
  align: 'Right' | 'Center' | 'Left';
  size?: 'Large' | 'Medium' | 'Medium' | null;
  color?: string;
}

//f6f7fc
const CreatePDF: React.FC = () => {
 
  const [ valueInput, setValueInput] = useState<null|string>(null);
  const [ typeElement, setTypeElement ] = useState(null); 
  const [ arrayElementPDF, setArrayElementPdf ] = useState<ItemElement[]>([]);
 
  return (
    <ContainerSection>
      <div style={{display:'flex', flexDirection:'row', backgroundColor:'#f6f7fc'}}>

            
        <div style={{ flex:3,  display:'flex', flexDirection:'column', alignItems:'center', }}>

    


        <div>

          <input 
            id="value"
            type="text" 
            placeholder="Example..."
            value={valueInput || ''}
            onChange={(e)=>setValueInput(e.target.value)}
            className={'textInput'} />
          </div>
          

          <Button title={'Add'} onClick={()=>{}} />



        </div>

     
 

        <div style={{ flex:5, height:800, backgroundColor:'#fbfbfb', overflow:'scroll'}}> 
           
          {/* pdf */}

          {
            arrayElementPDF.map((item:ItemElement)=>{
              return(
                <span>{item.type}:{item.value}</span>
              )
            })
          }

        </div> 


        <div style={{ flex:2, backgroundColor:'trasnparent', overflow: 'scroll', height: '85vh',  }}> 
          <div style={{ overflowX: 'hidden', overflowY: 'auto', position: 'relative', width: '100%', overflow:'scroll', padding:10,   }}>
            <center>
       
            </center>
          </div>  
        </div>

         
      </div>
    </ContainerSection>
  ); 
};

export default CreatePDF;
