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

## Copy command state

The install copy control must expose a visible interaction state:

1. default copy icon;
2. after a successful copy, swap to a check icon briefly;
3. return to the copy icon automatically;
4. preserve an `aria-live` text state for assistive technology;
5. keep a clipboard fallback for contexts where the modern Clipboard API is unavailable.

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
- Dashboard, CLI/Shell, and API must come from the same shared `InterfaceIcon` source rather than ad-hoc CSS boxes, text glyphs, or per-section SVGs;
- the terminal icon used in feature cards must reuse that same shared source;
- metrics, agent, and similar functional marks should keep comparable optical weight.

### MCP / agent icon

Use the shared **robot/agent glyph** for MCP everywhere on the landing. Do not create per-section robot variants and do not restore the protocol radial/starburst glyph for MCP.

## Copy punctuation

Avoid em dashes in landing-facing marketing copy. Prefer commas, periods, or direct sentence rewrites so the page keeps the concise technical tone of the approved reference.

## Architecture and body sections

Continue matching approved screenshot geometry and hierarchy before introducing independent design ideas. Keep thin neutral strokes, white surfaces, Inter typography, Inconsolata technical microcopy, and restrained brand colors.

## Change discipline

1. Prefer screenshot fidelity over older planning prose when they conflict.
2. Preserve completed sections unless the human request names them.
3. Do not restore a landing theme toggle.
4. Do not reintroduce old font families through component-local CSS.
5. Reuse shared icon/distro primitives instead of duplicating SVG variants.
6. Run the repository build on every PR before merge.
