import { Skeleton } from './ui/skeleton';

export function ArticleSkeleton() {
	return (
		<article className="space-y-4 p-2 lg:p-6">
			<div className="space-y-2">
				<Skeleton className="h-6 w-4/5" />
				<Skeleton className="h-6 w-3/5" />
			</div>

			<div className="flex items-center space-x-2">
				<Skeleton className="h-8 w-8 rounded-full" />
				<div className="space-y-1">
					<Skeleton className="h-3 w-20" />
					<Skeleton className="h-3 w-16" />
				</div>
			</div>

			<Skeleton className="h-48 w-full rounded-lg" />

			<div className="space-y-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-4/5" />
				<Skeleton className="h-4 w-3/4" />
				<Skeleton className="h-4 w-2/3" />
			</div>

			<div className="flex justify-between items-center pt-4">
				<div className="flex space-x-2">
					<Skeleton className="h-8 w-16" />
					<Skeleton className="h-8 w-20" />
					<Skeleton className="h-8 w-18" />
				</div>
				<Skeleton className="h-8 w-12" />
			</div>
		</article>
	);
}
