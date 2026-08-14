# Current MyPaaS Landing Visual Contract

Status: **current source of truth for landing-page visual implementation**

This contract supersedes conflicting visual, typography, color, layout, and theme instructions in `FRONTIER_MODEL_HANDOFF.md` and `LANDING_REFACTOR_MASTER_PLAN.md`. Those files remain useful as historical design/audit context, but they must not override this document when implementing the current landing.

## Locked direction

The landing is being implemented as a visual clone of the approved reference compositions. Do not redesign completed sections unless a later human instruction explicitly asks for it.

### Hero

The current hero is locked. Preserve its black monochrome composition, pixel infrastructure artwork, install command, runtime chips, and floating integration rail unless explicitly instructed otherwise.

The landing page itself does **not** provide a theme switch. Documentation may keep its independent theme behavior.

## Typography

Use the same typography family established by the approved hero across the landing and through the shared design tokens:

- **Inter** — navigation, headings, body text, buttons, card titles, labels that are not code/terminal text.
- **Inconsolata** — commands, code, compact technical labels, diagram interface labels, terminal text, and other monospace annotations.

Do not introduce or explicitly force Instrument Sans, IBM Plex Mono, Pixelify Sans, or another display family into landing components.

The canonical shared tokens are:

```css
--font-display: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
--font-mono: "Inconsolata", ui-monospace, monospace;
```

Components should use these variables rather than hardcoding a different font family.

## Landing surfaces

Everything after the black hero uses the same clean white surface established by the floating integration card:

- page/body background: `#FFFFFF`;
- section surface: `#FFFFFF`;
- card surface: `#FFFFFF`;
- separation comes from thin neutral borders and sparse grid/detail lines, not tinted section backgrounds.

Avoid off-white section fills such as `#F7F7F5`, `#FAFAF8`, or translucent cream surfaces in the landing body.

## Floating integration rail

The rail overlaps the lower edge of the hero, but it must reserve enough document-flow height that the architecture section never renders underneath it. The rail may visually float; subsequent content must begin below its rendered bottom edge.

## Architecture and body sections

Continue matching the approved screenshot geometry and hierarchy before introducing independent design ideas. Keep:

- thin neutral strokes;
- restrained rounded/clipped frames where already established;
- white surfaces;
- Inter typography;
- Inconsolata for terminal/technical microcopy;
- real brand colors only where they improve icon recognition.

## MCP icon

Use a **robot/agent glyph** for MCP on the landing. Do not use the previous starburst/protocol-radial glyph for dedicated MCP tiles or interface nodes.

## Change discipline

1. Prefer screenshot fidelity over older planning prose when they conflict.
2. Preserve completed sections unless the human request names them.
3. Do not restore a landing theme toggle.
4. Do not reintroduce old font families through component-local CSS.
5. Run the repository build on every PR before merge.
