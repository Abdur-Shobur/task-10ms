import { InstructorsSection } from '@/types/product.type';
import parse from 'html-react-parser';
import { SectionTitle } from './section-title';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent } from './ui/card';

export function Instructors({ data }: { data: InstructorsSection }) {
	return (
		<section>
			<SectionTitle title={data?.name} />
			<div className="flex gap-2 overflow-x-auto">
				{data?.values?.map((item, i) => (
					<Card key={i} className="min-w-xs lg:min-w-md w-full py-4 xl:py-6">
						<CardContent className="px-4 xl:px-6">
							<div className="flex   items-center gap-4 xl:gap-6">
								<Avatar className="w-24 h-24">
									<AvatarImage
										src={item?.image || '/placeholder.svg'}
										alt={item?.name || 'Instructor Avatar'}
									/>
									<AvatarFallback>{item?.name.charAt(0)}</AvatarFallback>
								</Avatar>
								<div className=" text-left space-y-1 xl:space-y-2">
									<h3 className="text-lg xl:text-xl font-bold text-gray-700">
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
