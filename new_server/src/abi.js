require("dotenv").config();
const Web3 = require("web3");
const contractAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "daoId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "projectName",
        type: "string"
      },
      {
        internalType: "string",
        name: "projectDesc",
        type: "string"
      },
      {
        internalType: "string[]",
        name: "optionsList",
        type: "string[]"
      }
    ],
    name: "addProject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "daoName",
        type: "string"
      },
      {
        internalType: "string",
        name: "daoDesc",
        type: "string"
      },
      {
        internalType: "string",
        name: "id",
        type: "string"
      }
    ],
    name: "createDao",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "id",
        type: "string"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "daoId",
        type: "uint256"
      }
    ],
    name: "daoCreated",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "daoId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "id",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "equityPercent",
        type: "uint256"
      }
    ],
    name: "inviteParticipant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "daoId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "id",
        type: "string"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "equityPercent",
        type: "uint256"
      }
    ],
    name: "participantAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "daoId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "projectName",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "projectDesc",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "options",
        type: "string[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "projectId",
        type: "uint256"
      }
    ],
    name: "projectAdded",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "daoId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "option",
        type: "string"
      },
      {
        internalType: "string",
        name: "id",
        type: "string"
      }
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "daoId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "projectId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "string",
        name: "option",
        type: "string"
      },
      {
        indexed: false,
        internalType: "string",
        name: "id",
        type: "string"
      }
    ],
    name: "voted",
    type: "event"
  }
];

const web3 = new Web3();
web3.setProvider(new web3.providers.WebsocketProvider("ws://localhost:7545"));

const youthContract = new web3.eth.Contract(
  contractAbi,
  "0xe440C9B8F22F21e2ba85e095875714aFe5d4E8E3"
);

module.exports = { youthContract, web3 };
