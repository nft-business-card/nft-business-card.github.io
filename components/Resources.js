import Link from "next/link";
import React from "react";
import Image from "next/image";

const Resources = () => {
    return (
        <div id="about" className="bg dark:bg-pink-500">

            <div className="container relative max-w-6xl py-3 pt-16 mx-auto sm:max-w-xl sm:mx-auto">
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
                                <a type="button" href="#" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mx-6">
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



