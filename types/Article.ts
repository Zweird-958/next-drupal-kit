export type Article = {
	id: string;
	title: string;
	image: {
		data?: null;
		image?: {
			uri: {
				url: '/sites/default/files/pizza.jpg';
			};
		};
	};
	path: {
		alias: string;
		pid: number;
		langcode: string;
	};
};
