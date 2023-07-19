<script lang="ts">
	const validateInput = (e: Event) => {
		const val = (e.target as HTMLInputElement).value;
		if (e.target instanceof HTMLInputElement) {
			const value = e.target.value;
			if (value.length < 0 || value === '') {
				e.target.value = value.slice(0, 1);
			}
		}
	};
</script>

<title>Bond Calculator</title>
<div class="flex gap-5 h-screen items-start justify-center w-screen mt-5">
	<div class="flex gap-16 items-start">
		<div
			class="flex flex-col items-center justify-center h-full border-2 border-white rounded-xl p-5 gap-2"
		>
			<h1 class="text-5xl mb-4">Current</h1>
			<h2>Level</h2>
			<select class="rounded-lg pl-3 border-2 border-white bg-transparent w-24 text-center">
				{#each { length: 25 } as _, i}
					<option class="dark:text-black">{i + 1}</option>
				{/each}
			</select>
			<h2>Bond</h2>
			<input
				type="number"
				min="0"
				class="rounded-lg pl-3 border-2 border-white bg-transparent w-52"
				on:input={validateInput}
			/>
		</div>
		<div
			class="flex flex-col items-center justify-start border-2 border-white h-full rounded-xl p-5 gap-2"
		>
			<h1 class="text-5xl mb-4">Target</h1>
			<h2>Level</h2>
			<select class="rounded-lg pl-3 border-2 border-white bg-transparent w-24 text-center">
				{#each { length: 25 } as _, i}
					<option class="dark:text-black">{i + 1}</option>
				{/each}
			</select>
		</div>
	</div>
</div>

<style scoped lang="scss">
	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	div {
		h2 {
			font-size: 1.5rem;
		}
	}
</style>
