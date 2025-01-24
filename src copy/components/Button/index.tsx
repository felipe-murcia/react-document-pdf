import { colorBackground, colorPrimary, colorSecondary } from '../../constant/global';
import './index.css';

interface Props {
	title: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ title, onClick, disabled = false }:Props) {
    return (
      <button className='button-primary' onClick={()=>disabled?null:onClick()} 
        style={{
          backgroundColor:disabled?colorBackground:colorPrimary, 
          width:382, marginTop:20, 
          color:disabled?colorSecondary:'white',
          cursor:'pointer'
        }}>{title}
      </button>
    );
}

 