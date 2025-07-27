import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProductCard({ item }: { item: Product }) {
	const image = item?.media?.find((m) => m.resource_type === 'image');
	const imageUrl =
		image?.resource_value ||
		`https://placehold.co/600x400.png?text=${encodeURIComponent(
			item.title.slice(0, 10)
		)}`;

	return (
		<article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
			<div className="h-56 w-full">
				<Link href={`product/${item.slug}`}>
					<Image
						className="mx-auto h-full object-contain dark:hidden"
						src={imageUrl}
						alt={item.title}
						width={600}
						height={400}
					/>
					<Image
						className="mx-auto hidden h-full object-contain dark:block"
						src={image?.thumbnail_url || imageUrl}
						alt={item.title}
						width={600}
						height={400}
					/>
				</Link>
			</div>
			<div className="pt-3 md:pt-6">
				<Link
					href={`product/${item.slug}`}
					className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
				>
					{item.title}
				</Link>

				{/* Price display */}
				<div className="mt-4 flex items-center justify-between gap-4">
					<p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
						{item.price_details?.min_final_price
							? `৳${item.price_details.min_final_price.toLocaleString()}`
							: 'Free'}
					</p>
					<button
						type="button"
						className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
					>
						Add to cart
					</button>
				</div>

				{/* Optional: Modality and price type */}
				<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
					{item.modality} - {item.price_type}
				</div>
			</div>
		</article>
	);
}
