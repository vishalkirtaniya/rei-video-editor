// components/ImageGallery.jsx
"use client";

import { useState } from "react";
import { IMAGE_SECTIONS } from "./ImageCollection";

export default function ImageGallery() {
  const [activeTab, setActiveTab] = useState(IMAGE_SECTIONS[0].key);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const activeSectionIndex = IMAGE_SECTIONS.findIndex(
    (s) => s.key === activeTab
  );

  const activeSection = IMAGE_SECTIONS[activeSectionIndex] || IMAGE_SECTIONS[0];

  const modalSection = IMAGE_SECTIONS[currentSectionIndex] || IMAGE_SECTIONS[0];

  const currentImage =
    modalSection.images && modalSection.images[currentImageIndex];

  const openModal = (sectionIndex, imageIndex) => {
    setCurrentSectionIndex(sectionIndex);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const showNext = () => {
    setDirection("next");
    const section = IMAGE_SECTIONS[currentSectionIndex];

    if (currentImageIndex < section.images.length - 1) {
      setCurrentImageIndex((i) => i + 1);
    } else {
      const nextSection = (currentSectionIndex + 1) % IMAGE_SECTIONS.length;
      setCurrentSectionIndex(nextSection);
      setCurrentImageIndex(0);
    }
  };

  const showPrev = () => {
    setDirection("prev");
    const section = IMAGE_SECTIONS[currentSectionIndex];

    if (currentImageIndex > 0) {
      setCurrentImageIndex((i) => i - 1);
    } else {
      const prevSection =
        (currentSectionIndex - 1 + IMAGE_SECTIONS.length) %
        IMAGE_SECTIONS.length;
      const lastIndex = IMAGE_SECTIONS[prevSection].images.length - 1;

      setCurrentSectionIndex(prevSection);
      setCurrentImageIndex(lastIndex);
    }
  };

  return (
    <section className="features" id="gallery">
      <h2 className="section-title">IMAGE GALLERY</h2>

      <div className="features-container">
        {/* Tabs */}
        <div className="modal-labels-row">
          {IMAGE_SECTIONS.map((section) => (
            <button
              key={section.key}
              className={`modal-label-chip ${
                activeTab === section.key ? "active" : ""
              }`}
              onClick={() => {
                setActiveTab(section.key);
                setCurrentSectionIndex(
                  IMAGE_SECTIONS.findIndex((s) => s.key === section.key)
                );
                setCurrentImageIndex(0);
              }}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="feature-content">
          <div className="content-panel active">
            <h3>{activeSection.label}</h3>

            <div className="video-grid">
              {activeSection.images.map((img, index) => (
                <div
                  key={img.id}
                  className="video-thumbnail-wrapper"
                  onClick={() => openModal(activeSectionIndex, index)}
                >
                  <div className="thumbnail-overlay">
                    <img
                      src={img.thumbnail}
                      alt={img.title}
                      className="video-thumbnail"
                    />
                  </div>
                  <p className="video-title">{img.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && currentImage && (
        <div className="video-modal-backdrop" onClick={closeModal}>
          <div className="video-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              ✕
            </button>

            {/* Section chips */}
            <div className="modal-labels-row">
              {IMAGE_SECTIONS.map((sec, idx) => (
                <button
                  key={sec.key}
                  className={`modal-label-chip ${
                    idx === currentSectionIndex ? "active" : ""
                  }`}
                  onClick={() => {
                    setCurrentSectionIndex(idx);
                    setCurrentImageIndex(0);
                  }}
                >
                  {sec.label}
                </button>
              ))}
            </div>

            <div className="video-modal-content">
              <button className="modal-nav-btn" onClick={showPrev}>
                ‹
              </button>

              <div
                key={`${currentSectionIndex}-${currentImageIndex}`}
                className={`video-iframe-wrapper slide-${direction}`}
              >
                <img
                  src={currentImage.hd}
                  alt={currentImage.title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                  }}
                />
                <p className="modal-video-title">{currentImage.title}</p>
              </div>

              <button className="modal-nav-btn" onClick={showNext}>
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
