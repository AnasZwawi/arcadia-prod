"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize, X } from "lucide-react";

interface MediaItem {
  type: "image" | "video";
  url: string;
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  media: MediaItem[];
}

function YouTubeEmbed({ videoUrl }: { videoUrl: string }) {
  const getYouTubeId = (url: string) => {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : "";
  };

  const videoId = getYouTubeId(videoUrl);

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?rel=0`}
      className="w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video"
      style={{ border: "none" }}
    />
  );
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  media,
}: TestimonialCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="group rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-lg flex flex-col mb-6 break-inside-avoid">
      {/* Media Section with Slider */}
      <div className="relative w-full overflow-hidden bg-black aspect-video">
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.url}
            alt={`${author}'s testimonial media ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <YouTubeEmbed videoUrl={currentMedia.url} />
        )}

        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white flex items-center justify-center transition-all shadow-xl z-10 opacity-0 hover:opacity-100 group-hover:opacity-100 backdrop-blur-sm"
              aria-label="Previous media"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white flex items-center justify-center transition-all shadow-xl z-10 opacity-0 hover:opacity-100 group-hover:opacity-100 backdrop-blur-sm"
              aria-label="Next media"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {media.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all backdrop-blur-sm ${
                  index === currentIndex
                    ? "bg-white w-8 shadow-lg"
                    : "bg-white/50 hover:bg-white/75 w-2"
                }`}
                aria-label={`Go to media ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Media Counter */}
        {media.length > 1 && (
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-medium backdrop-blur-sm shadow-lg pointer-events-none">
            {currentIndex + 1} / {media.length}
          </div>
        )}

        {/* Maximize Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="View full screen"
        >
          <Maximize className="w-4 h-4" />
        </button>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center max-w-7xl mx-auto">
            {currentMedia.type === "image" ? (
              <img
                src={currentMedia.url}
                alt={`${author}'s testimonial media ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <div className="w-full aspect-video max-h-[90vh]">
                <YouTubeEmbed videoUrl={currentMedia.url} />
              </div>
            )}

            {/* Modal Navigation */}
            {media.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white transition-colors"
                  aria-label="Previous media"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white/70 hover:text-white transition-colors"
                  aria-label="Next media"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {media.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-white w-8 shadow-lg"
                          : "bg-white/30 hover:bg-white/50 w-2"
                      }`}
                      aria-label={`Go to media ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col space-y-6 bg-card">
        <p className="text-foreground leading-relaxed flex-1">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="flex items-center gap-3 mt-auto">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {author.charAt(0)}
          </div>
          <div className="space-y-0.5">
            <p className="font-medium text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
