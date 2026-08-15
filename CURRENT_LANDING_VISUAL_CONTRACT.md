# Current MyPaaS Landing Visual Contract

Status: **current source of truth for landing-page visual implementation**

This contract supersedes conflicting visual, typography, color, layout, iconography, and theme instructions in `FRONTIER_MODEL_HANDOFF.md` and `LANDING_REFACTOR_MASTER_PLAN.md`. Those files remain historical context only when they conflict with this document.

## Locked direction

The landing is implemented as a visual clone of the approved reference compositions. Do not redesign completed sections unless a later human instruction explicitly asks for it.

### Hero

The current black monochrome hero is locked. Preserve its composition, pixel infrastructure artwork, install command, runtime chips, and boundary integration rail unless explicitly instructed otherwise.

The large cube mark is an intentional watermark, not a hidden decorative asset. Keep it visibly subordinate to the hero headline but high enough in contrast to read as a deliberate brand element.

The landing page itself does **not** provide a theme switch. Documentation may keep its independent theme behavior.

## Typography

Use the approved typography across the landing and shared design tokens:

- **Geist Pixel Circle** is the single display family for landing `h1` and `h2` headings, including Hero, Architecture, Why MyPaaS, and How It Works.
- Prefer the native `400` face for landing display headings instead of synthesizing heavier weights.
- **Inter** remains unchanged for navigation, body text, buttons, card titles, `h3` headings, and normal UI labels.
- **Inconsolata** remains unchanged for commands, code, compact technical labels, diagram interface labels, terminal text, and monospace annotations.

Geist Pixel Circle is loaded from the official `vercel/geist-font` repository at a pinned commit. Keep it isolated to the heading token instead of replacing the sans or monospace families.

```css
--font-heading: "Geist Pixel Circle", "Inter", ui-sans-serif, system-ui, sans-serif;
--font-display: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-mono: "Inconsolata", ui-monospace, monospace;
```

## Canonical technical frame

Landing containers use one reusable outline primitive from `src/styles/technical-frame.css`.

The reference geometry is the **View on GitHub** header CTA:

- 1px outline;
- flat surface with no card shadow;
- no conventional rounded rectangle;
- clipped top-left and bottom-right corners;
- `8px` cut for normal cards, `12px` for large panels, and `6px` for compact controls;
- light and dark surfaces may use different contrast, but they must keep the same geometry.

Apply this frame language to the integration rail and tiles, architecture panel and nodes, feature cards, How It Works cards, hero command box, runtime chips, header controls, copy toast, and footer GitHub card.

Dashed strokes are reserved for **connectors / relationships / flow**, not container borders. How It Works illustrations are intentionally unboxed so each step has one container frame instead of nested cards.

## Landing spacing and card rhythm

Body sections share canonical tokens from `src/styles/global.css` rather than per-section guesses:

- `--landing-panel-gap`
- `--landing-panel-padding`
- `--landing-card-gap`
- `--landing-card-padding`
- `--landing-card-title-size`
- `--landing-card-body-size`
- `--landing-section-label-size`
- `--technical-frame-cut`
- `--technical-frame-panel-cut`
- `--technical-frame-compact-cut`

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
- both marks use the same monochrome icon treatment as the rest of the landing;
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
7. command geometry follows the canonical technical frame;
8. do not add a separate animated perimeter that competes with the shared frame language.

Interaction state belongs in TypeScript under `src/scripts/`.

## Header search and repository metadata

The landing header exposes the existing search dialog with a visible search icon beside the GitHub CTA. `Ctrl/Cmd + K` remains the primary keyboard shortcut.

For now, GitHub CTAs use label-only social proof. Do not render the live star count in either the header or footer until the count is meaningful enough to help rather than distract. This also avoids an unnecessary client-side GitHub metadata request on the landing page.

## Iconography contract

Do not treat every icon the same, but keep each icon category internally consistent.

### Brand and integration marks

- use official brand silhouettes / Simple Icons where available;
- render integration and runtime marks **monochrome** across the landing instead of mixing original brand colors;
- on light surfaces use near-black / neutral gray; on the dark hero use white / neutral gray;
- the same brand must keep the same monochrome treatment wherever it reappears, including the ecosystem rail, hero runtime chips, and Architecture diagram;
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

## Architecture diagram semantics

The current Architecture map uses one solid connector style for all topology lines. Do not mix dashed and solid connectors unless the difference communicates a real semantic category and that category is explained with an explicit legend.

## Copy hierarchy

Keep the full integration/tool list in the hero, where it establishes the platform surface area once. Supporting sections should describe outcomes instead of repeating the same GitHub + Cloudflare + MCP list.

The ecosystem rail should frame compatibility with the user's existing stack. Why MyPaaS should communicate concrete operational benefits. Single-server positioning should be confident and intentional rather than apologetic: MyPaaS is not trying to be Kubernetes; it optimizes the one-host operating model.

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

Continue matching approved screenshot geometry and hierarchy before introducing independent design ideas. Keep thin neutral strokes, white surfaces, Geist Pixel Circle for `h1`/`h2`, Inter for supporting UI typography, Inconsolata technical microcopy, monochrome integration marks, and the canonical technical frame for containers. Architecture topology must stay clear before decorative geometry is added.

## Change discipline

1. Prefer screenshot fidelity over older planning prose when they conflict.
2. Preserve completed sections unless the human request names them.
3. Do not restore a landing theme toggle.
4. Keep Geist Pixel Circle limited to semantic `h1`/`h2`; do not replace normal UI or technical typography with it.
5. Reuse shared icon/distro/frame primitives instead of duplicating variants.
6. Keep client-side metadata/network failures non-fatal.
7. Run the repository build on every PR before merge.
