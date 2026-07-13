# Handover Konten Landing Page MyPaas

**Status:** content brief v1  
**Tanggal:** 2026-07-13  
**Cakupan:** konteks, positioning, message hierarchy, draft copy, CTA, FAQ, dan batas klaim.  
**Di luar cakupan:** desain visual, layout, komponen, animasi, framework, dan implementasi landing page.

## 1. Ringkasan produk

| Aspek | Keputusan konten |
|---|---|
| Kategori | Self-hosted, single-node deployment control plane. |
| Pengguna utama | Solo developer yang memiliki Linux VM/VPS dan beberapa project personal. |
| Pengguna sekunder | Sejumlah kecil collaborator tepercaya yang sudah di-whitelist oleh owner. |
| Job-to-be-done | Deploy, mengoperasikan, mendiagnosis, dan memulihkan project tanpa merakit ulang CI glue, reverse proxy, routing, log access, dan lifecycle commands untuk setiap repo. |
| Input project | Repository dengan root Compose file, root Dockerfile, atau output static siap publish yang memiliki `index.html`. |
| Nilai utama | Workflow ala PaaS pada infrastruktur yang tetap dimiliki dan dioperasikan pengguna. |
| Model produk | Open source, MIT-licensed, self-hosted; bukan hosted service dan tidak memiliki public signup atau pricing. |
| Batas utama | Satu host, kapasitas mengikuti VM, bukan high availability, multi-region, atau enterprise multi-tenant platform. |

### Product truth dalam satu kalimat

> MyPaas turns one Linux VM into a Git-connected deployment platform for Dockerfile, Compose, and static projects.

### Positioning yang harus terasa

- **Own the infrastructure:** project berjalan pada VM milik pengguna.
- **Keep the deployment contract explicit:** MyPaas memakai Dockerfile, Compose, atau output static yang sudah disiapkan repo; bukan buildpack atau runtime magic.
- **Operate, not only deploy:** status, logs, metrics, history, lifecycle controls, dan recovery adalah bagian inti produk.
- **Multi-service aware:** Compose diperlakukan sebagai first-class workflow, termasuk service utama, service pendamping, logs, metrics, dan stale-resource handling.
- **Intentionally small:** dibuat untuk satu owner, collaborator tepercaya, dan satu VM; tidak berpura-pura menjadi hyperscaler.

## 2. Audiens dan bahasa

### Audiens yang dituju

- Developer yang sudah memahami Git, Docker, domain, dan VM/VPS.
- Memiliki beberapa project personal atau small-team yang melelahkan jika dideploy manual satu per satu.
- Membutuhkan Docker Compose untuk app + database/cache/broker, atau ingin static project tidak memakai app container.
- Menginginkan control plane yang dapat dijelaskan dan di-debug, bukan abstraksi runtime tersembunyi.

### Bukan audiens utama

- Pengguna nonteknis yang mencari managed hosting tanpa mengoperasikan server.
- Tim enterprise yang membutuhkan billing, organization management, tenant isolation, SSO, HA, atau multi-region.
- Repo yang tidak membawa Dockerfile, Compose file, atau output static siap publish.

### Bahasa dan tone

- **Bahasa public copy yang direkomendasikan:** English, agar konsisten dengan dashboard, README, installer, dan repository saat ini.
- **Tone:** quiet, capable, operationally precise.
- Gunakan klaim konkret dan mekanisme nyata. Hindari hyperbole, jargon cloud generik, serta janji absolut.
- Automation harus dijelaskan sebagai **detected**, **recommended**, **generated**, atau **manual** sesuai kenyataannya.

## 3. Copy utama

### SEO baseline

**Page title**

> MyPaas — Self-hosted deployment control plane

**Meta description**

> Deploy Dockerfile, Docker Compose, and static projects from Git on your own VM, with routing, logs, metrics, history, and rollback in one dashboard.

### Hero — rekomendasi final

**Headline**

