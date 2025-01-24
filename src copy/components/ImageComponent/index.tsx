
interface Props {
    color: string;
    image: any;
    size: number;
    onClick?: ()=>void;
}


export const ImageComponent = ({ color, image, size, onClick  }:Props) => {
    const colorMap: any = {
      white: 'invert(100%) brightness(100%)',
      purple:'invert(15%) sepia(86%) saturate(3724%) hue-rotate(259deg) brightness(93%) contrast(101%)'
    };
  
    const filterStyle = colorMap[color] || 'none';
  
    return (<div onClick={onClick}>
        <img src={image} style={{ filter: filterStyle, marginRight:5, marginLeft:5 }} width={size} height={size} />
      </div>)
};