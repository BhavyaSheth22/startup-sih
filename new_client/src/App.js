import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import React, { Suspense, useState, useEffect } from "react";
import { isLoggedIn } from "./utils/jwtUtil";
import Header from "./components/Partials/Header";
import Footer from "./components/Partials/Footer";
import Loader from "./components/Loader/Loader";
import CompanyProfile from "./pages/CompanyProfile";
const Home = React.lazy(() => import("./pages/Home"));
const CreateCrowdfunding = React.lazy(() =>
	import("./pages/CreateCrowdfunding")
);
const UserCrowdfunding = React.lazy(() => import("./pages/UserCrowdfunding"));
const Campaign = React.lazy(() => import("./pages/Campaign"));
const CreateCampaign = React.lazy(() => import("./pages/CreateCampaign"));
const Feed = React.lazy(() => import("./pages/Homepage"));
const Create = React.lazy(() => import("./pages/Create"));
const Profile = React.lazy(() => import("./pages/Profile"));
const VideoCall = React.lazy(() => import("./pages/VideoCall"));
const Details= React.lazy(() => import("./pages/Details"));
const Workshop= React.lazy(() => import("./pages/exploreWorkshops"));
const Scheme= React.lazy(() => import("./pages/exploreSchemes"));
const Investors = React.lazy(() => import("./pages/FindInvestors"));

const Token = React.lazy(() => import("./pages/Token"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Assistance = React.lazy(() => import("./pages/Assistance"));
const NFT = React.lazy(() => import("./pages/NFT"));
const Analytics = React.lazy(() => import("./pages/Analytics"));

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn());

	useEffect(() => {
		if (isLoggedIn()) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
			localStorage.removeItem("token");
			localStorage.removeItem("user");
		}
	}, []);

	return (
		<Router>
				<div className="App" style={{ background: "white" }}>
			
				<Header
					isAuthenticated={isAuthenticated}
					setIsAuthenticated={setIsAuthenticated}
				/>
		
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route
							path="/"
							exact
							element={
								<Home
									isAuthenticated={isAuthenticated}
									setIsAuthenticated={setIsAuthenticated}
								/>
							}
						/>
						{/* <Route path="/company" exact element={<Company />} />
						<Route path="/features" exact element={<Features />} /> */}
						<Route
							path="/Campaign"
							exact
							element={isAuthenticated ? <Campaign /> : <Navigate to="/" />}
						/>
							<Route path="/schemes" element={<Scheme/>} />
			
						<Route
							path="/createCampaign"
							exact
							element={
								isAuthenticated ? <CreateCampaign /> : <Navigate to="/" />
							}
						/>
						<Route
							path="/companyProfile"
							exact
							element={
								isAuthenticated ? <CompanyProfile /> : <Navigate to="/" />
							}
						/>
						<Route
							path="/Crowdfunding"
							exact
							element={
								isAuthenticated ? <CreateCrowdfunding /> : <Navigate to="/" />
							}
						/>
									<Route path="/feed" element={<Feed />} />
		
						<Route path="/profile/:uuid" element={<Profile />} />
						<Route path="/create" element={<Create />} />
						<Route path="/videoCall" element={<VideoCall />} />
						<Route path="/details" element={<Details/>} />
						<Route path="/workshops" element={<Workshop/>} />
						<Route path="/investors" element={<Investors/>} />
						<Route
							path="/UserCrowdfunding"
							exact
							element={
								isAuthenticated ? <UserCrowdfunding /> : <Navigate to="/" />
							}
						/>
						<Route
							path="/Crowdfunding/:tokenID"
							element={isAuthenticated ? <Token /> : <Navigate to="/" />}
						/>
						<Route
							path="/nft/:nftId"
							element={isAuthenticated ? <NFT /> : <Navigate to="/" />}
						/>
						<Route
							path="/assistance"
							element={isAuthenticated ? <Assistance /> : <Navigate to="/" />}
						/>
						<Route
							path="/analytics"
							element={isAuthenticated ? <Analytics /> : <Navigate to="/" />}
						/>
						<Route
							path="/dashboard"
							element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
						></Route>
					</Routes>
				</Suspense>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
