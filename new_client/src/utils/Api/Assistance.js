import axios from "./axios.js";

const AssistanceApi = {
  createAssistanceRequest: ({ latitude, longitude }) => {
    return axios.post(`/user/assistance`, {
      userlocation: {
        type: "Point",
        coordinates: [latitude, longitude]
      }
    });
  },
  getAssistanceRequest: () => {
    return axios.get(`/user/assistance`);
  },
  acceptAssistanceRequest: ({ latitude, longitude }) => {
    return axios.post(`/user/assistance/accept`, {
      latitude,
      longitude
    });
  },
  completeAssistanceRequest: () => {
    return axios.post(`/user/assistance/complete`);
  },
  updateLocation: ({ latitude, longitude }) => {
    return axios.post(`/user/assistance/update`, {
      latitude,
      longitude
    });
  }
};

export default AssistanceApi;
