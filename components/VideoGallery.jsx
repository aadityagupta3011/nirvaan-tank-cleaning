"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { VIDEOS } from "@/lib/site";

// One vertical clip. Plays muted and looped while on screen (skipped for reduced motion),
// pauses off screen. The file only downloads once the card is near the viewport.
function VideoCard({ video, index }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const userPaused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!reduced && !userPaused.current) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const togglePlay = () => {
    const el = ref.current;
    if (el.paused) {
      userPaused.current = false;
      el.play().catch(() => {});
    } else {
      userPaused.current = true;
      el.pause();
    }
  };

  const toggleMute = () => {
    ref.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <figure className="w-[68vw] shrink-0 snap-start sm:w-[42vw] md:w-auto">
      <div className="group relative aspect-[9/16] overflow-hidden bg-ink ring-1 ring-ink/10">
        <video
          ref={ref}
          src={`/video/${video.slug}.mp4`}
          poster={`/video/${video.slug}.webp`}
          muted
          loop
          playsInline
          preload="none"
          aria-label={video.desc}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onClick={togglePlay}
          className="h-full w-full cursor-pointer object-cover"
        />
        <span className="pointer-events-none absolute left-3 top-3 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white">
          V—0{index + 1}
        </span>
        <div className="absolute inset-x-0 bottom-0 flex justify-end gap-2 bg-gradient-to-t from-ink/70 to-transparent p-3 pt-10">
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? `Pause ${video.title}` : `Play ${video.title}`}
            className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-white/90 text-ink transition hover:bg-accent"
          >
            {playing ? <Pause size={15} /> : <Play size={15} />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? `Unmute ${video.title}` : `Mute ${video.title}`}
            className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-white/90 text-ink transition hover:bg-accent"
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>
      </div>
      <figcaption className="pt-4">
        <h3 className="font-serif text-lg font-semibold leading-snug">{video.title}</h3>
        <p className="mt-1 text-[14px] leading-6 text-ink/60">{video.desc}</p>
      </figcaption>
    </figure>
  );
}

// Swipeable row on mobile, five-column grid from md up.
export default function VideoGallery() {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0 md:pb-0">
      {VIDEOS.map((video, i) => (
        <VideoCard key={video.slug} video={video} index={i} />
      ))}
    </div>
  );
}
