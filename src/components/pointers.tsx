import { PointersSection } from '@/types/product.type';
import { Check } from 'lucide-react';
import { SectionTitle } from './section-title';

export function Pointers({ data }: { data?: PointersSection }) {
	return (
		<section>
			<SectionTitle title={data?.name} />

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-8 border border-blue-100 p-4 rounded-2xl">
				{data?.values?.map((item, i) => (
					<div key={i} className="flex gap-4 ">
						<div className="w-full max-w-5">
							<Check className="w-6 h-6 text-blue-600" />
						</div>
						<div>
							<p>{item?.text || ''}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
