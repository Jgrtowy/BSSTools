import total from '$lib/totals';
import type checkLevels from '$lib/types/checkLevels.js';

export const POST = async ({ request }) => {
	const { currentval, targetval, bond }: checkLevels = await request.json();

	if (parseInt(currentval) >= parseInt(targetval)) {
		return new Response(JSON.stringify('Not acceptable'), { status: 406 });
	}
	if (total[parseInt(currentval)] - total[parseInt(currentval) - 1] < parseInt(bond)) {
		return new Response(JSON.stringify('Not acceptable'), { status: 406 });
	}
	return new Response(JSON.stringify('OK'), { status: 201 });
};
