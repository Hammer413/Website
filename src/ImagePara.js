import { Parallax } from 'react-parallax';
import imgPaa from './img/imgg.png';

const ImagePara = () => (
    <Parallax blur={5} bgImage={imgPaa} strength={800} className="imgPar">
       <div className="content">
    	
        <p className="heading"><h1>HANGER</h1><br/>
        <p className="subHeading">Our Online Fashion Mall.</p><br/></p>

        <button className='btnShopNow'>SHOP NOW</button>
     </div>
     
    </Parallax>
);

export default ImagePara;