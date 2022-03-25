import axios from "./axios.js";

const AuthApi = {
	signIn: ({ email, password, userType }) => {
		return axios.post(`/${userType}/login`, { email, password });
	},
	signUp: ({ email, password, name, description,userType }) => {
		return axios.post(`/${userType}/register`, {
			email,
			password,
			name,
			description,
		});
	},
};

export default AuthApi;
