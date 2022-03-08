import React from "react";
import { useEffect, useState } from "react";
import {
    getGasPriceEth,
    estimateTransactionGasEth
} from "./controllers/blockchain.js";

const GasPrice = () => {

    const [gasPriceEth, setGasPriceEth] = useState("No connection to the network.");
    const [estimatedInteractionGasEth, setEstimateMessage] = useState("No connection to the network.");

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
            <p>Use the ETH/USD converter here for USD prices: <a href="https://www.coinbase.com/converter/eth/usd" target="_blank">Coinbase converter</a></p>
        </div>
    );

};

export default GasPrice;