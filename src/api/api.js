import * as axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "9d885aec-0e55-4d92-a640-1f14725751f5",
	},
});

export const requestsAPI = {
	getUsers(currentPage = 1, pageSize = 5) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
	},

	unfollow(id) {
		return instance.delete(`follow/${id}`).then(response => response.data);
	},

	follow(id) {
		return instance.post(`follow/${id}`, {}).then(response => response.data);
	},

	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	},

	getAuth() {
		return instance.get(`auth/me`).then(response => response.data);
	},
};