# MyPaaS Public Site

Astro website for the MyPaaS product landing page, public documentation, and privacy policy.

The public site is intentionally evidence-driven: current product claims should follow the behavior implemented on `nabilrn/MyPaas` `main`, while roadmap items remain clearly separate.

## Frontier-model refactor handoff

Before performing a major landing-page visual or copy refactor, read these files completely:

1. [`FRONTIER_MODEL_HANDOFF.md`](./FRONTIER_MODEL_HANDOFF.md) — execution prompt, sequencing, validation, PR contract, and anti-pattern rules.
2. [`LANDING_REFACTOR_MASTER_PLAN.md`](./LANDING_REFACTOR_MASTER_PLAN.md) — product, visual, typography, copywriting, and information-architecture specification.

A sufficient handoff instruction for a capable coding model is:

> Read the repository handoff and master plan, execute the landing refactor completely on a new branch, validate it, open a PR with screenshots if possible, and do not merge.

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
