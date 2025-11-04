import {defineComponent} from "vue";
import {useClientsStore} from "@/entities/clients/models/index.js";
import {useClientsApi} from "@/entities/clients/models/api.js";

export default defineComponent({
	components: {},
	data() {
		return {
		}
	},
	props: {},
	setup(props, {emit}) {
		const {setClients, state, getClients} = useClientsStore();
		const {apiGet} = useClientsApi();

		if(!getClients()?.length) {
			apiGet({endpoint: '/api/clients'}).then((response) => {
				const {data} = response;
				setClients(data);
			}).catch((e) => {
				throw new Error(e);
			});
		}

		return {getClients}

	},
})