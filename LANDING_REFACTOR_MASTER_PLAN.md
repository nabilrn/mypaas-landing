# MyPaaS Landing Refactor Master Plan

Status: implementation handoff for the next frontier-model refactor
Target repository: `nabilrn/mypaas-landing`
Target: public landing page first, documentation visual alignment second

## 1. Objective

Refactor the current MyPaaS public site into a **creative monochrome pixel-infrastructure landing page** that is immediately understandable to developers and operators.

The next implementation must improve four things at once:

1. replace the legacy favicon with the current MyPaaS pixel mark;
2. establish a recognizable pixel-monochrome visual language without turning the site into retro-game UI;
3. rebuild typography and type hierarchy;
4. rewrite the landing copy so it is concise, professional, factual, and product-first.

This is not a request for more decorative components. The current site already contains enough structure. The goal is to remove presentation noise and make the product easier to understand.

---

## 2. Current problems to fix

### 2.1 Favicon and brand assets are inconsistent

Current public favicon files still come from the previous asset set:

- `public/favicon.svg`
- `public/favicon.png`
- `public/apple-touch-icon.png`
- `public/site.webmanifest`

The current pixel-logo assets already exist under:

- `public/brand/logoonly_black.png`
- `public/brand/logoonly_white.png`
- `public/brand/logowithtext_black.png`
- `public/brand/logowithtext_white.png`

The favicon family must be regenerated from the **logo-only pixel mark**, not from the old green identity.

For a black favicon tile, use the **white logo mark on a black background** so the mark remains visible. Do not render black artwork on a black background. If a black mark variant is required, place it on a light or transparent surface.

Required outputs:

- SVG favicon with pixel-crisp geometry;
- PNG favicon with a black square background and centered white pixel mark;
- apple-touch-icon using the same identity;
- manifest icons updated to the new assets;
- `BaseLayout.astro` references verified after replacement.

No green legacy branding should remain in browser chrome or metadata assets.

---

## 3. Design direction: Pixel Infrastructure Editorial

The visual direction is **Pixel Infrastructure Editorial**.

Think:

- open-source infrastructure documentation;
- a serious operator console;
- editorial product typography;
- one-bit/pixel graphics;
- precise technical diagrams;
- real product screenshots.

Do **not** think:

- retro arcade game;
- cyberpunk neon;
- generic AI SaaS;
- Vercel clone;
- dashboard-card marketing grid;
- fake terminal demo.

### 3.1 Core visual principles

#### Monochrome first

Use only neutral surfaces for the public landing shell:

Light:

- background: `#FAFAFA`
- surface: `#FFFFFF`
- strong ink: `#0A0A0A`
- body ink: `#262626`
- muted: `#6B6B6B`
- border: `#E4E4E4`
- strong border: `#BDBDBD`

Dark:

- background: `#090909`
- surface: `#101010`
- strong ink: `#F5F5F5`
- body ink: `#D4D4D4`
- muted: `#8A8A8A`
- border: `#252525`
- strong border: `#444444`

Semantic colors from the product screenshot may remain inside the screenshot. Do not introduce green, blue, purple, or amber as marketing accents on the landing page.

#### Pixel identity comes from geometry, not a pixel font

Do not use an 8-bit/game font for H1, body copy, navigation, or docs.

Create the pixel character through:

- an 8 px design grid;
- 1 px and 2 px rules;
- square nodes;
- stepped/bitten corners;
- small 2x2 or 3x3 pixel clusters;
- ordered-dither patterns;
- block arrows;
- route/bus-line diagrams;
- one-bit icons;
- hard edges instead of soft floating cards.

The site should still read like a serious developer product.

#### Ordered dithering instead of gradients

Do not use decorative CSS gradients or glow backgrounds.

If depth is needed, use a low-contrast monochrome dither field made from a tiny repeating SVG/pattern. Use it only in one or two high-value places, such as the hero screenshot backplate or a section transition.

Suggested assets:

- `public/patterns/dither-25.svg`
- `public/patterns/dither-50.svg`
- `public/patterns/pixel-grid.svg`

Patterns must remain subtle enough that copy is always the visual priority.

#### Stepped corners

Replace generic rounded SaaS cards with either square corners or a restrained stepped-corner treatment.

Example visual language:

```text
  +--------------------------+
  |                          |
+-+                          |
|                            |
|                            +--+
+-------------------------------+
```

This can be implemented with `clip-path`, pseudo-elements, or small corner blocks. Do not apply it to every element; use it on primary screenshots, command blocks, and one or two key callouts.

