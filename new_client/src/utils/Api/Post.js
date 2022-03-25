import axios from "./axios.js";

const PostsApi = {
	getAllPosts: () => {
		return axios.get(`/posts`);
	},
	createPost : (title,text,image,userId)=>{
		return axios.post(`/posts`,{
			title,
			text,
			image,
			userId
		})
	},
	addComment : (text,userId,postId)=>{
		return axios.post(`/comments`,{
			text,userId,postId	
		})
	}
};

export default PostsApi;
