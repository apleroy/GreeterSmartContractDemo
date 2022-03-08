# Smart Contract Demo
This project is a basic smart contract called `Greeter` - which is by default setup when using the hardhat project scaffolding (referenced below).

It augments this standard contract with an event emitter which is used in the associated web dapp.

This repo has the code for the contract, code for deployment, and a js file that allows for interacting with the contract after deployment.

Note that for any deployment or interaction (test) ether will need to be obtained at the appropriate testnet faucet.

The **end result** can be seen here: https://greeter-smartcontract-frontend-stage.azurewebsites.net/

**Smart contract**: https://ropsten.etherscan.io/address/0x663C14C9a59c763D471AAc4368f9CEa6223af39f

## Usage

**Step 1:** clone the repo (the smart contract code is all in this current folder, while the frontend dapp code is all in the adjacent directory at this level)
**Step 2:** setup an alchemy node for whatever Ethereum testnet you wish to use
**Step 3:** create a local `.env` file and add in appropriate environment variables. (this is purposefully gitignore'd)

Examples to fill out would be like below: 

```
ETHERSCAN_API_KEY=1234
ROPSTEN_URL="https://eth-ropsten.alchemyapi.io/v2/<YOUR ALCHHEMY KEY>"
ROPSTEN_PRIVATE_KEY="<YOUR PRIVATE KEY FOR METAMASK>"
ROPSTEN_CONTRACT_ADDRESS="<GET ADDRESS AFTER DEPLOY>"
```
After deployment, the address can be used in the `interact.stage.js` file.

Most of the source, usage, and details for this contract can be bets understood following the below links from Hardhat and Alchemy respectively.


## Hardhat

Follow the instructions here: https://hardhat.org/getting-started/


## Alchemy

Follow the tutorials here: https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract