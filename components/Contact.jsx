"use client";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form">
          <form id="contactForm">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Connect With Us</h3>

          <div className="info-item">
            <div className="info-icon">📱</div>
            <div className="info-details">
              <h4>Discord</h4>
              <a
                href="https://discord.com/users/1390678376465043628"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                link
              </a>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-details">
              <h4>Location</h4>
              <p>Jaipur, India</p>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <iframe
              title="Jaipur Location"
              src="https://www.google.com/maps?q=26.9124,75.7873&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="google-map"
            ></iframe>

            <div className="map-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
