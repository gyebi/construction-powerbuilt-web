"use client";

import { useState } from "react";
import "./estimate-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";




const initialForm = {
  customerName: "",
  email: "",
  phone: "",
  whatsapp: "",
  projectLocation: "",
  projectType: "",
  estimateType: "",
  description: "",
};

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ALLOWED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
];

const whatsappNumber =
  process.env.NEXT_PUBLIC_POWERBUILT_WHATSAPP_NUMBER;

function getWhatsAppUrl(referenceNumber) {
  const message = [
    "Hello J. A. POWERBUILT CONSTRUCTION.",
    "",
    `I just submitted estimate request ${referenceNumber}.`,
    "",
    "I would like to continue discussing my project on WhatsApp.",
  ].join("\n");

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export default function EstimatePage() {
  const [form, setForm] = useState(initialForm);
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleFiles(event) {
    const selectedFiles = Array.from(event.target.files || []);

    setError("");

    if (selectedFiles.length > MAX_FILES) {
      setError(`You can upload a maximum of ${MAX_FILES} files.`);
      event.target.value = "";
      return;
    }

    for (const file of selectedFiles) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setError("Only PDF, JPG and PNG files are supported.");
        event.target.value = "";
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        setError(`${file.name} is larger than 10 MB.`);
        event.target.value = "";
        return;
      }

      if (file.size <= 0) {
        setError(`${file.name} is empty.`);
        event.target.value = "";
        return;
      }
    }

    setFiles(selectedFiles);
  }

  function removeFile(indexToRemove) {
    setFiles((current) =>
      current.filter((_, index) => index !== indexToRemove)
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (submitting) return;

    setSubmitting(true);
    setError("");
    setResult(null);

    try {
      // Step 1: create the estimate request
      const estimateResponse = await fetch("/api/estimates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const estimateData = await estimateResponse.json();

      if (!estimateResponse.ok) {
        throw new Error(
          estimateData?.error ||
          "We could not submit your estimate request."
        );
      }

      const estimate = estimateData.estimate;

      // Step 2: upload drawings, if any were selected
      if (files.length > 0) {
        const uploadData = new FormData();

        files.forEach((file) => {
          uploadData.append("files", file);
        });

        const uploadResponse = await fetch(
          `/api/estimates/${estimate.id}/files`,
          {
            method: "POST",
            body: uploadData,
          }
        );

        const uploadResult = await uploadResponse.json();

        if (!uploadResponse.ok) {
          throw new Error(
            uploadResult?.error ||
            "Your request was created, but the drawings could not be uploaded."
          );
        }
      }

      setResult({
        ...estimate,
        uploadedCount: files.length,
      });

      setForm(initialForm);
      setFiles([]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "We could not submit your estimate request."
      );
    } finally {
      setSubmitting(false);
    }
  }



  return (
    <main className="internal-page estimate-page">
      <section className="container">
        <div className="estimate-page-heading">
          <div className="section-label">REQUEST AN ESTIMATE</div>

          <h1>Tell us about your project.</h1>

          <p>
            Share your project details and upload your drawings. Our team will
            review the information and contact you regarding the next steps.
          </p>
        </div>

        {result ? (
          <div className="estimate-success" role="status">
            <span>REQUEST RECEIVED</span>

            <h2>Thank you.</h2>

            <p>
              Your estimate request has been recorded successfully.
            </p>

            <div className="estimate-reference">
              <small>REFERENCE NUMBER</small>
              <strong>{result.referenceNumber}</strong>
            </div>

            {whatsappNumber ? (
              <a
                className="btn btn-whatsapp"
                href={getWhatsAppUrl(result.referenceNumber)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                Continue on WhatsApp
              </a>
            ) : null}

            {result.uploadedCount > 0 ? (
              <p>
                {result.uploadedCount} drawing
                {result.uploadedCount === 1 ? "" : "s"} uploaded successfully.
              </p>
            ) : (
              <p>No drawings were attached to this request.</p>
            )}

            <p>
              Keep this reference number for future communication with
              J. A. POWERBUILT CONSTRUCTION.
            </p>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setResult(null)}
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form className="estimate-form" onSubmit={handleSubmit}>
            <div className="estimate-form-section">
              <div className="estimate-form-section-heading">
                <span>01</span>

                <div>
                  <h2>Your Details</h2>
                  <p>Tell us how to contact you.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="customerName">Full Name *</label>
                  <input
                    id="customerName"
                    name="customerName"
                    type="text"
                    value={form.customerName}
                    onChange={handleChange}
                    maxLength={120}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={30}
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="whatsapp">WhatsApp</label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={handleChange}
                    maxLength={30}
                    autoComplete="tel"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={180}
                    autoComplete="email"
                  />
                </div>
              </div>
            </div>

            <div className="estimate-form-section">
              <div className="estimate-form-section-heading">
                <span>02</span>

                <div>
                  <h2>Project Details</h2>
                  <p>Tell us what you are planning.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="projectLocation">Project Location *</label>
                  <input
                    id="projectLocation"
                    name="projectLocation"
                    type="text"
                    value={form.projectLocation}
                    onChange={handleChange}
                    maxLength={180}
                    placeholder="Accra, Tema, Kumasi..."
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="projectType">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="renovation">Renovation</option>
                    <option value="electrical">Electrical</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="estimateType">Estimate Required</label>
                  <select
                    id="estimateType"
                    name="estimateType"
                    value={form.estimateType}
                    onChange={handleChange}
                  >
                    <option value="">Select estimate type</option>
                    <option value="full_construction">
                      Full Construction Estimate
                    </option>
                    <option value="bill_of_quantities">
                      Bill of Quantities
                    </option>
                    <option value="materials">Materials Estimate</option>
                    <option value="labour">Labour Estimate</option>
                    <option value="electrical">Electrical Estimate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="description">Project Description</label>

                <textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  maxLength={3000}
                  rows={7}
                  placeholder="Tell us about the project, building size, number of floors, current stage, or anything else that may help us understand the work."
                />
              </div>
            </div>

            <div className="estimate-form-section">
              <div className="estimate-form-section-heading">
                <span>03</span>

                <div>
                  <h2>Drawings & Floor Plans</h2>
                  <p>
                    Upload up to five PDF, JPG or PNG files. Maximum 10 MB each.
                  </p>
                </div>
              </div>

              <div className="form-field form-field-full">
                <label htmlFor="files">Upload Drawings</label>

                <input
                  id="files"
                  name="files"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                  multiple
                  onChange={handleFiles}
                />
              </div>

              {files.length > 0 ? (
                <div className="selected-files">
                  {files.map((file, index) => (
                    <div className="selected-file" key={`${file.name}-${index}`}>
                      <div>
                        <strong>{file.name}</strong>
                        <span>
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {error ? (
              <div className="form-error" role="alert">
                {error}
              </div>
            ) : null}

            <div className="estimate-submit-row">
              <p>
                By submitting this request, you confirm that the information
                and drawings provided are authorized for POWERBUILT to review.
              </p>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
              >
                {submitting
                  ? "Submitting..."
                  : "Submit Estimate Request"}
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}