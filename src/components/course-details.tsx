import { AboutSection } from '@/types/product.type';
import parse from 'html-react-parser';
import { SectionTitle } from './section-title';

export function CourseDetails({ data }: { data?: AboutSection }) {
	return (
		<section>
			<SectionTitle title={data?.name} />

			<div className="grid grid-cols-1 gap-4 md:gap-8 border border-blue-100 p-4 rounded-2xl">
				{data?.values?.map((item, i) => (
					<div key={i} className="space-y-2 lg:space-y-4 xl:text-lg">
						{typeof item?.title === 'string' ? parse(item.title) : null}
						{typeof item?.description === 'string'
							? parse(item.description)
							: null}
					</div>
				))}
			</div>
		</section>
	);
}
