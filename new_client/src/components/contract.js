import web3 from "./web3";

const address = "0x461B6ef3c8B15f8412E966E0B2B80400d254a603";

const abi = [
	{
		inputs: [
			{
				internalType: "string",
				name: "daoName",
				type: "string",
			},
			{
				internalType: "string",
				name: "daoDesc",
				type: "string",
			},
			{
				internalType: "string",
				name: "id",
				type: "string",
			},
		],
		name: "createDao",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "daoName",
				type: "string",
			},
			{
				indexed: false,
				internalType: "string",
				name: "daoDesc",
				type: "string",
			},
			{
				indexed: false,
				internalType: "string",
				name: "id",
				type: "string",
			},
			{
				indexed: false,
				internalType: "address",
				name: "owner",
				type: "address",
			},
		],
		name: "daoCreated",
		type: "event",
	},
];

export default new web3.eth.Contract(abi, address);
