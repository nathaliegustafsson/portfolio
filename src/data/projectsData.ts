import { Project } from '../types/projectTypes';

export const projects: Project[] = [
	{
		id: 'bumpymonster',
		number: '01',
		title: 'Bumpy Monster',
		description:
			'This is one of my favorite projects. Together with four other students from my class, we created a game called “Bumpy Monster.” It is a platform game where the goal is to reach as high up as possible. Along the way, Bumpy encounters enemies and can collect power-ups.',
		image1: '/projectImages/bumpy1.png',
		image2: '/projectImages/bumpy2.png',
		url: 'https://bumpythegame.netlify.app/',
		technologies:
			'TypeScript, Object-Oriented Programming (OOP) principles & P5.js.',
		collaborators: [
			{ name: 'Moa Hedendahl', githubUrl: 'https://github.com/moamoa07' },
			{
				name: 'Lisa Marie Andersson',
				githubUrl: 'https://github.com/lisamarieandersson',
			},
			{
				name: 'Sebastian Johansson',
				githubUrl: 'https://github.com/Sebastianjohansson123',
			},
			{ name: 'Emil Helgesson', githubUrl: 'https://github.com/Emil-Helge' },
			{
				name: 'Gabriel Lugo Méndez',
				githubUrl: 'https://github.com/gabriel-lugo',
			},
		],
	},
	{
		id: 'plateup',
		number: '02',
		title: 'Plate Up',
		description:
			'This project was developed as part of my final exam in collaboration with two fellow students. PlateUp is a mobile app where users can share and discover recipes. Users can contribute by uploading their own recipes, save and explore others creations, and search for specific meals or desserts. The goal of PlateUp is to create a product that aligns with our passion for food, enhances our development skills, and provides a unique culinary experience.',
		image1: '/projectImages/plateup-start.png',
		image2: '/projectImages/plateup-profile.png',
		url: 'https://github.com/nathaliegustafsson/PlateUp',
		technologies:
			'React-Native, TypeScript, React Native Paper, React Navigation, Firebase, Expo & Redux.',
		collaborators: [
			{ name: 'Moa Hedendahl', githubUrl: 'https://github.com/moamoa07' },
			{
				name: 'Lisa Marie Andersson',
				githubUrl: 'https://github.com/lisamarieandersson',
			},
		],
	},
	{
		id: 'ourfurnishedhome',
		number: '03',
		title: 'Our Furnished Home',
		description:
			'Our Furnished Home is a front-end webshop project focused on creating a straightforward, user-friendly platform for browsing and purchasing home decor and furnishing products. The application allows users to add items to a basket, fill out their details, and proceed to order. In addition, an admin interface was developed to handle product management, where admins can add, edit, or remove items as needed.',
		image1: '/projectImages/ofh-start-page.png',
		image2: '/projectImages/ofh-product-page.png',
		url: 'https://ourfurnishedhome.netlify.app/',
		technologies: 'React, TypeScript & MUI.',
		collaborators: [
			{ name: 'Moa Hedendahl', githubUrl: 'https://github.com/moamoa07' },
			{
				name: 'Lisa Marie Andersson',
				githubUrl: 'https://github.com/lisamarieandersson',
			},
		],
	},
	{
		id: 'wickandwillow',
		number: '04',
		title: 'Wick & Willow',
		description: 'Wick & Willow is a mockup webshop. The focus of this project was on the design, involving the creation of a graphic profile and logo using Illustrator, followed by the development of a wireframe and mockup of the web design using Photoshop. The website is non-interactive, serving as a visual representation from the mockup.',
		image1: '/projectImages/wick-and-willow-1.png',
		image2: '/projectImages/wick-and-willow-2.png',
		url: 'https://wickandwillow.netlify.app/',
		technologies: 'React, TypeScript, CSS, Illustrator & PhotoShop.',
	},
];