#### Real UI is the hero proof

Do not recreate the application with fake DOM telemetry.

Use real MyPaaS screenshots already stored in `mypaas-dashboard-screenshots/`.

The main screenshot should be visually integrated into the page with:

- 1 px frame;
- pixel corner treatment;
- optional low-contrast dither backplate;
- no fake browser chrome;
- no carousel;
- no animated mock metrics.

---

## 4. Typography system

The current typography is inconsistent: the code imports Instrument Sans, references Inter in tokens, and uses overly aggressive H1 scale/tracking.

The refactor must reduce the font system to exactly two families:

### Primary sans: Inter Variable

Use the same family as the MyPaaS dashboard for brand continuity.

Install and import the actual variable font package if it is not present. Remove Instrument Sans after the migration if nothing else uses it.

### Technical mono: IBM Plex Mono

Use only for:

- small overlines;
- command text;
- IDs;
- route labels;
- tiny diagram annotations;
- code snippets.

Do not set paragraphs or large headings in mono.

### 4.1 Type scale

Recommended desktop scale:

- Hero H1: `clamp(3.4rem, 6vw, 5.4rem)`
- Hero line-height: `0.96–1.00`
- Hero tracking: approximately `-0.035em`, never `-0.06em`
- Section H2: `clamp(2rem, 3.5vw, 3.25rem)`
- Section line-height: `1.02–1.08`
- Lead body: `1.125rem`, line-height `1.55`
- Normal body: `1rem`, line-height `1.6`
- Micro/mono label: `0.68–0.75rem`, tracking `0.04–0.08em`

Recommended width constraints:

- Hero H1: 10–12 words maximum; width by character count, not arbitrary huge blocks.
- Hero body: 30–34 words maximum; `max-width` around 42–48rem.
- Section H2: ideally 3–7 words.
- Section body: one short paragraph, usually under 40 words.

### 4.2 Weight rules

- H1: 600 or 650
- H2: 600
- H3/feature title: 550–600
- Body: 400–450
- Mono labels: 500

Avoid excessive bold text inside paragraphs.

---

## 5. Copywriting skill / content rules

The implementation model must behave like a **senior B2B infrastructure product copywriter**, not a design-system narrator.

The current copy often describes internal product framing instead of telling the visitor what MyPaaS does. Phrases such as these are symptoms to remove or rewrite:

- “Deployment contract”
- “Operational loop”
- “Automation surface”
- “One control plane. Multiple interfaces.”
- “Explicit inputs. Predictable runtime behavior.”
- “Own the infrastructure. Integrate the workflow.”

They are not necessarily false, but they make the landing page sound like a strategy deck.

### 5.1 Copy hierarchy

Every section must answer one user question:

1. What is MyPaaS?
2. What can I deploy?
3. What happens after deployment?
4. What do I still own/control?
5. What are the boundaries?
6. How do I install it?

If a section cannot answer one of those questions, remove it.

### 5.2 Writing constraints

- Use plain developer English as the canonical source copy.
- Prefer concrete nouns and verbs.
- Lead with the user action or product capability.
- Avoid abstract framing before the capability.
- Do not explain implementation philosophy unless it affects a purchase/adoption decision.
- Avoid rhetorical filler.
- Avoid fake confidence words.
- Avoid adjectives that cannot be proven.

Banned unless directly evidenced and genuinely necessary:

- seamless
- effortless
- blazing fast
- enterprise-ready
- production-grade
- zero-config
- powerful
- revolutionary
- next-generation
- intelligent
- magical
- fully secure
- infinitely scalable

Do not write “Built for developers who…” persona filler.

Do not add fake performance numbers, fake uptime, fake deployment time, fake user counts, or fake telemetry.

### 5.3 Copy length limits

- eyebrow: <= 6 meaningful terms
- H1: <= 10 words
- hero body: <= 34 words
- CTA: 2–4 words
- section heading: <= 7 words
- section explanation: <= 40 words
- feature description: <= 18 words
- limitation bullet: <= 16 words

### 5.4 Canonical English copy direction

This is the preferred starting point. Improve wording only if it becomes clearer without expanding it.

#### Hero

Eyebrow:

`SELF-HOSTED PAAS · ONE LINUX SERVER`

H1:

`Deploy to your server. Keep control.`

Body:

`MyPaaS deploys Git repositories and public container images to a Linux server you own, with routing, logs, metrics, databases, and recovery built in.`

Primary CTA:

