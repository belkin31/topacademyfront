import axios from 'axios';

export const useClientsApi = () => {
	const apiGet = async (opt) => {
		const apiUrl = import.meta.env.VITE_API_URL
		const {endpoint, query, headers = {}} = opt;
		try {
			return await axios.get(`http://${apiUrl}${endpoint}`, {
				params: query,
				headers: {
					'Accept': 'application/json',
					...headers,
				},
			});
		} catch (error) {
			throw new Error(error)
		}
	}

	return {apiGet}
}