import { React } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

	const loc = useLocation()

	return (
		<>
			{/* Laptop Navbar */}
			<nav className="h-20 bg-white flex items-center justify-between lg:px-10 md:px-5 sm:px-10 px-6 font-Inter drop-shadow-2xl">
				{/* Logo */}
				<Link
					data-aos="zoom-in-right"
					to="/"
					className="w-auto flex items-center justify-center"
				>
					<img
						src="/images/logo.png"
						alt=""
						className="lg:w-20 w-12 h-12 object-contain bg-white"
					/>
					<span className="lg:text-2xl text-xl lg:ml-0 ml-2 font-extrabold">
						REAL STUDIO
					</span>
				</Link>

				{/* Menu */}
				<div data-aos="fade-down" className="md:flex hidden items-center justify-center lg:gap-5 md:gap-2">
					<Link
						id="nav-link-1"
						to="/"
						className={`lg:text-base text-sm py-2 px-3 ${loc.pathname === "/" ? 'active-header-link' : ''} relative before:rounded-b-full before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:transition-all before:duration-500 before:h-0.5 before:bg-primary`}
						onClick={() => {
							document.querySelector('#nav-link-1').classList.add('active-header-link')
							document.querySelector('#nav-link-3').classList.remove('active-header-link')
							document.querySelector('#nav-link-4').classList.remove('active-header-link')
						}}
					>
						Home
					</Link>
					<Link
						id="nav-link-3"
						to="/portfolio"
						className={`lg:text-base text-sm py-2 px-3 ${loc.pathname === "/portfolio" ? 'active-header-link' : ''} relative before:rounded-b-full before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:transition-all before:duration-500 before:h-0.5 before:bg-primary`}
						onClick={() => {
							document.querySelector('#nav-link-1').classList.remove('active-header-link')
							document.querySelector('#nav-link-3').classList.add('active-header-link')
							document.querySelector('#nav-link-4').classList.remove('active-header-link')
						}}
					>
						My Works
					</Link>
					<Link
						id="nav-link-4"
						to="/contact"
						className={`lg:text-base text-sm py-2 px-3 ${loc.pathname === "/contact" ? 'active-header-link' : ''} relative before:rounded-b-full before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:transition-all before:duration-500 before:h-0.5 before:bg-primary`}
						onClick={() => {
							document.querySelector('#nav-link-1').classList.remove('active-header-link')
							document.querySelector('#nav-link-3').classList.remove('active-header-link')
							document.querySelector('#nav-link-4').classList.add('active-header-link')
						}}
					>
						Contact Me
					</Link>
				</div>

				{/* Book Now */}
				<Link
					data-aos="zoom-in-left"
					className="md:flex hidden relative group/ctabtn"
					target="_black"
					to="https://wa.me/9773238641?text=Hi%20there!%20We're%20looking%20for%20a%20photographer%20for%20our%20upcoming%20photo%20shoot.%20Are%20you%20available?"
				>
					<button className="bg-primary z-10 w-full button-2 lg:p-3 p-2 lg:px-5 px-4 text-white relative group-hover/ctabtn:-skew-x-12 transition-all duration-300">
						Book Now
					</button>
					<div className="absolute group-hover/ctabtn:-skew-x-12 top-0 group-hover/ctabtn:top-1 left-0 group-hover/ctabtn:left-1 h-full w-full bg-secondary z-0 transition-all duration-300" />
				</Link>

				{/* Hamburger Menu */}
				<button
					onClick={() => {
						let menu = document.querySelector("#mobile-menu");
						menu.classList.toggle("!w-56");
						document.querySelector('#root').classList.add('stopBgScrolling')
					}}
					className="z-50 md:hidden block w-7 h-7"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30px"
						height="30px"
						fill="currentColor"
						className="bi bi-list"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</button>
			</nav>

			{/* Mobile Menu */}
			<div
				className="flex flex-col items-center justify-center bg-lightGreen overflow-hidden fixed transition-all duration-300 w-0 h-screen top-0 right-0 z-30 "
				id="mobile-menu"
			>
				<button
					onClick={() => {
						let menu = document.querySelector("#mobile-menu");
						menu.classList.toggle("!w-56");
						document.querySelector('#root').classList.remove('stopBgScrolling')
					}}
					className="w-7 h-7 absolute top-7 right-6"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="28px"
						height="28px"
						fill="currentColor"
						className="bi bi-x-lg"
						viewBox="0 0 16 16"
					>
						<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
					</svg>
				</button>
				<Link 
				onClick={() => {
						let menu = document.querySelector("#mobile-menu");
						menu.classList.toggle("!w-56");
						document.querySelector('#root').classList.remove('stopBgScrolling')
					}} to="/" className="text-xl py-3 px-8 w-full">
					Home
				</Link>
				<Link 
				onClick={() => {
						let menu = document.querySelector("#mobile-menu");
						menu.classList.toggle("!w-56");
						document.querySelector('#root').classList.remove('stopBgScrolling')
					}}
					to="/portfolio"
					className="text-xl py-3 px-8 w-full flex justify-between items-center gap-2"
				>
					My Works
				</Link>
				<Link 
				onClick={() => {
						let menu = document.querySelector("#mobile-menu");
						menu.classList.toggle("!w-56");
						document.querySelector('#root').classList.remove('stopBgScrolling')
					}} to="/contact" className="text-xl py-3 px-8 w-full">
					Contact Me
				</Link>
			</div>
		</>
	);
};

export default Header;
