import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
    getTotalSupplyNFT
    } from "../utils/interact";
const Resources = () => {
    
    const [data, dataSet] = useState(0);
    
    const fetchMyAPI = useCallback(async () => {
        let response = await getTotalSupplyNFT()
        dataSet(response)
      }, [])
    
      useEffect(() => {
        fetchMyAPI()
      }, [fetchMyAPI])

    return (
        <div id="about" className="relative bg dark:bg-pink-500">
            <div className="container relative max-w-6xl py-3 pt-16 mx-auto sm:max-w-xl sm:mx-auto">
                <div className="text-center ">
                    <h5 className="text-5xl font-bold text-white">
                        <span id="totalSupplySpan" className="text-white">
                            {data}
                        </span>
                        <span className="text-indigo-500">
                            +
                        </span>
                    </h5>
                    <p className="text-white tracking-wide text-2xl font-medium uppercase">
                        NFT Card Minted
                    </p>
                </div>

                <div>

                    <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                            <span className="block">
                                Want to See NFT Collection ?
                            </span>
                        </h2>
                        <div className="lg:mt-0 lg:flex-shrink-0">
                            <div className="mt-12 inline-flex rounded-md">
                                <a type="button" href="#" className="py-4 px-6  bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Collection
                                </a>
                                <a type="button" href="https://polygonscan.com/address/0xc1bBE845f42AdcB503394E2Aa55E3F4285ba6A67" target="_blank" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mx-6">
                                    Contract
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resources;




