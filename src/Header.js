const Header = () => {
    return ( 
        
<>
<nav className="navbar">
    	<div className="nav">
    		<img src="img/hngrr.jpg" className="brand-logo" alt=""/>
    		<div className="nav-items">
    			<div className="search">
    				<input type="text" className="search-box" placeholder="search brand, caps, hats, trousers, shirts..."/>
    				<button className="search-btn">search</button>
    			</div>

    			<a href="#"><img src="img/user.png" alt=""/></a>
    			<a href="#"><img src="img/cart.png" alt=""/></a>
    		</div>
    	</div>
        <ul className="links-container">
        	<li className="link-item"><a href="#" className="links">Home</a></li>
			<div class="subnav">
        <button class="subnavbtn">Shop<i class="fa fa-caret-down"></i></button>
          <div class="subnav-content">
          <a href="#Lazy_Clothing">Lazy Clothing</a>
          <a href="#Bad_Company">Bad Company</a>
          <a href="#Taylor_Gang">Taylor Gang</a>
          <a href="#S'qomani">S'qomani</a>
          </div>
        </div> 
        	<li className="link-item"><a href="#" className="links">Wish List</a></li>
        	<li className="link-item"><a href="#" className="links">Cart</a></li>

        </ul>
    </nav>
</>

    );
}

export default Header;