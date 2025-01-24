import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './styles.css';
interface Props {
	url: string,
	page: number,
	onClick: (value: number) => void;
	selected?:boolean;
}

function MiniPageView({ url, page, onClick, selected = false }: Props) {

	return (
		<div style={{ position: 'relative', marginBottom: 10, borderWidth: 1, borderColor: '#757575', borderStyle: 'solid', cursor: 'pointer', width: 'min-content', border: selected?'solid 3px #d31900':'' }} onClick={() => onClick(page)}>
			<Document file={url} >
				<Page pageNumber={page} scale={0.3} renderMode='canvas' renderTextLayer={false} renderAnnotationLayer={false} />
				<div style={{ width: '100%', height: 22, backgroundColor: '#d31900', position: 'absolute', bottom: 0,  display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<label className="numberPageView">{page}</label>
				</div>
			</Document>
		</div>
	);
}

export default MiniPageView;
