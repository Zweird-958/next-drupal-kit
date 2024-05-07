import { Article } from '@/types/Article';
import styles from './grid.module.css';
import ImageText from './ui/ImageText';

export const GradientPlaceholder = () => (
	<div className={styles.gradientPlaceholder} />
);

type Props = {
	content: Article;
	multiLanguage: boolean;
	locale: string;
};

// For use with withGrid
export const ArticleGridItem = ({
	content: article,
	multiLanguage,
	locale,
}: Props) => {
	const imgSrc = article?.image?.image?.uri?.url;

	return (
		<ImageText
			image={imgSrc}
			title={article.title}
			alt="test"
			href={`${multiLanguage ? `/${article.path.langcode || locale}` : ''}${article.path.alias}`}
		/>
	);
};

type ArticleGridProps = {
	data: Article[];
	multiLanguage: boolean;
};

export const ArticleGrid = ({ data, multiLanguage }: ArticleGridProps) => {
	return (
		<div className="flex flex-col">
			{data.map((article) => (
				<ArticleGridItem
					key={article.id}
					content={article}
					multiLanguage={multiLanguage}
					locale="en"
				/>
			))}
		</div>
	);
};
