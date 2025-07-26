'use client';

import React from 'react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Media } from '@/types/product';
import ReactPlayer from 'react-player';

const MediaGallery = ({ media }: { media: Media[] }) => {
	const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

	// Filter relevant media
	const displayMedia = media.filter(
		(m) => m.resource_type === 'image' || m.resource_type === 'video'
	);

	return (
		<div className="space-y-6">
			{/* Main Slider */}
			<Swiper
				modules={[Thumbs]}
				thumbs={{ swiper: thumbsSwiper }}
				className="w-full aspect-video rounded-xl overflow-hidden"
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
							<img
								src={item.resource_value}
								alt={item.name}
								className="w-full h-full object-cover"
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
			>
				{displayMedia.map((item, index) => (
					<SwiperSlide key={index}>
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
