import { useState } from "react";
import React from "react";
import { responseErrorHandler } from "../utils/Api/Api";
import { toast } from "react-toastify";
import Input from "../components/Input";

const GiveEquityModal = (close) => {
	const [equityPercentage, setEquityPercentage] = useState("");
    const [priceForOnePercent, setPriceForOnePercent] = useState(0);
	
	const submit = async () => {
		if (priceForOnePercent < 1) {
			return toast.error("Enter an amount");
		}
		if (equityPercentage <= 0) {
			return toast.error("You should be having some equity :(");
		}
		if (equityPercentage >= 100) {
			return toast.error("You cannot get 100% equity of the company");
		}
		const toastElement = toast.loading(
			"Submitting Offer"
		);
		try {
			toast.update(toastElement, {
				render: "Equity Offer Published Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
			return close();
		} catch (error) {
			responseErrorHandler(error, toastElement);
		}
	};

	return (
		<div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 modal">
			<Input label="Precentage of Equity to offer" type="text" setter={setEquityPercentage} />
			<Input label="Price for 1% equity" type="text" setter={setPriceForOnePercent} />
			<button
				onClick={submit}
				className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			>
				Give Equity
			</button>
		</div>
	);
};
export default GiveEquityModal;