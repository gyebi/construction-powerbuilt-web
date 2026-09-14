# J. A. POWERBUILT CONSTRUCTION

A modern construction company website for **J. A. POWERBUILT CONSTRUCTION**, designed to present the company professionally, showcase completed work and services, build trust, and convert visitors into qualified project enquiries and estimate requests.

The visual direction is inspired by premium construction websites such as Vinewood Construction while being adapted for a Ghanaian construction company and local market expectations.

---

## Project Status

**Planning / Initial Build Phase**

Core project decisions are locked in and should not be changed without an explicit project decision.

---

## Primary Goals

- Establish a strong professional online presence for J. A. POWERBUILT CONSTRUCTION.
- Clearly communicate the company's construction capabilities and services.
- Showcase completed and ongoing projects.
- Generate enquiries and estimate requests.
- Provide prospective clients with several easy contact paths.
- Build credibility through project imagery, company information, certifications, testimonials, and process transparency.
- Create a maintainable foundation that can later support a larger project portfolio, admin tools, blog/content, recruitment, and client-facing features.

---

## Locked Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js |
| Language | JavaScript |
| Styling | Custom CSS |
| ORM | Prisma |
| Database | PostgreSQL on Neon |
| Media / Project Images | Firebase Storage |
| Transactional Email | Resend |
| Hosting | Firebase App Hosting |
| Source Control | GitHub |

> **Important:** Firebase App Hosting is the selected hosting platform for this project.

---

## Design Direction

### Core Brand Palette

- **Construction Orange** — primary call-to-action and visual accent.
- **Dark Charcoal** — primary structural/background color.
- **White / warm off-white** — clean content surfaces and contrast.
- **Ghanaian flag accents** — red, gold/yellow, and green used selectively rather than as dominant colors.

The site should feel:

- strong;
- modern;
- professional;
- trustworthy;
- engineered;
- premium without looking overly corporate;
- recognizably Ghanaian through restrained local accents and imagery.

---

## Proposed Website Structure

```text
/
├── Home
├── About
├── Services
├── Projects
│   └── Project Detail
├── Request Estimate
├── Contact
└── API Routes
```

Potential future additions:

```text
├── Careers
├── News / Insights
├── Client Portal
└── Admin Dashboard
```

---

## Planned Home Page Sections

1. Header / Navigation
2. Hero
3. Company credibility / statistics
4. About teaser
5. Services overview
6. Featured projects
7. Why choose J. A. POWERBUILT
8. Construction process
9. Testimonials / trust content
10. Strong estimate-request CTA
11. Contact information
12. Footer

---

## Core Conversion Flow

```text
Visitor
  ↓
Reviews services / projects / company profile
  ↓
Clicks "Request an Estimate"
  ↓
Completes project enquiry form
  ↓
Server validates submission
  ↓
Enquiry stored in PostgreSQL
  ↓
Notification sent through Resend
  ↓
Company follows up with prospect
```

---

## Development Principles

- Build mobile-first and progressively enhance for larger screens.
- Keep the visual system reusable.
- Do not hard-code project content throughout components.
- Keep server-only credentials out of the browser.
- Validate all form input on the server.
- Use accessible semantic HTML.
- Optimize project images and loading behavior.
- Build SEO fundamentals into the initial implementation.
- Prefer simple, maintainable solutions over unnecessary abstractions.
- Keep the codebase ready for future admin functionality.

---

## Suggested Initial Data Entities

- `Service`
- `Project`
- `ProjectImage`
- `Enquiry`
- `Testimonial`
- `SiteSetting` or equivalent configuration

The exact Prisma schema should be finalized when implementation begins.

---

## Environment Variables

A local environment requires the following values:

```bash
DATABASE_URL=
# Optional unless a tool requires an unpooled connection.
DIRECT_URL=

# Firebase Admin (server only)
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
# For local Firebase Admin authentication when Application Default Credentials
# have not been configured through the Google Cloud CLI:
# GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/to/service-account.json

# Firebase Web App
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

NEXT_PUBLIC_POWERBUILT_WHATSAPP_NUMBER=
```

Never commit production secrets or a Firebase service-account JSON file. The
Firebase web configuration is public by design; enforce access through Firebase
Authentication, Firestore, and Storage security rules.

### Firebase App Hosting environment variables

Configure the following environment variables for every Firebase App Hosting
environment (preview and production):

```text
DATABASE_URL
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
```

Set these in Firebase App Hosting's environment and secret configuration, not
in the repository. `DATABASE_URL` should be configured as a secret.

---

## Local Development

After the project has been initialized:

```bash
npm install
npm run dev
```

Then open the local Next.js development URL shown in the terminal.

Database workflow will normally include:

```bash
npx prisma generate
npx prisma migrate dev
```

---

## Recommended Repository Documentation

The repository should contain:

```text
README.md
PROJECT_BLUEPRINT.md
.env.example
prisma/
src/ or app/
public/
```

See `PROJECT_BLUEPRINT.md` for the complete project specification, architecture, wireframe plan, implementation phases, security model, database guidance, deployment flow, and Codex handoff instructions.

---

## Source Control

GitHub is the source of truth for the codebase.

Recommended workflow:

```text
feature branch
   ↓
local testing
   ↓
commit
   ↓
push to GitHub
   ↓
review
   ↓
merge
   ↓
Firebase App Hosting deployment
```

---

## Current Locked Decisions

- Company: **J. A. POWERBUILT CONSTRUCTION**
- Website type: public-facing construction company / lead-generation website
- Main user action: **request an estimate / project enquiry**
- Hosting: **Firebase App Hosting**
- Framework: **Next.js**
- Language: **JavaScript**
- Styling: **Custom CSS**
- Database: **PostgreSQL / Neon**
- ORM: **Prisma**
- Media storage: **Firebase Storage**
- Email: **Resend**
- Source control: **GitHub**
- Brand direction: **Orange + dark charcoal with selective Ghanaian flag accents**
