import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSidebar";
import JitsiComponent from "../components/JitsiComponent";
import ChatComponent from "../components/ChatComponent";
import CreateUser from "../components/CreateUser";

const Chat = () => {
	const [username, setUsername] = useState(null);
	const [secret, setSecret] = useState(null);
	useEffect(() => {
		document.title = "Connect - Chat";
		const curUsername = localStorage.getItem("username");
		const curSecret = localStorage.getItem("secret");
		if (curUsername && curSecret) {
			setUsername(curUsername);
			setSecret(curSecret);
		}
	}, []);
	return (
		<div>
			{username == null && (
				<CreateUser setUsername={setUsername} setSecret={setSecret} />
			)}
			{username != null && (
				<ChatComponent username={username} secret={secret} />
			)}
		</div>
	);
};

export default Chat;
