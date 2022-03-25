import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
	const Home = lazy(() => import("./pages/Home"));
	const Login = lazy(() => import("./pages/Login"));
	const Explore = lazy(() => import("./pages/Explore"));
	const Library = lazy(() => import("./pages/Library"));
	const YourPosts = lazy(() => import("./pages/YourPosts"));
	const Search = lazy(() => import("./pages/Search"));
	const Followers = lazy(() => import("./pages/Followers"));
	const Create = lazy(() => import("./pages/Create"));
	const Profile = lazy(() => import("./pages/Profile"));
	const VideoCall = lazy(() => import("./pages/VideoCall"));
	return (
		<Router>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/library" element={<Library />} />
					<Route path="/your_posts" element={<YourPosts />} />
					<Route path="/search/:caption" element={<Search />} />
					<Route path="/profile/:uuid" element={<Profile />} />
					<Route path="/followers" element={<Followers />} />
					<Route path="/create" element={<Create />} />
					<Route path="/videoCall" element={<VideoCall />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App;
