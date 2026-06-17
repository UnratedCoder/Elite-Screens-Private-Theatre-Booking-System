"use client";

import React, { useState, useEffect, useRef } from "react";
import { VIDEOS } from "./data";

export default function VideosSection() {
  const videosRef = useRef<HTMLDivElement>(null);
  const [activeVideoInline, setActiveVideoInline] = useState<string | null>(null);
  const [likedVideos, setLikedVideos] = useState<string[]>([]);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("mousedown", handleInteraction);
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("mousedown", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("mousedown", handleInteraction);
    };
  }, []);

  const scrollVideos = (direction: "left" | "right") => {
    if (videosRef.current) {
      const { scrollLeft, clientWidth } = videosRef.current;
      const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      videosRef.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  const toggleLikeVideo = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedVideos((prev) =>
      prev.includes(id) ? prev.filter((vId) => vId !== id) : [...prev, id]
    );
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black font-serif">
            A Look Inside Elite Screens
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Watch quick highlights from real celebrations in our private theatres.
          </p>
        </div>

        {/* Carousel container wrapper */}
        <div className="relative group/carousel px-1 sm:px-8">
          {/* Left Chevron Button */}
          <button
            onClick={() => scrollVideos("left")}
            className="absolute -left-1 sm:left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-neutral-50 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all active:scale-90 cursor-pointer"
            aria-label="Previous videos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Chevron Button */}
          <button
            onClick={() => scrollVideos("right")}
            className="absolute -right-1 sm:right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-neutral-50 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-gray-200 transition-all active:scale-90 cursor-pointer"
            aria-label="Next videos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Scroll Area */}
          <div
            ref={videosRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory px-4 sm:px-8"
          >
            {VIDEOS.map((vid) => {
              const isPlaying = activeVideoInline === vid.id;
              const isLiked = likedVideos.includes(vid.id);
              return (
                <div
                  key={vid.id}
                  onMouseEnter={() => setActiveVideoInline(vid.id)}
                  onMouseLeave={() => {
                    setActiveVideoInline(null);
                    setIsMuted(false);
                  }}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] snap-start aspect-[9/16] rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-200 shadow-md transition-all duration-300 relative group"
                >
                  {isPlaying ? (
                    <>
                      <iframe
                        title={vid.title}
                        className="absolute inset-0 w-full h-full border-0"
                        src={`https://www.youtube.com/embed/${vid.id}?autoplay=1&mute=${isMuted ? 1 : 0}&rel=0&modestbranding=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                          setHasInteracted(true);
                        }}
                        className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center shadow-lg border border-white/20 transition-all active:scale-95 cursor-pointer"
                        type="button"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <line x1="22" x2="16" y1="9" y2="15" />
                            <line x1="16" x2="22" y1="9" y2="15" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                          </svg>
                        )}
                      </button>
                    </>
                  ) : (
                    <div
                      onClick={() => {
                        setActiveVideoInline(vid.id);
                        setIsMuted(false);
                        setHasInteracted(true);
                      }}
                      className="absolute inset-0 cursor-pointer"
                    >
                      {/* YouTube Cover Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(https://img.youtube.com/vi/${vid.id}/hqdefault.jpg)` }}
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <button
                          type="button"
                          className="w-14 h-14 rounded-full bg-black/85 text-white flex items-center justify-center shadow-2xl transition group-hover:scale-110 group-hover:bg-[#FFD700] group-hover:text-black cursor-pointer"
                          aria-label="Play video"
                        >
                          <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>

                      {/* Heart Wishlist Overlay */}
                      <button
                        onClick={(e) => toggleLikeVideo(vid.id, e)}
                        className="absolute bottom-4 left-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition hover:bg-white/45 active:scale-90 cursor-pointer"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill={isLiked ? "#FFD700" : "none"}
                          stroke={isLiked ? "#FFD700" : "white"}
                          strokeWidth="2.5"
                          className="transition-colors duration-200"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2a5.5 5.5 0 0 0-5.5 5.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </button>

                      {/* Title at the bottom */}
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 pl-16">
                        <h4 className="text-sm font-semibold text-white leading-tight">
                          {vid.title}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
