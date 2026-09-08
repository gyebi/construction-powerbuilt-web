# J. A. POWERBUILT CONSTRUCTION
# Project Blueprint, Architecture & Codex Handoff

**Project type:** Construction company website / lead-generation platform  
**Company:** J. A. POWERBUILT CONSTRUCTION  
**Market:** Ghana  
**Primary objective:** Present the construction company professionally and convert visitors into qualified enquiries and estimate requests.  
**Primary implementation approach:** Next.js + JavaScript + custom CSS + Prisma + PostgreSQL/Neon + Firebase Storage + Resend + Firebase App Hosting + GitHub.

---

# 1. Executive Summary

J. A. POWERBUILT CONSTRUCTION requires a modern, professional website that communicates competence, reliability, engineering strength, and construction experience.

The website is not intended to be merely an online brochure. It should operate as a business-development tool.

Its main responsibilities are to:

1. explain who the company is;
2. show what the company does;
3. demonstrate completed work;
4. build confidence with potential clients;
5. capture project enquiries;
6. generate estimate requests;
7. provide easy contact channels;
8. rank well for relevant local construction searches;
9. provide a scalable technical base for future functionality.

The design inspiration initially discussed is Vinewood Construction and other polished construction-sector websites, but the finished site should have its own identity and be appropriate for Ghana.

---

# 2. Locked Project Decisions

The following decisions are currently considered locked.

## 2.1 Technology

| Layer | Decision |
|---|---|
| Web framework | Next.js |
| Programming language | JavaScript |
| CSS | Custom CSS |
| ORM | Prisma |
| Relational database | PostgreSQL |
| Managed DB provider | Neon |
| File/image storage | Firebase Storage |
| Email | Resend |
| Hosting | Firebase App Hosting |
| Version control | GitHub |

Do not switch to TypeScript, Tailwind, Supabase, Vercel, MongoDB, another ORM, another hosting platform, or another transactional email provider unless a later explicit decision is made.

A supporting package may be introduced when it solves a real requirement, but dependencies should remain conservative.

---

# 3. Business Objectives

The website should help POWERBUILT:

- present a credible corporate identity;
- compete effectively for private and commercial projects;
- demonstrate capabilities visually;
- show completed jobs and project categories;
- provide prospective clients with enough information to contact the company confidently;
- generate quotation / estimate opportunities;
- reduce friction between first visit and contact;
- improve discoverability in Google and local search;
- create a digital foundation that can expand with the company.

---

# 4. Target Audiences

Potential audiences include:

- homeowners;
- property developers;
- businesses;
- institutions;
- architects;
- consultants;
- property managers;
- organizations looking for contractors;
- diaspora clients developing property in Ghana;
- prospective partners;
- suppliers;
- potential employees.

The site's wording should be professional enough for institutional or commercial prospects while still being understandable to residential clients.

---

# 5. Core User Journeys

## 5.1 New Prospect

```text
Google / referral / social
        ↓
       Home
        ↓
service or project proof
        ↓
confidence / credibility
        ↓
Request Estimate
        ↓
Enquiry submitted
        ↓
POWERBUILT follow-up
```

## 5.2 Project-Oriented Visitor

```text
Home
 ↓
Projects
 ↓
Project detail
 ↓
Related service
 ↓
Request similar project / estimate
```

## 5.3 Service-Oriented Visitor

```text
Home
 ↓
Services
 ↓
Service detail
 ↓
Project examples
 ↓
Estimate request
```

## 5.4 Direct Contact Visitor

```text
Contact / WhatsApp / phone
 ↓
Company contact action
```

---

# 6. Brand and Visual Direction

## 6.1 Primary Palette

The chosen direction is:

- construction orange;
- dark charcoal;
- white / warm neutral backgrounds;
- Ghanaian red, gold, and green accents.

A starting palette may be:

```css
:root {
  --color-charcoal: #1f2428;
  --color-charcoal-deep: #14181b;
  --color-orange: #f28c18;
  --color-orange-dark: #cf6f00;

  --color-white: #ffffff;
  --color-off-white: #f6f4ef;
  --color-gray-100: #ececec;
  --color-gray-600: #646b70;
  --color-gray-900: #24282b;

  --ghana-red: #ce1126;
  --ghana-gold: #fcd116;
  --ghana-green: #006b3f;
}
```

These are implementation starting points, not untouchable brand specifications.

## 6.2 Ghanaian Accent Usage

Ghanaian flag colors should appear selectively.

Good uses:

- small separators;
- hover accents;
- tiny motif near footer/company identity;
- badge details;
- subtle border treatments;
- selected section markers.

Avoid making every section red/yellow/green. Orange + charcoal should remain the dominant identity.

