import { React, useState } from "react";
import { imagesList, categories } from "../data";

// Components
import ScrollToTopBtn from "../components/ScrollToTopBtn";

const Portfolio = () => {
	const [currCategory, setCurrCategory] = useState(0);
	
	const images = imagesList.filter(filterCategory);

	function filterCategory(img) {
		if (img.categoryId === currCategory || currCategory === 0) {
			return img;
		}
	}

	return (
		<>
			{/* Portfolio Section */}
			<section
				className="h-full overflow-hidden w-full bg-white"
				id="about"
			>
				<div className="flex flex-col sm:flex-row-reverse items-center justify-center w-full group/about">
					<div className="sm:w-1/2 w-full xl:px-20 lg:px-14 md:px-10 px-6 sm:py-0 pt-5 sm:pb-10 pb-5">
						<h1 className="xl:text-[5rem] lg:text-[4rem] md:text-[3rem] sm:text-[2.3rem] text-[3rem] sm:text-left text-center w-full font-PlayFair xl:mb-5 md:mb-2 sm:mb-0 mb-2 text-primary">
							Portfolio
						</h1>
						<p className="xl:text-xl lg:text-lg md:text-sm sm:text-xs text-sm font-Inter text-gray-500">
							Greetings to my portfolio! I'm a passionate
							photographer with a keen eye for detail and a love
							for capturing life's beauty. My goal is to convey
							emotions and tell captivating stories through
							portraits, landscapes, and events. I hope my work resonates with you.
						</p>
					</div>
					<div className="sm:w-1/2 w-full sm:px-0 px-6 sm:h-full h-full overflow-hidden">
						<img
							src="/images/about-image.jpg"
							alt="Jainil Jani"
							className="group-hover/about:scale-125 max-h-[500px] w-full h-full object-top object-cover transition-all duration-1000"
						/>
					</div>
				</div>
			</section>

			{/* Images */}
			<section className="lg:px-20 md:px-14 sm:px-10 px-6 mt-14 mb-20">
				<div className="text-sm font-medium text-center text-primary flex w-full items-center justify-center mb-8">
					<ul className="flex items-center justify-center flex-wrap gap-y-4 gap-6">
						{categories.map((cat, i) => (
							<li
								key={i}
								onClick={() => setCurrCategory(i)}
								className={`p-2 px-4 text-lg font-medium font-Inter transition-colors duration-300 cursor-pointer hover:bg-lightGreen ${
									currCategory === i
										? " border-b-2 border-primary rounded-t-lg"
										: "rounded-lg"
								} `}
							>
								{cat}
							</li>
						))}
					</ul>
				</div>

				<div className="lg:columns-3 md:columns-2 columns-1">
					{images.map((Image, i) => (
						<div
							className="w-full h-full overflow-hidden mb-4 !mt-0"
							key={i}
						>
							<img
								className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
								src={Image.img}
								alt={Image.alt}
							/>
						</div>
					))}
				</div>
			</section>

			{/* Scroll Top Button */}
			<ScrollToTopBtn />
		</>
	);
};

export default Portfolio;
