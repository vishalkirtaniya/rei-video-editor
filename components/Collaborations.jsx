"use client";

import { useEffect, useRef, useState } from "react";

const vercel_svg = "/vercel.svg";

const COLLABORATIONS = [
  {
    id: 1,
    name: "Rei Studios",
    subscribers: "1.2M subscribers",
    channelUrl: "https://youtube.com/@reistudios",
    image: vercel_svg,
    role: "Video Editor / Motion Designer",
    description:
      "Delivered cinematic edits for short-form and long-form content with high retention.",
    services: ["Video Editing", "Color Grading", "Motion Graphics"],
  },
  {
    id: 2,
    name: "PixelForge",
    subscribers: "845K subscribers",
    channelUrl: "https://youtube.com/@pixelforge",
    image: vercel_svg,
    role: "Creative Editor",
    description:
      "Helped refine visual storytelling with fast-paced edits and polished transitions.",
    services: ["Short-form Editing", "Transitions", "Visual Effects"],
  },
  {
    id: 3,
    name: "CodeCraft",
    subscribers: "410K subscribers",
    channelUrl: "https://youtube.com/@codecraft",
    image: vercel_svg,
    role: "Technical Content Partner",
    description:
      "Worked on long-form educational content with clean pacing and clarity.",
    services: ["Educational Editing", "Timeline Cleanup"],
  },
  {
    id: 4,
    name: "Neon Gaming",
    subscribers: "2.3M subscribers",
    channelUrl: "https://youtube.com/@neongaming",
    image: vercel_svg,
    role: "Gaming Content Editor",
    description:
      "Edited high-energy gaming highlights optimized for viewer retention.",
    services: ["Gameplay Highlights", "Sound Design", "Jump Cuts"],
  },
  {
    id: 5,
    name: "MindShift",
    subscribers: "620K subscribers",
    channelUrl: "https://youtube.com/@mindshift",
    image: vercel_svg,
    role: "Story Editor",
    description:
      "Enhanced narrative-driven videos with smooth pacing and visual rhythm.",
    services: ["Storytelling", "Color Correction"],
  },
  {
    id: 6,
    name: "Daily Tech",
    subscribers: "1.8M subscribers",
    channelUrl: "https://youtube.com/@dailytech",
    image: vercel_svg,
    role: "Tech Video Editor",
    description:
      "Produced clean, professional edits for tech reviews and explainers.",
    services: ["Tech Reviews", "Motion Graphics"],
  },
  {
    id: 7,
    name: "Creator Labs",
    subscribers: "290K subscribers",
    channelUrl: "https://youtube.com/@creatorlabs",
    image: vercel_svg,
    role: "Post-Production Partner",
    description:
      "Supported creators with consistent post-production workflows.",
    services: ["Workflow Optimization", "Batch Editing"],
  },
  {
    id: 8,
    name: "Visionary Vlogs",
    subscribers: "980K subscribers",
    channelUrl: "https://youtube.com/@visionaryvlogs",
    image: vercel_svg,
    role: "Vlog Editor",
    description:
      "Created engaging lifestyle vlogs with natural pacing and color tone.",
    services: ["Vlog Editing", "Color Grading"],
  },
  {
    id: 9,
    name: "Shorts Factory",
    subscribers: "3.5M subscribers",
    channelUrl: "https://youtube.com/@shortsfactory",
    image: vercel_svg,
    role: "Short-form Specialist",
    description:
      "Optimized short-form content for virality and algorithm performance.",
    services: ["Reels", "Shorts", "Captions"],
  },
  {
    id: 10,
    name: "The Learning Hub",
    subscribers: "560K subscribers",
    channelUrl: "https://youtube.com/@thelearninghub",
    image: vercel_svg,
    role: "Educational Content Editor",
    description:
      "Edited structured learning content with emphasis on clarity and flow.",
    services: ["Educational Editing", "Visual Callouts"],
  },
];

export default function Collaborations() {
  const scrollRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    setIsAtStart(el.scrollLeft <= 0);
    setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const cardWidth = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState(); // initial check
    el.addEventListener("scroll", updateScrollState);

    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <section className="collaborations" id="collaborations">
      <h2 className="section-title">TRUSTED BY CREATORS</h2>

      <div className="collaboration-carousel-wrapper">
        <button
          className="carousel-btn left"
          onClick={() => scroll("left")}
          disabled={isAtStart}
        >
          ‹
        </button>

        <div className="collaboration-carousel" ref={scrollRef}>
          {COLLABORATIONS.map((item) => (
            <div key={item.id} className="collaboration-card">
              <div className="creator-header">
                <img
                  src={item.image}
                  alt={item.name}
                  className="creator-avatar"
                  loading="lazy"
                />

                <div className="creator-meta">
                  <h3 className="collab-name">{item.name}</h3>
                  <p className="creator-subs">{item.subscribers}</p>
                </div>
              </div>

              {/* <p className="collab-role">{item.role}</p>
              <p className="collab-description">{item.description}</p> */}

              {/* <div className="collab-services">
                {item.services.map((service) => (
                  <span key={service} className="collab-service-chip">
                    {service}
                  </span>
                ))}
              </div> */}

              <a
                href={item.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="creator-link"
              >
                Visit Channel →
              </a>
            </div>
          ))}
        </div>

        <button
          className="carousel-btn right"
          onClick={() => scroll("right")}
          disabled={isAtEnd}
        >
          ›
        </button>
      </div>
    </section>
  );
}
