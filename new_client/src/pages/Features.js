import { UserGroupIcon, CurrencyDollarIcon, GlobeAltIcon, SwitchHorizontalIcon } from '@heroicons/react/outline'

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

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features of KheloFi</h2>
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
  )
}

export default Features;