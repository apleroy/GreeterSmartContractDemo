const Utils = require("./utils"); 

const API_KEY = process.env.MAINNET_API_KEY;
const PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.MAINNET_CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/Greeter.sol/Greeter.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="mainnet", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const greeterContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

// interact with desired input
Utils.interact(greeterContract, "new message");