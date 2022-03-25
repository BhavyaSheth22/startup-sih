import React, { useState } from "react";
import { ChatEngine, getChats } from "react-chat-engine";
import axios from "axios";
import { AiOutlineConsoleSql } from "react-icons/ai";

const ProjectID = "941d8d1e-b5d3-48d7-aa95-00635fa0671f";
const PRIVATE_KEY = "625714d9-05da-4522-9a9d-3a86844e3ce8";

export function ChatComponent({ setUsername, setSecret }) {
	// let socket = new WebSocket(
	// 	"wss://api.chatengine.io/person/?publicKey=941d8d1e-b5d3-48d7-aa95-00635fa0671f&username={{user_name}}&secret={{user_secret}}"
	// );

	// socket.onopen = (event) => console.log(event);
	// socket.onclose = (event) => console.log(event);
	// socket.onmessage = (event) => console.log(event);
	// socket.onerror = (error) => console.log(error);
	// const [username, setUsername] = useState("");
	// const [secret, setSecret] = useState("");
	// const [title, setTitle] = useState("");
	// const [is_direct_chat, set_is_direct_chat] = useState(false);
	// const addToChat = () => {
	// 	//chat id
	// 	const chatId = 105782;
	// 	const response = await axios.post;
	// };
	const [isLoading, setIsLoading] = useState(false);
	const addUser = async () => {
		const uname = document.getElementById("username").value;
		const usecret = document.getElementById("secret").value;
		console.log(uname, usecret);
		setIsLoading(true);
		const response = await axios.put(
			"https://api.chatengine.io/users/",
			{
				username: uname,
				secret: usecret,
			},
			{
				headers: {
					"PRIVATE-KEY": PRIVATE_KEY,
				},
			}
		);
		console.log(response);
		if (response.status == 201 || response.status == 200) {
			localStorage.setItem("username", uname);
			localStorage.setItem("secret", usecret);
			setUsername(response.data.username);
			setSecret(usecret);
			// setIsLoading(false);
		}
	};
	// const createChat = async () => {
	// 	const response = await axios.post(
	// 		"https://api.chatengine.io/chats/",
	// 		{
	// 			title,
	// 			is_direct_chat,
	// 		},
	// 		{
	// 			headers: {
	// 				"Project-ID": ProjectID,
	// 				"User-Name": username,
	// 				"User-Secret": secret,
	// 			},
	// 		}
	// 	);
	// 	console.log(response);
	// };
	return (
		<div>
			{!isLoading && (
				<div>
					<input placeholder="Username" id="username" />
					<input placeholder="Secret" id="secret" />
					<button
						onClick={() => {
							addUser();
						}}
					>
						Add User
					</button>
				</div>
			)}
			{isLoading && <div>Loading...</div>}
			{/* <input onChange={(e) => setTitle(e.target.value)} placeholder="Title" /> */}
			{/* <button
				onClick={() => {
					createChat();
				}}
			>
				Chutiya Adi
			</button> */}
			{/* <ChatEngine
				height="100vh"
				userName="Adity"
				userSecret="Aditya"
				projectID="941d8d1e-b5d3-48d7-aa95-00635fa0671f"
			/> */}
		</div>
	);
}

export default ChatComponent;
