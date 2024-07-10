import React, { useEffect, useState } from 'react'; 
import './index.css'; 
import ContainerSection from '../layout/ContainerSection';
import { Document, Page, pdfjs } from 'react-pdf';
import Explore from '../components/Explore';
import { PDFHistoria } from '../PDF/Historia';
import { pdf } from '@react-pdf/renderer';

const arrayPDF = [
    'PDF Historia',
    'PDF Factura',
    'Crear PDF'
]

const colorBackPDF = '#fbfbfb'
const colorCardBack = '#edeef3'
//f6f7fc
const Index: React.FC = () => {

  const [ selectDocument, setSelectDocument ] = useState<any>(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState<[]>([]) 
  const [zoom, setZoom] = useState( 1.2)
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
    let newZoom = zoom + 0.2
    setZoom(newZoom)
  }

  function onClickZoomOut() {
    let newZoom = zoom - 0.2
    if (newZoom > 0.3) setZoom(newZoom)
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

            {
                arrayPDF.map((item,index)=>{
                    let selected = index==selectDocument
                    return(
                        <div style={{width:'90%', height:140, backgroundColor:selected?colorBackPDF:colorCardBack, marginTop:40, padding:0,
                            marginRight:selected?0:10, borderLeft:selected?'6px solid #242cc8':'', borderRadius:selected?'20px 0px 0px 20px': '20px' }} onClick={()=>setSelectDocument(index)}>

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

        <div style={{ flex:5, height:800, backgroundColor:'#fbfbfb'}}>

            {
              urlPDF&&
            <Document
                file={urlPDF}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} scale={zoom} renderMode='canvas' renderTextLayer={false} renderAnnotationLayer={false} />
              </Document>
            }

        </div>
        <div style={{ flex:2, height:200, backgroundColor:'red'}}>

            <Explore 
              pageNumber={pageNumber}
              onClickZoomIn={onClickZoomIn}
              onClickZoomOut={onClickZoomOut}
              setZoom={() => setZoom(1)}
              onClickFirst={() => onClickMove(1)}
              onClickBack={() => onClickMove(pageNumber - 1)}
              onClickNext={() => onClickMove(pageNumber + 1)}
              onClickLast={() => onClickMove(pageCount.length)}
            />

        </div>
         
      </div>
    </ContainerSection>
  );
};

export default Index;
