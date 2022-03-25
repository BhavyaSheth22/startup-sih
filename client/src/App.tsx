import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
<<<<<<< Updated upstream
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
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
	const Details= lazy(() => import("./pages/Details"));
	const Workshop= lazy(() => import("./pages/exploreWorkshops"));
	const Scheme= lazy(() => import("./pages/exploreSchemes"));

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
					<Route path="/details" element={<Details/>} />
					<Route path="/workshops" element={<Workshop/>} />
					<Route path="/schemes" element={<Scheme/>} />
				</Routes>
			</Suspense>
		</Router>
	);
>>>>>>> Stashed changes
}

export default App;
