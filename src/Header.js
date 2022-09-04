import logoPic from './img/hngrr.jpg';
import userPic from './img/user.png';
import cartPic from './img/cart.png';


const Header = () => {
    return ( 
        
<>
<nav className="navbar" id="navbar">
    	<div className="nav">
    		<img src={logoPic} className="brand-logo" alt=""/>
    		<div className="nav-items">
    			<div className="search">
    				<input type="text" className="search-box" placeholder="search brand, caps, hats, trousers, shirts..."/>
    				<button className="search-btn">search</button>
    			</div>

    			<a href="#"><img src={userPic} alt=""/></a>
    			<a href="#"><img src={cartPic} alt=""/></a>
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

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}
