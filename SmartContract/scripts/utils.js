module.exports = {

    interact: async function (contract, updateMessage) {
        const greeting = await contract.getGreeting();
        console.log("The current greeting is: " + greeting); 

        console.log("Updating the greeting...");
        const tx = await contract.setGreeting(updateMessage);
        await tx.wait();

        const newGreeting = await contract.getGreeting();
        console.log("The new greeting is: " + newGreeting); 
    },

    estimateGas: async function (provider, contract) {
        // https://ethereum.stackexchange.com/questions/106797/how-do-you-estimate-the-gas-cost-to-deploy-a-smart-contract-with-ethers-js
        const deploymentData = contract.interface.encodeDeploy(["Hello World"]);

        const estimatedGas = await provider.estimateGas({ data: deploymentData });
        console.log("Estimated Gas to deploy this contract (in wei): ", estimatedGas.toString());
    
    }
}