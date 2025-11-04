import {defineComponent} from "vue";

export default defineComponent({
    components: {},
    data() {
        return {
            test: 'test',
        }
    },
    props: {
		options: {
			type: Array,
			default: () => [],
		}
    },
    setup(props, {emit}) {
		const getColumns = () => {
			const {options} = props;
			if(!options) {
				return [];
			}
			return Object.keys(options[0])
		}

		return {getColumns};
    },
})