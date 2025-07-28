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
import { getApiData } from '@/lib/api';
import { MotionShow } from '@/lib/motion';
import {
	ProductData,
	ProductDetailsResponse,
	Section,
	SectionTypeMap,
} from '@/types/product.type';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function Page({
	params,
}: {
	params: { lang: string; slug: string };
}) {
	// fetch data
	const { lang, slug } = await params;

	const res = await getApiData<ProductDetailsResponse<ProductData>>(
		`/products/${slug}?lang=${lang || 'en'}`
	);

	if (!res) {
		return notFound();
	}
	const data = res?.data;

	// filter sections
	const sections = (data.sections || []).filter(isKnownSectionType);

	return (
		<>
			<Banner data={data} />
			<div className="container max-w-7xl mx-auto my-10 px-4">
				<div className="grid grid-cols-12 gap-4 lg:gap-6 xl:gap-12">
					<div className="col-span-12 md:col-span-7 2xl:col-span-8 space-y-10 order-2 md:order-1">
						{sections.map((section, index) => {
							const Component = sectionComponents[
								section.type as keyof SectionTypeMap
							] as React.FC<{ data: typeof section }>;
							return (
								<MotionShow key={index} once>
									<Component data={section} />
								</MotionShow>
							);
						})}
					</div>
					<div className="col-span-12 md:col-span-5 2xl:col-span-4 order-1 md:order-2">
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
	return section.type in sectionComponents && section.values.length > 0;
}

// generate metadata
export async function generateMetadata({
	params,
}: {
	params: { lang: string; slug: string };
}): Promise<Metadata> {
	const { lang, slug } = await params;
	const res = await getApiData<ProductDetailsResponse<ProductData>>(
		`/products/${slug}?lang=${lang}`
	);
	const data = res?.data;

	if (!data) {
		return {
			title: '10ms School - Product not found',
			description: 'data not found',
		};
	}

	const seo = data.seo;

	return {
		title: seo?.title,
		description: seo?.description,
		keywords: seo?.keywords,
		openGraph: {
			title: seo?.title,
			description: seo?.description,
			images: seo?.defaultMeta
				?.filter((meta) => meta.type === 'image')
				?.map((meta) => meta.value),
		},
		other: {
			...Object?.fromEntries(
				seo?.defaultMeta?.map((meta) => [meta.type, meta.value]) || []
			),
		},
	};
}
