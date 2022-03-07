require("dotenv").config();

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require("../contract-abi.json");

export const greeterContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export const getGasPriceEth = async () => {
    const currentGasPrice = await web3.eth.getGasPrice();
    return web3.utils.fromWei(web3.utils.toBN(currentGasPrice).toString());
};

export const estimateTransactionGasEth = async (message) => {
    const estimatedGas = await greeterContract.methods.setGreeting(message).estimateGas();
    return web3.utils.fromWei(web3.utils.toBN(estimatedGas));
  };