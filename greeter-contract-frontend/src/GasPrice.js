import React from "react";
import { useEffect, useState } from "react";
import {
    getGasPriceEth,
    estimateTransactionGasEth
} from "./controllers/blockchain.js";

const GasPrice = () => {

    const [gasPriceEth, setMessage] = useState("No connection to the network.");
    const [estimatedInteractionGasEth, setEstimateMessage] = useState("No connection to the network.");

    //called only once
    useEffect(async () => {
        const gasPriceInWei = await getGasPriceEth();
        const estimatedInteractionGasEth = await estimateTransactionGasEth("this is a test transaction greeting input to estimate");
        setMessage(gasPriceInWei);
        setEstimateMessage(estimatedInteractionGasEth);
    }, []);

    return (
        <div id="container">
            <p>Current Gas Price (in ETH): {gasPriceEth}</p>
            <p>Estimated Gas to Submit Transaction (in ETH): {estimatedInteractionGasEth}</p>
        </div>
    );

};

export default GasPrice;