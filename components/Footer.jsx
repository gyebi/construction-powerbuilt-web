export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-name">J. A. POWERBUILT</div>
          <div className="brand-subtitle">CONSTRUCTION</div>
        </div>

        <div>
          <strong>Services</strong>
          <a href="#services">Construction</a>
          <a href="#services">Estimation</a>
          <a href="#electrical">Electrical</a>
        </div>

        <div>
          <strong>Company</strong>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <strong>Start a Project</strong>
          <a href="#estimate">Request Estimate</a>
          <a href="#estimate">Upload Floor Plan</a>
        </div>
      </div>

      <div className="footer-ghana">
        <span className="ghana-red" />
        <span className="ghana-gold" />
        <span className="ghana-green" />
      </div>
    </footer>
  );
}
