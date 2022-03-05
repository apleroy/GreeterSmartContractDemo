const Utils = require("./utils"); 

const API_KEY = process.env.ROPSTEN_API_KEY;
const PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.ROPSTEN_CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/Greeter.sol/Greeter.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const greeterContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

Utils.estimateGas(alchemyProvider, greeterContract).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});