> Turn one VM into your personal deployment platform.

**Supporting copy**

> Connect a repository that contains a Dockerfile, Compose file, or ready static output. MyPaas deploys it to your Linux VM, routes it through Caddy and Cloudflare Tunnel, and brings logs, metrics, history, lifecycle controls, and recovery into one self-hosted dashboard.

**Scope qualifier**

> Open source (MIT). Single-node. Built for one owner and trusted collaborators.

**CTA untuk website project publik**

- Primary saat status masih `Unreleased`: **Read the install guide**
- Primary setelah ada tagged release yang stabil: **Install MyPaas**
- Secondary: **View source on GitHub**

**CTA untuk landing pada instance MyPaas**

- Primary: **Sign in with GitHub**
- Secondary: **View documentation**
- Tertiary: **View source on GitHub**

Jangan gunakan **Start free**, **Create account**, **Book a demo**, atau CTA pricing. MyPaas bukan hosted SaaS dan tidak memiliki public registration.

## 4. Urutan dan isi konten

Urutan ini adalah alur informasi, bukan arahan desain.

### 4.1 Problem dan product fit

**Heading**

> Your app changes. The VPS chores don't.

**Body**

> Every personal project repeats the same deployment plumbing: workflow configuration, proxy routes, TLS, secrets, ports, service lifecycle, logs, and recovery. Hosted PaaS products remove that work by owning the infrastructure. MyPaas keeps the workflow on the server you control.

**Fit statement**

> Built for personal infrastructure: one Linux VM, one owner, a small whitelist of trusted collaborators, and projects that already know how to run.

### 4.2 Cara kerja

1. **Inspect the repository**  
   Select a repository and branch. MyPaas looks for Compose first, then Dockerfile, then ready static output. It can infer ports and discover environment keys, but you review the plan before creating the project.

2. **Deploy to your VM**  
   MyPaas queues the deployment, prepares the runtime with an explicit resource profile, and assigns the project a subdomain route.

3. **Connect Git pushes**  
   Add the generated webhook URL and secret to GitHub. Signed pushes to the configured branch can trigger a new deployment automatically.

4. **Operate and recover**  
   Follow build and runtime logs, inspect service metrics, control the project lifecycle, review deployment history, and roll back supported releases when needed.

### 4.3 Deployment modes

**Section heading**

> Bring a repository that already knows how to run.

- **Dockerfile** — Build and run a single application container from the repository's Dockerfile.
- **Docker Compose** — Run a public main service with supporting database, cache, broker, or worker services. MyPaas exposes per-service logs and metrics and can flag stale Compose resources before a deploy.
- **Static** — Publish ready output from `dist`, `build`, `public`, or the repository root through Caddy without an application container.

Jangan menulis bahwa MyPaas "builds any static framework". Static mode saat ini mempublikasikan output yang sudah tersedia dan memiliki `index.html`.

### 4.4 Operasi dan recovery

**Heading**

> Deployment is only half the job.

**Body**

> Follow deployment progress and runtime logs, inspect CPU, memory, and uptime, manage environment variables, and start, stop, restart, or redeploy without leaving the dashboard. Return Dockerfile and Compose projects to a previous successful deployment when recovery matters.

**Supporting capabilities**

- Build logs, runtime logs, status, and metrics melalui project SSE stream.
- Per-service visibility untuk Compose projects.
- Deployment history dengan commit, trigger source, status, dan failure context.
- Resource profiles, per-user quota, serta pemisahan configured limits dari live runtime usage.
- Env-key discovery, `.env` import, masked secret handling, dan encrypted persistence.
- Explicit Compose resource audit/reset untuk stale containers, volumes, networks, routes, dan ports.

### 4.5 Multi-service dan data

**Heading**

> Keep the app and its supporting services together.

**Body**

> Deploy a Compose project with its database, cache, broker, or workers, then choose which service should be public. For smaller CRUD projects, MyPaas can optionally provision a database and role in its shared PostgreSQL service instead of requiring another database container.

