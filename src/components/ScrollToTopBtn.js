import { React } from "react";

const ScrollToTopBtn = () => {

	return (
		<button
			id="scrollToTopBtn"
			className="fixed bottom-5 right-5 z-50 bg-secondary text-primary p-3 rounded-full drop-shadow-lg"
			onClick={() => {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth",
				});
			}}
		>
			<svg
				width="20"
				height="20"
				fill="currentColor"
				viewBox="0 0 16 16"
			>
				<path
					fillRule="evenodd"
					d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
				/>
			</svg>
		</button>
	);
};

export default ScrollToTopBtn;
