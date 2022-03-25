import { useState } from "react";
import React from "react";
import Api, { responseErrorHandler } from "../utils/Api/Api";
import { toast } from "react-toastify";
import Input from "../components/Input";
import { getUserId } from "../utils/jwtUtil";

const CreateCrowdfunding = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [totalAmount, setTotalAmount] = useState(0);
	const [imageUrl, setImageUrl] = useState("");
	const orgId = getUserId();
	const submit = async () => {
		if (title.length < 3) {
			return toast.error("Invalid Title");
		}
		if (description.length < 3) {
			return toast.error("Invalid Name");
		}
		if (totalAmount == 0) {
			return toast.error("Invalid Total Amount");
		}
		const toastElement = toast.loading("Creating Post");

		try {
			const response = await Api.crowdfunding.create({
				orgId,
				title,
				description,
				totalAmount,
			});

			toast.update(toastElement, {
				render: "Post Created Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
		} catch (error) {
			responseErrorHandler(error, toastElement);
		}
	};

	return (
		<div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-2/4 mx-auto mt-10 md:mt-10 modal">
			<Input label="Title" type="title" setter={setTitle} />
			<Input label="Description" name="description" setter={setDescription} />
			<Input label="Total Amount" name="totalAmount" setter={setTotalAmount} />
			<Input label="Image" name="imageUrl" setter={setImageUrl} />
			<button
				onClick={submit}
				className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			>
				{"Submit Post"}
			</button>
		</div>
	);
};

export default CreateCrowdfunding;