## 6.3 Visual Personality

The site should feel:

- robust;
- architectural;
- modern;
- trustworthy;
- spacious;
- high quality;
- practical;
- confident.

Avoid:

- excessive rounded "startup" UI;
- playful gradients unrelated to construction;
- oversized animation;
- generic SaaS styling;
- visually busy Ghana-flag coloring;
- decorative effects that reduce project-photo impact.

---

# 7. Information Architecture

## Initial public routes

```text
/
├── /about
├── /services
├── /services/[slug]          optional initial or phase-two
├── /projects
├── /projects/[slug]
├── /request-estimate
└── /contact
```

## Future routes

```text
/admin
/admin/projects
/admin/services
/admin/enquiries

/careers
/news
/news/[slug]
```

No admin area is required for the first public launch unless explicitly added to scope.

---

# 8. Navigation Plan

Desktop navigation:

```text
POWERBUILT LOGO

Home
About
Services
Projects
Contact
[Request an Estimate]
```

Mobile:

- hamburger / drawer navigation;
- prominent call or estimate CTA;
- accessible focus states;
- body scroll should lock while menu is open.

Header behavior may become compact/sticky after scrolling.

---

# 9. Home Page Wireframe

## 9.1 Header

```text
+--------------------------------------------------------------+
| LOGO        HOME ABOUT SERVICES PROJECTS CONTACT    [ESTIMATE]|
+--------------------------------------------------------------+
```

Requirements:

- clear logo;
- readable on hero;
- sticky or semi-sticky;
- mobile navigation;
- primary CTA visible.

---

## 9.2 Hero

```text
+--------------------------------------------------------------+
|                                                              |
|  BUILDING WITH                                                |
|  STRENGTH. PRECISION.                                         |
|  CONFIDENCE.                                                  |
|                                                              |
|  Short positioning statement                                  |
|                                                              |
|  [Request an Estimate] [View Projects]                         |
|                                                              |
|                                  LARGE CONSTRUCTION IMAGE     |
+--------------------------------------------------------------+
```

Hero should:

- immediately identify the company as a construction contractor;
- use strong project photography;
- contain one primary and one secondary CTA;
- avoid long paragraphs.

Possible future hero variants:

- full-bleed construction image;
- split text + image;
- architectural project carousel.

Prefer a static high-impact hero for initial launch unless real content justifies a slider.

---

## 9.3 Trust / Metrics Strip

```text
+--------------------------------------------------------------+
| YEARS EXPERIENCE | PROJECTS COMPLETED | CLIENTS | SERVICE AREA|
+--------------------------------------------------------------+
```

Only use factual figures supplied by the company. Never invent statistics.

If reliable metrics are unavailable, replace with qualitative trust indicators.

---

## 9.4 About Preview

```text
+---------------------------+----------------------------------+
| Project / team image      | ABOUT POWERBUILT                 |
|                           | concise company introduction     |
|                           |                                  |
|                           | [Learn More]                     |
+---------------------------+----------------------------------+
```

---

## 9.5 Services

Three or six initial service cards.

```text
+----------------+ +----------------+ +----------------+
| Service        | | Service        | | Service        |
| image/icon     | | image/icon     | | image/icon     |
| description    | | description    | | description    |
+----------------+ +----------------+ +----------------+
```

Potential categories to confirm with the client:

- General Building Construction
- Residential Construction
- Commercial Construction
- Renovation & Remodeling
- Civil Works
- Project Management
- Structural / Concrete Works
- Finishing Works

Do not publish unconfirmed services simply because they are common in the industry.

---

## 9.6 Featured Projects

```text
+--------------------------------------------------------------+
| FEATURED PROJECTS                                             |
|                                                              |
| +------------------+ +------------------+ +----------------+ |
| | project image    | | project image    | | project image  | |
| | project name     | | project name     | | project name   | |
| | category/location| | category/location| | category       | |
| +------------------+ +------------------+ +----------------+ |
|                                                              |
|                       [View All Projects]                     |
+--------------------------------------------------------------+
```

Photography should drive this section.

---

## 9.7 Why Choose Us

Suggested structure:

```text
WHY POWERBUILT?

✓ Quality workmanship
✓ Reliable project execution
✓ Safety-conscious delivery
✓ Transparent communication
✓ Experienced team
✓ Local understanding
```

Claims must match actual company positioning.

---

## 9.8 Process

```text
01 Consultation
       ↓
02 Site / Scope Review
       ↓
03 Estimate / Proposal
       ↓
04 Planning
       ↓
05 Construction
       ↓
06 Handover
```

This helps new clients understand what happens after making contact.

---

## 9.9 Testimonials / Credibility

