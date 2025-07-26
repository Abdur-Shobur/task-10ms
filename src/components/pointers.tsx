import { PointersSection } from '@/types/product';
import { Check } from 'lucide-react';

export function Pointers({ data }: { data?: PointersSection }) {
	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">
				{data?.name || ''}
			</h2>
			<div className="grid grid-cols-2 gap-4 md:gap-8 border border-blue-100 p-4 rounded-2xl">
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
