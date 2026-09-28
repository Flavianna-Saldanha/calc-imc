export type Level = {
	title: string;
	color: string;
	icon: 'down' | 'up';
	imc: number[];
	yourImc?: number;
}

export const levels: Level[] = [
	{
		title: 'Magreza',
		color: '#96A3AB',
		icon: 'down',
		imc: [0, 18.5]
	},
	{
		title: 'Normal',
		color: '#0EAD69',
		icon: 'up',
		imc: [18.5, 25]
	},
	{
		title: 'Sobrepeso',
		color: '#E2B039',
		icon: 'down',
		imc: [25, 30]
	},
	{
		title: 'Obesidade',
		color: '#C3423F',
		icon: 'down',
		imc: [30, 99]
	}
];


export const calculateImc = (height: number, weight: number) => {
	const imc = weight / (height * height);

	for (const level of levels) {
		if (imc >= level.imc[0] && imc < level.imc[1]) {
			return {
				...level,
				yourImc: parseFloat(imc.toFixed(2))
			};
		}
	}

	return null;
};