`Install MyPaaS`

Secondary CTA:

`View source`

Small proof line:

`Open source · Docker / Podman · Caddy · GitHub · Cloudflare`

#### Deployment section

Heading:

`From source to URL.`

Body:

`Choose a Git repository or public OCI image. MyPaaS detects the deployment model, runs the workload, and routes it through Caddy.`

Use an actual compact pipeline instead of prose-heavy cards:

```text
Git repository ─┐
                ├─> Dockerfile / Compose / Static ─> Docker / Podman ─> Caddy ─> Public URL
Public OCI image┘
```

Cloudflare Tunnel may be shown as the current public-ingress integration, but keep it visually at the edge of the pipeline rather than presenting it as the core runtime.

#### Operations section

Heading:

`Everything after deploy.`

Use compact rows rather than cards:

- **Logs & metrics** — Build output, runtime logs, service metrics, and host telemetry.
- **Lifecycle** — Start, stop, restart, redeploy, and recover supported container releases.
- **Environment** — Manage encrypted project variables and detected environment templates.
- **Databases** — Provision shared PostgreSQL or inspect PostgreSQL, MySQL, and MariaDB.
- **Automation** — Use the dashboard, CLI, API, webhooks, or MCP.
- **Migration** — Move a MyPaaS installation to a fresh VM using the supported migration flow.

#### Ownership section

Heading:

`Your server. Standard tools.`

Body:

`MyPaaS runs workloads on infrastructure you control and integrates with the tools around them instead of replacing your application runtime with a proprietary one.`

Represent this with two compact columns, not another marketing card grid:

**You keep**

- Linux host
- source repository
- OCI workloads
- project data
- persistent volumes

**MyPaaS connects**

- GitHub
- public OCI registries
- Docker / Podman
- Caddy
- Cloudflare Tunnel
- PostgreSQL

If “No vendor lock-in” is used, explain it through these concrete ownership facts. Do not use it as an unsupported absolute claim by itself.

#### Scope section

Heading:

`Built for one server.`

Body:

`MyPaaS is a single-host control plane. It does not provide Kubernetes, multi-node scheduling, multi-region HA, or automatic horizontal scaling.`

This should be a short factual block, not a dramatic manifesto section.

#### Install section

Heading:

`Install on Ubuntu or Debian.`

Body:

`Docker Engine is the default runtime. Rootful Podman is available through the supported compatibility path.`

Show the real command and a direct link to the installation guide.

### 5.5 Localization workflow

Do not author English, Indonesian, and Chinese independently during the same visual refactor.

Workflow:

1. lock the English information architecture;
2. lock the English copy;
3. verify claims against current MyPaaS main;
4. translate the final source copy;
5. review translated line lengths and navigation labels;
6. do not let inherited English fields silently remain in localized pages unless intentionally shared.

---

## 6. New landing information architecture

Target a shorter page with fewer but stronger sections.

### Header

Keep only high-value navigation:

- MyPaaS logo
- Docs
- Install
- GitHub
- language
- theme

Search may remain available for documentation, but do not make the landing header look like an application toolbar.

Avoid separate top-level links for every landing section.

### Section 1 — Hero

Layout:

- left-aligned copy;
- one small mono eyebrow;
- direct H1;
- short body;
- two CTAs;
- small proof line;
- real product screenshot directly below or partially aligned to the right on very wide screens.

Pixel treatment:

- dither field or 8 px grid behind only part of the screenshot;
- small square route nodes;
- stepped screenshot corners;
- no glow;
- no fake status pill.

### Section 2 — Deployment flow

Use one horizontal/stacked pixel route diagram showing:

`Source -> deployment model -> runtime -> router -> public route`

The diagram must use real current MyPaaS concepts only.

On mobile it becomes a vertical route.

### Section 3 — Operations

Use a dense list/table-like structure with 5–6 capability rows.

Do not build six identical cards.

A real logs screenshot may sit beside or below the rows as product proof.

### Section 4 — Ownership and integrations

Use one split section:

- left: what stays under user control;
- right: tools MyPaaS integrates with.

This section explains “no vendor lock-in” concretely without turning it into ideology.

### Section 5 — Scope

A compact fact block:

- single Linux VM;
- small trusted team / owner-operated;
- no Kubernetes;
- no multi-node scheduler;
- no multi-region HA;
- operator owns host capacity and provider reliability.

Do not make the limitations section visually dominant.

### Section 6 — Install

One command block, runtime option selector only if it genuinely improves clarity, requirements link, and docs CTA.

