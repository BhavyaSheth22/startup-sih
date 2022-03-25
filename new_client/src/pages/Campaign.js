import Api from "../utils/Api/Api.js";
import { useEffect, useState } from "react";
import { responseErrorHandler } from "../utils/Api/Api.js";
import { useNavigate } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/outline";
import Popup from "../components/Popup/Popup";
import { toast } from "react-toastify";
import Loader from "../components/Loader/Loader";

const Campaign = () => {
	const [campaigns, setCampaigns] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	const enrol = () => {
		toast("Enrolled successfully");
	};

	useEffect(() => {
		const init = async () => {
			const toastElement = toast.loading("Fetching All Campaigns");
			try {
				const response = await Api.campaign.getAllCampaigns();
				console.log(response.data);
				let { data } = response.data;
				const { allCampaigns } = data;
				console.log(allCampaigns);
				setCampaigns(allCampaigns);
				toast.update(toastElement, {
					render: "All Campaigns Fetched",
					type: "success",
					isLoading: false,
					autoClose: true,
				});
			} catch (error) {
				responseErrorHandler(error, toastElement);
			}
			setIsLoading(false);
		};
		return init();
	}, []);

	return isLoading ? (
		<Loader />
	) : (
		<section className="text-gray-600 body-font lg:mx-10 sm:mx-2">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap w-full mb-20">
					<div className="lg:w-1/2 w-full mb-6 lg:mb-0">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
							All Campaigns
						</h1>
						<div className="h-1 w-20 bg-indigo-500 rounded"></div>
					</div>
					<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
						Here you can view all the campaigns created. Click on a campaigns to see the details, buy
						campaigns and transfer campaigns
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{campaigns.map((campaign) => {
						return (
							<div
								className="hover:animate-pulse xl:w-1/4 md:w-1/2 p-4"
								key={campaign._id}
							>
								<div className="bg-gray-100 p-6 rounded-lg">
									<img
										className="h-40 rounded w-full object-contain object-center mb-6"
										src={campaign.imageUrl}
										alt="content"
									/>
									<h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
									<h2 className="text-lg text-gray-900 font-medium title-font m-auto">
										{campaign.name}
									</h2>
									<div className="flex mb-1 w-50">
										<span className="flex items-center">
											Volunteer Required: {campaign.noOfVolunteers}
											{/* <div className="w-40 bg-gray-200 h-2 ml-2">
                          <div
                            className="bg-indigo-600 h-2"
                            style={{ width: `${campaign.totalAmount}%` }}
                          ></div>
                        </div> */}
										</span>
									</div>
									<br></br>
									{/* <div className="flex m-auto">
										<span className="title-font font-medium text-sm text-gray-900 m-auto">
											Address: {campaign.address}
										</span>
									</div>
									<div className="flex m-auto">
										<span className="title-font font-medium text-sm text-gray-900 m-auto">
											Date {campaign.date}
										</span>
										<span className="title-font font-medium text-sm text-gray-900 m-auto">
											Time {campaign.time}
										</span>
									</div> */}
								
								</div>
								<button
									onClick={enrol}
									className={
										"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
									}
								>
									ENROLL
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Campaign;
