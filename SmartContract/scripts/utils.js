module.exports = {

    interact: async function (helloWorldContract, updateMessage) {
        const message = await helloWorldContract.greet();
        console.log("The message is: " + message); 

        console.log("Updating the message...");
        const tx = await helloWorldContract.setGreeting(updateMessage);
        await tx.wait();

        const newMessage = await helloWorldContract.greet();
        console.log("The new message is: " + newMessage); 
    },

    estimateGas: async function (provider, contract) {
        // https://ethereum.stackexchange.com/questions/106797/how-do-you-estimate-the-gas-cost-to-deploy-a-smart-contract-with-ethers-js
        const deploymentData = contract.interface.encodeDeploy(["Hello World"]);

        const estimatedGas = await provider.estimateGas({ data: deploymentData });
        console.log("Estimated Gas to deploy this contract (in wei): ", estimatedGas.toString());
    
    }
}