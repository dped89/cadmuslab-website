"use client";

import { useState, useEffect } from "react";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const PLAYLIST_ID = "PLj18l2tHjjUTm3P_rapT7NRlbJb26PyGt"; // Zero to Hero: AI Fundamentals

const VISIBLE_COUNT = 5;

interface Episode {
  num: number;
  title: string;
  videoId: string;
}

// Fallback data in case API call fails
const fallbackEpisodes: Episode[] = [
  { num: 1, title: "What Is AI, Really?", videoId: "" },
  { num: 2, title: "AI vs. Machine Learning vs. Deep Learning", videoId: "" },
  { num: 3, title: "How Does a Computer Actually Learn?", videoId: "" },
];

export default function Series() {
  const [episodes, setEpisodes] = useState<Episode[]>(fallbackEpisodes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlaylist() {
      if (!YOUTUBE_API_KEY) {
        setLoading(false);
        return;
      }
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
            const title = fullTitle
              .replace(/\s*\|.*$/, "")
              .trim();
            return {
              num: epNum,
              title,
              videoId: item.snippet.resourceId?.videoId || "",
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
      } finally {
        setLoading(false);
      }
    }
    fetchPlaylist();
  }, []);

  const totalEpisodes = episodes.length;
  const recentEpisodes = episodes.slice(0, VISIBLE_COUNT);
  const olderCount = totalEpisodes - VISIBLE_COUNT;

  return (
    <section id="series" className="py-24 md:py-32 bg-[#0a0a14]">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-[#64ffda] text-sm font-medium tracking-[0.2em] uppercase mb-6">
          Free Series
        </p>

        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Zero to Hero: AI Fundamentals
        </h2>

        <p className="text-[#b4b4cc] text-lg mb-12 max-w-2xl">
          No jargon. No prerequisites. A complete beginner&apos;s guide to
          understanding AI &mdash; from &quot;what is this?&quot; to building
          your first workflow. {totalEpisodes} episodes and counting.
        </p>

        <p className="text-[#b4b4cc]/50 text-xs uppercase tracking-widest mb-4">
          Latest episodes
        </p>

        <div className="grid gap-3">
          {recentEpisodes.map((ep) => (
            <a
              key={ep.num}
              href={
                ep.videoId
                  ? `https://www.youtube.com/watch?v=${ep.videoId}&list=${PLAYLIST_ID}`
                  : `https://youtube.com/@CadmusLab`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-5 py-4 border border-white/[0.06] hover:border-white/[0.15] transition-colors group no-underline"
            >
              <span className="text-[#64ffda] text-sm font-mono w-12 shrink-0">
                EP {String(ep.num).padStart(2, "0")}
              </span>
              <span className="text-white/90 group-hover:text-white transition-colors flex-1">
                {ep.title}
              </span>
              <span className="text-xs text-[#64ffda] border border-[#64ffda]/30 px-2 py-0.5 uppercase tracking-wider">
                Watch
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black font-medium tracking-wide uppercase text-sm hover:bg-[#64ffda] transition-colors"
          >
            Watch Full Playlist
          </a>
          {olderCount > 0 && (
            <p className="text-[#b4b4cc]/50 text-sm">
              + {olderCount} more episodes in the playlist
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
