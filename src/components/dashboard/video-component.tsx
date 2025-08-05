import React from 'react'

const VideoComponent = () => {
    return (
        <video
            className={`absolute aspect-video object-fill rounded-lg w-full h-full right-0 bottom-3 z-0`}
            autoPlay
            muted
            loop    
        >
            <source
                src="https://videos.pexels.com/video-files/12546765/12546765-uhd_2560_1440_60fps.mp4"
                type="video/mp4"
            />
        </video>
    )
}

export default VideoComponent
