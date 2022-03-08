# Smart Contract Frontend Website
This project is a basic webapp that connects to a smart contract on the ethereum (ropsten) network.

Most of this was created following the tutorial from Alchemy (linked below).

Additional work includes an Azure pipeline (yaml) for CI/CD (at the root of the repo), and extra components for inspecting gas prices and estimated gas usage costs for interacting with the contract.

The **end result** can be seen here: https://greeter-smartcontract-frontend-stage.azurewebsites.net/

**Smart contract**: https://ropsten.etherscan.io/address/0x663C14C9a59c763D471AAc4368f9CEa6223af39f


A few random notes:

**Note 1:** The `create-react-app` is hard to use with the upgrade to version 5.  I ran into the isssue here as there are breaking changes that do not allow use of the `web3` library (which is provided by alchemy).  As a result, I copied over files from Alchemy's repo rather than reluctantly try to figure out the dependency graph fixes needed for `create-react-app` version 5 (I'm not an advanced user of js or react, and am not setting up a proper 'backend' api for this app - just trying to get basics working).   For more info: https://github.com/facebook/create-react-app/issues/11756#

**Note 2:** I deployed the finalized react site to Azure on a *windows* based app service plan.  This was much easier and I ran into issues with a linux based plan that again I did not want to fix or solve on a basic demo app.

## Usage

**Step 1:** clone the repo (frontend dapp code is all in this current folder, while the smart contract code is all in the adjacent directory at this level)
**Step 2:** setup an alchemy node for whatever Ethereum testnet you wish to use
**Step 3:** complete the deployment of the smart contract project (the other  project directory in this repo)
**Step 4:** create a local `.stage.env` file and add in appropriate environment variables. (this is purposefully gitignore'd)

Examples to fill out would be like below: 

```
REACT_APP_API_END_POINT=""
REACT_APP_ETHEREUM_NETWORK=""
REACT_APP_ALCHEMY_KEY="wss://eth-ropsten.alchemyapi.io/v2/<KEY>"
REACT_APP_CONTRACT_ADDRESS="0x..."
REACT_APP_ETHERSCAN_URL=""
```
**Step 5**: if deploying, modify the variables in the azure devops yaml file after setting up resources in your Azure account.

## Alchemy

Follow the tutorials here: https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/part-4