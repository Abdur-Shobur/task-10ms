export const dynamic = 'force-dynamic';
export const revalidate = 60;

import { MainPagination } from '@/components';
import ProductCard from '@/components/product-card';
import api from '@/lib/api';
import { Product, ProductResponse } from '@/types';
import { Metadata } from 'next';

export default async function Page({
	params,
	searchParams,
}: {
	params: { lang: string };
	searchParams?: { page?: string };
}) {
	const { lang } = await params;
	const extraParams = await searchParams;
	const res = await api.get(
		`/products?lang=${lang}&limit=20&page=${extraParams?.page || 1}`
	);
	const data: ProductResponse<Product[]> = res?.data;
	return (
		<>
			<div className="container px-4 mx-auto py-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  2xl:grid-cols-5 gap-4">
					{data?.data?.products?.map((item) => (
						<ProductCard key={item.id} item={item} />
					))}
				</div>
				<MainPagination pagination={data.data.pagination_meta} />
			</div>
		</>
	);
}

export const metadata: Metadata = {
	title: 'Products - 10ms School - The Best Online Learning Platform',
	description: 'Bangladesh best online learning platform',
};
