import { useEffect, useState } from "react";
import React from "react";
import Api, { responseErrorHandler } from "../utils/Api/Api";
import { toast } from "react-toastify";
import validator from "validator";
import Popup from "./Popup/Popup";
import Input from "./Input";
import Radio from "./Radio";
import { COMETCHAT_CONSTANTS } from "../consts";
import axios from "axios";
import web3 from "./web3";
import contract from "./contract";

const AuthModal = ({ setIsAuthenticated, close, isSignIn, userType }) => {
	const [signIn, setSignIn] = useState(isSignIn);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [description, setDescription] = useState("");
	const [role, setRole] = useState("Entrepreneur");

	const createUser = async (uid, name) => {
		const res = await axios.post(
			`https://${COMETCHAT_CONSTANTS.APP_ID}.api-${COMETCHAT_CONSTANTS.REGION}.cometchat.io/v3/users`,
			{ uid, name },
			{
				headers: {
					apiKey: "83461e32095a6a5805fd84a5bafbbe8d6d9571b9",
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			}
		);
		console.log(res);
	};

	const submit = async () => {
		if (!validator.isEmail(email)) {
			return toast.error("Invalid Email Address");
		}
		if (!signIn && name.length < 3) {
			return toast.error("Invalid Name");
		}
		if (password.length < 8) {
			return toast.error("Please Use A Password With Minimum Length 8");
		}
		const toastElement = toast.loading(
			signIn ? "Logging You In" : "Signing You Up"
		);
		try {
			const response = signIn
				? await Api.auth.signIn({ email, password, userType })
				: userType == "company"
				? await Api.auth.companySignUp({
						email,
						password,
						name,
						description,
				  })
				: userType == "user"
				? await Api.auth.userSignUp({
						email,
						password,
						name,
						description,
						role,
				  })
				: await Api.auth.incubatorSignUp({
						email,
						password,
						name,
						description,
				  });

			toast.update(toastElement, {
				render: signIn
					? "Logged In Successfully"
					: "Account Created Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
			const { token, data } = response.data;
			if (!signIn) {
				console.log(token, data);
				createUser(data.userID, data.userName);
			}
			console.log(data);
			const accounts = await web3.eth.getAccounts();
			console.log(accounts);
			const res = await contract.methods
				.createDao(name, description, data.userID)
				.send({
					from: accounts[0],
				});
			// const res = await contract.methods;
			console.log(res);
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(data));
			setIsAuthenticated(true);
			localStorage.setItem("userType", userType);
			return close();
		} catch (error) {
			responseErrorHandler(error, toastElement);
		}
	};

	return (
		<div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 modal">
			<h2 className="text-gray-900 text-lg font-medium title-font mb-5">
				{signIn ? "Sign In" : "Register"} As A{" "}
				{userType == "company"
					? "Company"
					: userType == "user"
					? "User"
					: "Incubator"}
			</h2>
			{!signIn && <Input label="Full Name" name="name" setter={setName} />}
			<Input label="Email" type="email" setter={setEmail} />
			{!signIn && (
				<Input label="Description" name="description" setter={setDescription} />
			)}
			{userType === "user" && (
				<Radio
					label="Role"
					value={role}
					setter={setRole}
					options={[
						{
							label: "Entrepreneur",
							value: "Entrepreneur",
							name: "role",
						},
						{
							label: "Investor",
							value: "Investor",
							name: "role",
						},
					]}
				/>
			)}
			<Input label="Password" type="password" setter={setPassword} />
			<button
				onClick={submit}
				className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
			>
				{signIn ? "Sign In" : "Register"}
			</button>
			<div className="text-s text-gray-500 mt-3">
				{signIn ? "Don't have an account?" : "Already have an account?"}{" "}
				<button onClick={() => setSignIn(!signIn)} className="text-indigo-500">
					{signIn ? "Register" : "Sign In"}
				</button>
			</div>
		</div>
	);
};

const Auth = ({
	setIsAuthenticated,
	isSignIn,
	className,
	userType,
	...props
}) => {
	return (
		<Popup
			Button={
				<button className={className}>
					Explore Role of{" "}
					{userType == "company"
						? "Company"
						: userType == "user"
						? "User"
						: "Incubator"}
				</button>
			}
			Modal={AuthModal}
			setIsAuthenticated={setIsAuthenticated}
			isSignIn={isSignIn}
			userType={userType}
			{...props}
		/>
	);
};

export default Auth;
