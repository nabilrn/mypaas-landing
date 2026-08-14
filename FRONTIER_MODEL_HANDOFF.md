# MyPaaS Landing — Frontier Model Handoff

Status: execution prompt for the next frontier-model refactor
Repository: `nabilrn/mypaas-landing`
Primary contract: `LANDING_REFACTOR_MASTER_PLAN.md`
Target: landing-page visual/copy refactor first, documentation visual alignment second

## How to use this file

When handing this repository to a frontier coding model, the human prompt can be intentionally short:

> Read `FRONTIER_MODEL_HANDOFF.md` and `LANDING_REFACTOR_MASTER_PLAN.md`, inspect the current repository and current MyPaaS product implementation, then execute the refactor end-to-end on a new branch. Run validation, open a PR, attach screenshots if possible, and do not merge.

The model must treat this document as an **execution contract**, not as optional inspiration.

---

# 1. Mission

You are taking over the final visual and copywriting refactor of the MyPaaS public landing page.

The current landing is functionally improved but still visually and editorially below the desired standard. The remaining work is not a small polish pass. The goal is to make the public site feel like a distinct, mature infrastructure product rather than an AI-generated SaaS template.

The required direction is:

## PIXEL INFRASTRUCTURE EDITORIAL

The final result must feel:

- creative;
- technical;
- monochrome;
- pixel-inspired;
- mature;
- clean;
- direct;
- infrastructure-oriented;
- intentionally designed;
- credible for an open-source deployment platform.

It must **not** feel like:

- a generic SaaS template;
- a Vercel clone;
- an AI-generated landing page;
- a startup-template hero plus card grid;
- a terminal-themed gimmick;
- a retro videogame interface;
- a design-system showcase that talks about itself instead of the product.

The intended identity is:

> modern infrastructure editorial design + pixel-derived geometry + strong typography + direct professional copy + real MyPaaS product proof.

---

# 2. Mandatory startup sequence

Before changing code:

1. Pull the latest repository state.
2. Confirm the current default branch and latest `main`.
3. Read this file completely.
4. Read `LANDING_REFACTOR_MASTER_PLAN.md` completely.
5. Inspect the current Astro source, styles, components, screenshots, and brand assets.
6. Inspect the current public documentation before deleting or renaming any route.
7. Inspect current MyPaaS product truth before rewriting capability claims.
8. Create a new branch. Do not work directly on `main`.

Suggested branch:

```text
agent/pixel-editorial-refactor
```

Do not begin by generating new components. First understand what currently exists and what should be removed, retained, or rewritten.

---

# 3. Source-of-truth hierarchy

For public-facing claims, use this hierarchy:

1. current MyPaaS implementation and current technical documentation;
2. current public docs in this repository;
3. existing landing copy only when it still matches implementation;
4. roadmap material only as roadmap, never as a current feature.

Never invent a capability because it improves marketing copy.

Do not create:

- fake performance numbers;
- fake deployment duration;
- fake uptime;
- fake user/customer counts;
- fake telemetry;
- fake product states;
- unsupported enterprise claims;
- unsupported security claims;
- roadmap features presented as current behavior.

The repository already contains real dashboard screenshots under:

```text
mypaas-dashboard-screenshots/
```

Use real UI as product proof.

---

# 4. P0 — Brand and favicon correction

The browser identity must use the current MyPaaS pixel mark.

Current brand assets are under:

```text
public/brand/logoonly_black.png
public/brand/logoonly_white.png
public/brand/logowithtext_black.png
public/brand/logowithtext_white.png
```

The old favicon family must be replaced.

## Required favicon treatment

The desired favicon is a **black monochrome tile using the current logo-only pixel mark with sufficient contrast**.

For a black tile, use the white logo mark. Do not place a black mark on a black background.

Required outputs/checks:

- `public/favicon.svg` updated;
- `public/favicon.png` updated;
- `public/apple-touch-icon.png` updated;
- `public/site.webmanifest` icon references verified;
- `BaseLayout.astro` favicon references verified;
- no legacy green browser branding remains;
- mark remains legible at 16×16 and 32×32;
- favicon is visually centered and does not become a blurry miniaturized wordmark.

