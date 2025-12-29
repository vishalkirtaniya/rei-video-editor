"use client";

import { useEffect, useRef, useState } from "react";
import kingsMedia from "@/public/images/3kings_media.jpg";
import kingsKeen from "@/public/images/3keenking.jpg";
import lakes from "@/public/images/lakes_logo.jpg"
import Image from "next/image";

export const COLLABORATIONS = [
  {
    id: 1,
    name: "True Crime Transcripts",
    url: "https://youtube.com/@truecrimetranscripts",
    image: "https://yt3.googleusercontent.com/aZDAhj3afyN55aQm36jnSiHHhl_2X2lwVeqncGjUcjI75XZvhHRpug-Mg1HBSGXU0Qb_H6XvGwo=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    name: "100M Videos Official",
    url: "https://youtube.com/@100mvideosofficial",
    image: "https://yt3.googleusercontent.com/ytc/AIdro_moFc5q_FLI8b1XJYvb_QzmndVlukDePZOa-wn6n_O8100=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 3,
    name: "Fact File Official",
    url: "https://youtube.com/@factfileoffical",
    image: "https://yt3.googleusercontent.com/PDQuIzvH2UrYxjmm_f-81j22Yjq5u-sx1j4jzxoBRNhwEnIlfp6FBAPZ9SEuc5VZ2-mUr8TD6w=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 4,
    name: "The Space Wind",
    url: "https://www.youtube.com/@thespacewind",
    image: "https://yt3.googleusercontent.com/qlzU1ZxiZC_ZYY-X4FMZcs1lnPHoGyzoqKspreh_FEzh4FPQEkvJBGC_xGMZmIjGwqB02NhHyA=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 5,
    name: "Alex Costa",
    url: "https://www.youtube.com/@alexcosta",
    image: "https://yt3.googleusercontent.com/477rdkSy6FK6bWfpd5-jLBvfO0BKxZhWOxgh9fLetdiFiwvQpG2v-VwtLEE0knjGjKVdppHI9w=s160-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 6,
    name: "3KingKeen",
    url: "https://www.instagram.com/3kingkeen/",
    image: kingsKeen,
  },
  {
    id: 7,
    name: "3King Media",
    url: "https://www.instagram.com/3kingmedia/reels/",
    image: kingsMedia,
  },
  {
    id: 8,
    name: "The Lakes Treatment",
    url: "https://www.instagram.com/thelakestreatment/",
    image: lakes,
  },
];


export default function Collaborations() {
  const scrollRef = useRef(null);
  const speedRef = useRef(0.35);
  const isManualScrollRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  /* 🔁 Auto infinite parallax */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId;

    const animate = () => {
      if (!isManualScrollRef.current) {
        el.scrollLeft += speedRef.current;

        // Infinite reset
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  /* 👉 Button-controlled movement */
  const scrollByCard = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = 320;

    // Pause auto-scroll
    isManualScrollRef.current = true;
    speedRef.current = 0;

    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });

    // Resume auto-scroll after interaction
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
      speedRef.current = 0.35;
    }, 600);
  };

  return (
    <section className="collaborations" id="collaborations">
      <h2 className="section-title">TRUSTED BY CREATORS</h2>

      <div className="collaboration-carousel-wrapper">
        <button
          className="carousel-btn left"
          onClick={() => scrollByCard("left")}
        >
          ‹
        </button>

        <div
          className="collaboration-carousel infinite"
          ref={scrollRef}
          onMouseEnter={() => (speedRef.current = 0)}
          onMouseLeave={() => (speedRef.current = 0.35)}
        >
          {[...COLLABORATIONS, ...COLLABORATIONS].map((item, index) => (
            <div key={`${item.id}-${index}`} className="collaboration-card">
              <div className="creator-header">
                {typeof item.image === "string" ? (
  <img
    src={item.image}
    alt={item.name}
    className="creator-avatar"
    loading="lazy"
  />
) : (
  <Image
    src={item.image}
    alt={item.name}
    className="creator-avatar"
  />
)}

                <div className="creator-meta">
                  <h3 className="collab-name">{item.name}</h3>
                  <p className="creator-subs">{item.subscribers}</p>
                </div>
              </div>

              <a
                href={item.url}
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
          onClick={() => scrollByCard("right")}
        >
          ›
        </button>
      </div>
    </section>
  );
}
