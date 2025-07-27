import { ArticleSkeleton } from '@/components';

export default function Loading() {
	return (
		<div className="container max-w-7xl mx-auto py-6">
			<div className="grid grid-cols-12 gap-2 lg:gap-4">
				<div className="col-span-12 md:col-span-7">
					<ArticleSkeleton />
					<ArticleSkeleton />
				</div>
				<div className="hidden md:block col-span-12 md:col-span-5">
					<ArticleSkeleton />
				</div>
			</div>
		</div>
	);
}
