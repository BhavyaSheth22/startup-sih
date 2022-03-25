import { useState } from "react";
import React from "react";
import Api, { responseErrorHandler } from "../utils/Api/Api";
import { toast } from "react-toastify";
import validator from "validator";
import Popup from "../components/Popup/Popup";
import Input from "../components/Input";
import Radio from "../components/Radio";

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
			"Investing..."
		);
		try {
			toast.update(toastElement, {
				render: "Invested Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
			// const { token } = response.data;
			// const { user } = response.data;
			// console.log(user);
			// localStorage.setItem("token", token);
			// localStorage.setItem("user", JSON.stringify(user));
			// setIsAuthenticated(true);
			// localStorage.setItem("userType", userType);
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

const Invest = () => {
	return (
		<Popup
			Button={
				<button className={"text-white bg-indigo-600 border-0 py-2 px-20 focus:outline-none hover:bg-indigo-700 rounded text-lg"}>
					Invest
				</button>
			}
			Modal={InvestModal}
		/>
	);
};

export default function CompanyProfile() {
  return (
    <div class="max-w-screen-xl mx-auto p-8">
    <h2 class="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12">
        Company Name
    </h2>
    <ul class="flex items-start gap-8 flex-wrap">
        <li class="w-3/5">
            <p class="text-lg font-medium leading-6 text-gray-900">
                About the Company
            </p>
            <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                Zepto, a Mumbai-based startup that operates a 10-minute instant grocery delivery service, has more than doubled its valuation to $570 million from $225 million less than two months ago as it expands into newer cities. Y Combinator's Continuity Fund led the $100 million Series C round in Zepto, the two said Monday. Glade Brook, Nexus, Breyer Capital, Lachy Groom, Global Founders Capital and Contrary Capital also participated in the round, which brings its to-date raise to $160 million.
                </p>
            </p>
            <br/><br/>
            <p class="text-lg font-medium leading-6 text-gray-900">
                Initial public offering
            </p>
            <p class="mt-2">
                <p class="text-base leading-6 text-gray-500">
                On August 19, 2004, Google became a public company via an initial public offering. At that time Larry Page, Sergey Brin, and Eric Schmidt agreed to work together at Google for 20 years, until the year 2024. The company offered 19,605,052 shares at a price of $85 per share. Shares were sold in an online auction format using a system built by Morgan Stanley and Credit Suisse, underwriters for the deal. The sale of $1.67 billion gave Google a market capitalization of more than $23 billion.
                </p>
            </p>
        </li>
        <li class="w-1/5">
            <div class="text-center mb-4 opacity-90">
                <a href="#" class="block relative">
                    <img alt="profil" src="https://bit.ly/3IFW1Cf" class="mx-auto object-cover rounded-lg h-60 w-60 "/>
                </a>
                <br/><br/>
            <Invest/>
            </div>
        </li>
    </ul>
</div>
  )
}
