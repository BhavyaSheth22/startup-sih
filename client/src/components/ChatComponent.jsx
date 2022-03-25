import React, { useState } from "react";
import { ChatEngine, getChats } from "react-chat-engine";
import axios from "axios";

const ProjectID = "941d8d1e-b5d3-48d7-aa95-00635fa0671f";
const PRIVATE_KEY = "625714d9-05da-4522-9a9d-3a86844e3ce8";

export function ChatComponent({ username, secret }) {
	// let socket = new WebSocket(
	// 	"wss://api.chatengine.io/person/?publicKey=941d8d1e-b5d3-48d7-aa95-00635fa0671f&username={{user_name}}&secret={{user_secret}}"
	// );

	// socket.onopen = (event) => console.log(event);
	// socket.onclose = (event) => console.log(event);
	// socket.onmessage = (event) => console.log(event);
	// socket.onerror = (error) => console.log(error);
	// const [username, setUsername] = useState("");
	// const [secret, setSecret] = useState("");
	const [title, setTitle] = useState("");
	const [is_direct_chat, set_is_direct_chat] = useState(false);
	const addToChat = async () => {
		//chat id
		const chatId = 105782;
		const response = await axios.post(
			`https://api.chatengine.io/chats/${localStorage.getItem(
				"chatid"
			)}/people/`,
			{
				headers: {
					"Project-ID": ProjectID,
					"User-Name": "yo",
					"User-Secret": "yo",
				},
			},
			{ username: "pinky" }
		);
	};
	// const addUser = async () => {
	// 	const response = await axios.put(
	// 		"https://api.chatengine.io/users/",
	// 		{
	// 			username,
	// 			secret,
	// 		},
	// 		{
	// 			headers: {
	// 				"PRIVATE-KEY": PRIVATE_KEY,
	// 			},
	// 		}
	// 	);
	// 	console.log(response);
	// };
	const createChat = async () => {
		console.log(secret);
		const response = await axios.post(
			"https://api.chatengine.io/chats/",
			{
				title,
				is_direct_chat,
			},
			{
				headers: {
					"Project-ID": ProjectID,
					"User-Name": username,
					"User-Secret": secret,
				},
			}
		);
		console.log(response);
		localStorage.setItem("chatid", response.data.id);
	};
	return (
		<div>
			<input onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
			<button
				onClick={() => {
					createChat();
				}}
			>
				Create Chat
			</button>
			<button
				onClick={() => {
					addToChat();
				}}
			>
				Add to Chat
			</button>
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
