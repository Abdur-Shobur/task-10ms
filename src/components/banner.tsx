import { getLanguage } from '@/lang/language';
import { ProductData } from '@/types/product.type';
import parse from 'html-react-parser';
import { Star, Timer } from 'lucide-react';
import { cookies } from 'next/headers';
import Image from 'next/image';
import MediaGallery from './media-gallery';
import { SectionTitle } from './section-title';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export async function Banner({ data }: { data?: ProductData }) {
	const lang = (await cookies()).get('lang')?.value ?? 'en';

	return (
		<section className="relative bg-gradient-to-br from-stone-900 to-stone-600 py-8 md:py-16 px-4 text-white">
			<div className="container mx-auto">
				<div className="grid gap-y-8 grid-cols-12 xl:gap-12 items-start">
					<div className="space-y-4 order-2 md:order-1 col-span-12 lg:space-y-6 md:col-span-7 2xl:col-span-8">
						<Badge
							variant="secondary"
							className="bg-red-100 text-red-700 hover:bg-red-200"
						>
							<Timer className="w-4 h-4 mr-2" />
							{getLanguage(lang).special_offer}
						</Badge>

						<h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-tight">
							{data?.title || ''}
						</h1>

						<div className="flex lg:items-center gap-1 lg:gap-3 flex-col lg:flex-row">
							<div className="flex items-center gap-1">
								{Array.from({ length: 5 }, (_, index) => (
									<Star key={index} className={`w-4 h-4 text-yellow-500`} />
								))}
							</div>
							<p className="text-base xl:text-lg not-last:font-semibold">
								{getLanguage(lang).set_retting}
							</p>
						</div>

						<div className="text-base xl:text-lg leading-relaxed max-w-3xl">
							{typeof data?.description === 'string'
								? parse(data.description)
								: null}
						</div>

						<div className="hidden md:flex flex-wrap gap-4">
							<Button
								size="lg"
								className="bg-green-600 hover:bg-green-700 text-white px-8 cursor-pointer"
							>
								{data?.cta_text.name || ''}
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="cursor-pointer text-stone-950"
							>
								ফ্রি PDF ডাউনলোড
							</Button>
						</div>
					</div>

					<div className="relative order-1 md:order-2  col-span-12 md:col-span-5 2xl:col-span-4">
						<div
							id="media-in-banner"
							className="bg-white shadow p-2 md:p-4 border rounded-sm md:rounded-xl md:absolute right-0 w-full md:w-[300px] lg:w-[400px] xl:w-[544px] top-0"
						>
							<MediaGallery media={data?.media || []} />
							<div className="hidden md:block space-y-3 mt-4 text-black">
								<div className="flex flex-col mb-4">
									<div className="flex items-center mb-3">
										<p className="inline-block text-lg xl:text-2xl font-semibold">
											৳1000
										</p>
										<del className="ml-2 text-base font-normal xl:text-xl">
											৳5000
										</del>
									</div>
									<Button
										size="lg"
										className="bg-green-600 hover:bg-green-700 text-white px-8 cursor-pointer"
									>
										{data?.cta_text.name || ''}
									</Button>
								</div>
								{data?.checklist && data?.checklist?.length > 0 && (
									<SectionTitle title={getLanguage(lang).have_this_course} />
								)}
								<div className=" space-y-2 mt-4">
									{data?.checklist?.map((item, i) => (
										<div key={i} className="flex items-center gap-3 xl:gap-4">
											<Image
												src={item.icon}
												alt="icon"
												width={16}
												height={16}
												className="w-5 h-5 object-contain"
											/>
											<p className="flex items-center gap-3 text-base xl:text-xl">
												{item.text}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
