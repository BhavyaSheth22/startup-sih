import { useState } from "react";
import React from "react";
import { responseErrorHandler } from "../utils/Api/Api";
import { toast } from "react-toastify";
import Input from "../components/Input";

const InvestModal = (close) => {
	const [price, setPrice] = useState(0);
	const [equityPercentage, setEquityPercentage] = useState("");
	
	const submit = async () => {
		if (price < 1) {
			return toast.error("Enter an amount");
		}
		if (equityPercentage <= 0) {
			return toast.error("You should be giving some equity :(");
		}
		if (equityPercentage >= 100) {
			return toast.error("100% equity??? Do you want to sell yah company???");
		}
		const toastElement = toast.loading(
			"Investing"
		);
		try {
			toast.update(toastElement, {
				render: "Invested Successfully",
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
			<Input label="Price" type="text" setter={setPrice} />
			<Input label="Equity Percentage" type="text" setter={setEquityPercentage} />
			<button
				onClick={submit}
				className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			>
				Invest
			</button>
		</div>
	);
};

export default InvestModal;