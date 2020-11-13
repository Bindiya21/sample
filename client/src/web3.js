//overrides metamask v0.2 for our 1.0 version. 
//1.0 lets us use async and await instead of promises
import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider);
const networkId = web3.eth.net.getId();
const chainId = web3.eth.getChainId();
console.log(networkId);
console.log(chainId);
//web3.eth.net.getId().then(console.log);
export default web3;
