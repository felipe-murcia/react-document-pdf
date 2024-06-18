import React from 'react'; 
import './index.css'; 
import ContainerSection from '../layout/ContainerSection';

const arrayPDF = [
    'PDF Historia',
    'PDF Factura',
    'Crear PDF'
]

const colorBackPDF = '#fbfbfb'
const colorCardBack = '#edeef3'
//f6f7fc
const Index: React.FC = () => {
  return (
    <ContainerSection>
      <div style={{display:'flex', flexDirection:'row', backgroundColor:'#f6f7fc'}}>

        <div style={{ flex:3,  display:'flex', flexDirection:'column', alignItems:'flex-end' }}>

            {
                arrayPDF.map((item,index)=>{
                    let selected = index==1
                    return(
                        <div style={{width:'90%', height:160, backgroundColor:selected?colorBackPDF:colorCardBack, marginTop:40, padding:0,
                            marginRight:selected?0:20, borderLeft:selected?'10px solid #242cc8':'', borderRadius:selected?'20px 0px 0px 20px': '20px'}}>
                            <h1 style={{fontSize:30, margin:30}}>
                                {item}
                            </h1>
                        </div>
                    )
                })
            }

        </div>

        <div style={{ flex:5, height:800, backgroundColor:'#fbfbfb'}}>

        </div>
        <div style={{ flex:2, height:200, backgroundColor:'#f4f5f9'}}>

        </div>
         
      </div>
    </ContainerSection>
  );
};

export default Index;