Avoid fake terminal chrome and decorative shell prompts unless they add actual information.

### Footer

Minimal:

- MyPaaS
- GitHub
- Docs
- Privacy
- license

No giant wordmark/footer billboard.

---

## 7. Component and layout rules

### Remove or avoid

- generic three-column feature-card grids;
- nested framed cards;
- pills for normal navigation or metadata;
- excessive border boxes around every paragraph;
- giant outlined display words;
- marketing ticker strips;
- fake live telemetry;
- fake terminal demos;
- integration logo marquees;
- carousels;
- theme comparison sliders;
- scanlines;
- glow effects;
- glassmorphism;
- decorative gradients;
- large shadows;
- floating blobs;
- excessive motion.

### Prefer

- open whitespace;
- content rails;
- aligned baselines;
- 1 px separators;
- one strong screenshot;
- one compact flow diagram;
- table/list capability structures;
- stepped pixel details;
- small mono labels;
- explicit links;
- real command blocks.

### Spacing

Use an 8 px base rhythm.

Suggested section spacing:

- desktop: 88–120 px vertical depending on density;
- mobile: 64–80 px;
- inner content gaps: 16 / 24 / 32 / 48 px;
- do not add whitespace merely to make the page longer.

Maximum page width: approximately `1180–1240px`.

Reading-width text should stay much narrower than the full page.

---

## 8. Pixel system primitives to build

Prefer a few reusable primitives over one-off section CSS.

Suggested primitives:

### `PixelFrame`

Purpose: screenshot and command block framing.

Properties:

- 1 px border;
- optional stepped corners;
- light/dark neutral variants;
- no shadow by default.

### `PixelRule`

Purpose: section divider.

A horizontal rule with a small 2x2/3x3 block cluster at one edge or intersection.

### `PixelRoute`

Purpose: deployment architecture/flow.

- square nodes;
- orthogonal lines;
- clear arrow direction;
- responsive horizontal/vertical orientation;
- no decorative branches with no semantic meaning.

### `DitherField`

Purpose: very restrained backdrop.

Only low-contrast 1-bit texture. It must never reduce text readability.

### `TechLabel`

Purpose: overlines and diagram labels.

IBM Plex Mono, uppercase only when appropriate, small and quiet.

Do not create a general-purpose “Card” abstraction unless there is a real repeated content need.

---

## 9. Favicon implementation checklist

The first implementation task should fix browser identity before the larger refactor.

1. Build favicon artwork from `public/brand/logoonly_*`.
2. Prefer a crisp black tile + white pixel mark for the dark favicon asset.
3. Generate/update:
   - `public/favicon.svg`
   - `public/favicon.png`
   - `public/apple-touch-icon.png`
   - manifest icons referenced by `public/site.webmanifest`
4. Confirm `src/layouts/BaseLayout.astro` points to the new files.
5. Verify light browser tabs and dark browser tabs.
6. Verify the mark is recognizable at 16x16 and 32x32. Remove fine detail that disappears at favicon size rather than shrinking the full logo blindly.
7. Keep the favicon logo-only. Never use the full MyPaaS wordmark at favicon size.

---

## 10. Source-of-truth rules for product claims

The landing page must describe current MyPaaS behavior, not roadmap intent.

Before changing a capability claim, verify against the current `nabilrn/MyPaas` main branch.

Current safe high-level categories include:

- Git repository deployment;
- Dockerfile;
- Docker Compose;
- static / SPA deployment;
- public OCI image deployment;
- Docker Engine;
- rootful Podman compatibility path;
- Caddy routing;
- Cloudflare Tunnel production ingress;
- logs and metrics;
- encrypted environment variables;
- lifecycle controls;
- supported release recovery/rollback boundaries;
- shared PostgreSQL provisioning;
- DB Studio Lite;
- backups;
- migration;
- CLI / API / webhooks / MCP where currently implemented.

Do not claim roadmap support for:

- Kubernetes;
- multi-node scheduling;
- multi-region HA;
- automatic horizontal scaling;
- private registry credentials unless implementation changes;
- arbitrary provider independence if the current installation flow still has explicit GitHub/Cloudflare integration requirements.

“No vendor lock-in” should always be explained through portable infrastructure/application facts rather than left as an abstract slogan.

---

## 11. Implementation phases

### Phase 0 — Read before editing

The implementation model must inspect:

