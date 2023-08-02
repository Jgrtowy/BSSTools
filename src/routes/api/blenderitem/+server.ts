import { blenderLinks, getBlenderRecipe } from '$lib/blenderItems';
import { json } from '@sveltejs/kit';

export const POST = async ({ request }) => {
	try {
		const { index } = await request.json();
		const link = blenderLinks[index];
		const recipe = getBlenderRecipe(index);
		return json({ link, recipe }, { status: 201 });
	} catch (err) {
		return new Response(JSON.stringify({ message: 'err' }), { status: 500 });
	}
};
