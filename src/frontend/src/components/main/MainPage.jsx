import { useRef, useState, useEffect } from "react";

import logo from "../../assets/other/logo.png";
import first from "../../assets/other/first.jpeg";
import rain from "../../assets/other/rain_sinckers.jpg";
import second from "../../assets/other/second.jpg";

import snick1 from "../../assets/snickers/snick1.jpg";
import snick2 from "../../assets/snickers/snick2.jpg";
import snick3 from "../../assets/snickers/snick3.jpg";
import snick4 from "../../assets/snickers/snick4.jpg";

export default function MainPage() {
	const sliderRef = useRef(null);
	const slideListRef = useRef(null);
	const [sliderWidth, setSliderWidth] = useState(1200);
	const [count, setCount] = useState(1);

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			if (sliderRef.current) {
				setSliderWidth(sliderRef.current.offsetWidth);
			}
		};

		handleResize(); // Устанавливаем ширину слайдера при загрузке

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const items = slideListRef.current
			? slideListRef.current.querySelectorAll("li").length
			: 0;

		const nextSlide = () => {
			if (count < items) {
				slideListRef.current.style.left = `-${count * sliderWidth}px`;
				setCount(count + 1);
			} else {
				slideListRef.current.style.left = "0px";
				setCount(1);
			}
		};

		const prevSlide = () => {
			const items = slideListRef.current
				? slideListRef.current.querySelectorAll("li").length
				: 0;

			if (count > 1) {
				slideListRef.current.style.left = `-${
					(count - 2) * sliderWidth
				}px`;
				setCount(count - 1);
			} else {
				slideListRef.current.style.left = `-${
					(items - 1) * sliderWidth
				}px`;
				setCount(items);
			}
		};

		const nextBtn = nextRef.current;
		const prevBtn = prevRef.current;

		if (nextBtn && prevBtn) {
			nextBtn.addEventListener("click", nextSlide);
			prevBtn.addEventListener("click", prevSlide);
		}

		const interval = setInterval(nextSlide, 8000);

		return () => {
			clearInterval(interval);
			if (nextBtn && prevBtn) {
				nextBtn.removeEventListener("click", nextSlide);
				prevBtn.removeEventListener("click", prevSlide);
			}
		};
	}, [count, sliderWidth]);
	return (
		<>
			<div className="main-containerr">
				<div className="pre-header">
					<div className="email">
						<i className="fa-regular fa-envelope"></i>
						<span>mail@gmail.com</span>
					</div>
					<div className="enter">
						<i className="fa-regular fa-user"></i>
						<span>Sign in</span>
						<span>Sign up</span>
					</div>
				</div>
				<hr color="#F3F3F3"></hr>
				<div className="post-header">
					<div className="logo">
						<img src={logo} alt=""></img>
					</div>
					<div className="info">
						<div className="phone">
							<i className="fa-solid fa-phone"></i>
							<span>7-913-453-2009</span>
						</div>
						<div className="favorite">
							<i className="fa-regular fa-star"></i>
							<span>Favorite</span>
						</div>
						<div className="orders">
							<i className="fa-regular fa-list"></i>
							<span>Orders</span>
						</div>
						<div className="shop">
							<i className="fa-regular fa-trash"></i>
							<span>Shop</span>
						</div>
					</div>
				</div>
				<div className="main-header">
					<div className="tips">
						<div className="catalog">
							<i className="fa-brands fa-stack-overflow"></i>
							<span>CATALOG</span>
						</div>
						<div className="promotions">
							<span>PROMOTIONS</span>
						</div>
						<div className="news">
							<span>NEWS</span>
						</div>
						<div className="delivery-payment">
							<span>DELIVERY AND PAYMENT</span>
						</div>
						<div className="about">
							<span>ABOUT COMPANY</span>
						</div>
						<div className="size-table">
							<span>SIZE TABLE</span>
						</div>
						<div className="magnifier">
							<i className="fa-regular fa-magnifying-glass"></i>
						</div>
					</div>
				</div>
				<div className="slider-container">
					<div id="slider" ref={sliderRef}>
						<ul id="slide-wrap" ref={slideListRef}>
							<li>
								<img src={first} alt="" draggable="false"></img>
							</li>
							<li>
								<img src={rain} alt="" draggable="false"></img>
							</li>
							<li>
								<img
									src={second}
									alt=""
									draggable="false"
								></img>
							</li>
						</ul>
						<button id="prev" ref={prevRef}>
							&#8810;
						</button>
						<button id="next" ref={nextRef}>
							&#8811;
						</button>
					</div>
				</div>
			</div>

			<div className="advantages">
				<div className="first-advantage">
					<i className="fa-solid fa-truck"></i>
					<span>Free order delivery from 2000 dollars!</span>
				</div>
				<div className="second-advantage">
					<i className="fa-solid fa-star"></i>
					<span>
						100% quality guarantee for all men's and women's shoes
					</span>
				</div>
				<div className="third-advantage">
					<i className="fa-solid fa-boxes-stacked"></i>
					<span>Constantly updated assortment</span>
				</div>
				<div className="fourth-advantage">
					<i className="fa-solid fa-money-bill-1"></i>
					<span>Cash and non-cash payments, discounts</span>
				</div>
			</div>
			<div className="men-shoes">
				<h1 className="men-header">
					Men's shoes{" "}
					<i
						className="fa-solid fa-arrow-right"
						style={{ fontSize: 1 + "em" }}
					></i>
				</h1>
				<div className="shoes-container">
					<div className="shoe">
						<figure>
							<img src={snick1} alt=""></img>
						</figure>
						<button className="price">
							<span>100$</span>
						</button>
						<div className="description">
							<span>Reebok</span>
						</div>
						<div className="details">
							<a href="#" className="more">
								Details
							</a>
						</div>
					</div>
					<div className="shoe">
						<figure>
							<img src={snick2} alt=""></img>
						</figure>
						<button className="price">
							<span>100$</span>
						</button>
						<div className="description">
							<span>Reebok</span>
						</div>
						<div className="details">
							<a href="#" className="more">
								Details
							</a>
						</div>
					</div>
					<div className="shoe">
						<figure>
							<img src={snick3} alt=""></img>
						</figure>
						<button className="price">
							<span>100$</span>
						</button>
						<div className="description">
							<span>Reebok</span>
						</div>
						<div className="details">
							<a href="#" className="more">
								Details
							</a>
						</div>
					</div>
					<div className="shoe">
						<figure>
							<img src={snick4} alt=""></img>
						</figure>
						<button className="price">
							<span>100$</span>
						</button>
						<div className="description">
							<span>Reebok</span>
						</div>
						<div className="details">
							<a href="#" className="more">
								Details
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
