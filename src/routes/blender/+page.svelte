<script lang="ts">
	import type Recipe from '$lib/types/recipe';
	import validateInput from '$lib/validateInput';
	import axios from 'axios';

	let index: number = 0;
	let currentItemLink: string =
		'https://static.wikia.nocookie.net/bee-swarm-simulator/images/b/b9/Red_Extract.png';
	let quantityElement: HTMLInputElement;
	let currentItemRecipe: Recipe = {
		ingredients: [
			{ item: 'Royal Jelly', amount: 10 },
			{ item: 'Strawberry', amount: 50 }
		],
		craftedItem: 'Red Extract'
	};
	let quantity: number = 1;

	let currentItem: string = 'Red Extract';
	const colors: string[] = [
		'border-sky-300',
		'border-violet-400',
		'border-amber-400',
		'border-emerald-300'
	];
	const changeItem = async (direction: number) => {
		if (direction === 0) {
			index--;
			if (index < 0) index = 19;
		} else {
			index++;
			if (index > 19) index = 0;
		}
		await update();
	};
	const inputHandler = (e: Event) => {
		validateInput(e);
		quantity = parseInt(quantityElement.value) || 1;
	};

	const update = async () => {
		await axios.post('/api/blenderitem', { index: index }).then((res) => {
			currentItem = res.data.recipe.craftedItem;
			currentItemLink = res.data.link;
			currentItemRecipe = res.data.recipe;
		});
	};
</script>

<title>Blender Calculator</title>
<div class="flex justify-center items-center flex-col w-screen text-2xl mt-5">
	<div class="flex flex-col w-screen items-center gap-6">
		<div class="flex flex-col gap-6 border-2 border-white rounded-lg p-5">
			<div class="flex w-56 justify-center">
				<button on:click={() => changeItem(0)}>&larr;</button>
				<img
					src={currentItemLink}
					alt={currentItem}
					srcset=""
					class="max-w-24 w-24 min-w-24 aspect-square m-2"
				/>
				<button on:click={() => changeItem(1)}>&rarr;</button>
			</div>

			<div class="flex w-56 justify-center">
				<h1>{currentItem}</h1>
			</div>
		</div>
		<div class="flex gap-4">
			<input
				type="number"
				class="text-white rounded-lg border-2 border-white bg-transparent w-24 h-12 hover:bg-gray-800 transition-colors duration-300"
				on:input={inputHandler}
				bind:this={quantityElement}
				value="1"
				placeholder="1"
			/>
		</div>
		<div class="grid grid-cols-2 gap-2 text-xl border-2 border-white rounded-lg p-5">
			<div class="font-bold pb-2 text-3xl text-center">Item</div>
			<div class="font-bold pb-2 text-3xl text-center">Amount</div>
			{#each currentItemRecipe.ingredients as ingredient, i}
				<div class="w-48 py-1 text-center border-2 rounded-lg {colors[i]}">
					{ingredient.item}
				</div>
				<div class="w-48 py-1 text-center border-2 rounded-lg {colors[i]}">
					{ingredient.amount * quantity}
				</div>
			{/each}
		</div>
	</div>
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
</style>
