import { React, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { reviews, imgCollection, projects } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Components
import TestimonialCard from "../components/TestimonialCard";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

const HomePage = () => {
	const [mySwiper, setMySwiper] = useState(null);
	const [mySwiperInner, setMySwiperInner] = useState(null);

	const [imgCollIndex, setImgCollIndex] = useState(0);

	return (
		<>

			<Header />

			{/* Hero Section */}
			<section className="min-h-screen h-full w-full relative font-Inter z-10">
				{/* Video */}
				<video
					className="!h-screen w-full object-cover object-center"
					loop
					muted
					autoPlay
					
				>
					<source src="/video/hero-video.mp4" />
				</video>

				{/* Info */}
				<div className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-halfTransparent">
					<div className="h-full md:w-[75%] w-[85%] flex flex-col items-start justify-center gap-6 text-white">
						<h2
							// data-aos="fade-up"
							className="lg:text-[4rem] sm:text-[3rem] text-[2.4rem] lg:leading-[4rem] sm:leading-[3rem] leading-[2.5rem] md:max-w-[70%] sm:max-w-[80%] w-full font-PlayFair"
						>
							Let's create moments to remember
						</h2>
						<p
							// data-aos="fade-up"
							// data-aos-delay="300"
							className="md:text-xl text-sm sm:max-w-[60%] font-light w-full"
						>
							Are you searching for a passionate, caring, and
							creative photographer? I am that photographer! I'm a
							freelance photographer based in Ahmedabad.
						</p>
						<Link
							// data-aos="fade-up"
							// data-aos-delay="600"
							// data-aos-anchor-placement="top-bottom"
							target="_black"
							to="https://wa.me/9773238641?text=Hi%20there!%20We're%20looking%20for%20a%20photographer%20for%20our%20upcoming%20photo%20shoot.%20Are%20you%20available?"
						>
							<button className="bg-primary btn-cta md:p-4 p-3 md:px-6 px-4 md:text-xl text-sm text-white hover:scale-110 hover:translate-x-3 transition-all duration-300 shadow-green-2xl">
								Book Now
							</button>
						</Link>
					</div>
				</div>
			</section>	

			{/* About Section */}
			<section className="h-full w-full bg-white" id="about">
				{/* About */}
				<div className="flex flex-col sm:flex-row items-center justify-center w-full group/about">
					<div className="sm:w-1/2 w-full xl:px-20 lg:px-14 md:px-10 px-6 sm:py-0 pt-8 pb-10">
						<h2
							// data-aos="zoom-out-up"
							className="xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[2.3rem] text-[3rem] sm:text-left text-center w-full font-PlayFair xl:mb-5 md:mb-2 sm:mb-0 mb-2 text-primary"
						>
							About Me
						</h2>
						<p
							// data-aos="zoom-out-up"
							className="xl:text-xl lg:text-lg md:text-sm sm:text-xs text-sm font-Inter text-gray-500"
						>
							Myself
							<span className="font-bold lg:text-2xl md:text-base sm:text-sm text-lg lg:px-2 px-1 text-primary">
								Jainil Jani,
							</span>
							an exceptional freelance photographer based in
							Ahmedabad, specializing in people and wedding
							photography. With a keen eye for detail and a
							passion for storytelling, I transforms ordinary
							moments into cherished memories. Let's capture your
							special moments together and preserve them forever
							in timeless beauty.
						</p>
					</div>
					<div
						// data-aos="fade-up"
						// data-aos-offset="0"
						className="sm:w-1/2 w-full sm:px-0 px-6 sm:h-full h-auto overflow-hidden"
					>
						<img
							src="https://ik.imagekit.io/parthpadhiar/images/about-image.jpg"
							alt="Jainil Jani"
							className="group-hover/about:scale-125 sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] w-full h-full object-top object-cover transition-all duration-1000"
						/>
					</div>
				</div>

				{/* Achievements */}
				<div className="flex flex-col items-center justify-center md:mt-20 mt-14 xl:px-20 lg:px-14 md:px-10 px-6">
					<h2 className="xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[2.3rem] text-[2.6rem] font-PlayFair mb-6 text-primary">
						Achievements
					</h2>
					<div className="flex md:flex-row flex-col items-center md:items-end justify-center lg:gap-6 md:gap-4 gap-6 w-full">
						{/* Exp */}
						{/* md:hover:-translate-y-4 hover:-translate-y-2 */}
						<div /*data-aos="zoom-in-right" data-aos-offset="200"*/ className="xl:w-[350px] lg:w-[300px] sm:w-[400px] sm:mx-0 mx-auto w-full bg-[#D4E8DB] hover:bg-primary group/ach2 lg:h-56 md:h-48 h-fit md:py-0 py-8 px-6 md:px-4 flex items-center justify-center flex-col gap-2 shadow-lg !transition-all !duration-300 hover:!scale-105   shadow-secondary/30">
							<p className="lg:text-4xl text-3xl font-Inter text-primary text-center group-hover/ach2:text-white">
								<CountUp start={0} end={7} duration={2} />+
							</p>
							<p className="xl:text-xl lg:text-lg font-Inter font-semibold text-secondary text-center">
								Years of Experience
							</p>
							<p className="lg:text-sm text-xs font-Inter text-center group-hover/ach2:text-gray-400">
								Experienced photographer with years of capturing moments and telling stories through the lens.
							</p>
						</div>
						{/* Record */}
						{/* md:hover:-translate-y-4 */}
						<div /*data-aos="zoom-in-up" data-aos-offset="150"*/ className="group/guinness relative flip xl:w-[350px] lg:w-[300px] sm:w-[400px] sm:mx-0 mx-auto w-full bg-[#D4E8DB] hover:bg-primary lg:h-68 md:h-60 h-full hover:lg:h-68 hover:md:h-60 hover:h-[200px] md:py-0 py-8 px-6 md:px-4 flex items-center justify-center gap-2 shadow-lg !transition-transform !duration-300 hover:!scale-105  shadow-secondary/30" >
							<div className="flex items-center justify-center flex-col gap-2 group-hover/guinness:scale-0 overflow-hidden">
								<p className="lg:text-4xl text-3xl font-Inter text-primary text-center group-hover/guinness:text-white">
									<CountUp start={0} end={3000} duration={3} />+
								</p>
								<p className="xl:text-xl lg:text-lg font-Inter font-semibold text-secondary text-center">
									Photographs Clicked in a wedding
								</p>
								<p className="lg:text-sm text-xs font-Inter text-center group-hover/guinness:text-gray-400">
									I have successfully captured over 3000 weddings, earning a prestigious Guinness World Record achievement.
								</p>
							</div>
							<img src="https://ik.imagekit.io/parthpadhiar/images/guinness-img.png" className="md:w-[90%] mx-auto w-[200px] md:h-[90%] h-[200px] absolute top-[50%] md:translate-x-0 translate-x-[-50%] md:top-[5%] left-[50%] md:translate-y-0 translate-y-[-50%] md:left-[5%] transition-all duration-300 group-hover/guinness:scale-100 scale-0 object-cover object-center" alt="Guinness World Record for Real Studios" />
						</div>
						{/* Clients */}
						{/* md:hover:-translate-y-4 hover:-translate-y-2 */}
						<div /*data-aos="zoom-in-left" data-aos-offset="200"*/ className="xl:w-[350px] lg:w-[300px] sm:w-[400px] sm:mx-0 mx-auto w-full bg-[#D4E8DB] hover:bg-primary group/ach3 lg:h-56 md:h-48 h-fit md:py-0 py-8 px-6 md:px-4 flex items-center justify-center flex-col gap-2 shadow-lg !transition-all !duration-300 hover:!scale-105   shadow-secondary/30" >
							<p className="lg:text-4xl text-3xl font-Inter text-primary text-center group-hover/ach3:text-white">
								<CountUp start={0} end={5000} duration={3} />+
							</p>
							<p className="xl:text-xl lg:text-lg font-Inter font-semibold text-secondary text-center">
								Clients Served
							</p>
							<p className="lg:text-sm text-xs font-Inter text-center group-hover/ach3:text-gray-300">
								Crafting cherished memories, click by click, for more thana thousand happy and satisfied clients.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section className="w-full h-full flex flex-col items-center justify-center mt-20 md:mb-20 mb-14 lg:px-20 md:px-14 sm:px-10 px-6 relative">
				<h2 className="xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[2.3rem] text-[3rem] font-PlayFair mb-9 text-primary text-center leading-none">
					Projects
				</h2>

				{/* Recent Projects */}
				<div className="grid sm:grid-cols-3 lg:gap-8 sm:gap-3 gap-5 md:w-auto w-full h-full">
					{projects.map((proj, i) => (
						<div
							// data-aos="fade-up-right"
							key={i}
							className="cursor-pointer overflow-hidden min-h-[470px] flex flex-col items-center justify-center w-full h-full group/proj border border-transparent hover:shadow-xl transition-all duration-500 hover:border-primary"
							onClick={() => {
								setImgCollIndex(i);
								let evnt =
									document.querySelector("#eventImagesDiv");
								evnt.classList.remove("scale-0");
								mySwiperInner.slideTo(0, 1, true);
							}}
						>
							<div className="lg:w-[370px] xl:!h-[500px] !h-[400px] w-full overflow-hidden">
								<img
									src={proj.img}
									className="w-full xl:!h-[500px] xl:!min-h-[500px] !min-h-[400px] !h-[400px] object-cover object-center group-hover/proj:scale-110 transition-all duration-500"
									alt="Best Wedding Photographer in Ahmedabad"
								/>
							</div>
							<div className="flex flex-col lg:gap-1.5 md:gap-1 sm:gap-0.5 gap-1.5 items-center justify-center bg-[#D4E8DB] group-hover/proj:bg-[#f5fff9] transition-all duration-700 w-full lg:px-5 md:px-3 px-2 xl:py-8 md:py-6 py-3">
								<div className="flex items-center justify-center gap-2 font-PlayFair lg:text-2xl md:text-lg sm:text-base text-xl font-light text-primary">
									<p>{proj.firstName}</p>
									<span>+</span>
									<p>{proj.lastName}</p>
								</div>
								<p className="uppercase lg:text-sm text-xs md:font-semibold font-Inter text-gray-600">
									{proj.category}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Images Collection */}
				<div
					className="fixed flex items-center justify-center overflow-hidden top-0 left-0 scale-0 w-screen h-screen bg-black z-40 transition-all duration-500"
					id="eventImagesDiv"
				>
					{/* Left Swipe Btn */}
					<button
						onClick={() => {
							mySwiperInner.slidePrev();
						}}
						className="text-white !w-4 !h-4 absolute sm:top-[50%] top-[46%] md:translate-y-[-50%] sm:translate-y-[-60%] lg:left-2 sm:left-6 left-0 z-20"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="3rem"
							height="3rem"
							fill="currentColor"
							className="bi bi-chevron-left lg:w-12 lg:h-12 sm:w-8 sm:h-8"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
						</svg>
					</button>

					{/* Right Swipe Btn */}
					<button
						onClick={() => {
							mySwiperInner.slideNext();
						}}
						className="text-white !w-4 !h-4 absolute sm:top-[50%] top-[46%] md:translate-y-[-50%] sm:translate-y-[-60%] sm:right-9 right-8 z-20"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="3rem"
							height="3rem"
							fill="currentColor"
							className="bi bi-chevron-right lg:w-12 lg:h-12 sm:w-8 sm:h-8"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</button>

					{/* Cancel Btn */}
					<button
						onClick={() => {
							let evnt =
								document.querySelector("#eventImagesDiv");
							evnt.classList.add("scale-0");
						}}
						className="text-white absolute md:top-6 top-4 md:right-6 right-4 z-20 hover:scale-125 transition-all duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="2rem"
							height="2rem"
							fill="currentColor"
							className="bi bi-x-lg"
							viewBox="0 0 16 16"
						>
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
						</svg>
					</button>

					{/* Swiper */}
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						grabCursor={true}
						loop={true}
						className="mySwiper h-full w-full"
						onSwiper={(s) => setMySwiperInner(s)}
					>
						{imgCollection[imgCollIndex].map((imgSrc, i) => (
							<SwiperSlide
								key={i}
								className="relative w-full h-full"
							>
								<div className="w-full h-full flex items-center justify-center xl:p-20 lg:p-14 md:p-16 sm:p-16 relative">
									<p className="absolute font-Inter font-medium text-white sm:top-5 top-3 left-3 sm:left-5">
										{i + 1} /{" "}
										{imgCollection[imgCollIndex].length}
									</p>
									<img
										src={imgSrc}
										className="w-full md:h-full rounded-lg object-contain object-center"
										alt=""
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* Reviews Section */}
			<section
				className="w-full max-w-screen h-full flex flex-col items-center justify-center md:px-20 sm:px-16 px-20 sm:pb-20 !pb-6 relative"
				id="review">
				<h2 className="xl:text-[4rem] md:text-[3rem] sm:text-[2.5rem] text-[2.8rem] font-PlayFair lg:-mb-8 -mb-4 text-primary">
					Customer
				</h2>
				<h2 className="xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[2.3rem] text-[2.6rem] font-Inter md:mb-6 mb-3 text-primary">
					Testimonials
				</h2>

				{/* Swiper */}
				<div
					// data-aos="zoom-out"
					className="max-w-[1400px] w-full md:h-[400px] sm:h-[360px] h-[330px] relative swiper-div"
				>
					<button
						onClick={() => {
							mySwiper.slidePrev();
						}}
						className="w-10 lg:hidden absolute top-[50%] text-primary bg-white right-[calc(100%+10px)] sm:block hidden z-20"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="2.5rem"
							height="2.5rem"
							fill="currentColor"
							className="bi bi-chevron-left"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
							/>
						</svg>
					</button>
					<button
						onClick={() => {
							mySwiper.slideNext();
						}}
						className="w-10 lg:hidden absolute top-[50%] text-primary bg-white left-[calc(100%+10px)] sm:block hidden z-20"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="2.5rem"
							height="2.5rem"
							fill="currentColor"
							className="bi bi-chevron-right"
							viewBox="0 0 16 16"
						>
							<path
								fillRule="evenodd"
								d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
					</button>
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						grabCursor={true}
						breakpoints={{
							639: { slidesPerView: 2 },
							1023: { slidesPerView: 3 },
						}}
						className="mySwiper h-full"
						onSwiper={(s) => setMySwiper(s)}
					>
						{reviews.map((review, i) => (
							<SwiperSlide key={i}>
								<TestimonialCard
									name={review.name}
									img={review.img}
									review={review.review}
									category={review.category}
									ratings={review.ratings}
									objectPos={review.objectPos}
									cardNum = {i}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			{/* Footer */}
			<Footer />

			{/* Scroll Top Button */}
			<ScrollToTopBtn />
		</>
	);
};

export default HomePage;
