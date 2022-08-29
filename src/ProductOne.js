import { HorizontalScroll } from "./HorizontalScroll";

import movButton from './img/arrHead.png';
//import images
import imgLazy from './img/lazy/lazy15.jpg';
import imgSqoman from './img/sqoman/sqoman2.jpg';
import imgBad from './img/bad/bad5.jpg';
import imgtaylor from './img/tailor/taylor3.jpg';
//----------------------------------

import imgLazy1 from './img/lazy/lazy1.jpg';
import imgBad1 from './img/bad/bad2.jpg';
import imgSqoman1 from './img/sqoman/sqoman3.jpg';
import imgtaylor1 from './img/tailor/taylor1.jpg';


const ProductOne = () => {
    return ( 

    <>
    
  <section className="product">
  	
    <h2 className="product-category">best selling</h2>
    <button className="pre-btn"><img src={movButton} alt="" width="60" height="60" onClick={HorizontalScroll()}/></button>
    <button className="nxt-btn"><img src={movButton} alt="" width="60" height="60" onClick={HorizontalScroll()}/></button>
    <div className="product-container">

    	<div className="product-card">
    		<div className="product-image">
    			<span className="discount-tag">50% off</span>
    			<img src= {imgLazy} className="product-thumb" width="300" height="400" alt=""/>
    			<button className="card-btn">add to wishlist</button>
    		</div>
    		<div className="product-info">
    			<h2 className="product-brand">brand</h2>
    			<p className="product-short-des">a short line about the clothing...</p>
    			<span className="price">R200</span><span className="actual-price">R400</span>
    		</div>
    	</div>

        <div className="product-card">
    		<div className="product-image">
    			<span className="discount-tag">50% off</span>
    			<img src={imgSqoman} className="product-thumb" width="300" height="400" alt=""/>
    			<button className="card-btn">add to wishlist</button>
    		</div>
    		<div className="product-info">
    			<h2 className="product-brand">brand</h2>
    			<p className="product-short-des">a short line about the clothing...</p>
    			<span className="price">R200</span><span className="actual-price">R400</span>
    		</div>
    	</div>

    	<div className="product-card">
    		<div className="product-image">
    			<span className="discount-tag">50% off</span>
    			<img src={imgBad} className="product-thumb" width="300" height="400" alt=""/>
    			<button className="card-btn">add to wishlist</button>
    		</div>
    		<div className="product-info">
    			<h2 className="product-brand">brand</h2>
    			<p className="product-short-des">a short line about the clothing...</p>
    			<span className="price">R200</span><span className="actual-price">R400</span>
    		</div>
    	</div>

    	<div className="product-card">
    		<div className="product-image">
    			<span className="discount-tag">50% off</span>
    			<img src={imgtaylor} className="product-thumb" width="300" height="400" alt=""/>
    			<button className="card-btn">add to wishlist</button>
    		</div>
    		<div className="product-info">
    			<h2 className="product-brand">brand</h2>
    			<p className="product-short-des">a short line about the clothing...</p>
    			<span className="price">R200</span><span className="actual-price">R400</span>
    		</div>
    	</div>

    	<div className="product-card">
    		<div className="product-image">
    			<span className="discount-tag">50% off</span>
    			<img src={imgLazy1} className="product-thumb" width="300" height="400" alt=""/>
    			<button className="card-btn">add to wishlist</button>
    		</div>
    		<div className="product-info">
    			<h2 className="product-brand">brand</h2>
    			<p className="product-short-des">a short line about the clothing...</p>
    			<span className="price">R200</span><span className="actual-price">R400</span>
    		</div>
    	</div>

    	<div className="product-card">
    		<div className="product-image">
    			<span className="discount-tag">50% off</span>
    			<img src={imgBad1} className="product-thumb" width="300" height="400" alt=""/>
    			<button className="card-btn">add to wishlist</button>
    		</div>
    		<div className="product-info">
    			<h2 className="product-brand">brand</h2>
    			<p className="product-short-des">a short line about the clothing...</p>
    			<span className="price">R200</span><span className="actual-price">R400</span>
    		</div>
    	</div>

    	<div className="product-card">
    		<div className="product-image">
    			<span className="discount-tag">50% off</span>
    			<img src={imgSqoman1} className="product-thumb" width="300" height="400" alt=""/>
    			<button className="card-btn">add to wishlist</button>
    		</div>
    		<div className="product-info">
    			<h2 className="product-brand">brand</h2>
    			<p className="product-short-des">a short line about the clothing...</p>
    			<span className="price">R200</span><span className="actual-price">R400</span>
    		</div>
    	</div>

    	<div className="product-card">
    		<div className="product-image">
    			<span className="discount-tag">50% off</span>
    			<img src={imgtaylor1} className="product-thumb" width="300" height="400" alt=""/>
    			<button className="card-btn">add to wishlist</button>
    		</div>
    		<div className="product-info">
    			<h2 className="product-brand">brand</h2>
    			<p className="product-short-des">a short line about the clothing...</p>
    			<span className="price">R200</span><span className="actual-price">R400</span>
    		</div>

    	</div>
    </div>

  </section>

    </>

    

     );
}
 
const { productContainers, nxtBtn, preBtn } = HorizontalScroll();

productContainers.forEach((item, i)=>{
	let containersDimenstions = item.getBoundingClientRect();
	let containerWidth = containersDimenstions.width;

	nxtBtn[i].addEventListener('click',()=>{
		item.scrollLeft +=containerWidth;
	})

	preBtn[i].addEventListener('click',()=>{
		item.scrollLeft -=containerWidth;


		
	})
})


export default ProductOne;

