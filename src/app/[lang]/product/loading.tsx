import { ArticleSkeleton } from '@/components';

export default function Loading() {
	return (
		<div className="container max-w-7xl mx-auto py-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
				{Array.from({ length: 20 }, (_, index) => (
					<ArticleSkeleton key={index} />
				))}
			</div>
		</div>
	);
}
