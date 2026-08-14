# MyPaaS Landing Refactor Master Plan

Status: **current implementation guidance**

The landing is no longer in exploratory redesign mode. The current objective is to complete and clean the approved screenshot-clone implementation while preserving truthful MyPaaS product claims.

The detailed visual contract lives in [`CURRENT_LANDING_VISUAL_CONTRACT.md`](./CURRENT_LANDING_VISUAL_CONTRACT.md) and takes precedence if this file is ever ambiguous.

## 1. Current visual direction

- The finalized black hero is locked unless a human request explicitly names it.
- The floating ecosystem rail remains directly below the hero.
- All sections after the hero use a clean `#FFFFFF` base surface, matching the ecosystem card.
- Architecture, Why MyPaaS, How It Works, and footer should follow the approved screenshot compositions as closely as practical.
- Screenshot fidelity takes priority over older experimental layout ideas.
- Do not restore removed sections merely because they existed in older Git history.

## 2. Typography tokens

The landing uses exactly the typography established by the approved hero:

### Primary sans — Inter

Use for navigation, headings, paragraphs, buttons, cards, footer copy, and normal interface labels.

### Technical mono — Inconsolata

Use for commands, terminal text, compact technical labels, diagram operator labels, and code-like annotations.

Do not explicitly force Instrument Sans, IBM Plex Mono, Pixelify Sans, or another display/mono family in landing components.

Use the shared variables:

```css
--font-display: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-mono: "Inconsolata", ui-monospace, monospace;
```

Component-local CSS should inherit these variables rather than re-declaring font families.

## 3. Surface and color rules

Landing shell:

- hero/header: black monochrome composition already implemented;
- post-hero page background: `#FFFFFF`;
- section containers: `#FFFFFF`;
- cards/nodes: `#FFFFFF`;
- borders: neutral gray/black;
- brand colors: allowed on real integration/runtime icons for recognition;
- no off-white or cream section bands unless explicitly requested later.

The landing does not expose a light/dark theme switch. Documentation may keep independent theme support.

## 4. Layout discipline

The floating integration rail intentionally overlaps the hero boundary, but it must reserve enough layout height so the architecture section begins below the rail rather than rendering underneath it.

Do not solve spacing bugs by moving completed hero elements unless the bug is inside the hero itself.

## 5. Icon rules

- Use actual brand icons where available.
- Podman may use a white plate when required for contrast.
- Dedicated MCP representations use a robot/agent glyph.
- Do not reuse the old radial/starburst protocol glyph for MCP tiles or MCP interface nodes.

## 6. Content truth

Public claims must follow the current MyPaaS implementation and current technical documentation.

Do not invent:

- fake users or customers;
- fake GitHub stars;
- fake performance numbers;
- unsupported production/security claims;
- roadmap features presented as current behavior.

The visual reference may be cloned while replacing fictional metrics with truthful labels.

## 7. Current page sequence

1. Header + finalized hero.
2. Floating ecosystem/integration rail.
3. Architecture section.
4. Why MyPaaS six-card section.
5. How It Works four-step section.
6. Dark footer.

Do not reintroduce prior experimental landing sections unless explicitly requested.

## 8. Engineering workflow

- Work on a dedicated branch.
- Keep the scope limited to the requested visual pass.
- Run `pnpm install --frozen-lockfile` and `pnpm build` through the repository CI.
- Merge only when the requested workflow explicitly allows it and CI succeeds.
