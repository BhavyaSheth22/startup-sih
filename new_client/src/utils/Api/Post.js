import axios from "./axios.js";

const PostsApi = {
	getAllPosts: () => {
		return axios.get(`/posts`);
	},
	// getParticular: ({ orgId }) => {
	// 	return axios.get(`/org/crowdfunding` + `${orgId}`);
	// },
	// makeTransaction: ({ amount, postId, orgId, userId, paymentId }) => {
	// 	console.log("API called");
	// 	return axios.post(`/user/donate`, {
	// 		amount,
	// 		postId,
	// 		orgId,
	// 		userId,
	// 		paymentId,
	// 	});
	// },
	// transactions: ({ orgId }) => {
	// 	return axios.get(`/transactions/${orgId}`);
	// },
	// getNFT: (nftId) => {
	// 	return axios.get(`/nft/${nftId}`);
	// },
};

export default PostsApi;