Prefer the logo-only symbol, not the logo-with-text asset, for small browser chrome.

If raster regeneration tooling is available, generate appropriate raster sizes from a high-quality source. If not, preserve the correct SVG/icon source and document any raster follow-up clearly in the PR.

---

# 5. P0 — Typography rebuild

The current typography must be treated as a design defect, not merely a font preference.

Known current problems include:

- Instrument Sans still being installed/imported;
- CSS referencing Inter without a clean, intentional Inter dependency/import path;
- oversized hero typography;
- excessive negative tracking;
- weak body rhythm;
- hierarchy that resembles a marketing template rather than a technical product;
- too many abstract section labels competing with actual product information.

## Required font system

Use exactly two primary families:

### Inter Variable

Use for:

- navigation;
- hero;
- body copy;
- headings;
- buttons;
- documentation prose.

Install/import the actual package. Do not rely on a font name that is not bundled.

After migration, remove Instrument Sans if nothing still depends on it.

### IBM Plex Mono

Use for:

- commands;
- code;
- tiny technical labels;
- IDs;
- route labels;
- metadata;
- compact infrastructure-diagram annotations.

Do not use mono for normal paragraphs or large marketing headings.

## Pixel identity rule

Pixel identity must **not** come from a videogame/pixel font.

Pixel character should come from:

- geometry;
- 1px/2px borders;
- stepped corners;
- square nodes;
- 8px rhythm;
- one-bit patterns;
- precise technical diagrams;
- small mono labels;
- hard alignment.

## Type-scale direction

Use the master plan as the baseline. The model may tune exact values after screenshot review, but it should remain in this neighborhood:

- hero H1: approximately `clamp(3.4rem, 6vw, 5.4rem)`;
- hero line-height: approximately `0.96–1.00`;
- hero tracking: around `-0.035em`, never the current extreme `-0.06em` treatment;
- section H2: approximately `clamp(2rem, 3.5vw, 3.25rem)`;
- lead body: around `1.125rem / 1.55`;
- normal body: around `1rem / 1.6`;
- micro mono labels: around `0.68–0.75rem`.

Do not create visual impact by making the hero absurdly large.

A developer should be able to read the hero and supporting text comfortably at 1440px, 390px, and 320px.

---

# 6. P0 — Professional copywriting rewrite

Behave like a **senior B2B infrastructure product copywriter** while editing public copy.

The current copy is too abstract and too interested in naming internal framing.

Problematic examples include phrases such as:

- `Deployment contract`;
- `Operational loop`;
- `Automation surface`;
- `One control plane. Multiple interfaces.`;
- `Explicit inputs. Predictable runtime behavior.`;
- other section intros that explain a conceptual frame before explaining the feature.

These phrases are not necessarily technically false. They are editorially weak because they make the page read like a strategy presentation.

## Core communication goal

A visitor should understand within roughly 10 seconds:

1. what MyPaaS is;
2. what it deploys;
3. where it runs;
4. what it manages;
5. what infrastructure the user keeps control of;
6. why it differs from a hosted proprietary platform;
7. its intentional single-server scope.

## Writing rules

- canonical source copy is plain developer English;
- prefer concrete nouns and verbs;
- lead with the capability or user action;
- do not lead with philosophy;
- one section = one question answered;
- use short sentences;
- avoid consultant language;
- avoid startup hyperbole;
- avoid persona filler such as `Built for developers who...`;
- avoid repeating `control plane` in every section;
- avoid explaining obvious UI labels in prose;
- do not state a philosophy when a concrete fact proves the same point.

## Banned marketing filler unless strictly evidenced

Avoid:

- seamless;
- effortless;
- blazing fast;
- enterprise-ready;
- production-grade;
- zero-config;
- powerful;
- revolutionary;
- next-generation;
- intelligent;
- magical;
- fully secure;
- infinitely scalable;
- reimagined;
- future-proof.

## Copy-length constraints

Aim for:

- eyebrow: <= 6 meaningful terms;
- H1: <= 10 words;
- hero body: <= 34 words;
- CTA: 2–4 words;
- section heading: <= 7 words;
- section explanation: <= 40 words;
- feature description: <= 18 words;
- limitation bullet: <= 16 words.

