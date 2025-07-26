import {
	Banner,
	CourseDetails,
	Faqs,
	FeatureExplanations,
	Features,
	Instructors,
	Pointers,
	StickyChecklist,
} from '@/components';
import api from '@/lib/api';
import { LanParamsProps } from '@/types/language';
import { ProductData, Section, SectionTypeMap } from '@/types/product';
import { Metadata } from 'next';

export default async function Page({ params }: LanParamsProps) {
	// fetch data
	const { lang } = await params;
	const res = await api.get(`/products/ielts-course?lang=${lang}`);
	const data: ProductData = res?.data?.data;

	// filter sections
	const sections = (data.sections || []).filter(isKnownSectionType);

	return (
		<>
			<Banner data={data} />
			<div className="container max-w-7xl mx-auto my-10">
				<div className="grid lg:grid-cols-12 gap-12">
					<div className="col-span-8 space-y-10">
						{sections.map((section, index) => {
							const Component = sectionComponents[
								section.type as keyof SectionTypeMap
							] as React.FC<{ data: typeof section }>;
							return <Component key={index} data={section} />;
						})}
					</div>
					<div className="col-span-4">
						<StickyChecklist data={data} lang={lang} />
					</div>
				</div>
			</div>
		</>
	);
}

// map section type to component
const sectionComponents: {
	[K in keyof SectionTypeMap]: React.FC<{ data: SectionTypeMap[K] }>;
} = {
	instructors: Instructors,
	features: Features,
	pointers: Pointers,
	feature_explanations: FeatureExplanations,
	about: CourseDetails,
	faq: Faqs,
};

// check if section type is known
function isKnownSectionType(
	section: Section
): section is SectionTypeMap[keyof SectionTypeMap] {
	return section.type in sectionComponents;
}

// generate metadata
export async function generateMetadata({
	params,
}: LanParamsProps): Promise<Metadata> {
	const { lang } = await params;
	const res = await api.get(`/products/ielts-course?lang=${lang}`);
	const data: ProductData = res.data?.data;

	return {
		title: data.seo?.title,
		description: data.seo?.description,
		openGraph: {
			images: [data.seo?.image],
		},
	};
}
