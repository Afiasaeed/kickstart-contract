import Web3 from "web3";

let web3; //for reassigning value

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/9da19753b07e4289b5148878db4d158f"
  );// making our own providor of rinkeby through infura
  web3 = new Web3(provider);
}

export default web3;
