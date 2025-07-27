import { MotionItem } from '@/lib/motion';
import { ProductData } from '@/types';
import Image from 'next/image';

export const CheckList = ({ data }: { data: ProductData }) => {
	return (
		<div className="space-y-2 mt-4">
			{data.checklist?.map((item, i) => (
				<MotionItem key={i} i={i}>
					<div className="flex items-center gap-3 xl:gap-4">
						<Image
							src={item.icon}
							alt="icon"
							width={16}
							height={16}
							className="w-5 h-5 object-contain"
						/>
						<p className="flex items-center gap-3 text-base xl:text-xl">
							{item.text}
						</p>
					</div>
				</MotionItem>
			))}
		</div>
	);
};