If copy gets longer, first ask whether the content belongs in documentation instead of the landing page.

---

# 7. Canonical copy direction

This is a starting direction, not an instruction to preserve every word mechanically. Improve only when the result becomes clearer and more direct.

## Hero

Eyebrow:

```text
SELF-HOSTED PAAS · ONE LINUX SERVER
```

H1:

```text
Deploy to your server. Keep control.
```

Body direction:

```text
MyPaaS deploys Git repositories and public container images to a Linux server you own, with routing, logs, metrics, databases, and recovery built in.
```

Primary CTA:

```text
Install MyPaaS
```

Secondary CTA:

```text
View source
```

Proof line:

```text
Open source · Docker / Podman · Caddy · GitHub · Cloudflare
```

## Deploy section

Heading:

```text
From source to URL.
```

Body direction:

```text
Choose a Git repository or public OCI image. MyPaaS detects the deployment model, runs the workload, and routes it through Caddy.
```

## Operations section

Heading:

```text
Everything after deploy.
```

Use direct capability rows such as:

- **Logs & metrics** — Build output, runtime logs, service metrics, and host telemetry.
- **Lifecycle** — Start, stop, restart, redeploy, and recover supported container releases.
- **Environment** — Manage encrypted project variables and detected environment templates.
- **Databases** — Provision shared PostgreSQL or inspect PostgreSQL, MySQL, and MariaDB.
- **Automation** — Use the dashboard, CLI, API, webhooks, or MCP.
- **Migration** — Move a MyPaaS installation to a fresh VM using the supported migration flow.

## Ownership section

Heading:

```text
Your server. Standard tools.
```

Body direction:

```text
MyPaaS runs workloads on infrastructure you control and integrates with the tools around them instead of replacing your application runtime with a proprietary one.
```

If `No vendor lock-in` appears, prove it with facts rather than using it as an unsupported slogan.

## Scope

Heading:

```text
Built for one server.
```

Body direction:

```text
MyPaaS is a single-host control plane. It does not provide Kubernetes, multi-node scheduling, multi-region HA, or automatic horizontal scaling.
```

## Install

Heading:

```text
Install on Ubuntu or Debian.
```

Body direction:

```text
Docker Engine is the default runtime. Rootful Podman is available through the supported compatibility path.
```

---

# 8. Required landing information architecture

The homepage must become shorter and more decisive.

Target approximately six major sections.

## 8.1 Header

Keep only high-value navigation:

- MyPaaS logo;
- Docs;
- Install;
- GitHub;
- language;
- theme.

Search may remain available where it improves docs discovery, but the landing header must not look like an application toolbar.

Do not add a top-level nav item for every section.

## 8.2 Hero

Required characteristics:

- left-aligned or strongly editorial composition;
- small mono eyebrow;
- short H1;
- one concise supporting paragraph;
- two CTAs;
- compact proof line;
- real product screenshot visible early;
- no fake status pill;
- no giant decorative word;
- no glow;
- no hero terminal simulation.

The real product screenshot should carry visual credibility.

## 8.3 Deploy

Explain actual source-to-runtime behavior.

Represent:

```text
SOURCE
Git repository
Public OCI image

DEPLOY
Dockerfile
Docker Compose
Static / SPA
Container image

RUNTIME
Docker Engine
Rootful Podman

ROUTE
Caddy
Cloudflare Tunnel at the ingress edge
```

Prefer a pixel routing diagram instead of generic feature cards.

Example conceptual structure:

```text
Git repository ─┐
                ├─> Dockerfile / Compose / Static ─> Docker / Podman ─> Caddy ─> URL
Public OCI image┘
```

The final visual should be cleaner than ASCII and use reusable pixel-routing primitives.

On mobile, convert the route to a vertical flow without horizontal overflow.

## 8.4 Operate

Show what happens after deployment:

- logs;
- metrics/telemetry;
- lifecycle controls;
- environment variables;
- release history/recovery;
- databases;
- automation surfaces;
- migration.

Use a dense list/table-like structure. Do not make six identical cards.

