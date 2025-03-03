import { colorBackground, colorPrimary, colorSecondary } from '../../constant/global';
import './index.css';

interface Props {
	title: string;
  onClick: () => void;
  disabled?: boolean;
  width?: string;
}

export default function Button({ title, onClick, disabled = false, width }:Props) {
    return (
      <button className='button-primary' disabled={disabled} onClick={()=>onClick()} 
        style={{
          backgroundColor:disabled?colorBackground:colorPrimary, 
          // marginTop:20, 
          color:disabled?colorSecondary:'white',
          cursor:'pointer',
          width: width || '400px',
        }}>{title}
      </button>
    );
}

 