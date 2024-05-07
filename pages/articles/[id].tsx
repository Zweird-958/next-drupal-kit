import { Article } from '@/types/Article';
import getSingleObject from '@/utils/api/getSingleObject';
import { GetServerSidePropsContext } from 'next';

type Props = {
	article: Article;
};

const Page = ({ article }: Props) => {
	return <div>{JSON.stringify(article)}</div>;
};

export const getServerSideProps = async (
	context: GetServerSidePropsContext,
) => {
	const id = context?.params?.id;

	if (!id || Array.isArray(id)) {
		return {
			notFound: true,
		};
	}

	try {
		const article = await getSingleObject('article', id);

		if (!article) {
			throw new Error(
				'No article returned. Make sure the objectName and params are valid!',
			);
		}

		return {
			props: { article },
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default Page;