If authentic testimonials exist, show them.

If not, this section can initially become:

- client logos;
- accreditations;
- supplier relationships;
- safety / quality commitments.

Never fabricate testimonials.

---

## 9.10 Estimate CTA

High-contrast full-width section.

```text
READY TO START YOUR PROJECT?

Tell us what you are planning and let our team review it.

[REQUEST AN ESTIMATE]
```

---

## 9.11 Footer

Should include:

- company name / logo;
- short company description;
- navigation;
- services;
- address;
- phone;
- email;
- social links;
- working hours if supplied;
- copyright;
- optional Ghana flag detail.

---

# 10. About Page

Suggested sections:

1. Hero / page title
2. Company story
3. Mission
4. Vision
5. Values
6. Leadership / team if supplied
7. Safety / quality commitment
8. Certifications / registrations if supplied
9. CTA

The company story should use client-provided factual information.

Do not invent founding dates, staff size, registrations, or awards.

---

# 11. Services Page

The services page should support both browsing and conversion.

Each service should contain:

- service title;
- concise summary;
- appropriate image;
- more detailed explanation;
- scope examples;
- related projects;
- estimate CTA.

If service-detail pages are deferred, create anchored sections on `/services`.

---

# 12. Projects Page

## Project listing

Features:

- visually dominant image cards;
- project title;
- category;
- location if available;
- completion year if available;
- filter capability only when enough projects exist.

Avoid implementing complex filtering for a portfolio with only a handful of projects.

## Project Detail

Recommended structure:

```text
Project Hero Image

Project Name
Location
Category
Year
Client (only if permission exists)

Project Overview
Scope of Work
Challenges / Solution
Gallery

[Discuss a Similar Project]
```

Do not expose confidential client information.

---

# 13. Request Estimate Page

This page is one of the most important conversion surfaces.

## Suggested form fields

### Required

- Full name
- Email
- Phone
- Project type
- Project location
- Project description

### Optional / conditional

- Company / organization
- Preferred contact method
- Expected start date
- Estimated budget range
- Existing drawings / plans
- File upload
- Referral source

Avoid making the form so long that it suppresses enquiries.

## Confirmation

After successful submission:

- show clear success message;
- generate a human-friendly enquiry reference when useful;
- inform user that the company will respond;
- send notification email to POWERBUILT.

---

# 14. Contact Page

Include:

- phone;
- email;
- office location;
- operating hours if available;
- contact form or compact enquiry form;
- WhatsApp CTA if the company uses WhatsApp;
- map only when an official office location is confirmed.

---

# 15. Data Model Plan

The first implementation should keep models practical.

## 15.1 Service

```prisma
model Service {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  summary     String?
  description String?
  imageUrl    String?
  isFeatured  Boolean  @default(false)
  isPublished Boolean  @default(true)
  sortOrder   Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 15.2 Project

```prisma
model Project {
  id          String         @id @default(cuid())
  title       String
  slug        String         @unique
  summary     String?
  description String?
  category    String?
  location    String?
  clientName  String?
  year        Int?
  coverImage  String?
  isFeatured  Boolean        @default(false)
  isPublished Boolean        @default(true)
  images      ProjectImage[]
  createdAt   DateTime       @default(now())
  updatedAt   DateTime       @updatedAt
}
```

## 15.3 ProjectImage

```prisma
model ProjectImage {
  id        String   @id @default(cuid())
  projectId String
  imageUrl  String
  altText   String?
  sortOrder Int      @default(0)
  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())

  @@index([projectId])
}
```

## 15.4 Enquiry

```prisma
model Enquiry {
  id                     String        @id @default(cuid())
  reference              String        @unique
  fullName               String
  email                  String
  phone                  String
  companyName            String?
  projectType            String?
  projectLocation        String?
  projectDescription     String
  budgetRange            String?
  preferredContactMethod String?
  expectedStartDate      DateTime?
  status                 EnquiryStatus @default(NEW)
  source                 String?
  createdAt              DateTime      @default(now())
  updatedAt              DateTime      @updatedAt

  @@index([createdAt])
  @@index([status])
}