Use a real logs screenshot as proof where appropriate.

## 8.5 Ownership + integrations

Explain `no vendor lock-in` through concrete ownership facts.

Suggested split:

### You keep

- Linux host;
- source repository;
- OCI workloads;
- project data;
- persistent volumes;
- migration path.

### MyPaaS connects

- GitHub;
- public OCI registries;
- Docker / Podman;
- Caddy;
- Cloudflare Tunnel;
- PostgreSQL;
- webhooks/API/MCP where appropriate.

No logo marquee.

No fake partner/integration list.

Do not imply future integrations are already available.

## 8.6 Scope

Keep this compact and factual.

State important boundaries such as:

- single Linux VM;
- owner-operated or small trusted team;
- no Kubernetes;
- no multi-node scheduler;
- no multi-region HA;
- no automatic horizontal scaling;
- operator remains responsible for host capacity and provider reliability.

Do not turn limitations into a dramatic manifesto.

## 8.7 Install

Show real install commands clearly.

Docker and Podman must be distinguishable.

Avoid fake terminal chrome.

Provide a direct installation-doc link.

## 8.8 Footer

Keep minimal:

- MyPaaS;
- GitHub;
- Docs;
- Privacy;
- license.

No giant billboard wordmark.

---

# 9. Pixel visual system

Build a coherent monochrome system rather than scattering pixel icons around the page.

## Design vocabulary

Prefer:

- 8px design rhythm;
- 1px and occasional 2px rules;
- square nodes;
- stepped corners;
- precise baseline alignment;
- one-bit icons;
- block route arrows;
- restrained ordered dithering;
- thin infrastructure bus lines;
- small mono labels;
- real screenshots framed with pixel-derived geometry.

Suggested reusable primitives:

- `PixelFrame`;
- `PixelRule`;
- `PixelRoute`;
- `DitherField`;
- `TechLabel`.

Do not build an elaborate design-system package. These should remain simple presentational components if needed.

## Monochrome constraints

Landing shell should be neutral black/white/gray.

Semantic colors may remain inside actual product screenshots and real state representations.

Do not introduce marketing accent colors merely to create variety.

## Dither rule

If depth or texture is needed, use subtle 1-bit/ordered-dither patterns instead of decorative gradients.

Possible assets:

```text
public/patterns/dither-25.svg
public/patterns/dither-50.svg
public/patterns/pixel-grid.svg
```

Use at most one or two meaningful textured regions. Copy readability always wins.

## Corner rule

Do not turn everything into a rounded card.

Prefer:

- square corners;
- restrained 4–8px radius when useful;
- or stepped/bitten corners on high-value surfaces.

Do not apply stepped corners to every element.

## Screenshot treatment

Preferred:

- real screenshot;
- 1px frame;
- small technical caption;
- square or restrained pixel corner treatment;
- optional low-contrast dither backplate;
- no fake browser chrome;
- no floating laptop mockup;
- no large shadow;
- no carousel.

---

# 10. Layout rules

Avoid repeating this structure six times:

```text
SECTION LABEL
headline
paragraph
framed box
```

That rhythm is one reason the current site feels templated.

Use editorial composition instead.

Vary sections deliberately using combinations such as:

- copy + real product screenshot;
- horizontal technical flow;
- compact specification table;
- asymmetric text/visual split;
- full-width technical rule;
- dense capability rows;
- small inline labels;
- open whitespace.

Every frame, border, and box must have a reason.

Do not frame normal paragraphs.

Do not create a card because content lacks hierarchy; fix the hierarchy instead.

---

# 11. Components/patterns to remove or avoid

Do not reintroduce the old marketing direction.

Avoid or delete if obsolete and unused:

- fake terminal demos;
- fake telemetry;
- detection simulators;
- integration marquees;
- carousels;
- theme-comparison sliders;
- scanlines;
- glow effects;
- glassmorphism;
- decorative gradients;
- giant background display words;
- marketing ticker strips;
- generic three-column feature-card grids;
- deeply nested framed cards;
- oversized pill UI for ordinary metadata;
- large shadows;
- floating blobs;
- excessive animation.

