// export const dynamic = 'force-dynamic';
// export const revalidate = 600;

import { MainPagination } from '@/components';
import ProductCard from '@/components/product-card';
import { getApiData } from '@/lib/api';
import { MotionItem } from '@/lib/motion';
import { Product, ProductResponse } from '@/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export default async function Page({
	params,
	searchParams,
}: {
	params: { lang: string };
	searchParams?: { page?: string };
}) {
	// fetch data
	const { lang } = await params;
	const extraParams = await searchParams;
	const data = await getApiData<ProductResponse<Product[]>>(
		`/products?lang=${lang || 'en'}&limit=20&page=${extraParams?.page || 1}`
	);

	if (!data) {
		return notFound();
	}

	return (
		<>
			<div className="container px-4 mx-auto py-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  2xl:grid-cols-5 gap-4">
					{/* products */}
					{data?.data?.products?.map((item, i) => (
						<MotionItem key={item.id} i={i} once>
							<ProductCard item={item} />
						</MotionItem>
					))}
				</div>

				{/* pagination */}
				<MainPagination pagination={data.data.pagination_meta} />
			</div>
		</>
	);
}

// generate metadata
export const metadata: Metadata = {
	title: 'Products - 10ms School - The Best Online Learning Platform',
	description: 'Bangladesh best online learning platform',
};
