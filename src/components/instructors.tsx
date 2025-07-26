import { InstructorsSection } from '@/types/product';
import parse from 'html-react-parser';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';

export function Instructors({ data }: { data: InstructorsSection }) {
	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">
				{data?.name || ''}
			</h2>
			<div className="flex gap-2 overflow-x-auto">
				{data?.values?.map((item, i) => (
					<Card key={i} className="min-w-md w-full">
						<CardContent>
							<div className="flex flex-col md:flex-row items-center gap-6">
								<Avatar className="w-24 h-24">
									<AvatarImage
										src={item?.image || '/placeholder.svg'}
										alt={item?.name || 'Instructor Avatar'}
									/>
									<AvatarFallback>{item?.name.charAt(0)}</AvatarFallback>
								</Avatar>
								<div className="text-center md:text-left space-y-2">
									<h3 className="text-xl font-bold text-gray-700">
										{item?.name || ''}
									</h3>
									<div className="text-gray-600 ">
										{typeof item?.description === 'string'
											? parse(item.description)
											: null}
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
