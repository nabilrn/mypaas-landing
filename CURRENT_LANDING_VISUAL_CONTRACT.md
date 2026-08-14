# Current MyPaaS Landing Visual Contract

Status: **current source of truth for landing-page visual implementation**

This contract supersedes conflicting visual, typography, color, layout, iconography, and theme instructions in `FRONTIER_MODEL_HANDOFF.md` and `LANDING_REFACTOR_MASTER_PLAN.md`. Those files remain historical context only when they conflict with this document.

## Locked direction

The landing is implemented as a visual clone of the approved reference compositions. Do not redesign completed sections unless a later human instruction explicitly asks for it.

### Hero

The current black monochrome hero is locked. Preserve its composition, pixel infrastructure artwork, install command, runtime chips, and boundary integration rail unless explicitly instructed otherwise.

The landing page itself does **not** provide a theme switch. Documentation may keep its independent theme behavior.

## Typography

Use the approved hero typography across the landing and shared design tokens:

- **Inter** for navigation, headings, body text, buttons, card titles, and normal UI labels.
- **Inconsolata** for commands, code, compact technical labels, diagram interface labels, terminal text, and monospace annotations.

Do not introduce or explicitly force Instrument Sans, IBM Plex Mono, Pixelify Sans, or another display family into landing components.

```css
--font-display: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-mono: "Inconsolata", ui-monospace, monospace;
```

## Landing spacing and card rhythm

Body sections share canonical tokens from `src/styles/global.css` rather than per-section guesses:

- `--landing-panel-gap`
- `--landing-panel-padding`
- `--landing-card-gap`
- `--landing-card-padding`
- `--landing-card-title-size`
- `--landing-card-body-size`
- `--landing-section-label-size`
- `--landing-card-radius`
- `--landing-panel-radius`

Why MyPaaS and How It Works card titles use the same title size. Card body copy uses the same body size. Multi-line card titles reserve a consistent title row so body copy aligns across a row.

## Landing surfaces

Everything after the black hero uses the same clean white surface established by the integration rail:

- page/body background: `#FFFFFF`;
- section surface: `#FFFFFF`;
- card surface: `#FFFFFF`;
- separation uses thin neutral borders and sparse grid/detail lines.

Avoid off-white section fills such as `#F7F7F5`, `#FAFAF8`, or translucent cream surfaces in the landing body.

## Hero / content boundary rail

The integration rail straddles the exact boundary between the hero and the white content body:

- approximately half of the rail sits over the black hero;
- approximately half sits over the white body;
- the rail itself stays white with a thin neutral border;
- do **not** add a floating drop shadow;
- reserve document-flow height so architecture never renders under the rail.

The black/white split must come from the page boundary behind the rail, not from tinting the rail card itself.

## Runtime distro representation

Supported host distro badges use one reusable **Ubuntu + Debian stacked pair**:

- Ubuntu and Debian are the two overlapping marks;
- keep the marks smaller than normal integration logos;
- use the same stack in the hero runtime chip and the Ubuntu/Debian ecosystem tile;
- do not replace the pair with a generic Linux + Debian stack;
- do not mutate the rendered badge DOM after page load to construct the stack.

## Copy command interaction

The install copy control owns both its interaction logic and its visual feedback:

1. default copy icon;
2. successful copy swaps to a check icon briefly;
3. a visible compact toast confirms `Command copied`;
4. failure shows a failure toast;
5. preserve an `aria-live` state for assistive technology;
6. keep a clipboard fallback where the modern Clipboard API is unavailable;
7. the command frame carries a subtle perimeter-running light;
8. reduced-motion users must not receive continuous perimeter animation.

Interaction state belongs in TypeScript under `src/scripts/`; compositor-friendly border motion remains CSS.

## Header search and repository metadata

The landing header exposes the existing search dialog with a visible search icon beside the GitHub CTA. `Ctrl/Cmd + K` remains the primary keyboard shortcut.

The GitHub CTA and footer star CTA may display the live star count for `nabilrn/MyPaas`. Fetch this client-side with a short cache and graceful failure. Do not make the static Astro build depend on GitHub API availability and do not hardcode a decorative fake count.

## Iconography contract

Do not treat every icon the same, but keep each icon category internally consistent.

### Brand and integration marks

- use official brand marks / Simple Icons where available;
- preserve recognizable brand color when useful;
- normalize normal integration marks to roughly `24px` optical size;
- stacked distro marks are intentionally smaller.

### Functional and operator icons

- monochrome outline icons;
- target `24px` box;
- target `1.5–1.75px` stroke;
- rounded line caps / joins unless the reference clearly requires terminal geometry;
- Dashboard, CLI/Shell, API, search, and star UI marks come from the shared `InterfaceIcon` source rather than ad-hoc CSS boxes, text glyphs, or per-section SVGs;
- the terminal icon used in feature cards must reuse that same shared source;
- use an actual five-point star anywhere the UI action means GitHub star; do not use radial/starburst marks for that action;
- metrics, agent, and similar functional marks should keep comparable optical weight.

### MCP / agent icon

Use the shared **robot/agent glyph** for MCP everywhere on the landing. Do not create per-section robot variants and do not restore the protocol radial/starburst glyph for MCP.

## How It Works illustrations

Do not use unreadable full-dashboard screenshots at card scale. Each step uses a purpose-built compact vector illustration with no tiny UI text:

1. Connect GitHub: repository + secure link + MyPaaS target.
2. Inspect and configure: configuration panel / environment controls.
3. Deploy: source-to-container-to-server pipeline.
4. Operate: server + logs + metrics.

Illustration reveal may be driven by a small TypeScript `IntersectionObserver`, while the actual transitions remain CSS and respect `prefers-reduced-motion`.

## Copy punctuation

Avoid em dashes in landing-facing marketing copy. Prefer commas, periods, or direct sentence rewrites so the page keeps the concise technical tone of the approved reference.

## Architecture and body sections

Continue matching approved screenshot geometry and hierarchy before introducing independent design ideas. Keep thin neutral strokes, white surfaces, Inter typography, Inconsolata technical microcopy, restrained brand colors, and simple rounded diagram frames. Architecture topology must stay clear before decorative geometry is added.

## Change discipline

1. Prefer screenshot fidelity over older planning prose when they conflict.
2. Preserve completed sections unless the human request names them.
3. Do not restore a landing theme toggle.
4. Do not reintroduce old font families through component-local CSS.
5. Reuse shared icon/distro primitives instead of duplicating SVG variants.
6. Keep client-side metadata/network failures non-fatal.
7. Run the repository build on every PR before merge.