**Supporting detail, bukan pesan hero**

> Owner-only DB Studio Lite can inspect PostgreSQL, MySQL, and MariaDB schemas and rows. Writes require a temporary write session, and update or delete actions require a primary key.

Jangan menyebut shared PostgreSQL sebagai general managed database service atau DB Studio Lite sebagai full database IDE/raw SQL console.

### 4.6 Infrastruktur yang transparan

**Heading**

> A deployment path you can explain.

**Body**

> GitHub supplies repositories, OAuth identity, and signed push events. Docker and Compose run project workloads. Caddy manages project routes. Cloudflare Tunnel handles public ingress and TLS. PostgreSQL keeps platform state. MyPaas connects those parts into one operational control plane.

**Flow terminology**

> Connect → Inspect → Deploy → Route → Observe → Recover

Gunakan nama teknologi sebagai penjelasan arsitektur, bukan seolah-olah semuanya adalah partnership resmi.

### 4.7 Access dan security controls

**Heading**

> Keep access narrow and secrets explicit.

**Body points**

- Dashboard access memakai GitHub OAuth dan database whitelist; tidak ada public signup.
- User environment values dienkripsi at rest dengan AES-256-GCM dan masked pada tampilan normal.
- GitHub webhook memakai per-project secret dan HMAC-SHA256 signature verification.
- Docker socket hanya diberikan kepada control plane, bukan kepada user project containers.
- Project traffic dipublikasikan melalui Caddy dan Cloudflare Tunnel, bukan dengan mengekspos setiap app sebagai public service terpisah.
- Owner actions memiliki audit trail; DB Studio write access memakai temporary session.

Jangan mengganti kontrol konkret di atas dengan klaim absolut seperti **completely secure**, **zero risk**, atau **your data never leaves your server**.

### 4.8 Quick start dan prerequisites

**Heading**

> Start installation with one command.

```bash
curl -fsSL https://raw.githubusercontent.com/nabilrn/MyPaas/main/scripts/bootstrap.sh | bash
```

**Body**

> The bootstrap prepares a MyPaas checkout and opens a guided setup for the owner email, GitHub OAuth, Cloudflare DNS and Tunnel, domain, and production secrets. On Ubuntu or Debian, the installer can also prepare Docker Engine and the Compose plugin before starting the production stack.

**Prerequisites yang harus disebut**

- Linux VM/VPS; automatic Docker installation saat ini ditujukan untuk Ubuntu/Debian.
- Domain aktif di Cloudflare dengan root dan wildcard hostname menuju MyPaas Caddy service.
- GitHub OAuth application dan Cloudflare Tunnel token.
- Repository dengan salah satu deployment contract yang didukung.

Gunakan **start installation with one command**, bukan **one-click**, **zero-config**, atau **fully configured in one command**.

### 4.9 Deliberate limits

**Heading**

> Operationally serious, intentionally single-node.

**Body**

> MyPaas is designed for one owner, a small whitelist of trusted collaborators, and workloads sized to the VM they operate. It is not a public hosting service, a multi-tenant enterprise platform, a high-availability cluster, or a Kubernetes replacement.

### 4.10 Final CTA dan footer

**Final CTA copy**

> Prepare your VM with the installation guide, or inspect the source before you run it.

- Primary: **Read the install guide**
- Secondary: **View source on GitHub**

**Footer descriptor**

> MyPaas — Self-hosted deployment control plane.

**Footer links minimum**

- Documentation
- GitHub repository: `https://github.com/nabilrn/MyPaas`
- Changelog
- MIT License
- Issues / security contact

## 5. FAQ minimum

### Is MyPaas a hosted service?

No. MyPaas runs on your Linux VM and uses infrastructure you configure and operate.

### What can it deploy?

A repository with a root Compose file, a root Dockerfile, or ready static output containing `index.html` in `dist`, `build`, `public`, or the repository root.