enum EnquiryStatus {
  NEW
  CONTACTED
  QUALIFIED
  QUOTED
  WON
  LOST
  CLOSED
}
```

The initial public website may only need `NEW`; the wider status model is useful if an admin interface is later introduced.

## 15.5 Testimonial

```prisma
model Testimonial {
  id          String   @id @default(cuid())
  clientName  String
  companyName String?
  quote       String
  isPublished Boolean  @default(true)
  sortOrder   Int      @default(0)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

Only enter testimonials provided or approved by real clients.

---

# 16. Media Architecture

Project photos and other managed imagery should be stored in Firebase Storage.

Example logical structure:

```text
powerbuilt/
├── projects/
│   └── {projectId}/
├── services/
├── company/
└── temporary/
```

Store storage URLs or stable file references in PostgreSQL.

Do not store large image binaries in PostgreSQL.

---

# 17. File Upload Rules

If estimate attachments are introduced:

- restrict MIME types;
- restrict maximum size;
- normalize filenames;
- generate server-controlled storage paths;
- do not trust browser-supplied file names;
- virus/malware scanning should be considered if arbitrary client files are accepted;
- prefer PDF/JPG/PNG for initial implementation;
- never expose unrestricted write access to Firebase Storage.

---

# 18. API / Server Action Plan

Exact implementation can use Next.js Route Handlers or Server Actions according to the feature.

Potential endpoints:

```text
POST /api/enquiries
GET  /api/projects
GET  /api/projects/[slug]
GET  /api/services
```

Future protected admin:

```text
GET    /api/admin/enquiries
PATCH  /api/admin/enquiries/[id]
POST   /api/admin/projects
PATCH  /api/admin/projects/[id]
DELETE /api/admin/projects/[id]
```

Public data fetching can often occur directly in server components instead of unnecessary public API endpoints.

---

# 19. Estimate Submission Sequence

```text
Browser
   |
   | POST validated form
   v
Next.js server
   |
   | validate / sanitize / normalize
   v
Prisma
   |
   | insert
   v
Neon PostgreSQL
   |
   +-------------------+
   |                   |
   v                   v
success response      Resend
                       |
                       v
               staff notification
```

Database insertion should be treated as the primary record of the enquiry.

Email delivery failure should not silently destroy a valid enquiry.

A robust approach:

1. validate;
2. insert enquiry;
3. attempt email;
4. log email failure server-side if it occurs;
5. still provide an appropriate successful-submission response if the database record was safely created.

---

# 20. Form Validation

Validation must occur on both:

- client for user experience;
- server for security and correctness.

Examples:

- trim strings;
- enforce length limits;
- validate email;
- validate phone loosely enough for Ghana/international formats;
- reject empty project descriptions;
- reject unreasonable payload sizes;
- discard unknown fields unless explicitly supported.

Do not rely on HTML `required` attributes as security validation.

---

# 21. Spam and Abuse Protection

A public enquiry endpoint can be abused.

Initial protections:

- honeypot field;
- request-size limits;
- server-side validation;
- basic rate limiting;
- timing checks;
- origin considerations;
- logging.

As traffic grows, add:

- Turnstile or equivalent bot challenge;
- stronger IP / fingerprint rate limiting;
- abuse metrics.

Do not make an intrusive CAPTCHA the default unless spam makes it necessary.

---

# 22. Security Requirements

Security must be considered from the first implementation.

## 22.1 Secrets

Never expose:

- `DATABASE_URL`;
- `DIRECT_URL`;
- `RESEND_API_KEY`;
- service-account private keys;
- admin secrets.

`NEXT_PUBLIC_*` values are exposed to browsers by design.

## 22.2 Database

- Prisma should be the normal database access layer.
- Parameterized ORM queries reduce SQL-injection exposure.
- Production database credentials must not be committed.
- Use least-privilege database access where practical.
- Keep migrations under version control.
- Back up important business data.

## 22.3 XSS

- Do not render unsanitized arbitrary HTML.
- Prefer plain strings / structured data for project descriptions.
- Avoid `dangerouslySetInnerHTML` unless content is sanitized and genuinely requires HTML.

## 22.4 CSRF / Request Abuse

For server mutations:

- verify expected request behavior;
- use framework-supported secure mutation patterns;
- consider CSRF protections where appropriate;
- protect future admin mutations behind authentication and authorization.

## 22.5 Authentication

No authentication is required for basic public website pages.

If an admin dashboard is added later:

- use a proper identity provider;
- require authenticated users;
- implement role/authorization checks on the server;
- never rely on hiding admin links as security.

## 22.6 Headers

Configure sensible headers when supported:

- Content-Security-Policy;
- X-Content-Type-Options;
- Referrer-Policy;
- Permissions-Policy;
- HSTS once HTTPS configuration is stable.

## 22.7 Logging

Do not log:

- secrets;
- full database URLs;
- unnecessary personal information;
- uploaded private document contents.

---

# 23. Privacy Considerations

The enquiry database may contain personal data such as:

- name;
- email;
- phone;
- project address/location;
- project description.

The site should eventually include a privacy notice explaining:

- what information is collected;
- why it is collected;
- how the company uses it;
- how someone can request correction/deletion where applicable.

Avoid collecting personal data that is not useful to the construction enquiry process.

---

# 24. SEO Plan

Every main page should have:

- unique title;
- meta description;
- canonical URL;
- meaningful heading hierarchy;
- Open Graph metadata;
- relevant image alt text.

Structured data worth considering:

- Organization / LocalBusiness;
- BreadcrumbList;
- Service;
- Project-like content where appropriate.

Also implement:

```text
robots.txt
sitemap.xml
```

Potential keyword themes should later be researched rather than guessed.

Examples of broad directions:

- construction company in Ghana;
- building contractor in Ghana;
- residential construction Ghana;
- commercial construction Ghana;
- construction company Accra;

Only target locations the company actually serves.

---

# 25. Performance Requirements

The site should aim for strong Core Web Vitals.

Key practices:

- Next.js image optimization where compatible;
- responsive image sizes;
- compress source images;
- avoid huge hero assets;
- lazy-load below-the-fold media;
- minimize client JavaScript;
- default to server components when interactivity is not required;
- use client components only where necessary;
- preload only important assets;
- avoid heavyweight animation libraries unless justified.

Project galleries are a likely performance risk and must be optimized carefully.

---

# 26. Accessibility Requirements

Minimum standards:

- semantic HTML;
- keyboard-accessible navigation;
- visible focus states;
- sufficient color contrast;
- alt text;
- properly associated form labels;
- descriptive buttons;
- reduced-motion consideration;
- logical heading structure;
- accessible mobile menu;
- error messages connected to relevant form fields.

Target WCAG 2.1 AA principles wherever practical.

---

# 27. Responsive Design Plan

Suggested breakpoints can evolve with the layout.

General behavior:

## Mobile

- single-column sections;
- compact navigation;
- large tap targets;
- stacked CTAs;
- project cards in one column;
- forms full width.

## Tablet

- two-column layouts where space allows;
- project/service grids 2-up.

## Desktop

- wider content grid;
- larger hero;
- 3-column service/project cards;
- split text/image sections.

Avoid styling specifically for individual device models.

---

# 28. CSS Architecture

Because custom CSS is locked in, maintain a deliberate design system.

Suggested structure:

```text
styles/
├── globals.css
├── tokens.css
├── layout.css
├── components.css
└── utilities.css
```

Or colocated CSS Modules if the team prefers.

Recommended variables:

```css
--container-max
--space-1 ... --space-10
--font-size-sm ...
--radius-sm ...
--shadow-sm ...
--color-*
--transition-fast
```

Avoid uncontrolled one-off values across dozens of components.

---

# 29. Suggested Project Structure

A possible Next.js App Router structure:

```text
powerbuilt/
├── app/
│   ├── api/
│   │   └── enquiries/
│   │       └── route.js
│   ├── about/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── projects/
│   │   ├── [slug]/
│   │   │   └── page.js
│   │   └── page.js
│   ├── request-estimate/
│   │   └── page.js
│   ├── services/
│   │   └── page.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── SectionHeading.js
│   ├── ServiceCard.js
│   ├── ProjectCard.js
│   ├── EstimateForm.js
│   └── ...
│
├── lib/
│   ├── prisma.js
│   ├── firebase.js
│   ├── resend.js
│   ├── validation.js
│   └── ...
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
│   ├── icons/
│   └── static/
│
├── README.md
├── PROJECT_BLUEPRINT.md
├── .env.example
├── next.config.js
├── package.json
└── firebase.json / App Hosting configuration
```

Adapt this to the actual initialized project rather than forcing duplicate directories.

---

# 30. Firebase Responsibilities

Firebase is intentionally used for specific responsibilities.

## Firebase Storage

Use for:

- project photographs;
- service images;
- company/team imagery;
- future uploaded project documents when appropriate.

## Firebase App Hosting

Use as the production hosting platform.

Do not introduce Firestore simply because Firebase is already in use. PostgreSQL/Neon remains the project's relational data store.

---

# 31. Neon / PostgreSQL Responsibilities

Use PostgreSQL for structured business data:

- enquiries;
- services;
- project metadata;
- testimonials;
- future admin-managed content;
- future application settings;
- potential future users/roles if required.

---

# 32. Prisma Rules

- Keep schema changes in migrations.
- Never edit production DB structure manually unless performing a controlled recovery.
- Run `prisma generate` after relevant schema changes.
- Index fields used frequently in lookups/filtering.
- Use unique constraints for stable slugs and references.
- Consider transactions when multiple dependent writes must succeed together.
- Review destructive migrations carefully.

---

# 33. Resend Email Plan

Initial email types:

## Internal enquiry notification

Recipient:
- company-defined enquiry mailbox.

Content:

- enquiry reference;
- name;
- phone;
- email;
- project type;
- location;
- description;
- submitted timestamp.

## Customer acknowledgement

Optional after staff copy is proven reliable.

Content should:

- confirm receipt;
- state the enquiry reference;
- avoid promising an exact response time unless the company has approved one.

Always use a verified sending domain before production.

---

# 34. Error Handling

User-facing forms should distinguish:

- validation errors;
- temporary submission failures;
- upload errors.

Do not expose stack traces.

Server logs should include enough context to diagnose failures without leaking sensitive data.

---

# 35. Environment Strategy

Suggested environments:

```text
local
preview / staging
production
```

Environment variables must be kept separate.

A `.env.example` should list variable names but not secrets.

Example:

```bash
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

RESEND_API_KEY=
CONTACT_NOTIFICATION_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

---

# 36. Git / GitHub Workflow

GitHub is the source of truth.

Suggested branch pattern:

```text
main
feature/home-page
feature/projects
feature/enquiry-form
fix/mobile-nav
```

Commit style may remain simple:

```text
feat: add featured projects section
fix: validate enquiry phone field
style: improve mobile hero spacing
docs: update deployment instructions
```

Before merging:

- lint;
- build;
- test core interactions;
- inspect responsive layouts;
- verify no secrets were committed.

---

# 37. Firebase App Hosting Deployment Flow

High-level workflow:

```text
Local development
   ↓
Git commit
   ↓
Push to GitHub
   ↓
Firebase App Hosting build
   ↓
Preview / production deployment
```

The exact Firebase configuration should be documented after the project is linked to its Firebase project.

Never put production secrets into the repository merely to make a cloud build pass. Use the hosting platform's secret/environment configuration.

---

# 38. Testing Strategy

## 38.1 Minimum Manual Acceptance Tests

### Navigation

- all menu links work;
- logo returns to home;
- mobile menu opens/closes;
- CTA buttons lead to correct pages.

### Estimate form

- required fields enforced;
- valid submission stored in database;
- invalid email rejected;
- oversized text handled;
- server rejects malformed payload;
- duplicate clicks do not create uncontrolled submissions;
- notification email attempted;
- success state appears.

### Projects

- listing loads;
- image aspect ratios remain stable;
- project detail pages resolve;
- missing project returns 404.

### Responsive

Test:

- small phone;
- large phone;
- tablet;
- laptop;
- wide desktop.

### Accessibility

- tab navigation;
- form labels;
- focus indicators;
- image alt text;
- contrast.

---

# 39. Automated Testing Plan

Initial project can add automated tests incrementally.

Useful layers:

## Unit

- validation functions;
- reference generation;
- content utility functions.

## Integration

- enquiry creation;
- database persistence;
- email service wrapper behavior.

## End-to-end

Eventually:

```text
Home → Request Estimate → submit → confirmation
```

Do not spend disproportionate MVP time building elaborate test infrastructure before the core conversion path works.

---

# 40. Analytics

Analytics should be added only with an explicit privacy-conscious decision.

Important future events:

- estimate CTA click;
- phone click;
- WhatsApp click;
- contact submission;
- project-detail views.

Avoid sending sensitive enquiry text to analytics tools.

---

# 41. Content Requirements From Client

Before final launch, obtain:

- official logo;
- correct legal/company name;
- company description;
- company history;
- mission/vision if desired;
- service list;
- project list;
- project photos;
- permission to use client/project names;
- phone;
- email;
- WhatsApp;
- physical address;
- business hours;
- social links;
- registrations/certifications;
- testimonials;
- leadership/team details if included.

Use placeholders during development but clearly mark them as placeholders.

---

# 42. Image Requirements

Prefer real POWERBUILT project photography.

For each project, request:

- hero/cover image;
- several progress/completion images;
- project title;
- location;
- category;
- completion date/year;
- scope description;
- client name only when publication is permitted.

Stock images may be used temporarily for layout development but should not misrepresent company work.

---

# 43. Copy Tone

Writing should be:

- confident;
- concise;
- clear;
- professional;
- construction-oriented.

Avoid exaggerated claims like:

- "Ghana's #1 builder"
- "the best construction company"
- "100% guaranteed perfection"

unless independently supportable and approved.

Good style:

> We deliver residential, commercial and civil construction with a focus on quality workmanship, clear communication and dependable execution.

Final copy must reflect actual company capabilities.

---

# 44. MVP Definition

The initial MVP should be publishable and capable of generating real leads.

## MVP scope

### Pages

- Home
- About
- Services
- Projects
- Project detail
- Request Estimate
- Contact

### Functional

- responsive navigation;
- project data from PostgreSQL or an initial structured content source;
- estimate enquiry form;
- Prisma persistence;
- Resend staff notification;
- Firebase Storage image integration;
- Firebase App Hosting deployment;
- SEO basics;
- sitemap;
- metadata;
- responsive design.

### Not required for MVP

- full CMS;
- complex admin dashboard;
- customer login;
- payment processing;
- live quote calculation;
- chat system;
- complicated project filters;
- job applicant tracking;
- blog editor.

---

# 45. Execution Phases

## Phase 0 — Foundation

- initialize Next.js project;
- confirm JavaScript;
- configure custom CSS foundation;
- create GitHub repository;
- define directory structure;
- configure linting;
- create `.env.example`;
- configure Prisma;
- connect local/dev database;
- prepare Firebase project;
- prepare App Hosting linkage.

Deliverable:
- clean running repository and deployment skeleton.

---

## Phase 1 — Visual Foundation

- global CSS tokens;
- typography;
- container/grid;
- header;
- footer;
- button system;
- section spacing;
- responsive rules.

Deliverable:
- reusable visual system.

---

## Phase 2 — Home Page

- hero;
- credibility section;
- about teaser;
- services preview;
- featured projects;
- why choose us;
- process;
- testimonial/trust;
- estimate CTA.

Deliverable:
- high-quality responsive home page.

---

## Phase 3 — Core Public Pages

- About;
- Services;
- Projects;
- Project detail;
- Contact.

Deliverable:
- complete informational site.

---

## Phase 4 — Database + Content Integration

- finalize Prisma models;
- migrate Neon;
- load service data;
- load project data;
- connect Firebase Storage URLs;
- dynamic project pages.

Deliverable:
- real structured site content.

---

## Phase 5 — Estimate Workflow

- estimate form UI;
- server validation;
- spam controls;
- PostgreSQL insert;
- Resend notification;
- success/error states;
- optional attachments.

Deliverable:
- operational lead-generation flow.

---

## Phase 6 — SEO / Quality

- metadata;
- Open Graph;
- schema markup where appropriate;
- sitemap;
- robots;
- accessibility audit;
- performance pass;
- content review.

Deliverable:
- launch-quality public website.

---

## Phase 7 — Deployment

- configure Firebase App Hosting;
- production environment variables/secrets;
- custom domain;
- DNS;
- email-domain verification;
- smoke testing.

Deliverable:
- live production site.

---

# 46. Future Phase Possibilities

Once the public site is stable:

## Admin

- manage projects;
- manage service content;
- review enquiries;
- update enquiry statuses;
- upload project images;
- reorder featured items.

## Careers

- vacancies;
- applications;
- CV uploads.

## Client Portal

Only if business need emerges:

- progress updates;
- documents;
- milestones;
- communication.

## Quote workflow

An internal workflow might later convert enquiry → site visit → estimate → proposal.

This should not be prematurely built into the MVP.

---

# 47. Potential Admin Data Flow

Future concept:

```text
Admin login
   ↓
Dashboard
   ↓
Enquiries | Projects | Services
   ↓
CRUD through protected server routes
   ↓
PostgreSQL + Firebase Storage
```

Any future admin implementation must have server-side authorization.

---

# 48. Codex Working Instructions

When Codex is used on this repository, give it this file and `README.md` as starting context.

Codex should follow these rules:

1. Inspect existing code before modifying anything.
2. Preserve the locked stack.
3. Prefer additive, focused changes.
4. Do not replace working architecture casually.
5. Use JavaScript, not TypeScript.
6. Use custom CSS, not Tailwind.
7. Use Prisma for PostgreSQL access.
8. Keep Firebase focused on Storage and App Hosting unless the scope explicitly changes.
9. Use Resend for transactional email.
10. Never commit secrets.
11. Maintain mobile responsiveness.
12. Consider accessibility with every UI feature.
13. Validate all untrusted data on the server.
14. Preserve performance: minimize unnecessary client-side JavaScript.
15. Avoid introducing dependencies for tasks solvable cleanly with the current stack.
16. Run lint/build/tests after material changes.
17. Explain any migration before applying destructive schema changes.
18. Never invent client facts or business metrics.
19. Reuse existing components/styles before creating duplicates.
20. Update documentation when architecture or setup materially changes.

---

# 49. Codex Feature Request Template

A useful task prompt:

```text
Read README.md and PROJECT_BLUEPRINT.md first.

Task:
[describe feature]

Requirements:
- Preserve Next.js + JavaScript + custom CSS.
- Preserve Prisma + Neon.
- Preserve Firebase Storage and Firebase App Hosting.
- Preserve Resend for email.
- Inspect existing patterns before coding.
- Keep server/client boundaries secure.
- Make the feature responsive and accessible.
- Add or update tests where appropriate.
- Run lint/build and report any failures.
- Do not make unrelated changes.
```

---

# 50. Codex Bug-Fix Template

```text
Read README.md and PROJECT_BLUEPRINT.md.

Investigate this issue:
[problem]

Before changing code:
1. identify the root cause;
2. point to the relevant files/functions;
3. assess security, performance and edge cases.

Then make the smallest safe fix.

Afterwards:
- run lint;
- run build;
- run relevant tests;
- summarize the root cause, changed files and validation performed.
```

---

# 51. Codex Database Change Template

```text
We need to change the Prisma schema for:
[requirement]

First:
- inspect the current Prisma schema and migrations;
- explain the proposed change;
- identify data-loss risks;
- preserve existing production data.

Then:
- update schema.prisma;
- create a migration;
- run prisma generate;
- run validation/build;
- report the migration name and SQL implications.
```

---

# 52. Project Definition of Done

A feature is not considered complete merely because it appears visually.

For each feature, confirm as applicable:

- functionality works;
- mobile works;
- desktop works;
- server validation exists;
- errors are handled;
- accessibility is reasonable;
- loading performance is acceptable;
- no secret leaks;
- database migrations are safe;
- no obvious console errors;
- lint passes;
- build passes;
- documentation updated when necessary.

---

# 53. Launch Checklist

## Content

- [ ] Official logo
- [ ] Company profile approved
- [ ] Services approved
- [ ] Project images approved
- [ ] Project facts verified
- [ ] Contact details verified
- [ ] Testimonials authorized

## Functional

- [ ] All routes work
- [ ] Estimate submission works
- [ ] DB record created
- [ ] Notification email received
- [ ] Form errors display correctly
- [ ] Phone/WhatsApp actions work

## Technical

- [ ] Production migrations deployed
- [ ] Firebase Storage rules reviewed
- [ ] App Hosting configured
- [ ] Secrets set in production
- [ ] Production build passes
- [ ] Sitemap works
- [ ] robots.txt works
- [ ] 404 works
- [ ] canonical domain selected

## Quality

- [ ] Mobile review
- [ ] Tablet review
- [ ] Desktop review
- [ ] Accessibility spot check
- [ ] Image compression
- [ ] Performance audit
- [ ] Metadata preview
- [ ] No placeholder text
- [ ] No stock photography presented as company work

## Security

- [ ] No secrets in Git
- [ ] Input validation
- [ ] Rate-limit/anti-spam strategy
- [ ] Upload limits if enabled
- [ ] Storage permissions checked
- [ ] Production logs checked for sensitive content

---

# 54. Open Business Questions

These should be answered by the client as development progresses:

1. What is the official company registration/legal name formatting?
2. What year was POWERBUILT established?
3. What exact services does the company want advertised?
4. What locations/regions does the company serve?
5. Which projects can be shown publicly?
6. May client names be displayed?
7. Does POWERBUILT have testimonials?
8. Which certifications should appear?
9. What phone number and email should receive enquiries?
10. Will WhatsApp be a primary contact channel?
11. Is there a physical office to show on the contact page?
12. Should visitors upload drawings with estimate requests?
13. Who owns incoming enquiry follow-up?
14. What response expectation should be shown to visitors?
15. Does the company want a content/admin dashboard after launch?

Do not block initial layout work while waiting for every answer. Use clearly labelled temporary data.

---

# 55. Important Non-Goals

Unless explicitly added later, do not transform this into:

- an e-commerce site;
- a construction marketplace;
- a real-estate listing site;
- a payment platform;
- a full ERP;
- a project-management suite;
- a social network;
- a complex CMS.

The main product is a premium construction company web presence and qualified lead-generation system.

---

# 56. Architectural Summary

```text
                    ┌─────────────────────┐
                    │     Website User    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       Next.js       │
                    │ JavaScript + CSS    │
                    └──────┬───────┬──────┘
                           │       │
             structured data      │ images
                           │       │
                           ▼       ▼
                  ┌────────────┐ ┌───────────────┐
                  │   Prisma   │ │Firebase Storage│
                  └─────┬──────┘ └───────────────┘
                        │
                        ▼
                  ┌────────────┐
                  │ PostgreSQL │
                  │    Neon    │
                  └────────────┘

Enquiry:
Next.js → Prisma/Neon → Resend notification

Hosting:
GitHub → Firebase App Hosting
```

---

# 57. Guiding Principle

Build the public website cleanly first.

The initial product should make POWERBUILT look credible, show its work effectively, and make it extremely easy for a serious prospect to start a conversation.

Architecture should remain ready for growth, but future complexity should not compromise the clarity, performance, security, or launch speed of the first version.
