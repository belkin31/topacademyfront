import {defineComponent, ref} from "vue";

export default defineComponent({
	components: {},
	props: {
		placeholderAttr: {
			type: String,
			default: ''
		},
		typeAttr: {
			type: String,
			default: ''
		}
	},
	emits: ['onInput'],
	setup(props, {emit}) {
		const inputValue = ref('');
		const onInputChange = (event) => {
			emit('onInput', event.target.value);
			inputValue.value = event.target.value;
		}

		return {onInputChange, inputValue}
	},
})