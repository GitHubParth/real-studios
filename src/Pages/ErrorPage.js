import React from "react";
import { NavLink } from "react-router-dom";
import ParticlesComponent from "../components/ParticlesComponent";

const ErrorPage = () => {
	return (
		<>
			<section className="w-full h-full min-h-screen min-w-screen flex items-center justify-center relative font-Inter">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-50">
					<div className="mx-auto max-w-screen-sm text-center">
						<h2 className="mb-4 tracking-tight font-extrabold text-9xl text-primary">
							404
						</h2>
						<p className="mb-4 text-3xl tracking-tight font-bold text-primary md:text-4xl">
							This page doesn't exist.
						</p>
						<p className="mb-8 text-lg sm:text-xl text-secondary font-bold">
							Sorry, we can't find that page. You'll find lots to
							explore on the home page.
						</p>
						<NavLink
							to="/"
							className="text-white fold-medium bg-primary hover:drop-shadow-secondary transition-all duration-300 rounded-lg text-lg px-5 py-2.5 text-center my-4"
						>
							Back to Homepage
						</NavLink>
					</div>
				</div>

				{/* Particles */}
				<ParticlesComponent />
			</section>
		</>
	);
};

export default ErrorPage;
