import React, { useContext, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// import './styles.css';
import { ImageComponent } from '../ImageComponent';
import { AppContext } from '../../context/Context';
interface Props {
	url: string,
	//numPages: number, 
	// setPageNumber: (value: number) => void; 
}

function PDFView({ url }: Props) { 

	const { state: {  currentPage, numPages, pageCount  }, setCurrentPage, setPageCount, setNumPages } = useContext(AppContext);

	const [zoom, setZoom] = useState( 1.0);

	function onClickZoomIn() {
		let newZoom = zoom + 0.1
		setZoom(newZoom)
	}

	function onClickZoomOut() {
		let newZoom = zoom - 0.1 
		setZoom(newZoom)
	}

	const onClickMove = (page: number) => {
		if (page >= 1 && page <= numPages) setCurrentPage(page)
		return null
	}

	function onDocumentLoadSuccess({ numPages }: any) {
		setNumPages(numPages);
		setCurrentPage(1);
	
		const page: any = []
		for (var i = 0; i < numPages; i++) {
		  page.push(i + 1)
		}
		setPageCount(page)
	  }

	return (
		<div style={{ flex:5, height:800, backgroundColor:'#fbfbfb', overflow:'scroll'}}> 
			<div className={zoom>=1.2?'':"pdf-container"}>
				<Document
					file={url}
					onLoadSuccess={onDocumentLoadSuccess}
					>
					<Page pageNumber={currentPage} scale={zoom} renderMode='canvas' renderTextLayer={false} renderAnnotationLayer={false} />
				</Document>
				
				<div style={{ backgroundColor:'white',  position:'absolute', bottom:50, borderRadius:50, padding:10, display:'flex'}}>

					<ImageComponent image={require('../../Icons/explore/first-page.png')}  size={24} color={'purple'} onClick={() => onClickMove(1)} />
					<ImageComponent image={require('../../Icons/explore/left-arrow.png')}  size={20} color={'purple'} onClick={() => onClickMove(currentPage - 1)}/>
					<ImageComponent image={require('../../Icons/explore/right-arrow.png')} size={20} color={'purple'} onClick={() => onClickMove(currentPage + 1)}/>
					<ImageComponent image={require('../../Icons/explore/last-page.png')}   size={24} color={'purple'} onClick={() => onClickMove(pageCount.length)}/> 
					
				</div>
				<div style={{ backgroundColor:'white',  position:'absolute', top:130, right:400, borderRadius:50, padding:10 }}>
					<ImageComponent image={require('../../Icons/viewicon/plus.png')}  size={24} color={'purple'} onClick={() => onClickZoomIn()} />
					<ImageComponent image={require('../../Icons/viewicon/find.png')}  size={24} color={'purple'} onClick={() => setZoom(1)}/>
					<ImageComponent image={require('../../Icons/viewicon/minus.png')} size={24} color={'purple'} onClick={() => onClickZoomOut()}/> 
				</div>
			</div>
		</div>
	);
}

export default PDFView;
