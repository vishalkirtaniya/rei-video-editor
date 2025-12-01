// components/About.jsx
export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About REI</h2>
      <div className="about-content">
        <div className="about-text">
          <h2>Crafting Stories Through Powerful Editing</h2>
          <p>
            At <strong>Rei Video Editor</strong>, we don’t just edit videos — we
            transform raw footage into stunning visual experiences. Our team is
            built on passion, creativity, and precision, delivering edits that
            elevate every project to its full potential.
          </p>
          <p>
            With a highly skilled and dedicated group of professional editors,
            we handle everything from fast-paced shorts and cinematic
            storytelling to content designed for brand growth and audience
            engagement. Every frame matters, and our goal is to turn ideas into
            memorable visual journeys.
          </p>
          <p>
            We believe in consistency, quality, and absolute commitment to our
            clients. Deadlines are respected, expectations are exceeded, and
            every video receives the attention it deserves.
          </p>
        </div>

        <div className="about-visual">
          <div className="about-graphic" />
        </div>
      </div>

      <div className="about-content" style={{ marginTop: 80 }}>
        <div className="about-visual">
          <div className="about-graphic-alt">
            <div className="hexagon" />
            <div className="hexagon" />
            <div className="hexagon" />
          </div>
        </div>

        <div className="about-text">
          <h2>Driven by Creativity & Excellence</h2>
          <p>
            Every member of the Rei team brings unique creativity and
            professional expertise to the table. We specialize in producing
            content that captivates audiences across platforms — YouTube edits,
            short-form reels, gaming montages, advertisements, music visuals,
            and more.
          </p>
          <p>
            Our collaborative approach ensures that clients receive not just an
            edit, but a polished product that aligns with vision, brand
            identity, and storytelling impact. We push boundaries with every
            project to deliver top-tier results that stand above the rest.
          </p>
          <p>
            Partner with Rei Video Editor for a seamless and reliable editing
            experience — where creativity meets discipline, and every idea
            becomes a masterpiece.
          </p>
        </div>
      </div>
    </section>
  );
}
