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
		<div className="group/review relative w-full mx-auto sm:h-full !h-[350px] bg-[#D4E8DB] px-0 rounded-xl overflow-hidden xl:hover:px-7 lg:hover:px-4 md:hover:px-5 xl:hover:py-7 lg:hover:py-4 md:hover:py-5">
			{/* Default Name - Category */}
			<div id={"defaultName" + cardNum} className="absolute group-hover/review:md:translate-y-full overflow-hidden bg-gradient-to-t px-4 py-3 from-black to-transparent group-hover/review:md:from-transparent transition-all duration-200 left-0 bottom-0 w-full z-10" >
				<p className="text-white text-xl font-semibold">{name}</p>
				<p className="text-white text-base">{category}</p>
			</div>
			{/* Image with Name - Category */}
			<div
				id={"testimonialCard" + cardNum}
				className={`relative flex items-start justify-center transition-all duration-300 group-hover/review:md:scale-[0.28] group-hover/review:md:opacity-0 group-hover/review:origin-top-left w-full h-full`}
			>
				<img
					src={img}
					alt="Best Photographer In Ahmedabad"
					className={`w-full sm:h-full h-[350px] mx-auto rounded-xl object-cover object-${objectPos}`}
				/>
				<button
					onClick={() => {
						let card = document.getElementById(
							"testimonialCard" + cardNum
						);
						let reviewDiv = document.getElementById(
							"reviewDiv" + cardNum
						);
						let defaultName = document.getElementById(
							"defaultName" + cardNum
						);
						card.classList.add("opacity-0");
						reviewDiv.classList.add("opacity-100");
						defaultName.classList.add("translate-y-full");
					}}
					className="md:hidden block z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-2 rounded-full bg-black/50 text-white"
				>
					<svg
						viewBox="0 0 448 512"
						fill="currentColor"
						className="w-6 h-6"
					>
						<path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z" />
					</svg>
				</button>
			</div>

			{/* Review Div */}
			<div id={"reviewDiv" + cardNum} className={`w-full h-full group-hover/review:md:opacity-100 opacity-0 transition-all duration-500 absolute top-0 left-0 flex flex-col md:gap-5 gap-4 border border-white xl:px-7 lg:px-4 sm:px-5 px-4 xl:py-7 lg:py-4 sm:py-5 py-4`}>
				{/* Button to close Reviews */}
				<button
					onClick={() => {
						let card = document.getElementById(
							"testimonialCard" + cardNum
						);
						let reviewDiv = document.getElementById(
							"reviewDiv" + cardNum
						);
						let defaultName = document.getElementById(
							"defaultName" + cardNum
						);
						card.classList.remove("opacity-0");
						reviewDiv.classList.remove("opacity-100");
						defaultName.classList.remove("translate-y-full");
					}}
					className="absolute right-2 top-2 md:hidden block"
				>
					<svg
						fill="currentColor"
						className="w-4 h-4"
						viewBox="0 0 16 16"
					>
						<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
					</svg>
				</button>
				<div className="flex items-center md:gap-4 gap-3">
					<img
						src={img}
						alt="Best Photographer In Ahmedabad"
						className={`mx-auto object-cover object-${objectPos} rounded-lg lg:w-28 md:w-32 sm:w-28 w-24 lg:h-28 md:h-32 sm:h-28 h-24`}
					/>
					<div className="w-full pt-2">
						<p className="xl:text-2xl lg:text-xl md:text-2xl text-xl font-semibold font-Inter xl:whitespace-nowrap whitespace-normal">
							{name}
						</p>
						<p className="xl:text-lg lg:text-sm md:text-lg text-sm xl:mt-0 md:mt-1 sm:mt-0 mt-1 font-light font-Inter whitespace-nowrap">
							{category}
						</p>
					</div>
				</div>
				{/* Review Msg */}
				<div className="w-full transition-opacity duration-1000 overflow-visible relative">
					<div className="font-Inter font-light xl:text-lg lg:text-base z-10 xl:line-clamp-6 lg:line-clamp-[8] sm:line-clamp-[7] line-clamp-[8] relative">
						<p>{review}</p>
					</div>
					<div className="flex items-center gap-2 mt-2">
						<p className="font-Inter text-sm">{ratings}</p>
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
