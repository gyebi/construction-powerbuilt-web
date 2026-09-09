import SectionLabel from "./SectionLabel";

export default function EstimateSection() {
  return (
    <section className="estimate-section" id="estimate">
      <div className="container estimate-layout">
        <div>
          <SectionLabel light>START YOUR PROJECT</SectionLabel>

          <h2>Have a floor plan?</h2>

          <p>
            Upload your drawings and tell us what you need. Our team can review
            your project and prepare the appropriate estimate.
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

          <button className="btn btn-primary full-button">Get My Estimate</button>
        </div>
      </div>
    </section>
  );
}