### Does it support multi-service applications?

Yes. Compose projects can run a public main service alongside database, cache, broker, worker, or other supporting services.

### Does every Git push redeploy automatically?

After you add the generated webhook URL and secret to GitHub, signed pushes to the configured branch can trigger a deployment. Automatic GitHub webhook registration is not part of the current claim.

### How do domains and TLS work?

Each project receives a subdomain under the configured domain. Caddy manages the internal project route, while Cloudflare Tunnel provides public ingress and TLS. Cloudflare DNS and wildcard hostname setup are prerequisites.

### How are environment variables handled?

MyPaas can discover environment keys from supported example files and Compose interpolation. Values are reviewed by the user, encrypted at rest with AES-256-GCM, and masked in normal dashboard views.

### Can a deployment be rolled back?

Previous successful Dockerfile and Compose deployments can be selected for rollback. Static deployments are rolled forward by redeploying the desired commit.

### Who can sign in?

The owner and explicitly whitelisted collaborators can sign in through GitHub OAuth. There is no public registration flow.

### Does MyPaas provide databases?

Projects may bring databases through Compose or opt into per-project provisioning on the platform's shared PostgreSQL service. This is intentionally smaller than a general managed database product.

### What is intentionally unsupported?

Public signup, billing, buildpacks, Kubernetes, Nomad, Docker Swarm, multi-node HA, multi-region deployment, enterprise tenant isolation, and fully automatic horizontal autoscaling.

## 6. Claim policy

### Aman dipakai dalam present tense, dengan qualifier yang tepat

- Dockerfile, Docker Compose, dan ready-static deployment modes.
- Manual deployment dan GitHub push deployment melalui signed webhook yang dipasang pengguna.
- Dynamic project subdomain routing melalui Caddy + Cloudflare Tunnel.
- Project lifecycle controls, deployment history, build/runtime logs, metrics, dan SSE status updates.
- Rollback untuk successful Dockerfile dan Compose deployments; bukan static rollback.
- GitHub OAuth whitelist, encrypted env vars, quota/resource profiles, audit log, backup/cleanup, CLI, shared PostgreSQL, dan DB Studio Lite.
- Bootstrap command dan guided production setup pada Linux, dengan automatic dependency setup khusus Ubuntu/Debian.

### Harus memakai wording bersyarat

| Hindari | Gunakan |
|---|---|
| Automatic SSL | HTTPS through a configured Cloudflare Tunnel. |
| One-command setup | Start installation with one command; finish configuration in the guided setup. |
| Automatic webhooks | Add the generated webhook URL and secret to GitHub. |
| Runtime auto-detection | Detect the repository's deployment configuration, port hints, and environment keys. |
| Instant rollback | Return a Dockerfile or Compose project to a previous successful deployment without rebuilding it. |
| Zero downtime | A failed build does not replace the currently serving release. |
| Deploy anything | Deploy repositories that provide a supported deployment contract. |

### Jangan diklaim sebagai kemampuan saat ini

- Production-ready, battle-tested, atau stable for 14 days.
- Idle sleep / wake-on-request.
- Historical p95 autosizing recommendations atau automatic autoscaling.
- Multiple replicas, high availability, atau multi-node orchestration.
- Custom domains per project.
- Branch/PR preview deployments.
- Automatic GitHub webhook creation.
- Backup restore UI atau offsite R2 backup tanpa konfigurasi dan bukti aktual.
- Discord/Slack notifications, team collaboration suite, atau public signup.
- Angka install time, deploy time, uptime, RAM usage, capacity, atau latency yang belum diukur.
- Redis sebagai dependency internal MyPaas.

## 7. Proof dan data yang perlu disiapkan sebelum publish

- Screenshot produk nyata yang sudah disanitasi untuk:
  - project inventory dan status;
  - repository inspection/deployment plan;
  - deployment history, build log, dan rollback;
  - Compose per-service logs atau metrics;
  - install wizard.
