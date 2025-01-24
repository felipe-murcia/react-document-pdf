import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import ContainerSection from "../layout/ContainerSection";
import Button from "../components/Button";
import PDFView from "../components/PDFView";
import { TypeContent } from "../enums/TypeContent";
import { ItemElement } from "../interfaces/ItemElement";
import { HtmlPDF } from "../components/HtmlPDF/HtmlPDF";
import { PDFGenerate } from "../PDF/PDFGenerate";
import { pdf } from '@react-pdf/renderer';
import { pdfjs } from 'react-pdf';
import { AppContext } from "../context/Context";
import MiniPageView from "../components/MiniPage";
const arrayPDF = ["PDF Historia", "PDF Factura", "PDF Contrato"];

const colorBackPDF = "#fbfbfb";
const colorCardBack = "#edeef3";

//f6f7fc
const CreatePDF: React.FC = () => {

  const { state: {  currentPage, numPages, pageCount  }, setCurrentPage, setPageCount, setNumPages } = useContext(AppContext);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [valueInputType, setValueInputType] = useState<null | string>(null);
  const [valueInputContent, setValueInputContent] = useState<any>(null);
  const [valueInputAlign, setValueInputAlign] = useState<any>(null);
  const [arrayElementPDF, setArrayElementPdf] = useState<ItemElement[]>([]);
  const [ urlPDF, setUrlPDF ] = useState<any>(null)

  const handleImageUpload = (event: any) => {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          setValueInputContent(base64String);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleAddItem = () => {
    const item: ItemElement = {
      type: valueInputType as
        | TypeContent.TITLE
        | TypeContent.SUBTITLE
        | TypeContent.PARRAPH
        | TypeContent.IMAGE,
      value: valueInputContent,
      align: valueInputAlign as 'left' | 'center' | 'right',
    };
    console.log(item);
    setArrayElementPdf([...arrayElementPDF, item]);
  };

  const onGeneratePDF = async () => { 
    setUrlPDF(null)
    const blob = await pdf(PDFGenerate({
      arrayElementPDF 
    })).toBlob();
    const fileURL = await window.URL.createObjectURL(blob);
    setUrlPDF(fileURL)
  }

  const validFormAll =
    valueInputType && valueInputContent && valueInputAlign ? false : true;

  return (
    <ContainerSection onClickButton={() => urlPDF? setUrlPDF(null) :onGeneratePDF()} textButton={urlPDF?"Volver":"Generar Documento"}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#f6f7fc",
        }}
      >

        {
          !urlPDF &&  
          <div
            style={{
              flex: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
          >
            <div style={{width: "90%", padding: 20, }}>
              <br/> 
              <div className="form-group">
                <label>Tipo de Elemento:</label>
                <select
                  id="elementType"
                  name="elementType"
                  onChange={(e) => setValueInputType(e.target.value)}
                >
                  <option value={''}></option>
                  <option value={TypeContent.TITLE}>Título</option>
                  <option value={TypeContent.SUBTITLE}>Subtítulo</option>
                  <option value={TypeContent.PARRAPH}>Párrafo</option>
                  <option value={TypeContent.IMAGE}>Imagen</option>
                </select>
              </div>

              <div className="form-group dynamic-field" id="elementField">
                <label>Contenido:</label>
                {valueInputType === TypeContent.PARRAPH ? (
                  <textarea
                    rows={10}
                    onChange={(e) => setValueInputContent(e.target.value)}
                  />
                ) : valueInputContent && valueInputType === TypeContent.IMAGE ? (
                  <input
                    type="file"
                    id="textInput"
                    name="content"
                    onChange={handleImageUpload}
                  />
                ) : (
                  <input
                    type="text"
                    id="textInput"
                    name="content"
                    onChange={(e) => setValueInputContent(e.target.value)}
                  />
                )}
              </div>
              <br/>
              <div className="form-group">
                <label>Alineado:</label>
                <select id="alignment" name="alignment" onChange={(e) => setValueInputAlign(e.target.value)}>
                  <option value="left">Izquierda</option>
                  <option value="center">Centro</option>
                  <option value="right">Derecha</option>
                </select>
              </div>

              <Button
                title={"Agregar"}
                onClick={() => handleAddItem()}
                disabled={!valueInputContent}
              />
            </div>
          </div>
        }

         
         {
            urlPDF ? 
            
              <PDFView url={urlPDF} />
            : <HtmlPDF arrayElementPDF={arrayElementPDF} />
         }
   

        <div
          style={{
            flex: 2,
            backgroundColor: "transparent",
            overflow: "scroll",
            height: "85vh",
          }}
        >
          <div
            style={{
              overflowX: "hidden",
              overflowY: "auto",
              position: "relative",
              width: "100%",
              overflow: "scroll",
              padding: 10,
            }}
          >
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

export default CreatePDF;
