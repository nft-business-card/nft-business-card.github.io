
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(process.env.API_URL);

const contractABI = require("../contract-abi.json");
const contractAddress = "0x03D823B8d621715f8ABC03D358B725df8D43A087";

export const nftBusinessCard = new web3.eth.Contract(
  contractABI,
  contractAddress
);



export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const obj = {
        status: "",
        address: addressArray[0],
      };

      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😞" + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://metamask.io/download.html"
            >
              You must install MetaMask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "",
        };
      } else {
        return {
          address: "",
          status: "Please check your Metamask wallet 😞",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "Error Message from Metamask:" + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://metamask.io/download.html"
            >
              You must install MetaMask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const mint = async (dataFormat) => {
  dataFormat = JSON.parse(JSON.stringify(dataFormat));
  console.log(dataFormat);
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: dataFormat.walletAddress, // must match user's active address.
    value: parseInt(web3.utils.toWei(dataFormat.currentPriceOfNFT, "ether")).toString(16), // hexhex
    gasLimit: "0",
    data: nftBusinessCard.methods.mint(dataFormat.fullNameData, dataFormat.titleData, dataFormat.otherData, dataFormat.backgroundColor, dataFormat.textColor).encodeABI(),
  };

  //sign the transaction
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      status: (
        <div>
          
<div class="relative">
    <div class="h-screen w-full z-10 inset-0 overflow-y-auto">
        <div class="absolute w-full h-full inset-0 bg-gray-500 opacity-75">
        </div>
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            </span>
            <div class="inline-block relative overflow-hidden transform transition-all sm:align-middle sm:max-w-lg" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div>
                    <div class="rounded-lg p-8 bg-white shadow">
                        <div class="bg-white dark:bg-gray-800 ">
                            <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                            <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                                                  <span class="block">
                                                  Once the transaction is verified by the network, NFT is Yours!
                                    </span>                              
                                </h2>
                            
                                <div class="lg:mt-0 lg:flex-shrink-0">
                                    <div class="flex items-center justify-between gap-4 w-full mt-8">
                                        <a target="_blank" href={`https://mumbai.polygonscan.com/tx/${txHash}`} type="button" class="py-4 px-6 m-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        View on Mumbai
                                        </a>
                                        <a target="_blank" href={`https://mumbai.polygonscan.com/tx/${txHash}`} type="button" class="py-4 px-6 m-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        View on OpenSea
                                        </a>
                                        <a href={`https://nft-business-card.github.io`} type="button" class="py-4 px-6 m-2 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Buy one more!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        
        
</div>
      ),
    };
  } catch (error) {
    return {
      status: "😥 " + error.message,
    };
  }

};

export const getCurrentPriceOfNFT = async () => {
  const result = await nftBusinessCard.methods.getCurrentPriceOfNFT().call();
  return web3.utils.fromWei(result);
};

