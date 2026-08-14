# MyPaaS Landing — Implementation Handoff

Status: **current execution contract**

Before editing the landing page, read:

1. [`CURRENT_LANDING_VISUAL_CONTRACT.md`](./CURRENT_LANDING_VISUAL_CONTRACT.md)
2. [`LANDING_REFACTOR_MASTER_PLAN.md`](./LANDING_REFACTOR_MASTER_PLAN.md)
3. the current Astro implementation on `main`

The current visual contract is authoritative for typography, surfaces, section order, theme behavior, MCP iconography, and screenshot-clone fidelity.

## Mission

Continue the approved MyPaaS landing implementation rather than redesigning it from scratch.

The current landing direction is:

- black monochrome finalized hero;
- floating white ecosystem rail;
- white architecture/body sections;
- screenshot-derived card geometry and spacing;
- dark footer;
- clear infrastructure-product copy;
- restrained brand colors on real technology icons.

## Locked typography

Use the shared design tokens everywhere instead of hardcoding component-specific families:

- `Inter` for display, navigation, body, buttons, and normal UI text;
- `Inconsolata` for command/terminal text and compact technical annotations.

Do not introduce or restore Instrument Sans, IBM Plex Mono, Pixelify Sans, or unrelated font families in landing components.

## Landing surface contract

After the hero, the landing background and section/card surfaces are `#FFFFFF`.

Do not use the previous off-white body fills. Thin gray borders and subtle grid lines are sufficient to create separation.

The floating integration rail must not overlap the architecture content. Preserve its visual hero overlap while reserving enough layout space below it.

## Theme behavior

The public landing does not expose a theme toggle. Do not restore it.

Documentation may retain its own theme controls and dark tokens.

## MCP iconography

Dedicated MCP tiles and MCP interface nodes use a robot/agent glyph. Do not use the old radial starburst glyph for MCP.

## Current landing order

1. Header + hero.
2. Ecosystem rail.
3. Architecture.
4. Why MyPaaS.
5. How It Works.
6. Footer.

Preserve completed sections unless the human request explicitly asks to modify them.

## Product truth

For capability claims, use the current MyPaaS implementation and current technical documentation. Never fabricate metrics, user counts, GitHub stars, performance, availability, security, or roadmap capabilities.

## Workflow

1. Start from latest `main`.
2. Create a dedicated branch.
3. Make only the requested changes.
4. Open a PR.
5. Validate with the repository GitHub Actions build (`pnpm install --frozen-lockfile` + `pnpm build`).
6. Merge only when the human workflow explicitly requests automatic merge after successful CI.
