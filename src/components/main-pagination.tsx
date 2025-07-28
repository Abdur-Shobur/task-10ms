'use client';

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';
import { Pagination as PaginationType } from '@/types';
import { usePathname, useSearchParams } from 'next/navigation';

export function MainPagination({ pagination }: { pagination: PaginationType }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const currentPage = pagination.current_page;
	const totalPages = pagination.item_count / pagination.items_per_page;

	const getPageHref = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', page.toString());
		return `${pathname}?${params.toString()}`;
	};

	const getPageRange = () => {
		const delta = 2;
		const range = [];
		for (
			let i = Math.max(1, currentPage - delta);
			i <= Math.min(totalPages, currentPage + delta);
			i++
		) {
			range.push(i);
		}
		return range;
	};

	return (
		<div className="flex items-center flex-col xl:flex-row justify-center xl:justify-between py-6 xl:py-10 flex-wrap gap-2">
			<div className="text-sm text-gray-500 flex items-center gap-2">
				<span className=" hidden md:block">
					Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong> —
				</span>
				Showing <strong>{pagination.items_per_page * currentPage}</strong> of{' '}
				<strong>{pagination.item_count}</strong> items
			</div>

			<Pagination className={cn('justify-end mx-0 w-auto')}>
				<PaginationContent>
					{/* Previous */}
					<PaginationItem>
						<PaginationPrevious
							href={currentPage > 1 ? getPageHref(currentPage - 1) : '#'}
							aria-disabled={currentPage === 1}
						/>
					</PaginationItem>

					{/* First page + Ellipsis if needed */}
					{currentPage > 3 && (
						<>
							<PaginationItem>
								<PaginationLink href={getPageHref(1)}>1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
						</>
					)}

					{/* Page range */}
					{getPageRange().map((page) => (
						<PaginationItem key={page}>
							<PaginationLink
								href={getPageHref(page)}
								isActive={page === currentPage}
							>
								{page}
							</PaginationLink>
						</PaginationItem>
					))}

					{/* Ellipsis + last page */}
					{currentPage < totalPages - 2 && (
						<>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href={getPageHref(totalPages)}>
									{totalPages}
								</PaginationLink>
							</PaginationItem>
						</>
					)}

					{/* Next */}
					<PaginationItem>
						<PaginationNext
							href={
								currentPage < totalPages ? getPageHref(currentPage + 1) : '#'
							}
							aria-disabled={currentPage === totalPages}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
