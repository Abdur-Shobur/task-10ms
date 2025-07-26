import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { FaqSection } from '@/types/product';
import parse from 'html-react-parser';
export function Faqs({ data }: { data: FaqSection }) {
	return (
		<>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">
				{data?.name || ''}
			</h2>
			<div className="grid grid-cols-1 gap-4 md:gap-8 border border-blue-100 p-4 rounded-2xl">
				<Accordion type="single" collapsible className="space-y-4">
					{data.values?.map((item, index) => (
						<AccordionItem
							key={index}
							value={`item-${index}`}
							className="bg-white rounded-lg px-6"
						>
							<AccordionTrigger className="text-left font-semibold text-lg">
								{item.question}
							</AccordionTrigger>
							<AccordionContent className="text-gray-600 leading-relaxed text-lg">
								{typeof item.answer === 'string' ? parse(item.answer) : null}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</>
	);
}
