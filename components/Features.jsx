// components/Features.jsx
"use client";

import { useEffect, useState } from "react";
import { FEATURE_SECTIONS } from "./videoData"; // adjust path if needed

export default function Features() {
  const [activeTab, setActiveTab] = useState("performance");

  // For modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" | "prev"

  const activeSectionIndex = FEATURE_SECTIONS.findIndex(
    (sec) => sec.key === activeTab
  );
  // Find the section based on activeTab
  const activeSection =
    FEATURE_SECTIONS[activeSectionIndex] || FEATURE_SECTIONS[0];

  const modalSection =
    FEATURE_SECTIONS[currentSectionIndex] || FEATURE_SECTIONS[0];

  const currentVideo =
    modalSection.videos && modalSection.videos[currentVideoIndex];

  // Optional: keep your existing class syncing for active tabs if you rely on CSS
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab-item");
    tabs.forEach((t) => t.classList.remove("active"));

    const activeTabEl = document.querySelector(
      `.tab-item[data-tab="${activeTab}"]`
    );
    if (activeTabEl) activeTabEl.classList.add("active");
  }, [activeTab]);

  const openModal = (sectionIndex, videoIndex) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentVideoIndex(videoIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNextVideo = () => {
    setDirection("next");

    const section = FEATURE_SECTIONS[currentSectionIndex];
    if (!section || !section.videos?.length) return;

    const isLastVideo = currentVideoIndex === section.videos.length - 1;

    if (!isLastVideo) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else {
      const nextSectionIndex =
        (currentSectionIndex + 1) % FEATURE_SECTIONS.length;
      setCurrentSectionIndex(nextSectionIndex);
      setCurrentVideoIndex(0);
    }
  };

  const showPrevVideo = () => {
    setDirection("prev");

    const section = FEATURE_SECTIONS[currentSectionIndex];
    if (!section || !section.videos?.length) return;

    const isFirstVideo = currentVideoIndex === 0;

    if (!isFirstVideo) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    } else {
      const prevSectionIndex =
        (currentSectionIndex - 1 + FEATURE_SECTIONS.length) %
        FEATURE_SECTIONS.length;

      const prevSection = FEATURE_SECTIONS[prevSectionIndex];
      const lastIndex = (prevSection?.videos?.length || 1) - 1;

      setCurrentSectionIndex(prevSectionIndex);
      setCurrentVideoIndex(lastIndex);
    }
  };

  return (
    <section className="features" id="features">
      <h2 className="section-title">EDITED TO PERFECTION</h2>

      <div className="features-container">
        {/* Tabs */}
        <div className="feature-tabs">
          {FEATURE_SECTIONS.map((section) => (
            <div
              key={section.key}
              className={`tab-item ${
                activeTab === section.key ? "active" : ""
              }`}
              data-tab={section.key}
              onClick={() => setActiveTab(section.key)}
            >
              <span className="tab-icon">{section.label}</span>
            </div>
          ))}
        </div>

        {/* Content: Thumbnails grid */}
        <div className="feature-content">
          <div className="content-panel active">
            <h3>{activeSection.label}</h3>
            <div className="video-grid">
              {activeSection.videos?.map((video, index) => (
                <div
                  key={video.id}
                  className="video-thumbnail-wrapper"
                  onClick={() => openModal(activeSectionIndex, index)}
                >
                  <div className="thumbnail-overlay">
                    <img
                      src={video.thumbnail_link}
                      alt={video.title}
                      className="video-thumbnail"
                    />
                    <div className="play-button-overlay">
                      <span className="play-icon">▶</span>
                    </div>
                  </div>
                  <p className="video-title">{video.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for video player */}
      {isModalOpen && currentVideo && (
        <div className="video-modal-backdrop" onClick={closeModal}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ✕
            </button>

            {/* Section label on top */}
            {/* <h2 className="modal-section-label">{modalSection.label}</h2> */}

            {/* Scrollable label chips row */}
            <div className="modal-labels-row">
              {FEATURE_SECTIONS.map((sec, idx) => (
                <button
                  key={sec.key}
                  className={`modal-label-chip ${
                    idx === currentSectionIndex ? "active" : ""
                  }`}
                  onClick={() => {
                    setCurrentSectionIndex(idx);
                    setCurrentVideoIndex(0); // start from first video of that label
                  }}
                >
                  {sec.label}
                </button>
              ))}
            </div>

            <div className="video-modal-content">
              <button
                className="modal-nav-btn modal-prev-btn"
                onClick={showPrevVideo}
              >
                ‹
              </button>

              <div
                key={`${currentSectionIndex}-${currentVideoIndex}`}
                className={`video-iframe-wrapper slide-${direction}`}
              >
                <iframe
                  src={currentVideo.video_link}
                  title={currentVideo.title}
                  allowFullScreen
                ></iframe>
                <p className="modal-video-title">{currentVideo.title}</p>
              </div>

              <button
                className="modal-nav-btn modal-next-btn"
                onClick={showNextVideo}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
