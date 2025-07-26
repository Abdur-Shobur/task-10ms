import { FeaturesSection } from '@/types/product';
import Image from 'next/image';

export function Features({ data }: { data?: FeaturesSection }) {
	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">
				{data?.name || ''}
			</h2>
			<div className="grid grid-cols-2 gap-4 md:gap-8 relative bg-gradient-to-br from-blue-950 to-stone-950 py-16 px-4 text-white rounded-2xl">
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
						<div>
							<h3>{item?.title || ''}</h3>
							<p>{item?.subtitle || ''}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
