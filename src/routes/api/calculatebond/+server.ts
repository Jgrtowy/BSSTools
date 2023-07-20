import total from '$lib/totals';
import type requiredItems from '$lib/types/requiredItems';

export const POST = async ({ request }) => {
	try {
		const { bond, current, target } = await request.json();

		const currentBondTotal = total[current - 1] + bond;
		const targetBondTotal = total[target - 1];
		const targetBond = targetBondTotal - currentBondTotal;

		return new Response(
			JSON.stringify({
				bond: targetBond.toString(),
				treats: Math.ceil(targetBond / 10).toString(),
				honey: ((targetBond / 10) * 10000).toString()
			} satisfies requiredItems),
			{ status: 201 }
		);
	} catch (err) {
		return new Response(JSON.stringify({ message: 'err' }), { status: 500 });
	}
};
