import { React } from "react";

const TestimonialCard = ({
	name,
	img,
	review,
	category,
	ratings,
	objectPos,
	cardNum,
}) => {
	return (
		// <div className="group/review relative w-full mx-auto h-full bg-[#D4E8DB] px-0 rounded-xl overflow-hidden xl:hover:px-7 lg:hover:px-4 sm:hover:px-5 hover:px-4 xl:hover:py-7 lg:hover:py-4 sm:hover:py-5 hover:py-4 transition-all duration-500">
		// 	{/* Default Name - Category */}
		// 	<div className="absolute group-hover/review:translate-y-full overflow-hidden bg-gradient-to-t px-4 py-3 from-black to-transparent group-hover/review:from-transparent transition-all duration-200 left-0 bottom-0 w-full z-10">
		// 		<p className="text-white text-xl font-semibold">{name}</p>
		// 		<p className="text-white text-base">{category}</p>
		// 	</div>
		// 	{/* Image with Name - Category */}
		// 	<div className="flex xl:flex-row items-start justify-center relative group-hover/review:xl:gap-5 group-hover/review:lg:gap-3 group-hover/review:md:gap-4 group-hover/review:sm:gap-3 group-hover/review:gap-3 w-full h-full group-hover/review:h-32 transition-all duration-500">
		// 		<img
		// 			src={img}
		// 			alt="Best Photographer In Ahmedabad"
		// 			className={`w-full h-full mx-auto object-cover object-${objectPos} transition-all duration-700 group-hover/review:rounded-md rounded-lg xl:group-hover/review:w-32 lg:group-hover/review:w-28 md:group-hover/review:w-32 sm:group-hover/review:w-28 group-hover/review:w-28 xl:group-hover/review:h-32 lg:group-hover/review:h-28 md:group-hover/review:h-32 sm:group-hover/review:h-28 group-hover/review:h-28`}
		// 		/>
		// 		<div className="w-0 group-hover/review:w-full transition-all duration-75 pt-2">
		// 			<p className="xl:text-2xl lg:text-xl md:text-2xl text-xl font-semibold font-Inter xl:whitespace-nowrap whitespace-normal">
		// 				{name}
		// 			</p>
		// 			<p className="xl:text-lg lg:text-sm md:text-lg text-sm xl:mt-0 md:mt-1 sm:mt-0 mt-1 font-light font-Inter whitespace-nowrap">
		// 				{category}
		// 			</p>
		// 		</div>
		// 	</div>
		// 	{/* Review Msg */}
		// 	<div className="w-full xl:mt-4 lg:mt-0 md:mt-4 sm:-mt-1 opacity-0 group-hover/review:opacity-100 transition-opacity duration-1000 overflow-visible relative">
		// 		<div className="font-Inter font-light xl:text-lg lg:text-base z-10 xl:line-clamp-6 lg:line-clamp-[8] sm:line-clamp-[7] line-clamp-[8] relative">
		// 			<p>{review}</p>
		// 		</div>
		// 		<div className="flex items-center gap-2 mt-2">
		// 			<p className="font-Inter text-sm">{ratings}</p>
		// 			<span className="flex items-center gap-1">
		// 				{[1, 2, 3, 4, 5].map((star, index) =>
		// 					index < Math.floor(ratings) ? (
		// 						<svg
		// 							key={index}
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							width="14"
		// 							height="14"
		// 							fill="#FFA41C"
		// 							className="bi bi-star-fill"
		// 							viewBox="0 0 16 16"
		// 						>
		// 							<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
		// 						</svg>
		// 					) : !Number.isInteger(ratings) ? (
		// 						<svg
		// 							key={index}
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							width="14"
		// 							height="14"
		// 							fill="#FFA41C"
		// 							className="bi bi-star"
		// 							viewBox="0 0 16 16"
		// 						>
		// 							<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
		// 						</svg>
		// 					) : (
		// 						<svg
		// 							key={index}
		// 							xmlns="http://www.w3.org/2000/svg"
		// 							width="14"
		// 							height="14"
		// 							fill="#FFA41C"
		// 							className="bi bi-star"
		// 							viewBox="0 0 16 16"
		// 						>
		// 							<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
		// 						</svg>
		// 					)
		// 				)}
		// 			</span>
		// 		</div>
		// 	</div>
		// </div>
		<div className="group/review relative w-full mx-auto h-full bg-[#D4E8DB] px-0 rounded-xl overflow-hidden xl:hover:px-7 lg:hover:px-4 xl:hover:py-7 lg:hover:py-4 transition-all duration-500">
			{/* Bottom Name & Category */}
			<div id={"bottomDiv" + cardNum} className="absolute group-hover/review:sm:translate-y-full overflow-hidden bg-gradient-to-t px-4 py-3 from-black to-transparent group-hover/review:md:from-transparent transition-all duration-200 left-0 bottom-0 w-full z-10">
				<p className="text-white text-xl font-semibold">{name}</p>
				<p className="text-white text-base">{category}</p>
			</div>
			{/* Name & Category */}
			<div id={"testimonialCard" + cardNum} className="flex xl:flex-row items-start justify-center relative w-full h-full group-hover/review:md:opacity-0 transition-all duration-300">
				<img src={img} alt="Best Photographer In Ahmedabad" className={`w-full h-full mx-auto object-cover object-${objectPos} rounded-xl`} />
				<button
					onClick={() => {
						let card = document.getElementById("testimonialCard" + cardNum);
						let reviewDiv = document.getElementById("reviewDiv" + cardNum);
						let bottomDiv = document.getElementById("bottomDiv" + cardNum);
						card.classList.add("opacity-0");
						reviewDiv.classList.add("opacity-100");
						bottomDiv.classList.add("translate-y-full");
					}}
					className="bg-black/50 z-10 p-2 md:hidden block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white rounded-full"
				>
					<svg fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
						<path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" />
					</svg>
				</button>
			</div>
			{/* Hover Name & Category */}
			<div id={"reviewDiv" + cardNum} className="absolute top-0 left-0 lg:gap-5 md:gap-4 gap-3 w-full h-full flex flex-col opacity-0 group-hover/review:md:opacity-100 transition-all duration-300 sm:px-5 sm:py-5 px-4 py-4" >
				<button
					onClick={() => {
						let card = document.getElementById("testimonialCard" + cardNum);
						let reviewDiv = document.getElementById("reviewDiv" + cardNum);
						let bottomDiv = document.getElementById("bottomDiv" + cardNum);
						card.classList.remove("opacity-0");
						reviewDiv.classList.remove("opacity-100");
						bottomDiv.classList.remove("translate-y-full");
					}}
					className="absolute top-3 right-3 md:hidden block z-10"
				>
					<svg fill="currentColor" className="w-4 h-4" viewBox="0 0 16 16">
						<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
					</svg>
				</button>
				{/* Image with Name - Category */}
				<div className="flex items-start justify-center relative xl:gap-5 lg:gap-3 sm:gap-4 gap-3 w-full h-fit">
					<img
						src={img}
						alt="Best Photographer In Ahmedabad"
						className={`sm:w-32 w-24 sm:h-32 h-24 mx-auto object-cover object-${objectPos} rounded-lg`}
					/>
					<div className="w-full pt-3">
						<p className="xl:text-2xl lg:text-xl md:text-2xl text-xl font-semibold font-Inter xl:whitespace-nowrap whitespace-normal">
							{name}
						</p>
						<p className="xl:text-lg lg:text-sm md:text-lg text-sm xl:mt-0 md:mt-1 sm:mt-0 mt-1 font-light font-Inter whitespace-nowrap">
							{category}
						</p>
					</div>
				</div>
				{/* Review Msg */}
				<div className="w-full lg:mt-0 sm:-mt-1 relative">
					<div className="font-Inter font-light xl:text-lg lg:text-base z-10 xl:line-clamp-6 lg:line-clamp-[8] sm:line-clamp-[7] line-clamp-[8] relative">
						<p>{review}</p>
					</div>
					<div className="flex items-center gap-2 mt-2">
						<p className="font-Inter text-sm font-semibold">{ratings}</p>
						{/* Stars */}
						<span className="flex items-center gap-1">
							{[1, 2, 3, 4, 5].map((star, index) =>
								index < Math.floor(ratings) ? (
									<svg
										key={index}
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										fill="#FFA41C"
										className="bi bi-star-fill"
										viewBox="0 0 16 16"
									>
										<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
									</svg>
								) : !Number.isInteger(ratings) ? (
									<svg
										key={index}
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										fill="#FFA41C"
										className="bi bi-star"
										viewBox="0 0 16 16"
									>
										<path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
									</svg>
								) : (
									<svg
										key={index}
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										fill="#FFA41C"
										className="bi bi-star"
										viewBox="0 0 16 16"
									>
										<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
									</svg>
								)
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