Do not delete a file merely because its name sounds old. Confirm it is no longer imported or required first.

---

# 12. Documentation preservation

Do not undo the documentation work already completed.

Preserve and maintain routes for:

- installation;
- GitHub OAuth;
- Cloudflare Tunnel;
- first deployment;
- deployment models;
- environment variables;
- routing/webhooks;
- operations;
- observability;
- databases/DB Studio;
- backups/recovery;
- migration;
- automation/MCP;
- security;
- limitations;
- troubleshooting.

Some documentation screenshots are intentionally placeholders.

Do **not** fabricate GitHub or Cloudflare screenshots.

Placeholder UI should remain explicitly labeled as pending verified capture until a real screenshot is provided.

After the landing visual language is stable, align docs typography/navigation lightly with it. Do not let docs visual work expand into a second unrelated redesign.

---

# 13. Localization discipline

The English page is the canonical copy source during this refactor.

Required sequence:

1. finalize English information architecture;
2. finalize English copy;
3. verify claims against current MyPaaS behavior;
4. translate from the locked English source;
5. review translated line lengths;
6. verify navigation and CTA labels;
7. ensure localized pages do not silently inherit important English copy unintentionally.

Do not independently improvise different product positioning for Indonesian and Chinese pages.

Translations should preserve meaning, not word order.

---

# 14. Responsive requirements

Explicitly validate these viewport widths:

- 1440px;
- 1024px;
- 768px;
- 390px;
- 320px.

Check at each size:

- hero line breaks;
- navigation usability;
- CTA wrapping;
- screenshot width and cropping;
- route-diagram behavior;
- long commands;
- docs sidebar/navigation;
- no horizontal overflow;
- labels remain legible;
- spacing does not become disproportionately large;
- content order still makes sense without desktop side-by-side layouts.

Dark and light theme must both remain functional.

Do not assume a desktop design is responsive merely because CSS uses `clamp()`.

---

# 15. Accessibility requirements

Maintain or improve:

- semantic HTML;
- keyboard navigation;
- visible focus states;
- sensible heading hierarchy;
- sufficient contrast;
- meaningful alt text;
- reduced-motion behavior;
- no critical information encoded only by color;
- touch targets appropriate for mobile;
- readable code blocks without trapping horizontal layout.

Do not sacrifice readability for pixel aesthetics.

---

# 16. Implementation discipline

Keep the code simple and mature.

Before writing a new component, check whether the existing structure can be simplified.

Do not create a framework inside the landing page.

Prefer a handful of clear, reusable visual primitives over a large design-system abstraction.

Avoid large speculative refactors unrelated to the visual/copy objective.

Recommended sequence:

## Phase 1 — brand + type foundation

- correct favicon family;
- install/use Inter Variable correctly;
- remove stale Instrument Sans if unused;
- normalize font tokens;
- establish neutral pixel-monochrome tokens.

## Phase 2 — English copy lock

- rewrite hero;
- remove abstract section labels;
- simplify section headings;
- shorten body copy;
- verify claims.

## Phase 3 — pixel primitives

- create only the minimal geometry/pattern primitives needed;
- keep them composable and CSS-light;
- avoid decorative excess.

## Phase 4 — landing composition

- rebuild hero;
- implement deployment flow;
- implement operations rows;
- implement ownership/integration split;
- compact scope;
- compact install section;
- minimal footer.

## Phase 5 — responsive/accessibility polish

- test explicit widths;
- fix mobile route diagrams and nav;
- tune hero wrapping;
- verify light/dark themes;
- verify keyboard/focus.

## Phase 6 — docs alignment

- align typography/navigation;
- preserve content routes;
- preserve placeholder policy;
- do not invent vendor screenshots.

## Phase 7 — cleanup

- remove confirmed-dead legacy marketing components/styles;
- remove stale font dependencies;
- remove obsolete assets only when safe;
- run final search for old green brand references and deprecated marketing copy.

---

# 17. Commit strategy

Do not work directly on `main`.

Recommended intentional commit grouping:

