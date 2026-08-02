# Project Brief

Use this file as the primary scope input for implementation.

For full question prompts, see docs/PROJECT_BRIEF_TEMPLATE.md and fill out each section below.

## Client Snapshot

- Company/organization name: Glorious Health Ministries
- Primary contact: (client — via Afton)
- Industry or domain: Faith-based grief/healing ministry for widows
- One-sentence mission: A healing journey for widows built on gatherings, connection, and sisterhood.
- Primary audience: Widows seeking community, healing, and faith-based support; secondarily churches and funeral homes as referral partners.

## Success Criteria

- Top 3 outcomes:

1. Give the client something concrete to look at and react to (draft, placeholder copy acceptable).
2. Replace the client's abandoned GoDaddy Airo AI builder with a site on a platform Afton can maintain long-term.
3. Support outreach to churches/funeral homes (site doubles as a shareable "flyer" link, see Open Questions).

- Launch deadline: Not yet set.
- Must-have on day one: Hero, bio/about, the three pillars (Gatherings, Connection, Sisterhood), workshops, blog/resources, contact info.
- Phase two items: Real copy and photos, workshop names/details, blog content, functional contact form, possible print-flyer companion piece.

## Scope

- Project mode: content-first
- Planned pages/routes: Multi-route site — moved off the single-page anchor-nav layout once real
  content (bio, workshops, Connection resources, Sisterhood writing, contact) outgrew it.

1. `/` — Trimmed hero + pillar teaser linking out to the pages below
2. `/about/` — Founder bio (Ajai Blue-Saunders) + headshot
3. `/gatherings/` — Workshop topics (formerly "Workshops")
4. `/connection/` — Recommended websites + recommended books (placeholder entries until client sends the actual lists)
5. `/sisterhood/` — Ajai's blog/writing (empty "coming soon" state until she uploads posts)
6. `/contact/` — Contact form + contact details

## Feature Levels

- Auth/login: none
- Ecommerce/cart/checkout: none
- Scheduling/calendars: none
- Contact forms/email: client-side mailto form live at `/contact/` (builds a `mailto:` link from
  the form fields, no backend/server route — see `docs/agents/template-maintainer/BACKEND_ENABLEMENT.md`
  for when that would change)
- CMS/content editing: none

## Operations

- Hosting target: TBD (client currently owns domains via GoDaddy)
- Domain and DNS owner: Client owns glorioushealthministries.com and .net via GoDaddy
- Service account ownership: Client-owned (GoDaddy)
- Free-tier keepalive needed: no (static site, no backend)

## Open Questions / Not Yet Provided

- ~~Actual logo file~~ — resolved: high-res `public/images/logo.png` received, palette re-sampled from it.
- ~~Real bio copy + headshot photo~~ — resolved: live on `/about/`.
- ~~Workshop names and descriptions~~ — resolved: live on `/gatherings/`.
- ~~Physical address~~ — resolved: P.O. Box 9837, Henrico, VA 23228, live on `/contact/`.
- Connection resource lists: client confirmed a websites list and a books list belong under
  Connection, but the actual titles/URLs weren't included with that request — `/connection/`
  currently has clearly-labeled placeholder entries pending the real lists.
- Blog post content: Sisterhood pillar page is live at `/sisterhood/` with a "coming soon" empty
  state; client said she'll send posts "maybe next week."
- One-page flyer for churches/funeral homes: client clearly wants this (to market to churches and funeral homes); Afton is unsure of the best approach since this is print/flyer design, not web dev. Options to decide: (a) Afton designs it on Vistaprint/Canva, (b) build a single printable page on this site styled like a flyer that can be linked or PDF'd. Not started.

## Done Definition

- Handoff must include:

1. Multi-page draft site with lorem ipsum placeholders only where copy hasn't been provided yet, using the brand palette sampled from the real logo.
2. Passing `npm run validate`.
3. List of open items above resolved or explicitly deferred with the client.
