import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
  //await window.ethereum.enable();
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://ropsten.infura.io/v3/123adb3c6b4343999392d8fd1aec97a6'
  );
  web3 = new Web3(provider);
}

export default web3;
