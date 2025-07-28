'use client';

import { Media } from '@/types/product.type';
import Image from 'next/image';
import React from 'react';
import ReactPlayer from 'react-player';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MediaGallery = ({ media }: { media: Media[] }) => {
	const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperType | null>(
		null
	);

	// Filter relevant media
	const displayMedia = media.filter(
		(m) => m.resource_type === 'image' || m.resource_type === 'video'
	);

	return (
		<div className="space-y-2 md:space-y-6">
			{/* Main Slider */}
			<Swiper
				modules={[Thumbs, Navigation]}
				thumbs={{ swiper: thumbsSwiper }}
				navigation
				className="w-full aspect-video rounded-sm md:rounded-xl overflow-hidden"
			>
				{displayMedia.map((item, index) => (
					<SwiperSlide key={index}>
						{item.resource_type === 'video' ? (
							<ReactPlayer
								src={`https://www.youtube.com/watch?v=${item.resource_value}`}
								controls
								width="100%"
								height="100%"
							/>
						) : (
							<Image
								src={item.resource_value}
								alt={item.name}
								className="w-full h-full object-cover"
								width={600}
								height={400}
							/>
						)}
					</SwiperSlide>
				))}
			</Swiper>

			{/* Thumbnail Slider */}
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={5}
				watchSlidesProgress
				className="rounded-md"
				breakpoints={{
					0: {
						slidesPerView: 3,
						spaceBetween: 10,
					},
					1280: {
						slidesPerView: 4,
						spaceBetween: 10,
					},
					1536: {
						slidesPerView: 5,
						spaceBetween: 10,
					},
				}}
			>
				{displayMedia.map((item, index) => (
					<SwiperSlide key={index + '1'} className="thumb">
						<img
							src={
								item.thumbnail_url && item.thumbnail_url !== ''
									? item.thumbnail_url
									: item.resource_type === 'image'
									? item.resource_value
									: `https://img.youtube.com/vi/${item.resource_value}/0.jpg`
							}
							alt={`thumb-${index}`}
							className="h-20 w-full object-cover rounded-md border border-gray-200"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default MediaGallery;
