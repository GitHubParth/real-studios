import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
	const form = useRef(null);

	// Send Email
	const sendEmail = (e) => {
		e.preventDefault();

		let email = document.getElementById("email").value;
		let from_name = document.getElementById("from_name").value;
		let mobile = document.getElementById("mobile").value;
		let message = document.getElementById("message").value;

		if (
			!emailError &&
			!nameError &&
			!mobileError &&
			!msgError &&
			email !== "" &&
			from_name !== "" &&
			mobile !== "" &&
			message !== ""
		) {
			emailjs
				.sendForm(
					process.env.REACT_APP_SERVICE_ID,
					process.env.REACT_APP_TEMPLATE_ID,
					form.current,
					process.env.REACT_APP_PUBLIC_KEY
				)
				.then(
					() => {
						console.log("Email sent successfully.");
					},
					() => {
						console.log("Error while sending email.");
					}
				);
			document.querySelector("#from_name").value = "";
			document.querySelector("#email").value = "";
			document.querySelector("#mobile").value = "";
			document.querySelector("#message").value = "";
		}
	};

	const [mobileNo, setMobileNo] = useState("");
	const handleMobileChange = (e) => {
		const value = e.target.value.replace(/\D/g, "");
		setMobileNo(value);
	};

	// Email Validator
	const [emailError, setEmailError] = useState(0);
	const validateEmail = (e) => {
		var email = e.target.value;

		if (!validator.isEmail(email)) {
			setEmailError(1);
		} else {
			setEmailError(0);
		}
	};

	// Name Validator
	const [nameError, setNameError] = useState(0);
	const validateName = (e) => {
		var name = e.target.value;

		if (name !== "") {
			setNameError(0);
		} else {
			setNameError(1);
		}
	};

	// Mobile Validator
	const [mobileError, setMobileError] = useState(0);
	const validateMobile = (e) => {
		var mobile = e.target.value;

		if (!validator.isMobilePhone(mobile) || mobile.toString().length < 10) {
			setMobileError(1);
		} else {
			setMobileError(0);
		}
	};

	// Message Validator
	const [msgError, setMsgError] = useState(0);
	const validateMsg = (e) => {
		var msg = e.target.value;

		if (msg === "" || msg.toString().length <= 10) {
			setMsgError(1);
		} else {
			setMsgError(0);
		}
	};

	return (
		<>
			{/* Header */}
			<Header />

			{/* Main Section */}
			<section className="bg-[#becfc4] w-screen h-full overflow-x-hidden pb-20">
				<div className="contact-bg sm:h-screen h-[500px] sm:bg-center bg-center w-full flex items-center justify-center relative overflow-hidden">
					<h2
						data-aos="zoom-in-up"
						data-aos-delay="200"
						className="font-bold md:text-[7vw] text-[4rem] text-center px-4 leading-[1] absolute text-secondary z-10 font-Inter"
					>
						Contact Us
					</h2>
					<div className="absolute top-0 left-0 w-full h-full bg-primary/40" />
				</div>
				<div className="h-full w-full xl:px-20 lg:px-14 md:px-10 px-6 lg:mt-16 md:mt-14 sm:mt-12 mt-10">
					{/* Form */}
					<form
						className="lg:w-[80%] w-full mx-auto"
						onSubmit={sendEmail}
						ref={form}
					>
						<h2
							data-aos="fade-up"
							data-aos-anchor-placement="center-bottom"
							className="font-PlayFair text-primary w-full text-center lg:text-[4.5rem] md:text-[3.5rem] sm:text-[3rem] text-[3.2rem] sm:leading-normal sm:mb-0 mb-2 leading-tight"
						>
							Get In Touch
						</h2>
						<p
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-anchor-placement="center-bottom"
							className="md:w-[600px] text-primary md:px-0 w-full sm:px-6 px-3 text-center mx-auto font-Inter"
						>
							Contact us for any inquiries, feedback, or support.
							Fill out the form, email us, call our hotline, or
							connect on social media. We're here to assist you.
						</p>

						{/* Main Form Inputs */}
						<div
							data-aos="zoom-out"
							className="grid sm:grid-cols-2 grid-cols-1 gap-6 w-full mt-8"
						>
							{/* Name Input */}
							<div
								className={`h-14 w-full relative ${
									nameError ? "mb-5" : ""
								}`}
							>
								<input
									type="text"
									id="from_name"
									name="from_name"
									className={`w-full h-full ${
										nameError
											? "ring-red-500 bg-red-100/30"
											: "bg-transparent ring-primary"
									} !outline-none px-3 pl-12 pt-3 ring-1 peer`}
									minLength={3}
									onBlur={(e) => validateName(e)}
									placeholder=" "
								/>
								<label
									htmlFor="from_name"
									className={`absolute peer-placeholder-shown:text-lg ${
										nameError
											? "text-red-600 font-medium"
											: "text-primary"
									} peer-placeholder-shown:top-[13.5px] left-12 transition-all duration-300 top-1.5 peer-focus:top-1.5 text-xs peer-focus:text-xs`}
								>
									{" "}
									Name
								</label>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className={`bi bi-person absolute top-4 left-3 ${
										nameError
											? "text-red-600"
											: "text-primary"
									}`}
									viewBox="0 0 16 16"
								>
									<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h20Z" />
								</svg>
								{nameError ? (
									<p className="flex items-center gap-1 pt-1 text-sm font-medium text-red-600">
										Please Enter Name
									</p>
								) : (
									""
								)}
							</div>

							{/* Email Input */}
							<div
								className={`h-14 w-full relative ${
									emailError ? "mb-5" : ""
								}`}
							>
								<input
									type="text"
									id="email"
									name="email"
									className={`w-full h-full ${
										emailError
											? "ring-red-500 bg-red-100/30"
											: "bg-transparent ring-primary"
									} !outline-none px-3 pl-12 pt-3 ring-1 peer`}
									autoComplete="off"
									onBlur={(e) => validateEmail(e)}
									placeholder=" "
								/>
								<label
									htmlFor="email"
									className={`absolute peer-placeholder-shown:text-lg ${
										emailError
											? "text-red-600 font-medium"
											: "text-primary"
									} peer-placeholder-shown:top-[13.5px] left-12 transition-all duration-300 top-1.5 peer-focus:top-1.5 text-xs peer-focus:text-xs`}
								>
									Email
								</label>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className={`bi bi-envelope absolute top-4 left-3 ${
										emailError
											? "text-red-600"
											: "text-primary"
									}`}
									viewBox="0 0 16 16"
								>
									<path d="M0 4a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h22a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
								</svg>
								{emailError ? (
									<p className="flex items-center gap-1 pt-1 text-sm font-medium text-red-600">
										Please Enter correct email
									</p>
								) : (
									""
								)}
							</div>

							{/* Category Select */}
							<div className="h-14 w-full relative">
								<select
									id="category"
									name="category"
									className="w-full h-full bg-transparent !outline-none px-2 pl-11 pt-3.5 ring-1 ring-primary peer"
								>
									<option
										value="Wedding"
										className="bg-primary text-white"
									>
										Wedding
									</option>
									<option
										value="Pre Wedding"
										className="bg-primary text-white"
									>
										Pre Wedding
									</option>
									<option
										value="Engagement"
										className="bg-primary text-white"
									>
										Engagement
									</option>
									<option
										value="Maternity"
										className="bg-primary text-white"
									>
										Maternity
									</option>
									<option
										value="Corporate"
										className="bg-primary text-white"
									>
										Corporate
									</option>
								</select>
								<label
									htmlFor="category"
									className="absolute text-lg text-primary top-3.5 left-12 transition-all duration-300 peer-valid:top-1.5 peer-focus:top-1.5 peer-valid:text-xs peer-focus:text-xs"
								>
									Category
								</label>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className="bi bi-camera absolute top-4 left-3 text-primary"
									viewBox="0 0 16 16"
								>
									<path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
									<path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
								</svg>
							</div>

							{/* Mobile Input */}
							<div
								className={`h-14 w-full relative ${
									mobileError ? "mb-5" : ""
								}`}
							>
								<input
									type="text"
									value={mobileNo}
									id="mobile"
									name="mobile"
									className={`w-full h-full ${
										mobileError
											? "ring-red-500 bg-red-100/30"
											: "bg-transparent ring-primary"
									} !outline-none px-3 pl-12 pt-3 ring-1 peer`}
									onChange={(e) => handleMobileChange(e)}
									onBlur={(e) => validateMobile(e)}
									minLength={10}
									maxLength={10}
									placeholder=" "
								/>
								<label
									htmlFor="mobile"
									className={`absolute peer-placeholder-shown:text-lg ${
										mobileError
											? "text-red-600 font-medium"
											: "text-primary"
									} peer-placeholder-shown:top-[13.5px] left-12 transition-all duration-300 top-1.5 peer-focus:top-1.5 text-xs peer-focus:text-xs`}
								>
									Mobile
								</label>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="currentColor"
									className={`bi bi-phone absolute top-4 left-3 ${
										mobileError
											? "text-red-600"
											: "text-primary"
									}`}
									viewBox="0 0 16 16"
								>
									<path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
									<path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
								</svg>
								{mobileError ? (
									<p className="flex items-center gap-1 pt-1 text-sm font-medium text-red-600">
										Please Enter correct Mobile Number
									</p>
								) : (
									""
								)}
							</div>

							{/* Message Area */}
							<div
								className={`w-full h-auto relative md:col-span-2 ${
									msgError ? "mb-5" : ""
								}`}
							>
								<textarea
									className={`${
										msgError
											? "ring-red-500 bg-red-100/30"
											: "bg-transparent ring-primary"
									} w-full h-full !outline-none px-3 pt-6 ring-1 peer-focus:ring-secondary peer`}
									id="message"
									name="message"
									rows={4}
									onBlur={(e) => validateMsg(e)}
									placeholder=" "
								/>
								<label
									htmlFor="message"
									className="absolute peer-placeholder-shown:text-lg text-primary peer-placeholder-shown:top-2 left-3 transition-all duration-300 top-1.5 peer-focus:top-1.5 text-xs peer-focus:text-xs"
								>
									Message
								</label>
								{msgError ? (
									<p className="flex items-center gap-1 pt-1 text-sm font-medium text-red-600">
										Please Enter Message (more than 10
										letters)
									</p>
								) : (
									""
								)}
							</div>

							{/* Submit Button */}
							<div className="w-full flex items-center justify-center h-14 relative md:col-span-2">
								<button className="border-2 border-primary px-8 py-3 text-xl font-medium font-Inter hover:shadow-secondary hover:shadow-2xl text-primary hover:scale-110 transition-all duration-500 hover:text-white hover:bg-primary">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>

			{/* Footer */}
			<Footer />

			{/* Scroll To Top Btn */}
			<ScrollToTopBtn />
		</>
	);
};

export default ContactUs;
