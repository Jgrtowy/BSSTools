import type requiredItems from '$lib/types/requiredItems';

export const POST = async ({ request }) => {
	try {
		const { bond, treats, honey } = await request.json();
		return new Response(
			JSON.stringify({
				bond: abbreviate(bond),
				treats: abbreviate(treats),
				honey: abbreviate(honey)
			} satisfies requiredItems),
			{ status: 201 }
		);
	} catch (err) {
		return new Response(JSON.stringify({ message: 'err' }), { status: 500 });
	}
};

const abbreviate = (str: string) => {
	const num: number = parseFloat(str);
	const abbreviations: string[] = ['', 'k', 'm', 'b', 't', 'qa', 'qt', 'sx'];
	const tier = (Math.log10(Math.abs(num)) / 3) | 0;
	if (tier === 0) return num.toString();

	const suffix = abbreviations[tier];
	const scale = 10 ** (tier * 3);
	const scaledValue = num / scale;
	const formattedValue = scaledValue.toFixed(1).replace(/\.0$/, '');

	return `${formattedValue}${suffix}`;
};
