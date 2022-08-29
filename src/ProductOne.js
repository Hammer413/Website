import { HorizontalScroll } from "./HorizontalScroll";

const ProductOne = () => {
    return ( 

    <>
    
  <section className="product">
  	
    <h2 className="product-category">best selling</h2>
    <button className="pre-btn"><img src="img/arrHead.png" alt="" width="60" height="60" onClick={HorizontalScroll()}/></button>
    <button className="nxt-btn"><img src="img/arrHead.png" alt="" width="60" height="60" onClick={HorizontalScroll()}/></button>
    <div className="product-container">

    	<div className="product-card">
    		<div className="product-image">
    			<span className="discount-tag">50% off</span>
    			<img src="img/lazy/lazy15.jpg" className="product-thumb" width="300" height="400" alt=""/>
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
    			<img src="img/sqoman/sqoman2.jpg" className="product-thumb" width="300" height="400" alt=""/>
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
    			<img src="img/bad/bad5.jpg" className="product-thumb" width="300" height="400" alt=""/>
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
    			<img src="img/tailor/taylor3.jpg" className="product-thumb" width="300" height="400" alt=""/>
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
    			<img src="img/lazy/lazy1.jpg" className="product-thumb" width="300" height="400" alt=""/>
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
    			<img src="img/bad/bad2.jpg" className="product-thumb" width="300" height="400" alt=""/>
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
    			<img src="img/sqoman/sqoman3.jpg" className="product-thumb" width="300" height="400" alt=""/>
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
    			<img src="img/tailor/taylor1.jpg" className="product-thumb" width="300" height="400" alt=""/>
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

