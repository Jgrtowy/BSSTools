export default function validateInput(e: Event) {
	if (e.target instanceof HTMLInputElement) {
		const value = e.target.value;
		if (value.length < 0 || value === '') {
			e.target.value = value.slice(0, 1);
		}
	}
}
