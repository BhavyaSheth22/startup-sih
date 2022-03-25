import Logo from "../assets/homepage.svg";
import PlayerLogo from "../assets/playerLogo.svg";
import { Link } from "react-router-dom";
import Auth from "../components/Auth";
import { UserGroupIcon, CurrencyDollarIcon, GlobeAltIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'

const Home = ({ isAuthenticated, setIsAuthenticated }) => {

  const features = [
    {
      name: 'New markets, new investors, new cashflow management tools',
      description:
        'Sports, clubs & young promising athletes have greater flexibility in managing their cashflows by relying on additional funding streams with lower cost of capital. Unique features of blockchain-powered market clubs have the choices which traditional markets are not able to match',
      icon: GlobeAltIcon,
    },
    {
      name: 'Monetization of Fan-engagement',
      description:
        'Expect a new level of fan engagement through the platform.A fan sharing in experiences while receiving financial rewards is more loyal than a fan invested only emotionally.',
      icon: UserGroupIcon,
    },
    {
      name: 'Rewards & Participation',
      description:
        'Fans support their favourite clubs or atheltes in an entirely new way by purchasing Fan-Tokens which entitles them to vote in community polls while getting participation rewards and making passive income.',
      icon: CurrencyDollarIcon,
    },
    {
      name: 'Exchange of Tokenized Athletes or Clubs',
      description:
        'The exchange will trade tokens of athletes that are not tied to either the rating or the market value of the players. The price of tokens will be regulated based on market mechanisms and the ratio of supply and demand.',
      icon: SwitchHorizontalIcon,
    },
  ]
  
  const teamMembers = [
    {
      name: "Archeel Parekh",
      position: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/50794615?v=4",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Aditya Patkar",
      position: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/50791200?v=4",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Palak Mantri",
      position: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/50794716?v=4",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      name: "Premsing Rathod",
      position: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/50791267?v=4",
      description:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
  ];
  return (
    <>
      <section className="text-gray-700 body-font lg:mx-10 sm:mx-2">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Logo}
              height="410"
              width="512"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block xl:inline">One-Stop Ecosystem for </span>{' '}
                <span className="block text-indigo-600 xl:inline">management and growth of Entreprenuers</span>
              </h1>
              <p className="mt-3 text-xs text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-base lg:mx-0">
               From raising funds to looking for guidance, we have covered you all. We aim to encompass smooth functioning of communication between investor and Entreprenuers. 
                 </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                {
                  !isAuthenticated &&
                  <div className="rounded-md shadow">
                    <Auth
                      setIsAuthenticated={setIsAuthenticated}
                      isSignIn={true}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      userType={"user"}
                    />
                  </div>
                }
                {
                  !isAuthenticated &&
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Auth
                      setIsAuthenticated={setIsAuthenticated}
                      isSignIn={true}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      userType={"company"}
                    />
                  </div>
                }
    
              </div>
            </div>
          </div>
        </div>
      </section>
  

      <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Providing Value to Our Users
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
		<section className="text-gray-600 body-font lg:mx-20 sm:mx-0">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
						Our Team
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						We have an amazing team that is consistely aiming to solve the problems via technology and support the NGOs. 
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{teamMembers.map((member, memberIndex) => {
						return (
							<div className="p-4 lg:w-1/4 md:w-1/2" key={memberIndex}>
								<div className="h-full flex flex-col items-center text-center">
									<img
										alt="team"
										className="h-50 rounded w-full object-contain object-center mb-6"
										src={member.image}
									/>
									<div className="w-full">
										<h2 className="title-font font-medium text-lg text-gray-900">
											{member.name}
										</h2>
										<h3 className="text-gray-500 mb-3">{member.position}</h3>
										{/* <p className="mb-4">{member.description}</p> */}
										<span className="inline-flex">
											<div className="text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</div>
											<div className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</div>
											<div className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</div>
										</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
      
		</section>
	

    </>
  )
}

export default Home;
