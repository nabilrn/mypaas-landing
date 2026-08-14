# MyPaaS Public Site

Astro website for the MyPaaS product landing page, public documentation, and privacy policy.

The public site is intentionally evidence-driven: current product claims should follow the behavior implemented on `nabilrn/MyPaas` `main`, while roadmap items remain clearly separate.

## Landing visual source of truth

For any landing-page visual implementation or cleanup, read these files in this order:

1. [`CURRENT_LANDING_VISUAL_CONTRACT.md`](./CURRENT_LANDING_VISUAL_CONTRACT.md) — **current visual source of truth**. It defines the locked screenshot-clone direction, Inter + Inconsolata typography tokens, white post-hero surfaces, no landing theme toggle, integration-rail spacing, and the MCP robot glyph.
2. [`FRONTIER_MODEL_HANDOFF.md`](./FRONTIER_MODEL_HANDOFF.md) — historical execution/refactor context. Any visual rule that conflicts with the current visual contract is superseded.
3. [`LANDING_REFACTOR_MASTER_PLAN.md`](./LANDING_REFACTOR_MASTER_PLAN.md) — historical audit and product/copy context. Any old typography, color, information-architecture, or theme instruction that conflicts with the current visual contract is superseded.

For current UI work, screenshot fidelity and the current visual contract take precedence over earlier refactor proposals.

## Public routes

- `/` — product landing page
- `/docs/` — documentation overview
- `/docs/installation/` — VM, GitHub OAuth, Cloudflare Tunnel, and guided installation
- `/docs/deployment-models/` — Dockerfile, Compose, static/SPA, and public OCI image contracts
- `/docs/configuration/` — identity, environment, webhooks, and routing
- `/docs/operations/` — operational overview
- `/docs/automation/` — CLI, API, webhooks, and MCP/agent interfaces
- `/docs/migration/` — VM migration
- `/docs/security/` — trust model and security boundaries
- `/docs/limitations/` — explicit single-host boundaries
- `/privacy/` — privacy policy
