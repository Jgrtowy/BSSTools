import type Recipe from './types/recipe';

// export const blenderItems: string[] = [
// 	'red_extract',
// 	'blue_extract',
// 	'enzymes',
// 	'oil',
// 	'glue',
// 	'tropical_drink',
// 	'gumdrop',
// 	'moon_charm',
// 	'glitter',
// 	'star_jelly',
// 	'purple_potion',
// 	'soft_wax',
// 	'hard_wax',
// 	'swirled_wax',
// 	'caustic_wax',
// 	'field_dice',
// 	'smooth_dice',
// 	'loaded_dice',
// 	'super_smoothie',
// 	'turpentine'
// ];

const blenderRecipes: Recipe[] = [
	{
		ingredients: [
			{ item: 'Royal Jelly', amount: 10 },
			{ item: 'Strawberry', amount: 50 }
		],
		craftedItem: 'Red Extract'
	},
	{
		ingredients: [
			{ item: 'Royal Jelly', amount: 10 },
			{ item: 'Blueberry', amount: 50 }
		],
		craftedItem: 'Blue Extract'
	},
	{
		ingredients: [
			{ item: 'Royal Jelly', amount: 10 },
			{ item: 'Pineapple', amount: 50 }
		],
		craftedItem: 'Enzymes'
	},
	{
		ingredients: [
			{ item: 'Royal Jelly', amount: 10 },
			{ item: 'Sunflower Seed', amount: 50 }
		],
		craftedItem: 'Oil'
	},
	{
		ingredients: [
			{ item: 'Royal Jelly', amount: 10 },
			{ item: 'Gumdrops', amount: 50 }
		],
		craftedItem: 'Glue'
	},
	{
		ingredients: [
			{ item: 'Coconut', amount: 10 },
			{ item: 'Enzymes', amount: 2 },
			{ item: 'Oil', amount: 2 }
		],
		craftedItem: 'Tropical Drink'
	},
	{
		ingredients: [
			{ item: 'Pineapple', amount: 3 },
			{ item: 'Strawberry', amount: 3 },
			{ item: 'Blueberry', amount: 3 }
		],
		craftedItem: 'Gumdrop'
	},
	{
		ingredients: [
			{ item: 'Royal Jelly', amount: 1 },
			{ item: 'Pineapples', amount: 5 },
			{ item: 'Gumdrops', amount: 5 }
		],
		craftedItem: 'Moon Charm'
	},
	{
		ingredients: [
			{ item: 'Moon Charm', amount: 25 },
			{ item: 'Magic Bean', amount: 1 }
		],
		craftedItem: 'Glitter'
	},
	{
		ingredients: [
			{ item: 'Royal Jelly', amount: 100 },
			{ item: 'Glitter', amount: 3 }
		],
		craftedItem: 'Star Jelly'
	},
	{
		ingredients: [
			{ item: 'Neonberries', amount: 3 },
			{ item: 'Red Extract', amount: 3 },
			{ item: 'Blue Extract', amount: 3 },
			{ item: 'Glue', amount: 3 }
		],
		craftedItem: 'Purple Potion'
	},
	{
		ingredients: [
			{ item: 'Honeysuckle', amount: 5 },
			{ item: 'Oil', amount: 1 },
			{ item: 'Enzymes', amount: 1 },
			{ item: 'Royal Jelly', amount: 10 }
		],
		craftedItem: 'Soft Wax'
	},
	{
		ingredients: [
			{ item: 'Soft Wax', amount: 3 },
			{ item: 'Enzymes', amount: 3 },
			{ item: 'Bitterberry', amount: 33 },
			{ item: 'Royal Jelly', amount: 33 }
		],
		craftedItem: 'Hard Wax'
	},
	{
		ingredients: [
			{ item: 'Hard Wax', amount: 3 },
			{ item: 'Soft Wax', amount: 9 },
			{ item: 'Purple Potion', amount: 6 },
			{ item: 'Royal Jelly', amount: 3333 }
		],
		craftedItem: 'Swirled Wax'
	},
	{
		ingredients: [
			{ item: 'Hard Wax', amount: 5 },
			{ item: 'Enzymes', amount: 5 },
			{ item: 'Neonberry', amount: 25 },
			{ item: 'Royal Jelly', amount: 5252 }
		],
		craftedItem: 'Caustic Wax'
	},
	{
		ingredients: [
			{ item: 'Soft Wax', amount: 1 },
			{ item: 'Whirligig', amount: 1 },
			{ item: 'Red Extract', amount: 1 },
			{ item: 'Blue Extract', amount: 1 }
		],
		craftedItem: 'Field Dice'
	},
	{
		ingredients: [
			{ item: 'Field Dice', amount: 3 },
			{ item: 'Soft Wax', amount: 3 },
			{ item: 'Whirligig', amount: 3 },
			{ item: 'Oil', amount: 3 }
		],
		craftedItem: 'Smooth Dice'
	},
	{
		ingredients: [
			{ item: 'Smooth Dice', amount: 3 },
			{ item: 'Hard Wax', amount: 3 },
			{ item: 'Oil', amount: 3 },
			{ item: 'Glue', amount: 1 }
		],
		craftedItem: 'Loaded Dice'
	},
	{
		ingredients: [
			{ item: 'Neonberry', amount: 3 },
			{ item: 'Star Jelly', amount: 3 },
			{ item: 'Purple Potion', amount: 3 },
			{ item: 'Tropical Drink', amount: 6 }
		],
		craftedItem: 'Super Smoothie'
	},
	{
		ingredients: [
			{ item: 'Super Smoothie', amount: 10 },
			{ item: 'Caustic Wax', amount: 10 },
			{ item: 'Star Jelly', amount: 100 },
			{ item: 'Honeysuckle', amount: 1000 }
		],
		craftedItem: 'Turpentine'
	}
];

export const getBlenderRecipe = (index: number): Recipe => blenderRecipes[index];

export const blenderLinks: string[] = [
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/b/b9/Red_Extract.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/d/df/Blue_Extract.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/6/62/Enzymes.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/0/06/Oil.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/d/d4/Glue.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/c/c2/TropicalDrinkInventory.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/c/c8/Gumdrops_icon.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/4/47/Moon.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/6/63/Glitter.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/6/6d/StarJelly.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/b/ba/Purplepotion.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/7/77/Soft_Wax.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/b/ba/Hardwax.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/9/91/Swirled_Wax.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/d/de/Causticwax.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/d/d7/Fdice.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/c/c6/Smooth_Dice.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/0/0d/Loaded_Dice.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/5/5f/Super_Smoothie.png',
	'https://static.wikia.nocookie.net/bee-swarm-simulator/images/e/e1/Turpentine.png'
];
