"use client";

import { useState, useEffect } from "react";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const PLAYLIST_ID = "PLj18l2tHjjURzrOgCZC3Lxa92lV9QJxhp"; // Building in Public

const RECENT_COUNT = 4; // how many "latest" rows to show beneath the hero

interface Episode {
  num: number;
  title: string;
  videoId: string;
  publishedAt?: string;
}

// Fallback data in case API call fails
const fallbackEpisodes: Episode[] = [
  { num: 3, title: "Building in Public — Episode 3", videoId: "" },
  { num: 2, title: "Building in Public — Episode 2", videoId: "" },
  { num: 1, title: "Building in Public — Episode 1", videoId: "" },
];

function watchUrl(videoId: string) {
  return videoId
    ? `https://www.youtube.com/watch?v=${videoId}&list=${PLAYLIST_ID}`
    : `https://youtube.com/@CadmusLab`;
}

function thumbUrl(videoId: string) {
  // hqdefault is the most reliable size — always exists once a video is public
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : "";
}

function relativeTime(iso?: string) {
  if (!iso) return "";
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diffDays = Math.floor((now - then) / (1000 * 60 * 60 * 24));
  if (diffDays < 1) return "Today";
  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return "1 week ago";
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 60) return "1 month ago";
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

const PlayIcon = ({ size = 32 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.55)" />
    <path d="M26 22 L44 32 L26 42 Z" fill="#fff" />
  </svg>
);

export default function Series() {
  const [episodes, setEpisodes] = useState<Episode[]>(fallbackEpisodes);

  useEffect(() => {
    async function fetchPlaylist() {
      if (!YOUTUBE_API_KEY) return;
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`
        );
        if (!res.ok) throw new Error("API request failed");
        const data = await res.json();

        const seen = new Set<number>();
        const items: Episode[] = data.items
          .filter((item: any) => item.snippet.title !== "Private video")
          .map((item: any) => {
            const fullTitle = item.snippet.title;
            const epMatch = fullTitle.match(/EP\s*(\d+)/i);
            const epNum = epMatch ? parseInt(epMatch[1], 10) : 0;
            const title = fullTitle.replace(/\s*\|.*$/, "").trim();
            return {
              num: epNum,
              title,
              videoId: item.snippet.resourceId?.videoId || "",
              publishedAt: item.snippet.publishedAt,
            };
          })
          .filter((ep: Episode) => {
            if (ep.num === 0 || seen.has(ep.num)) return false;
            seen.add(ep.num);
            return true;
          })
          .sort((a: Episode, b: Episode) => b.num - a.num); // descending — newest first

        if (items.length > 0) setEpisodes(items);
      } catch {
        // fallback data already set
      }
    }
    fetchPlaylist();
  }, []);

  const totalEpisodes = episodes.length;
  const latest = episodes[0];
  const recent = episodes.slice(1, RECENT_COUNT + 1);
  const olderCount = Math.max(0, totalEpisodes - 1 - recent.length);

  return (
    <section id="series" className="py-24 md:py-32 bg-[#0a0a14]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#64ffda] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Weekly Series
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Cadmus Lab: Building in Public
        </h2>

        <p className="text-[#b4b4cc] text-lg mb-12 max-w-2xl">
          The Cadmus Lab build log &mdash; apps, agents, business decisions, and
          everything in between. Watch real products come together in real time,
          mistakes and all. {totalEpisodes} {totalEpisodes === 1 ? "episode" : "episodes"} and counting.
        </p>

        {/* ============ LATEST EPISODE — pinned ============ */}
        {latest && (
          <a
            href={watchUrl(latest.videoId)}
            target="_blank"
            rel="noopener noreferrer"
            className="series-hero group grid md:grid-cols-[1.4fr_1fr] gap-8 items-stretch mb-14 border border-white/[0.08] p-[18px] no-underline text-inherit hover:border-white/[0.15] transition-colors"
          >
            <div className="relative aspect-video overflow-hidden border border-white/[0.08] bg-[#14142a]">
              {latest.videoId && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={thumbUrl(latest.videoId)}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              <span className="absolute top-3 left-3 z-10 bg-black/70 text-[#64ffda] font-mono text-[11px] tracking-wider px-2 py-1 border border-[#64ffda]/30">
                EP {String(latest.num).padStart(2, "0")}
              </span>
              <span className="absolute inset-0 grid place-items-center z-10 transition-transform duration-200 group-hover:scale-105">
                <PlayIcon size={72} />
              </span>
            </div>

            <div className="flex flex-col justify-center px-2 md:pl-4">
              <div className="text-[#64ffda] font-mono text-[11px] tracking-[0.25em] uppercase mb-3">
                Latest episode →
              </div>
              <h3 className="text-2xl font-normal text-white mb-2 leading-tight">
                {latest.title}
              </h3>
              <p className="text-[#b4b4cc] text-sm leading-relaxed mb-5">
                Hot off the press. The newest entry in the Cadmus Lab build log
                &mdash; what shipped, what broke, and what&apos;s next.
              </p>
              <span className="self-start bg-[#64ffda] text-black font-medium text-[13px] tracking-[0.12em] uppercase px-6 py-3 transition-colors group-hover:bg-white">
                Watch the latest
              </span>
              <div className="mt-3 text-[#b4b4cc]/50 font-mono text-xs">
                EP {String(latest.num).padStart(2, "0")} of {totalEpisodes}
              </div>
            </div>
          </a>
        )}

        {/* ============ LATEST EPISODES ============ */}
        <p className="text-[#b4b4cc]/50 text-xs uppercase tracking-widest mb-4">
          Latest episodes
        </p>

        <div className="grid gap-2.5">
          {recent.map((ep) => (
            <a
              key={ep.num}
              href={watchUrl(ep.videoId)}
              target="_blank"
              rel="noopener noreferrer"
              className="series-row grid grid-cols-[100px_1fr_auto] sm:grid-cols-[160px_1fr_auto] gap-4 sm:gap-5 items-center p-2.5 border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.015] transition-colors no-underline text-inherit"
            >
              <div className="relative aspect-video overflow-hidden border border-white/[0.08] bg-[#14142a]">
                {ep.videoId && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={thumbUrl(ep.videoId)}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                <span className="absolute top-1.5 left-1.5 z-10 bg-black/70 text-[#64ffda] font-mono text-[9px] tracking-wider px-1.5 py-0.5 border border-[#64ffda]/30">
                  EP {String(ep.num).padStart(2, "0")}
                </span>
                <span className="absolute inset-0 grid place-items-center z-10">
                  <PlayIcon size={28} />
                </span>
              </div>

              <div className="min-w-0">
                <div className="text-[#64ffda] font-mono text-[11px] tracking-wider mb-1 uppercase">
                  EP {String(ep.num).padStart(2, "0")}
                  {ep.publishedAt && (
                    <span className="text-[#b4b4cc]/50 ml-2">
                      · {relativeTime(ep.publishedAt)}
                    </span>
                  )}
                </div>
                <div className="text-white/90 text-[15px] leading-snug truncate">
                  {ep.title}
                </div>
              </div>

              <span className="text-xs text-[#64ffda] border border-[#64ffda]/30 px-2.5 py-1 uppercase tracking-wider">
                Watch
              </span>
            </a>
          ))}
        </div>

        <div className="mt-9 flex items-center gap-4 flex-wrap">
          <a
            href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black font-medium tracking-wide uppercase text-sm hover:bg-[#64ffda] transition-colors"
          >
            Watch Full Playlist
          </a>
          {olderCount > 0 && (
            <p className="text-[#b4b4cc]/55 text-sm">
              + {olderCount} more episodes in the playlist
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
