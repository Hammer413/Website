import femalePic from './img/female.jpg';
import malePic from './img/malee.jpg';
import kidPic from './img/kidd.jpg';

const Collection = () => {
    return ( 

    <>
    
    <div className="collection-container">
  	<a href="#" className="collection">
  		<img src={femalePic} alt=""/>
  		<p className="collection-title">Woman <br/> Aparels</p>
  	</a>

  	 	<a href="#" className="collection">
  		<img src={malePic} alt=""/>
  		<p className="collection-title">Men <br/> Aparels</p>
  	</a>

  	 	<a href="#" className="collection">
  		<img src={kidPic} alt=""/>
  		<p className="collection-title">Kids <br/> Aparels</p>
  	</a>

</div>
    
    </>

     );
}
 
export default Collection;