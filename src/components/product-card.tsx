import { Motion, MotionView } from '@/lib/motion';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductCard({ item }: { item: Product }) {
	// Get image
	const image = item?.media?.find((m) => m.resource_type === 'image');
	const imageUrl =
		image?.resource_value ||
		`https://placehold.co/600x400.png?text=${encodeURIComponent(
			item.title.slice(0, 10)
		)}`;

	return (
		<article className="h-full rounded-lg border border-gray-200 bg-white p-2 lg:p-6 shadow-sm">
			<MotionView>
				<div className="w-full">
					<Link href={`product/${item.slug}`}>
						<Image
							className="mx-auto h-full object-contain "
							src={imageUrl}
							alt={item.title}
							width={600}
							height={400}
						/>
					</Link>
				</div>
			</MotionView>
			<div className="pt-1 md:pt-3 lg:pt-6">
				<Motion>
					<Link
						href={`product/${item.slug}`}
						className="text-sm lg:text-lg font-semibold leading-tight text-gray-900 hover:underline  "
					>
						{item.title}
					</Link>
				</Motion>

				{/* Price display */}
				<Motion>
					<div className="mt-1 md:mt-2 lg:mt-4 flex items-center justify-between gap-4">
						<p className="text-sm md:text-xl xl:text-2xl font-extrabold leading-tight text-gray-900  ">
							{item.price_details?.min_final_price
								? `৳${item.price_details.min_final_price.toLocaleString()}`
								: 'Free'}
						</p>
					</div>
				</Motion>

				<Motion>
					<div className="mt-2 text-sm text-gray-600  ">
						{item.modality} - {item.price_type}
					</div>
				</Motion>
			</div>
		</article>
	);
}
