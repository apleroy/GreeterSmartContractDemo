import React from "react";
import { useEffect, useState } from "react";
import {
    getGasPriceEth,
    estimateTransactionGasEth
} from "./controllers/blockchain.js";

const GasPrice = () => {

    const [gasPriceEth, setGasPriceEth] = useState("No connection to the network.");
    const [estimatedInteractionGasEth, setEstimateMessage] = useState("No connection to the network.");

    //called only once
    useEffect(async () => {
        const gasPriceInEth = await getGasPriceEth();
        const estimatedInteractionGasEth = await estimateTransactionGasEth("this is a test transaction greeting input to estimate");
        setGasPriceEth(gasPriceInEth);
        setEstimateMessage(estimatedInteractionGasEth);
    }, []);

    return (
        <div id="container">
            <p>Current Gas Price (in ETH): {gasPriceEth.toString()}</p>
            <p>Estimated Gas to Submit Transaction (in ETH): {estimatedInteractionGasEth.toString()}</p>
        </div>
    );

};

export default GasPrice;