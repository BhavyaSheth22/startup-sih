import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSidebar";
import JitsiComponent from "../components/JitsiComponent";

const YourPosts = () => {
	const user = localStorage.getItem("user");
	useEffect(() => {
		document.title = "OnlyUwU - YourPosts";
	}, []);
	return (
		<div>
			<Navbar />
			<Grid
				gridTemplateColumns="22vw auto 24vw"
				columnGap="2rem"
				marginLeft="1rem"
				marginRight="1rem"
			>
				<JitsiComponent user={user} />
			</Grid>
		</div>
	);
};

export default YourPosts;
