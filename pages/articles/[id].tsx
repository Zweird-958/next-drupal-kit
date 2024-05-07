import Layout from '@/components/layout';
import Title from '@/components/ui/Title';
import { Article } from '@/types/Article';
import getSingleObject from '@/utils/api/getSingleObject';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';

type Props = {
	article: Article;
};

const Page = ({ article }: Props) => {
	return (
		<Layout>
			<div className="mx-12 flex flex-col gap-8 mt-8">
				<Title>{article.title}</Title>
				<div className="flex justify-center my-5">
					<Image
						className="rounded-lg shadow-xl shadow-slate-500 "
						src={article.image.image?.uri.url ?? ''}
						alt={article.title}
						width={article.image.image?.meta.width}
						height={article.image.image?.meta.height}
					/>
				</div>
				{article.body.value}
			</div>
		</Layout>
	);
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
