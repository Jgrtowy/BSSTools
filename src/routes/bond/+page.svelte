<script lang="ts">
	import type checkLevels from '$lib/types/checkLevels';
	import type requiredItems from '$lib/types/requiredItems';
	import validateInput from '$lib/validateInput';
	import axios from 'axios';

	let currentLvl: HTMLSelectElement;
	let targetLvl: HTMLSelectElement;
	let currentBond: HTMLInputElement;
	let calculated: number = 0;

	let required = { bond: 0, treats: 0, honey: 0 } satisfies requiredItems;
	let abbreviated = { bond: '0', treats: '0', honey: '0' } satisfies requiredItems;
	const calculate = async () => {
		await axios
			.post('/api/checklevels', {
				currentval: currentLvl.value,
				targetval: targetLvl.value,
				bond: currentBond.value || '0'
			} satisfies checkLevels)
			.then((res) => {
				if (res.status === 302) {
					calculated = -1;
				} else {
					calculated = 0;
				}
			})
			.catch(() => {
				calculated = -1;
			});
		if (calculated === -1) return;

		const bond: number = parseInt(currentBond.value) || 0;
		const current: number = parseInt(currentLvl.value);
		const target: number = parseInt(targetLvl.value);

		await axios
			.post('/api/calculatebond', {
				bond: bond,
				current: current,
				target: target
			})
			.then((res) => {
				required = res.data satisfies requiredItems;
			})
			.catch(() => {
				calculated = -1;
			});
		await axios
			.post('/api/abbreviate', {
				bond: required.bond,
				treats: required.treats,
				honey: required.honey
			})
			.then((res) => {
				abbreviated = res.data satisfies requiredItems;
			})
			.catch(() => {
				calculated = -1;
			});
		if (calculated !== -1) {
			calculated = 1;
		}
	};
</script>

<title>Bond Calculator</title>
<div class="flex gap-5 items-center justify-start w-screen mt-5 flex-col">
	<div class="flex items-start md:w-max md:gap-16 justify-around md:flex-row flex-col gap-5">
		<div
			class="flex flex-col items-center justify-center h-full border-2 border-white rounded-xl p-5 gap-2 md:w-64 w-96"
		>
			<h1 class="text-5xl mb-4">Current</h1>
			<h2>Level</h2>
			<select
				class="rounded-lg pl-3 border-2 border-white bg-transparent w-24 text-center hover:bg-gray-800 transition-colors duration-300"
				bind:this={currentLvl}
			>
				{#each { length: 25 } as _, i}
					<option class="dark:text-black" value={i + 1}>{i + 1}</option>
				{/each}
			</select>
			<h2>Bond</h2>
			<input
				type="number"
				min="0"
				class="rounded-lg border-2 border-white bg-transparent w-52 hover:bg-gray-800 transition-colors duration-300"
				placeholder="0"
				on:input={validateInput}
				bind:this={currentBond}
			/>
		</div>
		<div
			class="flex flex-col items-center justify-start border-2 border-white h-full rounded-xl p-5 gap-2 md:w-64 w-96"
		>
			<h1 class="text-5xl mb-4">Target</h1>
			<h2>Level</h2>
			<select
				class="rounded-lg pl-3 border-2 border-white bg-transparent w-24 text-center hover:bg-gray-800 transition-colors duration-300"
				bind:this={targetLvl}
			>
				{#each { length: 24 } as _, i}
					<option class="dark:text-black" value={i + 2}>{i + 2}</option>
				{/each}
			</select>
		</div>
	</div>
	<button
		class="rounded-lg border-2 border-white px-12 text-2xl py-1 hover:bg-gray-600"
		on:click={calculate}>Calculate</button
	>
	{#if calculated === -1}
		<h1 class="text-5xl mt-5">Wrong information</h1>
	{:else if calculated === 1}
		<div
			class="text-2xl flex flex-col p-5 border-2 border-white rounded-lg gap-3 md:max-w-max w-96"
		>
			<h1 class="text-5xl">You need:</h1>
			<div class="text-lg flex items-center gap-2">
				<h1 class="block w-8 text-2xl">💖</h1>
				<span>
					{abbreviated.bond}
					&lbbrk;{required.bond}&rbbrk;<span />
				</span>
			</div>
			<div class="text-lg flex items-center gap-2">
				<img src="/treat.webp" class="block w-8" alt="Treats" />
				<span>
					{abbreviated.treats}
					&lbbrk;{required.treats}&rbbrk;<span />
				</span>
			</div>
			<div class="text-lg flex items-center gap-2">
				<img src="/honey.webp" class="block w-8" alt="Honey" />
				<span>
					{abbreviated.honey}
					&lbbrk;{required.honey}&rbbrk;<span />
				</span>
			</div>
		</div>
	{/if}
</div>

<style scoped lang="scss">
	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
		text-align: center;
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
