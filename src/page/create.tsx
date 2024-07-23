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
//f6f7fc
const CreatePDF: React.FC = () => {

  const [ selectDocument, setSelectDocument ] = useState<any>(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1); 
  const [urlPDF, setUrlPDF] = useState<string | null>(null)

  useEffect(()=>{
    onGeneratePDF()
  },[]) 

  const onGeneratePDF = async () => { 
    setUrlPDF(null) 
    // console.log('dataNegacion2', dataNegacion2)
    const blob = await pdf(PDFHistoria()).toBlob();
    const fileURL = await window.URL.createObjectURL(blob);
    setUrlPDF(fileURL) 
  }


  return (
    <ContainerSection>
      <div style={{display:'flex', flexDirection:'row', backgroundColor:'#f6f7fc'}}>

            
        <div style={{ flex:3,  display:'flex', flexDirection:'column', alignItems:'flex-end', }}>

        <div style={{ width:'100%', display:'flex', justifyContent:'center'}}>
          <Button title={'Crear Documento 222'} onClick={()=>{}} />
        </div>

     

        </div>

        <div style={{ flex:5, height:800, backgroundColor:'#fbfbfb', overflow:'scroll'}}>

            {
              urlPDF&& <PDFView url={urlPDF}/>
            }


        </div> 
         
      </div>
    </ContainerSection>
  ); 
};

export default CreatePDF;