- Jangan memakai preview, uptime, deploy duration, metrics, testimonial, atau usage number fiktif.
- Status release/version yang jelas. Repository belum memiliki Git tag dan fitur utama masih berada di bagian `Unreleased` pada changelog.
- Compatibility matrix yang sudah diuji untuk OS, Docker/Compose, deployment files, dan batas static mode.
- Hardware recommendation berdasarkan hasil dogfooding; `4 vCPU / 8 GB / 80 GB` di PRD adalah konteks host awal, bukan minimum universal yang sudah terbukti.
- Hasil dogfooding terukur sebelum mempublikasikan klaim efisiensi, stabilitas, atau kecepatan.
- Permanent docs links untuk install, Cloudflare setup, GitHub webhook, backup, security model, limitations, update procedure, dan issue/security contact.
- Contoh repository nyata per deployment mode setelah lolos smoke test.

## 8. Catatan source-of-truth

Prioritas sumber untuk copy:

1. [`PRD.md`](./PRD.md) — product scope dan requirements.
2. Current code + [`CHANGELOG.md`](../CHANGELOG.md) — kemampuan yang sudah direpresentasikan dalam implementasi.
3. [`README.md`](../README.md) dan scripts — installer, prerequisites, serta operational setup.
4. [`PRODUCT.md`](../PRODUCT.md) — audience, product purpose, voice, dan design principles yang memengaruhi copy.
5. [`ARCHITECTURE.md`](./ARCHITECTURE.md) — batas komponen dan peran infrastructure.
6. [`adr/`](./adr/) — keputusan accepted atau proposed; status ADR tetap harus dibedakan dari implementation status.

### Konflik/ketidaksinkronan yang sudah dinormalisasi

- Ringkasan lama menyebut Dockerfile/Compose only, tetapi PRD dan current code sudah memiliki static mode. Landing boleh menyebut static dengan batas **ready output**, bukan buildpack.
- README memakai frasa **automatic SSL**; copy landing harus mengatribusikan public ingress dan TLS kepada Cloudflare Tunnel yang sudah dikonfigurasi.
- README development masih menyebut Redis, sementara queue internal MyPaas memakai in-memory queue + DB state. Redis bukan dependency platform.
- Durasi JWT, metrics interval, build timeout, dan jumlah project berbeda antar dokumen. Landing tidak perlu menyebut angka-angka tersebut.
- Timeline adalah planning artifact dan checkbox-nya bukan bukti shipping.
- Public landing/docs pernah ada dalam history lalu scaffold-nya dihapus dari repo ini. Current `frontend/src/routes/+page.ts` masih redirect ke `/projects`; handover ini tidak mengasumsikan lokasi implementasi berikutnya.
- Worktree saat penyusunan memiliki entri changelog yang menyebut landing sudah ditambahkan, tetapi current tree belum memiliki implementasi landing. Perlakukan entri tersebut sebagai intent, bukan evidence.

## 9. Acceptance checklist untuk konten final

- [ ] Hero menjawab apa produknya, untuk siapa, berjalan di mana, dan apa input repo-nya.
- [ ] Tidak ada CTA signup/pricing yang menyiratkan hosted SaaS.
- [ ] Cloudflare disebut sebagai prerequisite dan penyedia public ingress/TLS.
- [ ] Manual webhook setup tidak disamarkan sebagai auto-registration.
- [ ] Static disebut sebagai ready output, bukan source build otomatis.
- [ ] Rollback dibatasi ke Dockerfile dan Compose.
- [ ] Single-node dan target owner/collaborator dinyatakan jelas.
- [ ] Tidak ada roadmap feature atau performance target yang ditulis sebagai kemampuan saat ini.
- [ ] Semua screenshot, metrics, testimonial, dan benchmark berasal dari data nyata.
- [ ] CTA, repository URL, docs URL, license, dan release status sudah diverifikasi sebelum publish.
