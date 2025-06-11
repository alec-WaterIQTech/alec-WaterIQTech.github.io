'use client'
import { useRef, useEffect, useState } from 'react';


export default function Hero() {
    const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
    const [activeIndex, setActiveIndex] = useState(0);
    const [videoIndex, setVideoIndex] = useState(0);

    const videos = [
        { src: '/videos/clip1.mp4', duration: 10 },
        { src: '/videos/clip3.mp4', duration: 10 },
        { src: '/videos/clip4.mp4', duration: 11 },
        { src: '/videos/clip2.mp4', duration: 11 },

    ]

    useEffect(() => {
        const currentVideo = videoRefs[activeIndex].current;
        if (!currentVideo) return

        currentVideo.src = videos[videoIndex].src
        currentVideo.currentTime = 0
        currentVideo.play()
        currentVideo.style.opacity = '1'
        
        if (videoIndex === videos.length - 1) {
            // on last video, stop switching, keep displaying final frame
            const total = videos[videoIndex].duration * 1000
            const slowdownStart = total - 4000 // 2 seconds before the end
            const slowDown = setTimeout(() => {
                let rate = 1.0
                const step = 0.01
                const interval = setInterval(() => {
                    if (rate > 0.3) {
                        rate -= step
                        currentVideo.playbackRate = rate
                    } else {
                        clearInterval(interval)
                    }
                }, 100) // every 100 ms
            }, slowdownStart)

            const pauseAtEnd = setTimeout(() => {
            currentVideo.pause()
            currentVideo.playbackRate = 1 
            }, total)

            return () => {
            clearTimeout(slowDown)
            clearTimeout(pauseAtEnd)
            }
        } else {
            const nextTimeout = setTimeout(() => {
            currentVideo.style.opacity = '0'
            setVideoIndex(videoIndex + 1)
            setActiveIndex((activeIndex + 1) % 2)
            }, videos[videoIndex].duration * 1000)

            return () => clearTimeout(nextTimeout)
        }
        }, [videoIndex, activeIndex])

    return (
        // Hero section
        <section className="relative min-h-screen flex justify-start">
            {videoRefs.map((ref, i) => (
                 <video
                    key={i}
                    ref={ref}
                    muted
                    autoPlay
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        i === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
            
            {/* Content wrapper */}
            <div className="relative z-10 md:w-1/2 px-6 md:px-16 py-10 flex flex-col justify-center backdrop-blur-sm bg-sky-950/90 text-white">
                <div className="max-w-xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                    WaterIQ <br /> Technologies
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                    Scientific, sustainable algae and biofilm control
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-8 font-medium">
                    WaterIQ Technologies water treatment solutions control algae and biofilm to help restore water ecosystems to their natural states through industry-leading technology and customer support—not chemicals.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {/* Solid Gradient Button */}
                        <a
                            href="#about"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-sky-400 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:from-sky-700 hover:to-sky-500">
                            Learn More
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-600 to-sky-400 px-6 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:from-sky-700 hover:to-sky-500">
                            Contact Us 
                        </a>
                    </div>
                </div>
            </div>
        </section>

        
    )
}