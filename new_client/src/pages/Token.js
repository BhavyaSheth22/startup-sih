import Api from "../utils/Api/Api.js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { responseErrorHandler } from "../utils/Api/Api.js";
import Loader from "../components/Loader/Loader";
import SC from "../utils/smartContractUtil.js";
import { useParams } from "react-router-dom";
import {
	CurrencyDollarIcon,
	CashIcon,
	DotsCircleHorizontalIcon,
	ArrowLeftIcon,
	ArrowRightIcon,
	ChevronDoubleRightIcon,
	LocationMarkerIcon,
	DeviceMobileIcon,
	AtSymbolIcon,
	BadgeCheckIcon,
} from "@heroicons/react/outline";
import { oneETH } from "../constants";

const Token = () => {
	const [token, setToken] = useState([]);
	const [polls, setPolls] = useState([]);
	const [tokenIndex, setTokenIndex] = useState(0);
	const [pollsIndex, setPollsIndex] = useState(0);
	const [optionIndex, setOptionIndex] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [amountBuy, setAmountBuy] = useState(0);
	const [amountToDisburse, setAmountToDisburse] = useState(0);
	const [amountTransfer, setAmountTransfer] = useState(0);
	const [transferTo, setTransferTo] = useState("");
	const { tokenID } = useParams();
	const [temp] = useState(localStorage.getItem("user"));
	const user = JSON.parse(temp);

	window.ethereum.on("accountsChanged", () => {
		window.location.reload();
	});

	useEffect(() => {
		const init = async () => {
			const toastElement = toast.loading("Fetching Tokens");
			try {
				const response = await Api.token.getToken(tokenID);
				const { token, message } = response.data;
				toast.update(toastElement, {
					render: message,
					type: "success",
					isLoading: false,
					autoClose: true,
				});
				console.log(token);
				setIsLoading(false);
				SC.init()
					.then(async () => {
						const balance = await SC.getUserBalance(token.tokenIndex);
						const adminBalance = await SC.getBalanceOf(token.tokenIndex, token.ethereumAddress);
						const polls = await SC.getPolls(token.tokenIndex);
						setPolls(
							polls[0].map((poll, pollIndex) => {
								return {
									question: poll.question,
									options: poll.options,
									result: poll.options[polls[1][pollIndex]],
									votes: polls[2][pollIndex],
								};
							})
						);
						setToken({
							...token,
							balance: balance,
							raised: (token.amount - adminBalance) * 100 / token.amount,
						});
						setTokenIndex(token.tokenIndex);
					})
					.catch((err) => {
						console.log(err);
						toast.error("Can't connect to MetaMask");
					});
			} catch (error) {
				responseErrorHandler(error, toastElement);
			}
		};
		return init();
	}, [tokenID]);

	const buyToken = async () => {
		const toastElement = toast.loading("Buying Token");
		try {
			await SC.buyToken(tokenIndex, parseInt(amountBuy * token.rate));
			toast.update(toastElement, {
				render: "Token Bought Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
			setIsLoading(false);
			setToken({ ...token, balance: token.balance + amountBuy });
		} catch (error) {
			responseErrorHandler(error, toastElement);
		}
	};

	const disburse = async () => {
		const toastElement = toast.loading("Disbursing to Investors");
		try {
			await SC.disburse(tokenIndex, parseInt(amountToDisburse * oneETH));
			toast.update(toastElement, {
				render: "Disbursed Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
			setIsLoading(false);
		} catch (error) {
			responseErrorHandler(error, toastElement);
		}
	};

	const transfer = async () => {
		const toastElement = toast.loading("Transferring Token");
		try {
			await SC.transfer(transferTo, tokenIndex, amountTransfer);
			toast.update(toastElement, {
				render: "Token Transferred Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
			setIsLoading(false);
			console.log(token.amount, amountTransfer, token.amount - amountTransfer);
			setToken({ ...token, balance: token.balance - amountTransfer });
		} catch (error) {
			responseErrorHandler(error, toastElement);
		}
	};

	const vote = async () => {
		const toastElement = toast.loading("Voting");
		try {
			await SC.vote(tokenIndex, pollsIndex, optionIndex);
			toast.update(toastElement, {
				render: "Voted Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
			setIsLoading(false);
		} catch (error) {
			console.log(error);
			responseErrorHandler(error, toastElement);
		}
	};

	return isLoading ? (
		<Loader />
	) : (
		<>
			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="w-full flex">
						<div className="tokenDetails w-1/2 mx-2 p-1 bg-slate-50	 justify-center">
							<div className="flex flex-wrap justify-center">
								<img
									alt="ecommerce"
									src={token.image}
									width="200px"
									height="200px"
								/>
							</div>
							<div className="xl:w-full md:w-full p-2">
								<div className="bg-gray-100 p-2 rounded-lg grid grid-cols-2">
									<div className=" ">
										<div className="rounded-full bg-gray-200 p-2 border-0 flex flex-row">
											<AtSymbolIcon className="rounded-full w-6 h-6 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500" />
											<h3 className="tracking-widest text-indigo-500 text-md font-medium title-font">
												Email:
											</h3>
											<h2 className="text-md text-gray-900 font-medium title-font m-auto">
												{token.email}
											</h2>
										</div>
									</div>
									<div className="rounded-full bg-gray-200 p-2 border-0 flex flex-row">
										<DeviceMobileIcon className="rounded-full w-6 h-6 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500" />
										<h3 className="tracking-widest text-indigo-500 text-md font-medium title-font">
											Mobile
										</h3>
										<h2 className="text-md text-gray-900 font-medium title-font m-auto">
											{token.mobile}
										</h2>
									</div>
								</div>
								<div className="bg-gray-100 px-2 rounded-lg grid grid-cols-2">
									<div className=" ">
										<div className="rounded-full bg-gray-200 p-2 border-0 flex flex-row">
											<BadgeCheckIcon className="rounded-full w-6 h-6 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500" />
											<h3 className="tracking-widest text-indigo-500 text-md font-medium title-font">
												Level:
											</h3>
											<h2 className="text-md text-gray-900 font-medium title-font m-auto">
												{token.degreeOfPlay}
											</h2>
										</div>
									</div>
									<div>
										<div className="rounded-full bg-gray-200 p-2 border-0 flex flex-row">
											<LocationMarkerIcon className="rounded-full w-6 h-6 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500" />
											<h3 className="tracking-widest text-indigo-500 text-md font-medium title-font">
												Country:
											</h3>
											<h2 className="text-md text-gray-900 font-medium title-font m-auto">
												{token.country}
											</h2>
										</div>
									</div>
								</div>
								<div className="bg-gray-200 mt-4  text-center justify-center">
									<h3 className="tracking-widest text-indigo-500 text-md font-medium title-font">
										Certificates
									</h3>
									<div className="flex flex-wrap overflow-x-scroll justify-center">
										{token.certificates &&
											token.certificates.map((certificate) => {
												return (
													<div className="hover:animate-pulse xl:w-2/6 md:w-2/6">
														<div className="p-2 rounded-lg">
															<img
																className="rounded w-full object-contain object-center"
																src={certificate}
																alt="content"
															/>
														</div>
													</div>
												);
											})}
									</div>
								</div>
								<div className="bg-gray-200 mt-4  text-center justify-center">
									<h3 className="tracking-widest text-indigo-500 text-md font-medium title-font">
										Awards and Accolades
									</h3>
									<div className="flex flex-wrap overflow-x-scroll justify-center">
										{token.awardsAndAccolades &&
											token.awardsAndAccolades.map((awardsAndAccolade) => {
												return (
													<div className="hover:animate-pulse xl:w-2/6 md:w-2/6">
														<div className="p-2 rounded-lg">
															<li>{awardsAndAccolade}</li>
														</div>
													</div>
												);
											})}
									</div>
								</div>
							</div>
						</div>
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 bg-slate-50 mr-2">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">
								TOKEN NAME
							</h2>
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
								{token.name?.toUpperCase()} TOKEN
							</h1>
							<div className="flex mb-1 w-50">
								<span className="flex items-center">
									Percent Raised {token.raised}%
									<div className="w-40 bg-gray-200 h-2 ml-2">
										<div
											className="bg-indigo-600 h-2"
											style={{ width: `${token.raised}%` }}
										></div>
									</div>
								</span>
							</div>
							<div className="flex mb-1 w-50">
								<span className="text-gray-600">
									Total Supply: {token.amount} {token.name?.toUpperCase()} TOKEN
								</span>
							</div>
							<div className="flex mb-4">
								<h3 className="text-l font-medium flex items-center text-indigo-600">
									1 {token.name?.toUpperCase()} TOKEN = {token.rate / oneETH}{" "}
									ETH
								</h3>
							</div>
							<div className="flex mb-4 mt-6">
								<CurrencyDollarIcon className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500 ml-4" />
								<span className="title-font font-medium text-2xl text-gray-900 ml-2 mt-0.5">
									Balance {parseInt(token.balance)} {token.name?.toUpperCase()}{" "}
									TOKEN
								</span>
							</div>
							{user?.token !== tokenID && (
								<div className="flex mb-4">
									<CashIcon className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500 ml-4 mr-4" />
									<input
										type="number"
										name="amount"
										onChange={(e) => {
											setAmountBuy(e.target.value);
										}}
										placeholder="Number Of Tokens"
										className="mr-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
									<div className="mt-1.5">
										{(amountBuy * token.rate) / oneETH} ETH
									</div>
									<button
										onClick={buyToken}
										className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
									>
										Buy More
									</button>
								</div>
							)}
							{user && user.token === tokenID && (
								<div className="flex mb-4">
									<CashIcon className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500 ml-4 mr-4" />
									<input
										type="number"
										name="amount"
										onChange={(e) => {
											setAmountToDisburse(e.target.value);
										}}
										placeholder="Amount to disburse"
										className="mr-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
									<div className="mt-1.5">ETH</div>
									<button
										onClick={disburse}
										className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
									>
										Disburse
									</button>
								</div>
							)}
							<div className="flex m-auto">
								<ChevronDoubleRightIcon className="mt-6 mb-6 animate-bounce rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500 ml-4 mr-4" />
								<div className="flex flex-col">
									<input
										type="number"
										name="amountTransfer"
										onChange={(e) => {
											setAmountTransfer(e.target.value);
										}}
										placeholder="Number Of Tokens"
										className="mb-2 mr-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
									<input
										type="text"
										name="transferTo"
										onChange={(e) => {
											setTransferTo(e.target.value);
										}}
										placeholder="Transfer To Address"
										className="mr-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
								<div className="mt-6 mb-6">
									{(amountTransfer * token.rate) / oneETH} ETH
								</div>
								<button
									onClick={transfer}
									className="mt-6 mb-6 flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
								>
									Transfer
								</button>
							</div>
							{polls.length > 0 && (
								<div className="flex">
									<ArrowLeftIcon
										className="w-10 h-10 flex-none m-auto"
										onClick={() =>
											setPollsIndex(
												(pollsIndex + polls.length - 1) % polls.length
											)
										}
									/>
									<div className="w-80 mt-5 m-auto lg:mt-10 max-w-sm grow">
										<div className="bg-white shadow-2xl rounded-b-3xl pb-4">
											<h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
												Poll
											</h2>
											<div className="w-5/6 m-auto">
												<p className="text-center text-gray-500 pt-5">
													{polls[pollsIndex]?.question}
												</p>
											</div>
											<div className="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
												<div className="col-span-1 text-indigo-500 mt-10">
													<DotsCircleHorizontalIcon className="w-15 lg:w-12" />
												</div>
												<div className="col-span-2 pt-1">
													<p className="text-gray-800 font-bold lg:text-l mb-1">
														Result: {polls[pollsIndex].result}
													</p>
													<span className="flex items-center">
														Votes: {polls[pollsIndex].votes}
														<div className="w-full bg-gray-200 h-2 ml-2">
															<div
																className="bg-indigo-600 h-2"
																style={{ width: `${polls[pollsIndex].votes * 100 / token.amount}%` }}
															></div>
														</div>
													</span>
													<div className="flex items-center mr-5">
														<span className="mr-3 text-gray-500 text-sm">
															Options
														</span>
														<div className="relative">
															<select
																onChange={(e) => setOptionIndex(e.target.value)}
																className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
															>
																{polls[pollsIndex]?.options.map(
																	(option, optionIndex) => {
																		return (
																			<option
																				value={optionIndex}
																				key={optionIndex}
																			>
																				{option}
																			</option>
																		);
																	}
																)}
															</select>
															<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
																<svg
																	fill="none"
																	stroke="currentColor"
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth="2"
																	className="w-4 h-4"
																	viewBox="0 0 24 24"
																>
																	<path d="M6 9l6 6 6-6"></path>
																</svg>
															</span>
														</div>
													</div>
												</div>
											</div>
											<div className="bg-indigo-700 w-72 lg:w-5/6 text-center m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl text-white text-center shadow-xl shadow-bg-blue-700">
												<button
													className="lg:text-sm text-lg font-bold"
													onClick={vote}
												>
													Submit Vote
												</button>
											</div>
										</div>
									</div>
									<ArrowRightIcon
										className="w-10 h-10 flex-none m-auto"
										onClick={() =>
											setPollsIndex((pollsIndex + 1) % polls.length)
										}
									/>
								</div>
							)}
							{user && user.token === tokenID && (
								<section>
									{/* <Polls tokenIndex={tokenIndex} /> */}
								</section>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Token;
