import { FeaturesSection } from '@/types/product.type';
import Image from 'next/image';
import { SectionTitle } from './section-title';

export function Features({ data }: { data?: FeaturesSection }) {
	return (
		<section>
			<SectionTitle title={data?.name} />
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative bg-gradient-to-br from-blue-950 to-stone-950 py-6 xl:py-16 px-4 text-white rounded-2xl">
				{data?.values?.map((item, i) => (
					<div key={i} className="flex gap-4 ">
						<div className="w-full max-w-9">
							<Image
								src={item?.icon || '/placeholder.svg'}
								alt="IELTS Course Preview"
								width={36}
								height={36}
								className="w-12 h-12 object-contain"
							/>
						</div>
						<div className="space-y-2 lg:space-y-1">
							<h3 className="xl:text-lg font-bold">{item?.title || ''}</h3>
							<p>{item?.subtitle || ''}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
