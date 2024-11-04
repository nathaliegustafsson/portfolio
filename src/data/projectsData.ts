import { Project } from '../types/projectTypes';

export const projects: Project[] = [
	{
		id: 'bumpymonster',
		number: '01',
		title: 'Bumpy Monster',
		description:
			'This is one of my favorite projects. Together with four other students from my class, we created a game called “Bumpy Monster.” It is a platform game where the goal is to reach as high up as possible. Along the way, Bumpy encounters enemies and can collect power-ups.',
		image1: './assets/projectImages/bumpy1.png',
		image2: './assets/projectImages/bumpy2.png',
		url: 'testitest',
		technologies:
			'TypeScript, Object-Oriented Programming (OOP) principles and P5.js.',
		collaborators: [
			{ name: 'Lisa Marie Andersson', githubUrl: 'länk' },
			{ name: 'Moa Hedendahl', githubUrl: 'länk' },
			{ name: 'Sebastian Johansson', githubUrl: 'länk' },
			{ name: 'Emil Helgesson', githubUrl: 'länk' },
			{ name: 'Gabriel Lugo Mendez', githubUrl: 'länk' },
		],
	},
	{
		id: 'plateup',
		number: '02',
		title: 'Plate Up',
		description: 'Kommer senare',
		image1: './assets/bumpy1.png',
		image2: './assets/bumpy2.png',
		url: 'kommer senare',
		technologies: 'Kommer senasre',
	},
	{
		id: 'ourfurnishedhome',
		number: '03',
		title: 'Our Furnished Home',
		description: 'Kommer senare',
		image1: './assets/bumpy1.png',
		image2: './assets/bumpy2.png',
		url: 'kommer senare',
		technologies: 'Kommer senasre',
	},
	{
		id: 'wickandwillow',
		number: '04',
		title: 'Wick & Willow',
		description: 'Kommer senare',
		image1: './assets/bumpy1.png',
		image2: './assets/bumpy2.png',
		url: 'kommer senare',
		technologies: 'Kommer senasre',
	},
];
