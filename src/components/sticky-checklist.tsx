'use client';

import { getLanguage } from '@/lang/language';
import { ProductData } from '@/types/product.type';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SectionTitle } from './section-title';
import { Button } from './ui/button';

export const StickyChecklist = ({
	data,
	lang,
}: {
	data: ProductData;
	lang: string;
}) => {
	const [showSticky, setShowSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window === 'undefined') return;

			// Only run logic on screen sizes 768px or less
			if (window.innerWidth < 768) {
				setShowSticky(true);
				return;
			}

			const mediaInBanner = document.getElementById('media-in-banner');

			if (window.scrollY > 500) {
				if (mediaInBanner) {
					mediaInBanner.classList.add('hidden');
				}
				setShowSticky(true);
			} else {
				if (mediaInBanner) {
					mediaInBanner.classList.remove('hidden');
				}
				setShowSticky(false);
			}
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	}, []);

	return (
		<div
			className={`transition-opacity duration-300 ease-in-out ${
				showSticky
					? 'opacity-100 visible border shadow p-4 rounded-xl'
					: 'opacity-0 invisible'
			} sticky top-20`}
		>
			<div className="flex flex-col mb-4">
				<div className="flex items-center mb-3">
					<p className="inline-block text-lg xl:text-2xl font-semibold">
						৳1000
					</p>
					<del className="ml-2 text-base font-normal xl:text-xl">৳5000</del>
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
			<div className="space-y-2 mt-4">
				{data.checklist?.map((item, i) => (
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
	);
};
