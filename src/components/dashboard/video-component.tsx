import React from 'react'

const VideoComponent = () => {
    return (
        <video
            className={`absolute aspect-video object-fill rounded-lg w-full h-full right-0 bottom-3 -z-50`}
            autoPlay
            muted
            loop
        >
            <source
                src="/img/bg-video.mp4"
                type="video/mp4"
            />
        </video>
    )
}

export default VideoComponent
