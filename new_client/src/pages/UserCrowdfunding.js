import Api from "../utils/Api/Api.js";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { responseErrorHandler } from "../utils/Api/Api.js";
import { useNavigate } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/outline";
import Popup from "../components/Popup/Popup";
import Input from "../components/Input";
import { getUserId } from "../utils/jwtUtil";

const TransactionModal = ({ postId, orgId, close }) => {

  const [money, setMoney] = useState(0);
  const userId = getUserId();
  const paymentHandler = async (e) => {
    e.preventDefault();
    let amount = money * 100;
    const options = {
      key: "rzp_test_OD9eywpWYm0Jh3",
      name: "Lend A Hand",
      description: "Your Payment Details",
      amount: amount,
      handler: async (response) => {

        try {
          const paymentId = response.razorpay_payment_id;
          const res = await Api.crowdfunding.makeTransaction({ amount, postId, orgId, userId, paymentId });
        
          console.log("Razorpay")
          console.log(res);
         return close();
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  return (

    <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 modal">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">

      </h2>
      <Input label="Money" type="money" setter={setMoney} />
      <button onClick={paymentHandler}>Submit</button>
    </div>
  );
};

const UserCrowdfunding = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Api.crowdfunding.getAllPosts().then((res) => {

      console.log(res)
      let temp = res.data.data.allPosts.filter((a) => {
        return a.status === "incomplete";
    });
      console.log(temp)
      setPosts(temp);
    });
    setIsLoading(false);
  }, []);

  return (
    <section className="text-gray-600 body-font lg:mx-2 sm:mx-2">
    <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
           

          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
         
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {posts.map((token) => {
            return (
              <div
                className="hover:animate-pulse xl:w-1/3 md:w-1/3 p-4"
                key={token._id}
                onClick={() => navigate(`/Crowdfunding/${token._id}`)}
              >
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src={token.imageUrl}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">

                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font m-auto">
                    {token.title}
                  </h2>
                  <div className="flex mb-1 w-50">
                    <span className="flex items-center">
                      Percent Raised {(token.totalAmount)}%
                      <div className="w-40 bg-gray-200 h-2 ml-2">
                        <div
                          className="bg-indigo-600 h-2"
                          style={{ width: `${token.totalAmount}%` }}
                        ></div>
                      </div>
                    </span>
                  </div>
                  <br></br>
                  {/* <div className="flex m-auto">
                    <CurrencyDollarIcon className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-indigo-500 ml-4" />
                    <span className="title-font font-medium text-sm text-gray-900 m-auto">
                      Balance {token.amountNeeded}
                    </span>
                  </div> */}
                  <p className="mt-1 leading-relaxed text-base">
                  Posted by Udaan Foundation
                  </p>
                  <Popup
                    Button={
                      <button className={"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"}>
                        Donate Money
                      </button>
                    }
                    Modal={TransactionModal}
                    orgId={token.orgId}
                    postId={token._id}
                  />

                </div>
              </div>
            );
          })}
        </div>
    
    </section>
  );

};

export default UserCrowdfunding;
