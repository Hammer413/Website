import './App.css';
import './nav.css';
import './footer.css';
import './imagePara.css';
import './ProductOne.css';
import './Collection.css'
import './ScaleLoader.css'
import { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import ImagePara from './ImagePara';
import ProductOne from './ProductOne';
import Collection from './Collection';
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {

  const [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#000000");

  useEffect(()=> {
setLoading(true);
setTimeout(()=>{
  setLoading(false);
},5000);

  },[]);
  //-----------
  return (
    
  <>
  <div>

    {loading?
  (<div className="ScaleLoader"><ScaleLoader size={30} color={color} loading={loading}/></div> ): // Loading image before rendering page
  <>
  <Header />
  <Collection />
  <Footer />
  </>
}
  </div>
  </>
  
  );

  }


export default App;
