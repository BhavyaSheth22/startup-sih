import web3 from "./web3";

const address = "0x461B6ef3c8B15f8412E966E0B2B80400d254a603";

const abi = [
	{
		inputs: [
			{
				internalType: "uint256",
				name: "daoId",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "projectName",
				type: "string",
			},
			{
				internalType: "string",
				name: "projectDesc",
				type: "string",
			},
			{
				internalType: "string[]",
				name: "optionsList",
				type: "string[]",
			},
		],
		name: "addProject",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
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
		outputs: [],
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
				name: "id",
				type: "string",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "daoId",
				type: "uint256",
			},
		],
		name: "daoCreated",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "daoId",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "id",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "equityPercent",
				type: "uint256",
			},
		],
		name: "inviteParticipant",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "daoId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "id",
				type: "string",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "equityPercent",
				type: "uint256",
			},
		],
		name: "participantAdded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "daoId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "projectName",
				type: "string",
			},
			{
				indexed: false,
				internalType: "string",
				name: "projectDesc",
				type: "string",
			},
			{
				indexed: false,
				internalType: "string[]",
				name: "options",
				type: "string[]",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "projectId",
				type: "uint256",
			},
		],
		name: "projectAdded",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "daoId",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "projectId",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "option",
				type: "string",
			},
			{
				internalType: "string",
				name: "id",
				type: "string",
			},
		],
		name: "vote",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "daoId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "projectId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "string",
				name: "option",
				type: "string",
			},
			{
				indexed: false,
				internalType: "string",
				name: "id",
				type: "string",
			},
		],
		name: "voted",
		type: "event",
	},
];

export default new web3.eth.Contract(abi, address);
