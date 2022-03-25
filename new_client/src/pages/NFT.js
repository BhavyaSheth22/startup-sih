import Api from "../utils/Api/Api.js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { responseErrorHandler } from "../utils/Api/Api.js";
import Loader from "../components/Loader/Loader";
import { useParams } from "react-router-dom";

const NFT = () => {
  const { nftId } = useParams();
  const [nft, setNFT] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const toastElement = toast.loading("Fetching Tokens");
      try {
        const response = await Api.crowdfunding.getNFT(nftId);
        const { data } = response.data;
        toast.update(toastElement, {
          render: "NFT Fetched",
          type: "success",
          isLoading: false,
          autoClose: true,
        });
        setNFT(data.nft);
        setIsLoading(false);
        console.log(data.nft);
      } catch (error) {
        responseErrorHandler(error, toastElement);
      }
    };
    return init();
  }, [nftId]);

  return isLoading ?
    <Loader /> : (
      <>
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="w-full flex">
              <div className="tokenDetails w-1/2 mx-2 p-1 bg-slate-50	 justify-center">
                <div className="flex flex-wrap justify-center">
                  <img
                    alt="ecommerce"
                    src={nft.imageURL}
                    width="200px"
                    height="200px"
                  />
                </div>
                <div className="xl:w-full md:w-full p-2">
                  <div className="bg-gray-200 mt-4  text-center justify-center">
                    <h3 className="tracking-widest text-indigo-500 text-md font-medium title-font">
                      This is a nft certificate for honest contribution of {nft.amount} to organizationID {nft.organization}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default NFT;