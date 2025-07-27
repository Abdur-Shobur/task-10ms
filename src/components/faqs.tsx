import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { MotionItem } from '@/lib/motion';
import { FaqSection } from '@/types/product.type';
import parse from 'html-react-parser';
import { SectionTitle } from './section-title';
export function Faqs({ data }: { data: FaqSection }) {
	return (
		<>
			<SectionTitle title={data?.name} />
			<div className="grid grid-cols-1 gap-4 md:gap-8 border border-blue-100 p-4 rounded-2xl">
				<Accordion type="single" collapsible className="space-y-4">
					{data.values?.map((item, index) => (
						<MotionItem key={index} i={index}>
							<AccordionItem
								value={`item-${index}`}
								className="bg-white rounded-lg lg:px-6 "
							>
								<AccordionTrigger className="text-left font-semibold xl:text-lg px-2 py-2 lg:py-4">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-gray-600 leading-relaxed xl:text-lg px-2 py-2 lg:py-4">
									{typeof item.answer === 'string' ? parse(item.answer) : null}
								</AccordionContent>
							</AccordionItem>
						</MotionItem>
					))}
				</Accordion>
			</div>
		</>
	);
}
