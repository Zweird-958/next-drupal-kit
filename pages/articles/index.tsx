import { ArticleGrid } from '@/components/grid';
import Layout from '@/components/layout';
import Title from '@/components/ui/Title';
import { isMultiLanguage } from '@/lib/isMultiLanguage';
import { getCurrentLocaleStore, globalDrupalStateStores } from '@/lib/stores';
import { Article } from '@/types/Article';
import getObject from '@/utils/api/getObject';
import { GetServerSidePropsContext } from 'next';
import React from 'react';

export const getServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	const origin = process.env.NEXT_PUBLIC_FRONTEND_URL;
	const { locales, locale, res } = context;
	// if there is more than one language in context.locales,
	// assume multilanguage is enabled.
	const multiLanguage = isMultiLanguage(locales);
	const hrefLang = locales?.map((locale) => {
		return {
			hrefLang: locale,
			href: origin + '/' + locale,
		};
	});

	try {
		const store = getCurrentLocaleStore(locale ?? '', globalDrupalStateStores);
		const articles = await getObject<Article>('article');

		if (!articles) {
			throw new Error(
				'No articles returned. Make sure the objectName and params are valid!',
			);
		}

		const footerMenu = await store.getObject({
			objectName: 'menu_items--main',
			refresh: true,
			res,
			anon: true,
		});

		return {
			props: { articles, hrefLang, multiLanguage, footerMenu },
		};
	} catch (error) {
		console.error('Unable to fetch data for articles page: ', error);
		return {
			notFound: true,
		};
	}
};

type FooterMenuItem = {
	title: string;
	url: string;
	href: string;
	parent?: string | null;
};

type PageProps = {
	articles: Article[];
	hrefLang: { hrefLang: string; href: string }[];
	multiLanguage: boolean;
	footerMenu: FooterMenuItem[];
};

const Page = ({ articles, hrefLang, multiLanguage, footerMenu }: PageProps) => (
	<Layout>
		<Title className="mt-6">Articles</Title>
		<ArticleGrid data={articles} multiLanguage={multiLanguage} />
	</Layout>
);

export default Page;