- this document;
- current `src/lib/site.ts`;
- current landing components;
- `BaseLayout.astro`;
- global and docs CSS;
- current screenshots;
- current public brand assets;
- current MyPaaS README/product docs for claim verification.

Do not start by generating new components.

### Phase 1 — Brand chrome

- replace favicon set;
- clean manifest icons;
- verify theme-color and metadata;
- verify logo treatment in header light/dark states.

### Phase 2 — Typography foundation

- install/use Inter Variable correctly;
- remove Instrument Sans if no longer needed;
- keep IBM Plex Mono;
- centralize type tokens;
- remove duplicated font variables from `BaseLayout.astro` and global CSS;
- fix H1/H2 scale, tracking, line-height, and width.

Do not proceed until the unstyled information hierarchy already reads well.

### Phase 3 — Copy rewrite

- rewrite canonical English landing copy first;
- delete abstract framing text;
- reduce page sections;
- verify every claim;
- update search entries/metadata only after final copy is stable;
- then update Indonesian and Chinese localizations.

### Phase 4 — Pixel visual system

- implement 8 px rhythm;
- build the minimal primitives described above;
- replace round-card styling with pixel/stepped geometry;
- add restrained dither assets;
- integrate real screenshots;
- build the deployment route diagram.

### Phase 5 — Responsive refinement

Review at minimum:

- 1440 px desktop;
- 1024 px laptop/tablet landscape;
- 768 px tablet;
- 390 px mobile;
- 320 px minimum.

The pixel route must reflow, not horizontally overflow.

Header must remain usable without turning into a two-line pile of links.

### Phase 6 — Docs visual alignment

Only after the landing is approved:

- align docs typography with the new tokens;
- reuse `PixelFrame`/media treatment where appropriate;
- keep docs more utilitarian than the marketing landing;
- do not add decorative dither behind long-form documentation text.

### Phase 7 — Cleanup

Delete dead/unreferenced legacy marketing components and CSS only after verifying they are unused.

Examples to audit include previous command tabs, terminal demos, detection simulation, theme comparison, marquees, and other obsolete landing-era components.

Do not delete a component merely because its name looks old; confirm imports first.

---

## 12. Validation / Definition of Done

### Content

- A developer can identify what MyPaaS is from the hero in under five seconds.
- Hero copy contains the product category, target infrastructure, and primary deployment inputs.
- No capability claim exists only because it sounds good.
- No section exists solely to explain internal product philosophy.
- English source copy is concise before localization.

### Visual

- The page is unmistakably monochrome.
- Pixel identity is visible without making the page look like a game.
- No green legacy brand elements remain in landing chrome or favicon assets.
- No generic SaaS gradient/glow aesthetic.
- No parade of identical cards.
- Real MyPaaS UI is visible early on the page.
- Light and dark themes feel designed, not merely inverted.

### Typography

- Exactly one primary sans and one mono family.
- Inter Variable is actually installed/loaded if used.
- No `-0.06em` headline tracking.
- Headings wrap intentionally at desktop and mobile widths.
- Paragraph width remains readable.

### Engineering

- `pnpm build` passes.
- No broken internal links introduced.
- No missing image assets.
- All Astro imported images passed to native `<img>` or social metadata as actual URL strings when required.
- No horizontal overflow at 320/390 px.
- `prefers-reduced-motion` remains respected.
- SEO canonical, hreflang, OG, Twitter, manifest, and favicon tags remain valid.

### Screenshot QA before merge

Capture and review:

- desktop light homepage;
- desktop dark homepage;
- mobile light homepage;
- mobile dark homepage;
- docs page desktop;
- docs page mobile.

Review screenshots visually, not only through an Astro build. A green build is not proof that typography, image metadata, wrapping, or responsive composition is correct.

---

## 13. Frontier-model execution rules

For the model implementing this plan:

1. Treat this document as the design/product contract.
2. Do not redesign MyPaaS dashboard UI from this repository.
3. Do not invent product capabilities.
4. Do not expand copy to make sections look full.
5. Prefer deleting weak sections over decorating them.
6. Prefer one good diagram over four feature cards.
7. Prefer one real screenshot over a fake interactive mock.
8. Keep visual creativity in geometry, pixel patterns, and composition—not marketing effects.
9. Keep accessibility and responsive behavior first-class.
10. Do not merge automatically. Produce a reviewable branch/PR with screenshots and build results for human visual approval.

The success criterion is not “more polished.” It is:

> **A clear infrastructure product page with a distinct pixel-monochrome identity, excellent typography, professional developer copy, and no unnecessary marketing framing.**
