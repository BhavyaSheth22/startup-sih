import axios from "./axios.js";

const PostsApi = {
	getAllPosts: () => {
		return axios.get(`/posts`);
	},
	createPost : (title,text,image,userId)=>{
		console.log(title);
		return axios.post(`/posts`, title)
	},
	addComment : (text,userId,postId)=>{
		return axios.post(`/comments`,{
			text,
			user: userId,
			post: postId	
		})
	}
};

export default PostsApi;
