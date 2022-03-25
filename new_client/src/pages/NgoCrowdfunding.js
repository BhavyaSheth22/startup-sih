import Api from "../utils/Api/Api.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { responseErrorHandler } from "../utils/Api/Api.js";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/outline";

const NgoCrowdfunding = () => {
  const [tokens, setTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
 
  return (
    <section className="text-gray-600 body-font lg:mx-10 sm:mx-2">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Created Tokens
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Here you can view all the tokens created on KheloFi by diffetent
            athletes and clubs. Click on a tokens to see the details, buy tokens
            and transfer tokens
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {tokens.map((token) => {
            return (
              <div
                className="hover:animate-pulse xl:w-1/4 md:w-1/2 p-4"
                key={token._id}
                onClick={() => navigate(`/Crowdfunding/${token._id}`)}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src={token.image}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    Token Name
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font m-auto">
                    {token.name?.toUpperCase()} TOKEN
                  </h2>
                  <div className="flex mb-1 w-50">
                    <span className="flex items-center">
                      Percent Raised {token.raised}%
                      <div className="w-40 bg-gray-200 h-2 ml-2">
                        <div
                          className="bg-indigo-600 h-2"
                          style={{ width: `${token.raised}%` }}
                        ></div>
                      </div>
                    </span>
                  </div>
                  <div className="flex m-auto">
                    <CurrencyDollarIcon className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500 ml-4" />
                    <span className="title-font font-medium text-sm text-gray-900 m-auto">
                      Balance {token.balance} {token.name?.toUpperCase()} TOKEN
                    </span>
                  </div>
                  <p className="mt-1 leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                  
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NgoCrowdfunding;
