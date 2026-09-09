export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <div className="brand">
          <div className="brand-mark">JP</div>

          <div>
            <div className="brand-name">J. A. POWERBUILT</div>
            <div className="brand-subtitle">CONSTRUCTION</div>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#electrical">Electrical</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="btn btn-primary nav-cta" href="#estimate">
          Request an Estimate
        </a>
      </div>
    </header>
  );
}
