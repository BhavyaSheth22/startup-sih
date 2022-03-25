import React, { useState } from "react";
import Api, { responseErrorHandler } from "../utils/Api/Api";
import { toast } from "react-toastify";
import Input from "../components/Input";
import { getUserId } from "../utils/jwtUtil";
const CreateCampaign = () => {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [description, setDescription] = useState("");
	const [noOfVolunteers, setNumberOfVolunteers] = useState(0);
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
	const [imageUrl, setImageUrl] = useState("");
	const orgId = getUserId();
	const submit = async () => {
		if (name.length < 3) {
			return toast.error("Invalid Title");
		}
		if (description.length < 3) {
			return toast.error("Invalid Name");
		}
		if (noOfVolunteers == 0) {
			return toast.error("Invalid Total Amount");
		}
		const toastElement = toast.loading("Creating Post");

		try {
		
			const response = await Api.campaign.createCampaign({
				orgId,
				name,
				description,
				noOfVolunteers,
				date,
				time,
				address,
				imageUrl,
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
			<Input label="Title" type="title" setter={setName} />
			<Input label="Description" name="description" setter={setDescription} />
			<Input label="Address" name="description" setter={setAddress} />
			<Input
				label="Number of Volunteers"
				name="noOfVolunteers"
				setter={setNumberOfVolunteers}
			/>
			<Input label="Image" name="imageUrl" setter={setImageUrl} />
			<Input type="date" label="Date" name="date" setter={setDate} />
			<Input type="datetime-local" label="Time" name="time" setter={setTime} />

			<button
				onClick={submit}
				className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			>
				{"Create Campaign"}
			</button>
		</div>
	);
};

export default CreateCampaign;
