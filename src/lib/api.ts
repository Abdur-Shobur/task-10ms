// lib/api.ts
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.10minuteschool.com/discovery-service/api/v1',
	headers: {
		'X-TENMS-SOURCE-PLATFORM': 'web',
		accept: 'application/json',
	},
});

export default api;
