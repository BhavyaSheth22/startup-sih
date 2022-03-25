import axios from "./axios.js";

const AuthApi = {
	signIn: ({ email, password, userType }) => {
		return axios.post(`/login`, { email, password,userType });
	},
	incubatorSignUp: ({ email, password, name, description}) => {
		return axios.post(`/incubator/register`, {
			email,
			password,
			name,
			description,
		});
	},
	companySignUp: ({ email, password, name, description }) => {
		return axios.post(`/company/register`, {
			email,
			password,
			name,
			description,
		});
	},
	userSignUp: ({ email, password, name, description,role }) => {
		return axios.post(`/user/register`, {
			email,
			password,
			name,
			description,
			role
		});
	},
};

export default AuthApi;
