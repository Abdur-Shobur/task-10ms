import { FeatureExplanationsSection } from '@/types/product.type';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { SectionTitle } from './section-title';

export function FeatureExplanations({
	data,
}: {
	data?: FeatureExplanationsSection;
}) {
	return (
		<section>
			<SectionTitle title={data?.name} />
			<div className="grid grid-cols-1 gap-4 md:gap-8 border border-blue-100 p-4 rounded-2xl">
				{data?.values?.map((item, i) => (
					<div
						key={i}
						className="flex flex-col-reverse lg:flex-row gap-4 first:border-b first:pb-8"
					>
						<div className="w-full">
							<h3 className="text-base xl:text-md font-bold text-stone-700 mb-3">
								{item?.title || ''}
							</h3>

							<div className=" space-y-2 lg:space-y-4">
								{item?.checklist?.map((checklist, i) => (
									<p
										key={i}
										className="flex items-center gap-2 lg:gap-3 xl:text-xl"
									>
										<Check className="w-5 h-5 text-blue-600" />
										{checklist}
									</p>
								))}
							</div>
						</div>
						<div className="w-full max-w-xs mx-auto lg:mx-0">
							{item?.file_type === 'image' ? (
								<Image
									src={item?.file_url || '/placeholder.svg'}
									alt={item?.title || ''}
									width={500}
									height={500}
									className="w-full h-full object-contain"
								/>
							) : (
								''
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
