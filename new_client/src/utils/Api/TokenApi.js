import axios from "./axios.js";

const TokenApi = {
	getTokens: () => {
		return axios.get(`/getAllTokens`);
	},
	getToken: (tokenID) => {
		return axios.get(`/getTokenDetails/${tokenID}`);
	},
	getTokenRequests: () => {
		return axios.get(`/getTokenRequests`);
	},
	getApprovedTokens: () => {
		return axios.get(`/getApprovedTokens`);
	},
	approveToken: (tokenID) => {
		return axios.post(`/approveToken/${tokenID}`);
	},
};

export default TokenApi;
