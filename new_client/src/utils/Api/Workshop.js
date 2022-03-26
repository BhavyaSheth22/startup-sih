import axios from "./axios.js";

const WorkshopApi = {
	createWorkshop: ({
		title,
		organizer,
		description,
		theme,
		contact,
		date,
		imgpath,
	}) => {
		return axios.post(`/workshops`, {
			title,
			organizer,
			description,
			theme,
			contact,
			date,
			imgpath,
		});
	},
	getAllWorkshops: () => {
		return axios.get(`/workshops`);
	},
	// getWorkshopById: ({ workshopId }) => {
	// 	return axios.get(`/workshop/${workshopId}`);
	// },
};

export default WorkshopApi;
