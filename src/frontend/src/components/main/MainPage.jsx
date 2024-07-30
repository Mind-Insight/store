import ProductCard from "../ProductCard";


export default function MainPage() {
	return (
		<>
			<div className="header">
				<div className="container">
					<div className="navbar">
						<div className="logo">
							<a href="index.html">
								<img
									src="images/logo.png"
									alt=""
									width="125px"
								></img>
							</a>
						</div>
						<nav>
							<ul id="MenuItems">
								<li>
									<a href="http://localhost:5173/">Home</a>
								</li>
								<li>
									<a href="http://localhost:5173/products/">Products</a>
								</li>
								<li>
									<a href="">About</a>
								</li>
								<li>
									<a href="">Contact</a>
								</li>
								<li>
									<a href="account.html">Account</a>
								</li>
							</ul>
						</nav>
						<a href="http://localhost:5173/cart/">
							<img
								src="images/cart.png"
								width="30px"
								height="30px"
							></img>
						</a>
						<img
							src="images/menu.png"
							className="menu-icon"
							// onClick="menutoggle()"
						></img>
					</div>

					<div className="row">
						<div className="col-2">
							<h1>
								Give Your Workout A New Style!
							</h1>
							<p>
								Success isn't always about greatness. It's about
								consistency. Consistent
								hard word gains success. greatness will
								come.
							</p>
							<a href="" className="btn">
								Explore Now &#8594;
							</a>
						</div>
						<div className="col-2">
							<img src="images/image1.png"></img>
						</div>
					</div>
				</div>
			</div>

			<div className="categories">
				<div className="small-container">
					<div className="row">
						<div className="col-3">
							<img src="images/category-1.jpg" alt=""></img>
						</div>
						<div className="col-3">
							<img src="images/category-2.jpg" alt=""></img>
						</div>
						<div className="col-3">
							<img src="images/category-3.jpg" alt=""></img>
						</div>
					</div>
				</div>
			</div>

			<div className="small-container">
				<h2 className="title">Featured Products</h2>
				<div className="row">
                    <ProductCard name="Red Printed T-shirt" image="images/product-1.jpg" price="50.00" stars="5"></ProductCard>
                    <ProductCard name="Red Printed T-shirt" image="images/product-2.jpg" price="50.00" stars="5"></ProductCard>
                    <ProductCard name="Red Printed T-shirt" image="images/product-3.jpg" price="50.00" stars="5"></ProductCard>
                    <ProductCard name="Red Printed T-shirt" image="images/product-4.jpg" price="50.00" stars="5"></ProductCard>
				</div>
				<h2 className="title">Latest Products</h2>
				<div className="row">
                    <ProductCard name="Red Printed T-shirt" image="images/product-5.jpg" price="50.00" stars="5"></ProductCard>
                    <ProductCard name="Red Printed T-shirt" image="images/product-6.jpg" price="50.00" stars="5"></ProductCard>
                    <ProductCard name="Red Printed T-shirt" image="images/product-7.jpg" price="50.00" stars="5"></ProductCard>
                    <ProductCard name="Red Printed T-shirt" image="images/product-8.jpg" price="50.00" stars="5"></ProductCard>

                    <ProductCard name="Red Printed T-shirt" image="images/product-9.jpg" price="50.00" stars="5"></ProductCard>
                    <ProductCard name="Red Printed T-shirt" image="images/product-10.jpg" price="50.00" stars="5"></ProductCard>
                    <ProductCard name="Red Printed T-shirt" image="images/product-11.jpg" price="50.00" stars="5"></ProductCard>
                    <ProductCard name="Red Printed T-shirt" image="images/product-12.jpg" price="50.00" stars="5"></ProductCard>
				</div>
			</div>

			<div className="offer">
				<div className="small-container">
					<div className="row">
						<div className="col-2">
							<img
								src="images/exclusive.png"
								className="offer-img"
							></img>
						</div>
						<div className="col-2">
							<p>Exclusively Available on RedStore</p>
							<h1>Smart Band 4</h1>
							<small>
								The Mi Smart Band 4 features a 39.9% larger
								(than Mi Band 3) AMOLED color full-touch display
								with adjustable brightness, so everything is
								clear as can be.
							</small>
							<a href="" className="btn">
								Buy Now &#8594;
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="testimonial">
				<div className="small-container">
					<div className="row">
						<div className="col-3">
							<i className="fa fa-quote-left"></i>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever
							</p>
							<div className="rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<img src="images/user-1.png"></img>
							<h3>Sean Parker</h3>
						</div>
						<div className="col-3">
							<i className="fa fa-quote-left"></i>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever
							</p>
							<div className="rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<img src="images/user-2.png"></img>
							<h3>Mike Smith</h3>
						</div>
						<div className="col-3">
							<i className="fa fa-quote-left"></i>
							<p>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever
							</p>
							<div className="rating">
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
							</div>
							<img src="images/user-3.png"></img>
							<h3>Mabel Joe</h3>
						</div>
					</div>
				</div>
			</div>

			<div className="brands">
				<div className="small-container">
					<div className="row">
						<div className="col-5">
							<img src="images/logo-godrej.png"></img>
						</div>
						<div className="col-5">
							<img src="images/logo-oppo.png"></img>
						</div>
						<div className="col-5">
							<img src="images/logo-coca-cola.png"></img>
						</div>
						<div className="col-5">
							<img src="images/logo-paypal.png"></img>
						</div>
						<div className="col-5">
							<img src="images/logo-philips.png"></img>
						</div>
					</div>
				</div>
			</div>

			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="footer-col-1">
							<h3>Download Our App</h3>
							<p>
								Download App for Android and ios mobile phone.
							</p>
							<div className="app-logo">
								<img src="images/play-store.png"></img>
								<img src="images/app-store.png"></img>
							</div>
						</div>
						<div className="footer-col-2">
							<img src="images/logo-white.png"></img>
							<p>
								Our Purpose Is To Sustainably Make the Plesure
								and Benefits of Sports Accessible to the Many.
							</p>
						</div>
						<div className="footer-col-3">
							<h3>Useful Links</h3>
							<ul>
								<li>Coupons</li>
								<li>Blog Post</li>
								<li>Return Policy</li>
								<li>Join Affiliate</li>
							</ul>
						</div>
						<div className="footer-col-4">
							<h3>Follow us</h3>
							<ul>
								<li>Facebook</li>
								<li>Twitter</li>
								<li>Instagram</li>
								<li>YouTube</li>
							</ul>
						</div>
					</div>
					<hr></hr>
					<p className="copyright">Copyright 2024 - My Creativity</p>
				</div>
			</div>
		</>
	);
}