1. `brand: align favicon and typography`
2. `copy: rewrite landing for direct product messaging`
3. `design: add pixel editorial primitives`
4. `refactor: rebuild landing composition`
5. `fix: polish responsive and accessibility behavior`
6. `docs: align public docs with landing system`
7. `chore: remove obsolete marketing assets`

Exact commit names may differ, but commits should remain conceptually reviewable.

Do not hide the entire refactor inside one giant commit unless the environment truly prevents a better split.

---

# 18. Required validation

At minimum run:

```bash
pnpm install --frozen-lockfile
pnpm build
```

Fix every build failure.

If browser automation or screenshot tooling is available, render and inspect at least:

```text
1440px desktop — light
1440px desktop — dark
390px mobile — light
390px mobile — dark
```

Also manually or programmatically check 1024px, 768px, and 320px for overflow and composition problems.

If screenshot tooling is available, include final screenshots in the PR description or comments.

A passing Astro build is necessary but is **not** proof that the visual refactor is good. Perform visual review.

---

# 19. PR contract

Open a pull request against `main`.

## DO NOT MERGE IT

The human owner wants to visually inspect the result before merge.

The PR description must include:

- visual direction implemented;
- copywriting changes;
- typography changes;
- favicon changes;
- architecture/components added or removed;
- docs changes, if any;
- validation commands and results;
- viewport screenshots if available;
- known remaining screenshot placeholders;
- any intentional deviation from `LANDING_REFACTOR_MASTER_PLAN.md` and why.

Do not mark known visual defects as complete simply because build passes.

---

# 20. Final self-review checklist

Before opening the PR, answer these questions critically:

1. Can a developer understand what MyPaaS is within 10 seconds?
2. Is the H1 short and concrete?
3. Does the hero explain product value without marketing filler?
4. Did abstract labels such as `deployment contract` and `operational loop` disappear from the public narrative?
5. Does the page visibly feel pixel-inspired without using a videogame font?
6. Is the pixel language coherent across rules, corners, diagrams, and details?
7. Is typography materially better than the previous landing?
8. Is Inter actually installed/imported rather than merely named in CSS?
9. Is IBM Plex Mono used only where technical typography is useful?
10. Is every frame/border doing useful work?
11. Did generic card-grid repetition decrease significantly?
12. Are real screenshots doing most of the product proof?
13. Are there zero fake telemetry/performance/product-state claims?
14. Is `No vendor lock-in` explained through concrete ownership facts?
15. Are current integrations distinguished from possible future integrations?
16. Is single-host scope clear without dominating the page?
17. Does the favicon use the current pixel mark and remain readable at small sizes?
18. Are light and dark themes coherent?
19. Is 390px mobile genuinely usable?
20. Is 320px free from horizontal overflow?
21. Do docs routes still work?
22. Are vendor screenshots still placeholders unless verified captures exist?
23. Does the result look intentionally designed rather than frontier-model generated?
24. Would this page look credible if linked in the README of a serious infrastructure project?

If any critical answer is no, iterate before opening the PR.

---

# 21. Anti-pattern test

Before finishing, inspect the page and ask:

> Did I interpret `pixel creative monochrome` as merely putting content in black boxes and adding a pixel font?

If yes, the refactor failed.

Also ask:

> Did I solve weak content hierarchy by adding more frames/cards?

If yes, simplify it.

And:

> Did I make the page more impressive by making typography larger instead of making the message clearer?

If yes, reduce scale and improve copy.

---

# 22. Completion condition

The task is complete only when all of the following are true:

- current MyPaaS pixel favicon identity is implemented;
- typography is rebuilt around actual Inter Variable + IBM Plex Mono;
- landing English copy is concise and professional;
- landing hierarchy is direct and understandable;
- page has a coherent pixel-infrastructure visual language;
- page remains monochrome outside real semantic product state;
- real screenshots are used as proof;
- obsolete AI/SaaS marketing patterns are absent;
- docs content remains intact;
- responsive checks pass;
- accessibility basics remain intact;
- `pnpm build` passes;
- a reviewable PR is open;
- PR includes visual evidence when available;
- PR is **not merged**.

The next human instruction should be able to remain as short as:

> Read the repository handoff and execute the landing refactor completely. Do not merge.
