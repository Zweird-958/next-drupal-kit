export type Article = {
	id: string;
	title: string;
	body:{
		value: string;
		format: string;
		processed: string;
		summary: string;
	},
	image: {
		data?: null;
		image?: {
			uri: {
				url: '/sites/default/files/pizza.jpg';
			};
			meta: {
				width: number;
				height: number;
				alt?: string;
			}
		};
	};
	path: {
		alias: string;
		pid: number;
		langcode: string;
	};
};
