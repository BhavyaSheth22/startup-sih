import axios from "./axios.js";

const CrowdfundingApi = {
	create: ({ orgId, title, description, totalAmount }) => {
		return axios.post(`/crowdfunding/create`, {
			orgId,
			title,
			description,
			totalAmount,
		});
	},
	getAllPosts: () => {
		return axios.get(`/crowdfunding/getAllPosts`);
	},
	getParticular: ({ orgId }) => {
		return axios.get(`/org/crowdfunding` + `${orgId}`);
	},
	makeTransaction: ({ amount, postId, orgId, userId, paymentId }) => {
		console.log("API called");
		return axios.post(`/user/donate`, {
			amount,
			postId,
			orgId,
			userId,
			paymentId,
		});
	},
	transactions: ({ orgId }) => {
		return axios.get(`/transactions/${orgId}`);
	},
	
};

export default CrowdfundingApi;
