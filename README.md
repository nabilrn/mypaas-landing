# MyPaaS Public Site

Astro website for the MyPaaS landing page, public documentation, and privacy policy.

Public capability claims must match the current `nabilrn/MyPaas` implementation. Do not publish synthetic capacity numbers, benchmark charts, user counts, availability promises, or roadmap features as current product behavior.

The current product boundary is simple: MyPaaS is a single-host self-hosted deployment platform. Application capacity depends on the application and on the CPU, memory, storage, network, and database resources available on the host.

## Public routes

- `/` — product landing page
- `/docs/` — documentation overview
- `/docs/installation/` — installation
- `/docs/deployment-models/` — Dockerfile, Compose, static/SPA, and public OCI image deployment
- `/docs/configuration/` — configuration
- `/docs/operations/` — operations
- `/docs/automation/` — CLI, API, webhooks, and MCP interfaces
- `/docs/migration/` — VM migration
- `/docs/security/` — trust model and security boundaries
- `/docs/limitations/` — current boundaries
- `/privacy/` — privacy policy

## Development

```bash
pnpm install --frozen-lockfile
pnpm build
```
