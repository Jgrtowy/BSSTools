export default interface Recipe {
	ingredients: { item: string; amount: number }[];
	craftedItem: string;
}
