export default function Home() {
  return (
    <main>
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

      <section className="hero" id="home">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-eyebrow">
            Construction • Estimation • Electrical Engineering
          </div>

          <h1>
            WE BUILD.
            <br />
            WE <span>POWER.</span>
            <br />
            WE DELIVER.
          </h1>

          <p>
            Construction, quantity estimation and electrical engineering
            solutions for residential and commercial projects across Ghana.
          </p>

          <div className="hero-actions">
            <a href="#estimate" className="btn btn-primary">
              Request an Estimate
            </a>

            <a href="#estimate" className="btn btn-outline">
              Upload Your Floor Plan
            </a>
          </div>

          <div className="ghana-accent">
            <span className="ghana-red" />
            <span className="ghana-gold" />
            <span className="ghana-green" />
          </div>
        </div>
      </section>

      <section className="capability-strip">
        <div className="container capability-grid">
          <div>
            <strong>01</strong>
            <span>Construction</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Quantity Estimation</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Electrical Engineering</span>
          </div>

          <div>
            <strong>04</strong>
            <span>Project Management</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container two-column">
          <div className="image-placeholder">
            <span>PROJECT IMAGE</span>
          </div>

          <div className="section-copy">
            <div className="section-label-group">
              <div className="section-label">ABOUT POWERBUILT</div>
              <div className="ghana-accent">
                <span className="ghana-red" />
                <span className="ghana-gold" />
                <span className="ghana-green" />
              </div>
            </div>

            <h2>
              Built with precision.
              <br />
              Powered by experience.
            </h2>

            <p>
              J. A. POWERBUILT CONSTRUCTION provides coordinated construction,
              estimating and electrical engineering solutions designed to take
              projects from planning through delivery.
            </p>

            <div className="mini-services">
              <span>Residential</span>
              <span>Commercial</span>
              <span>Electrical</span>
              <span>Renovations</span>
            </div>

            <a href="#services" className="text-link">
              Explore Our Services →
            </a>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div className="section-label-group">
              <div className="section-label">WHAT WE DO</div>
              <div className="ghana-accent">
                <span className="ghana-red" />
                <span className="ghana-gold" />
                <span className="ghana-green" />
              </div>
            </div>
            <h2>One team. Multiple disciplines.</h2>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <span>01</span>
              <h3>Construction</h3>
              <p>
                Residential and commercial building projects from foundation
                through completion.
              </p>
            </article>

            <article className="service-card">
              <span>02</span>
              <h3>Quantity Estimation</h3>
              <p>
                Material takeoffs, cost estimates and bills of quantities for
                better project planning.
              </p>
            </article>

            <article className="service-card">
              <span>03</span>
              <h3>Electrical Engineering</h3>
              <p>
                Electrical design, installation, testing, upgrades and
                consulting.
              </p>
            </article>

            <article className="service-card">
              <span>04</span>
              <h3>Renovations</h3>
              <p>
                Building extensions, remodelling and upgrades for residential
                and commercial spaces.
              </p>
            </article>

            <article className="service-card">
              <span>05</span>
              <h3>Project Management</h3>
              <p>
                Site supervision, coordination, planning and cost monitoring.
              </p>
            </article>

            <article className="service-card">
              <span>06</span>
              <h3>Pre-Construction Consulting</h3>
              <p>
                Early-stage advice to help clients understand feasibility,
                requirements and budgets.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="estimate-section" id="estimate">
        <div className="container estimate-layout">
          <div>
            <div className="section-label-group">
              <div className="section-label light-label">START YOUR PROJECT</div>
              <div className="ghana-accent">
                <span className="ghana-red" />
                <span className="ghana-gold" />
                <span className="ghana-green" />
              </div>
            </div>

            <h2>Have a floor plan?</h2>

            <p>
              Upload your drawings and tell us what you need. Our team can
              review your project and prepare the appropriate estimate.
            </p>
          </div>

          <div className="estimate-card">
            <div className="estimate-card-top">
              <span>UPLOAD YOUR PLAN</span>
            </div>

            <label>Project Type</label>
            <select defaultValue="">
              <option value="" disabled>
                Select project type
              </option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Renovation</option>
              <option>Electrical</option>
            </select>

            <label>Project Location</label>
            <input type="text" placeholder="Accra, Tema, Kumasi..." />

            <label>Upload Drawings</label>

            <div className="upload-box">
              <strong>Drag files here or browse</strong>
              <small>PDF • JPG • PNG</small>
            </div>

            <button className="btn btn-primary full-button">
              Get My Estimate
            </button>
          </div>
        </div>
      </section>

      <section className="section project-section" id="projects">
        <div className="container">
          <div className="section-heading horizontal-heading">
            <div>
              <div className="section-label-group">
                <div className="section-label">OUR WORK</div>
                <div className="ghana-accent">
                  <span className="ghana-red" />
                  <span className="ghana-gold" />
                  <span className="ghana-green" />
                </div>
              </div>
              <h2>Selected Projects</h2>
            </div>

            <a href="#projects" className="text-link">
              View All Projects →
            </a>
          </div>

          <div className="project-grid">
            <div className="project-card large-project">
              <span>FEATURED PROJECT</span>
            </div>

            <div className="project-card">
              <span>PROJECT</span>
            </div>

            <div className="project-card">
              <span>PROJECT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="build-power-section" id="electrical">
        <div className="build-panel">
          <div>
            <span>CONSTRUCTION</span>
            <h2>BUILD.</h2>
          </div>
        </div>

        <div className="power-panel">
          <div>
            <span>ELECTRICAL ENGINEERING</span>
            <h2>POWER.</h2>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label-group">
              <div className="section-label">OUR PROCESS</div>
              <div className="ghana-accent">
                <span className="ghana-red" />
                <span className="ghana-gold" />
                <span className="ghana-green" />
              </div>
            </div>
            <h2>From plan to completion.</h2>
          </div>

          <div className="process-grid">
            {[
              ["01", "Tell us about your project"],
              ["02", "Upload your plans"],
              ["03", "We review & estimate"],
              ["04", "Consultation & proposal"],
              ["05", "Construction"],
              ["06", "Project delivery"],
            ].map(([number, text]) => (
              <div className="process-item" key={number}>
                <strong>{number}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="container">
          <div className="section-label-group">
            <span className="section-label light-label">LET'S BUILD</span>
            <div className="ghana-accent">
              <span className="ghana-red" />
              <span className="ghana-gold" />
              <span className="ghana-green" />
            </div>
          </div>

          <h2>Have a project in mind?</h2>

          <p>Let's price it properly before you build.</p>

          <div className="hero-actions">
            <a href="#estimate" className="btn btn-primary">
              Upload Your Floor Plan
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Powerbuilt
            </a>
          </div>
        </div>
      </section>

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
    </main>
  );
}
