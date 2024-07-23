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
  const [pageCount, setPageCount] = useState<[]>([]) 
  const [zoom, setZoom] = useState( 1.0)
  const [urlPDF, setUrlPDF] = useState<string | null>(null)

  useEffect(()=>{
    onGeneratePDF()
  },[])
 
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);

    const page: any = []
    for (var i = 0; i < numPages; i++) {
      page.push(i + 1)
    }
    setPageCount(page)
  }

  function onClickZoomIn() {
    let newZoom = zoom + 0.1
    setZoom(newZoom)
  }

  function onClickZoomOut() {
    let newZoom = zoom - 0.1 
    setZoom(newZoom)
  }

  const onClickMove = (page: number) => {
    if (page >= 1 && page <= numPages) setPageNumber(page)
    return null
  }

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
        <div style={{ flex:2, backgroundColor:'trasnparent', overflow: 'scroll', height: '85vh',  }}>

          <div style={{ overflowX: 'hidden', overflowY: 'auto', position: 'relative', width: '100%', overflow:'scroll', padding:10,   }}>
            <center>
              {
                urlPDF &&
                pageCount.map((page) => {
                  return <MiniPageView url={urlPDF} page={page} onClick={() => setPageNumber(page)} selected={page==pageNumber} />
                })
              }
            </center>
          </div>


        </div>
         
      </div>
    </ContainerSection>
  ); 
};

export default CreatePDF;
