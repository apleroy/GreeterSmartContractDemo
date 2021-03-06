require("dotenv").config();

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const etherscanUrl = process.env.REACT_APP_ETHERSCAN_URL;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require("../contract-abi.json");

export const greeterContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const getGreeting = async () => {
  const message = await greeterContract.methods.getGreeting().call();
  return message;
};

export const setGreeting = async (address, message) => {
  //input error handling
  if (!window.ethereum || address === null) {
    return {
      status:
        "đĄ Connect your Metamask wallet to update the message on the blockchain.",
    };
  }

  if (message.trim() === "") {
    return {
      status: "â Your message cannot be an empty string.",
    };
  }
  //set up transaction parameters
  const transactionParameters = {
    to: contractAddress, // Required except during contract publications.
    from: address, // must match user's active address.
    data: greeterContract.methods.setGreeting(message).encodeABI(),
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
          â{" "}
          <a target="_blank" href={`${etherscanUrl}/tx/${txHash}`}>
            View the status of your transaction on Etherscan!
          </a>
          <br />
          âšī¸ Once the transaction is verified by the network, the message will
          be updated automatically.
        </span>
      ),
    };
  } catch (error) {
    return {
      status: "đĨ " + error.message,
    };
  }
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "đđŊ Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "đĨ " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            đĻ{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
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
          status: "đđŊ Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "đĻ Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "đĨ " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            đĻ{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

