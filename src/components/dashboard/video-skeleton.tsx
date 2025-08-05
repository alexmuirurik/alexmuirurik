import React from 'react'

const VideoSkeleton = () => {
    return (
        <div
            className={`absolute rounded-lg w-full h-full right-0 bottom-3 z-0`}
            style={{
                background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='100' height='100' fill='none' stroke='rgb(255 255 255 / 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
        ></div>
    )
}

export default VideoSkeleton
