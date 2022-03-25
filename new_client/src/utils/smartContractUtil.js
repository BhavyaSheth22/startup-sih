// import tokenAbi from "../assets/contracts/MyToken.json";
import { tokenContractAddress } from "../constants";

var web3, contract, account;

export const init = async () => {
	// if (typeof window.web3 !== "undefined") {
	// 	web3 = new window.Web3(window.web3.currentProvider);
	// 	window.ethereum.on("accountsChanged", (new_accounts) => {
	// 		let accounts = new_accounts;
	// 		account = accounts[0];
	// 	});
	// 	contract = new web3.eth.Contract(tokenAbi.abi, tokenContractAddress);
	// 	if (account == null) {
	// 		const accounts = await window.ethereum.request({
	// 			method: "eth_requestAccounts",
	// 		});
	// 		console.log(accounts);
	// 		if (accounts.length !== 0) {
	// 			account = accounts[0];
	// 			web3.eth.defaultAccount = account;
	// 		}
	// 	}
	// } else {
	// 	console.warn(
	// 		"Please use a dapp browser like mist or MetaMask plugin for chrome"
	// 	);
	// }
};

export const approveToken = async (tokenAdmin, amount, rate) => {
	let result = await contract.methods
		.addNewToken(tokenAdmin, amount, rate)
		.send({
			from: account,
			gas: 3000000,
			gasPrice: "20000000000",
		});
	return result;
};

const SC = {
	init,
	approveToken,
};
export default SC;
