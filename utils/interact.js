
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
        <span>
          ✅{" "}
          <a target="_blank" href={`https://mumbai.polygonscan.com/tx/${txHash}`}>
            View the status of your transaction on Mumbai!
          </a>
          <br />
          ℹ️ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
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

