import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useClientsStore = defineStore('clients', () => {
	const state = ref({
		clientsList: '',
	})

	const setClients = (list) => {
		state.value.clientsList = list
	}

	const getClients = () => {
		return state.value.clientsList
	}

	return {
		state,
		setClients,
		getClients
	}
})