export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <a href="#hero" className="logo">
        <span className="logo-red">VYKE’s</span> <span>STUDIO</span>
      </a>

      {/* Navigation */}
      <nav className="nav">
        <a href="#before-after">Before & After</a>
        <a href="#recent-projects">Projects</a>
        <a href="#graphics">Graphics</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact" className="btn-primary">
          Book a call
        </a>
      </nav>
    </header>
  );
}
