import './styles.css';
import { IconZoomIn } from '../../Icons/ZoomIn'; 
import { IconZoomOut } from '../../Icons/ZoomOut';
import { IconZoomOne } from '../../Icons/ZoomOne';
import { FirstPage } from '../../Icons/FirstPage';
import { BackPage } from '../../Icons/BackPage';
import { NextPage } from '../../Icons/NextPage';
import { LastPage } from '../../Icons/LastPage';

interface Props {
	pageNumber: number,
	onClickZoomIn: () => void,
	onClickZoomOut: () => void,
	setZoom: () => void,
	onClickFirst: () => void,
	onClickBack: () => void,
	onClickNext: () => void,
	onClickLast: () => void,
}

function ExplorePDFWeb({ onClickZoomIn, onClickZoomOut, setZoom, onClickFirst, onClickBack, onClickNext, onClickLast }: Props) {

	return (
		<div style={{ height:150, top:120, right:0, backgroundColor:'transparent', width:50, marginLeft:10}}> 
      <div className='bottomSpace' onClick={onClickZoomIn}>              
        <IconZoomIn />
      </div>   
      <div className='bottomSpace' onClick={onClickZoomOut}> 
        <IconZoomOut/>
      </div>     
      <div className='bottomSpace' onClick={setZoom}> 
        <IconZoomOne />
      </div>   
      <div style={{height:30}} />
      <div className='bottomSpace'  onClick={onClickFirst}> 
        <FirstPage />
      </div>   
      <div className='bottomSpace' onClick={onClickBack} > 
        <BackPage />
      </div>    
      <div className='bottomSpace' onClick={onClickNext} > 
        <NextPage />
      </div>   
      <div className='bottomSpace' onClick={onClickLast}> 
        <LastPage />
      </div> 
    </div>
	);
}

export default ExplorePDFWeb;