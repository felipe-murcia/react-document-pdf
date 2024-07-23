import React, { useContext, useEffect, useState } from 'react'; 
import './index.css'; 
import ContainerSection from '../layout/ContainerSection';
import { Document, Page, pdfjs } from 'react-pdf';
import Explore from '../components/Explore';
import { PDFHistoria } from '../PDF/Historia';
import { pdf } from '@react-pdf/renderer';
import MiniPageView from '../components/MiniPage';
import { ImageComponent } from '../components/ImageComponent';
import Button from '../components/Button';
import { AppContext } from '../context/Context';
import PDFView from '../components/PDFView';
import { Navigate } from 'react-router-dom';

const arrayPDF = [
    'PDF Historia',
    'PDF Factura',
    'PDF Contrato'
]

const colorBackPDF = '#fbfbfb'
const colorCardBack = '#edeef3'
//f6f7fc
const Index: React.FC = () => {

  const [ selectDocument, setSelectDocument ] = useState<any>(null);

  const { state: {  currentPage, numPages, pageCount, urlPDF  }, setCurrentPage, setPageCount, setNumPages, setUrlPDF } = useContext(AppContext);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  // const [numPages, setNumPages] = useState(0);
  // const [pageNumber, setPageNumber] = useState(1);
  // const [pageCount, setPageCount] = useState<[]>([]);
  // const [urlPDF, setUrlPDF] = useState<string | null>(null)

  const [ pageCreate, setPageCreate ] = useState(false)

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
          <Button title={'Crear Documento'} onClick={()=>setPageCreate(true)} />
        </div>
        
        {
          pageCreate&&<Navigate to="/create" replace={true} />
        }

            {
                arrayPDF.map((item,index)=>{
                    let selected = index==selectDocument
                    return(
                        <div style={{width:'90%', backgroundColor:selected?colorBackPDF:colorCardBack, marginTop:40, padding:0,
                            marginRight:selected?0:10, borderLeft:selected?'6px solid #7c01ff':'' }} onClick={()=>setSelectDocument(index)}>

                              <div style={{padding:25}}>
                                <h1 style={{fontSize:20}}>
                                    {item} 
                                </h1>
                                <span>Prueba</span>
                              </div>
                        </div>
                    )
                })
            }

        </div>

        <div style={{ flex:5, height:800, backgroundColor:'#fbfbfb', overflow:'scroll'}}> 
            {
              urlPDF&& <PDFView url={urlPDF} />
            } 
        </div>

        <div style={{ flex:2, backgroundColor:'trasnparent', overflow: 'scroll', height: '85vh',  }}> 
          <div style={{ overflowX: 'hidden', overflowY: 'auto', position: 'relative', width: '100%', overflow:'scroll', padding:10,   }}>
            <center>
              {
                urlPDF &&
                pageCount.map((page) => {
                  return <MiniPageView url={urlPDF} page={page} onClick={() => setCurrentPage(page)} selected={page==currentPage} />
                })
              }
            </center>
          </div>  
        </div>
         
      </div>
    </ContainerSection>
  );
};

export default Index;
