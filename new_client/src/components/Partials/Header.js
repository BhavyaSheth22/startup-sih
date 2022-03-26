import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner";

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Feed', href: '/feed' }
]

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  const userType = localStorage.getItem('userType');

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <>
      <Banner />
      <div >
        <Popover>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-0">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {navigation.map((item) => (
                  <Link key={item.name} to={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                  </Link>
                ))}
                {/* {
                  isAuthenticated &&
                  <>
                    <Link to="/UserCrowdFunding" className="font-medium text-indigo-600 hover:text-indigo-500">
                      View Feed
                    </Link>
                  </>
                }
                {
                  isAuthenticated && userType === 'company' &&
                  <>
                    <Link to="/CrowdFunding" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Submit Business Pitch
                    </Link>
                  </>
                }
                {
                  isAuthenticated  &&
                  <>
                    <Link to="/createpOST" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Create a Campaign
                    </Link>
                  </>
                }
                {
                  isAuthenticated &&
                  <>
                    <Link to="/campaign" className="font-medium text-indigo-600 hover:text-indigo-500">
                     View ongoing Campaigns
                    </Link>
                  </>
                }
                   {
                  isAuthenticated  &&
                  <>
                    <Link to="/analytics" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Analytics
                    </Link>
                  </>
                }
                {
                  isAuthenticated  &&
                  <>
                    <Link to="/Assistance" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Assistance
                    </Link>
                  </>
                } */}
                {
                  isAuthenticated &&
                  <Link
                    to="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                }

              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <Link to="/">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {
                  isAuthenticated &&
                  <Link to="/myToken" className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
                    My Token
                  </Link>
                }
                {
                  isAuthenticated &&
                  <div
                    className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                    onClick={logout}
                  >
                    Logout
                  </div>
                }

              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </div>
    </>
  );
};

export default Header;
