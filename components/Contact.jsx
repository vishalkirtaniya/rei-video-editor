"use client";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <a
              href="mailto:reivideos.editor@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="info-item"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="info-icon">📧</div>
              <div className="info-details">
                <h4>Email</h4>
              </div>
            </a>
          </div>

          <div className="info-item">
            <a
              href="https://wa.me/918839054275"
              target="_blank"
              rel="noopener noreferrer"
              className="info-item"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="info-icon">📱</div>
              <div className="info-details">
                <h4>Phone</h4>
              </div>
            </a>
          </div>

          <div className="info-item">
            <a
              href="https://discord.gg/yourlink"
              target="_blank"
              rel="noopener noreferrer"
              className="info-item"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="info-icon">💬</div>
              <div className="info-details">
                <h4>Discord</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
