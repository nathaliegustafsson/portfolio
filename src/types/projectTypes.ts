export interface Collaborators {
	name: string;
	githubUrl: string;
}

export interface Project {
	id: string;
	title: string;
	description: string;
	image1: string;
	image2: string;
	url: string;
	technologies: string;
	collaborators?: Collaborators[];
}
