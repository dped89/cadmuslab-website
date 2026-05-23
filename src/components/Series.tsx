"use client";

import { useState, useEffect } from "react";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const PLAYLIST_ID = "PLj18l2tHjjUSZy_snj006tlQ520BIT7Ea"; // Weekly Videos (curated long-form, all series)

const RECENT_COUNT = 4; // how many "latest" rows to show beneath the hero

interface Episode {
  num: number;
  title: string;
  videoId: string;
  /** Time the video was uploaded to YouTube (not when added to the playlist). */
  publishedAt?: string;
}

// Fallback data in case API call fails
const fallbackEpisodes: Episode[] = [
  { num: 5, title: "Weekly Videos — Episode 5", videoId: "" },
  { num: 4, title: "Weekly Videos — Episode 4", videoId: "" },
  { num: 3, title: "Weekly Videos — Episode 3", videoId: "" },
  { num: 2, title: "Weekly Videos — Episode 2", videoId: "" },
  { num: 1, title: "Weekly Videos — Episode 1", videoId: "" },
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
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`
        );
        if (!res.ok) throw new Error("API request failed");
        const data = await res.json();

        const seenIds = new Set<string>();
        const items: Episode[] = data.items
          .filter((item: any) => {
            const t = item.snippet?.title;
            return t && t !== "Private video" && t !== "Deleted video";
          })
          .map((item: any) => {
            const fullTitle = item.snippet.title;
            // Lenient match: EP1, EP 1, EP.1, EP#01, Ep01, Episode 4
            const epMatch = fullTitle.match(/\bEP(?:isode)?\.?\s*#?\s*0*(\d+)/i);
            const epNum = epMatch ? parseInt(epMatch[1], 10) : 0;
            const title = fullTitle.replace(/\s*\|.*$/, "").trim();
            return {
              num: epNum,
              title,
              videoId:
                item.contentDetails?.videoId ||
                item.snippet.resourceId?.videoId ||
                "",
              // Use the video's actual upload time, not when it was added to the
              // playlist. snippet.publishedAt would reorder if videos are added
              // out of upload order.
              publishedAt:
                item.contentDetails?.videoPublishedAt ||
                item.snippet.publishedAt,
            };
          })
          .filter((ep: Episode) => {
            if (!ep.videoId || seenIds.has(ep.videoId)) return false;
            seenIds.add(ep.videoId);
            return true;
          })
          // Sort: EP number first (the user-controlled chronological signal),
          // then upload date as a fallback for any unnumbered videos.
          // videoPublishedAt alone isn't reliable because unlisted-then-public
          // videos keep their original upload timestamp, which can pre-date
          // newer publicly-visible episodes.
          .sort((a: Episode, b: Episode) => {
            if (a.num > 0 && b.num > 0 && a.num !== b.num) return b.num - a.num;
            if (a.num > 0 && b.num === 0) return -1;
            if (a.num === 0 && b.num > 0) return 1;
            const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
            const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
            return bTime - aTime;
          });

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
    <section id="series" className="relative z-10 py-24 md:py-32 bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#0d9488] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Weekly Videos
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">
          New from Cadmus Lab.
        </h2>

        <p className="text-slate-600 text-lg mb-12 max-w-2xl">
          Building in public, AI workflows by role, and the in-between work that
          goes into shipping real software. A new long-form video, every week.
          {" "}{totalEpisodes} {totalEpisodes === 1 ? "video" : "videos"} and counting.
        </p>

        {/* ============ LATEST EPISODE — pinned ============ */}
        {latest && (
          <a
            href={watchUrl(latest.videoId)}
            target="_blank"
            rel="noopener noreferrer"
            className="series-hero group grid md:grid-cols-[1.4fr_1fr] gap-8 items-center mb-14 border border-slate-200 hover:border-slate-300 p-[18px] no-underline text-inherit transition-colors rounded"
          >
            <div className="relative aspect-video w-full min-w-0 overflow-hidden border border-slate-200 bg-slate-100 rounded">
              {latest.videoId && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={thumbUrl(latest.videoId)}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              {latest.num > 0 && (
                <span className="absolute top-3 left-3 z-10 bg-black/80 text-[#5eead4] font-mono text-[11px] tracking-wider px-2 py-1 border border-white/20">
                  EP {String(latest.num).padStart(2, "0")}
                </span>
              )}
              <span className="absolute inset-0 grid place-items-center z-10 transition-transform duration-200 group-hover:scale-105">
                <PlayIcon size={72} />
              </span>
            </div>

            <div className="flex flex-col justify-center px-2 md:pl-4">
              <div className="text-[#0d9488] font-mono text-[11px] tracking-[0.25em] uppercase mb-3">
                Latest episode →
              </div>
              <h3 className="text-2xl font-normal text-slate-900 mb-2 leading-tight">
                {latest.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Hot off the press. The newest long-form video from Cadmus Lab.
              </p>
              <span className="self-start bg-[#0d9488] text-white font-medium text-[13px] tracking-[0.12em] uppercase px-6 py-3 transition-colors group-hover:bg-[#0f766e] rounded">
                Watch the latest
              </span>
              <div className="mt-3 text-slate-500 font-mono text-xs">
                {latest.num > 0
                  ? `EP ${String(latest.num).padStart(2, "0")} of ${totalEpisodes}`
                  : `Latest of ${totalEpisodes}`}
              </div>
            </div>
          </a>
        )}

        {/* ============ LATEST EPISODES ============ */}
        <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">
          Latest episodes
        </p>

        <div className="grid gap-2.5">
          {recent.map((ep) => (
            <a
              key={ep.videoId || ep.num}
              href={watchUrl(ep.videoId)}
              target="_blank"
              rel="noopener noreferrer"
              className="series-row grid grid-cols-[100px_1fr_auto] sm:grid-cols-[160px_1fr_auto] gap-4 sm:gap-5 items-center p-2.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors no-underline text-inherit rounded"
            >
              <div className="relative aspect-video overflow-hidden border border-slate-200 bg-slate-100 rounded">
                {ep.videoId && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={thumbUrl(ep.videoId)}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
                {ep.num > 0 && (
                  <span className="absolute top-1.5 left-1.5 z-10 bg-black/80 text-[#5eead4] font-mono text-[9px] tracking-wider px-1.5 py-0.5 border border-white/20">
                    EP {String(ep.num).padStart(2, "0")}
                  </span>
                )}
                <span className="absolute inset-0 grid place-items-center z-10">
                  <PlayIcon size={28} />
                </span>
              </div>

              <div className="min-w-0">
                <div className="text-[#0d9488] font-mono text-[11px] tracking-wider mb-1 uppercase">
                  {ep.num > 0 ? `EP ${String(ep.num).padStart(2, "0")}` : "Latest"}
                  {ep.publishedAt && (
                    <span className="text-slate-500 ml-2">
                      · {relativeTime(ep.publishedAt)}
                    </span>
                  )}
                </div>
                <div className="text-slate-800 text-[15px] leading-snug truncate">
                  {ep.title}
                </div>
              </div>

              <span className="text-xs text-[#0d9488] border border-[#0d9488]/40 px-2.5 py-1 uppercase tracking-wider rounded">
                Watch
              </span>
            </a>
          ))}
        </div>

        <div className="mt-9 flex items-center justify-center gap-4 flex-wrap text-center">
          <a
            href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white font-medium tracking-wide uppercase text-sm hover:bg-[#0d9488] transition-colors rounded"
          >
            Watch Full Playlist
          </a>
          {olderCount > 0 && (
            <p className="text-slate-500 text-sm">
              + {olderCount} more episodes in the playlist
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
