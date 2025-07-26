'use client';

import React from 'react';
import ReactPlayer from 'react-player';

interface Props {
	url: string;
}

const VideoPlayer = ({ url }: Props) => {
	return (
		<div className="aspect-video">
			<ReactPlayer
				src={`https://www.youtube.com/watch?v=${url}`}
				controls
				width="100%"
				height="100%"
			/>
		</div>
	);
};

export default VideoPlayer;
