import Link from "next/link";

const HowToSection = () => {
    return (
        <div id="about" className="py-10 bg-violet-700 ">
            <h1 className="mt-5 mb-5 font-mono text-4xl font-semibold text-center text-gray-100 uppercase">
                Features of NFT Business Card Project
            </h1>

            <h2 className="font-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-8">
            NFT Business Card is a collection of unlimited unique  NFTs— unique digital collectibles living on the Polygon platform. You can have a NFT Business Card for sharing it on web3 platforms and showing your identity to people.
            </h2>

            
            <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 mb-20">

                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </div>
                    </div>
                    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                        Open Source
                    </h3>
                    <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                        NFT Business Card project is fully open source. It is a blockchain based project and source code can be accessed on <a className="underline decoration-pink-500 hover:text-pink-800" target="_blank" href="https://github.com/nft-business-card/nft-business-card.github.io">this link.</a>
                    </p>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800 mb-5">
                    <div className="flex-shrink-0">
                        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg className="w-7 h-7" width="40" height="40" viewBox="0 0 80 80" fill="none" strokeWidth="0"  xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="40" fill="#7B3FE4"/>
                  <path d="M66.6663 40.9337V53.0011C66.662 53.7537 66.4632 54.4922 66.0892 55.1445C65.7153 55.7968 65.1791 56.3405 64.533 56.7226L54.1163 62.7438C53.4712 63.1297 52.7341 63.3334 51.983 63.3334C51.2319 63.3334 50.4948 63.1297 49.8497 62.7438L39.433 56.7226C38.7869 56.3405 38.2507 55.7968 37.8768 55.1445C37.5029 54.4922 37.304 53.7537 37.2997 53.0011V49.6142L42.633 46.5075V52.3948L51.9663 57.8306L61.2997 52.3948V41.5483L51.9663 36.1125L30.0997 48.8239C29.4485 49.1921 28.7137 49.3856 27.9663 49.3856C27.2189 49.3856 26.4842 49.1921 25.833 48.8239L15.4163 42.7777C14.7802 42.3898 14.2543 41.844 13.8894 41.1929C13.5245 40.5418 13.3329 39.8074 13.333 39.0604V26.9929C13.3373 26.2404 13.5362 25.5019 13.9101 24.8496C14.2841 24.1973 14.8203 23.6535 15.4663 23.2715L25.883 17.2503C26.5295 16.8682 27.2661 16.6667 28.0163 16.6667C28.7666 16.6667 29.5032 16.8682 30.1497 17.2503L40.5663 23.2715C41.2124 23.6535 41.7486 24.1973 42.1225 24.8496C42.4965 25.5019 42.6953 26.2404 42.6997 26.9929V30.3798L37.333 33.4657V27.6118L27.9997 22.176L18.6663 27.6118V38.4457L27.9997 43.8815L49.8663 31.1701C50.5175 30.8019 51.2523 30.6085 51.9997 30.6085C52.7471 30.6085 53.4818 30.8019 54.133 31.1701L64.5497 37.2164C65.192 37.6002 65.7245 38.1442 66.0954 38.7955C66.4663 39.4469 66.663 40.1835 66.6663 40.9337Z" fill="white"/>
                  </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                        Deployed on <p className="text-purple-400">Polygon</p>
                    </h3>
                    <p className="text-md text-gray-500 dark:text-gray-300 py-4">
                    NFT Business Card project is based on blockchain. It is powered by Polygon Network. Please, visit link to add <a className="underline decoration-purple-500 dark:text-purple-500 hover:text-purple-800" target="_blank" href="https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/">Polygon Network</a> to your Metamask Wallet
                    </p>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-18 px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                    <div className="flex-shrink-0">
                        <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg width="20" height="20" fill="currentColor" className="h-6 w-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                        New Brand Technologies
                    </h3>
                    <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                        Frontend of project is designed on Figma and developed with Next.js and Tailwind CSS.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default HowToSection;







