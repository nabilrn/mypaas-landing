export type Locale = "en" | "id" | "zh";

export const locales: Locale[] = ["en", "id", "zh"];

export const localeMeta = {
  en: { label: "English", short: "EN", path: "/", htmlLang: "en", ogLocale: "en_US" },
  id: { label: "Bahasa Indonesia", short: "ID", path: "/id/", htmlLang: "id", ogLocale: "id_ID" },
  zh: { label: "简体中文", short: "中文", path: "/zh/", htmlLang: "zh-CN", ogLocale: "zh_CN" },
} satisfies Record<Locale, { label: string; short: string; path: string; htmlLang: string; ogLocale: string }>;

export const repositoryUrl = "https://github.com/nabilrn/MyPaas";
export const installCommand = "curl -fsSL https://raw.githubusercontent.com/nabilrn/MyPaas/main/scripts/bootstrap.sh | bash";
export const podmanInstallCommand = "curl -fsSL https://raw.githubusercontent.com/nabilrn/MyPaas/main/scripts/bootstrap.sh | env USE_PODMAN=true bash";

export const uiCopy = {
  en: {
    home: "MyPaaS home", navLabel: "Primary navigation", docs: "Docs", install: "Install", integrations: "Integrations", operations: "Operations", privacy: "Privacy",
    search: "Search", searchPlaceholder: "Search MyPaaS documentation…", searchHint: "Type to search", searchEmpty: "No matching pages or sections.", searchClose: "Close search", searchOpen: "Open search", searchResults: "Search results", resultSingular: "result", resultPlural: "results", navigate: "Navigate", open: "Open",
    language: "Language", themeDark: "Use dark theme", themeLight: "Use light theme", menuOpen: "Open navigation menu", menuClose: "Close navigation menu", star: "GitHub", source: "Source repository"
  },
  id: {
    home: "Beranda MyPaaS", navLabel: "Navigasi utama", docs: "Dokumentasi", install: "Instalasi", integrations: "Integrasi", operations: "Operasional", privacy: "Privasi",
    search: "Cari", searchPlaceholder: "Cari dokumentasi MyPaaS…", searchHint: "Ketik untuk mencari", searchEmpty: "Tidak ada hasil yang cocok.", searchClose: "Tutup pencarian", searchOpen: "Buka pencarian", searchResults: "Hasil pencarian", resultSingular: "hasil", resultPlural: "hasil", navigate: "Navigasi", open: "Buka",
    language: "Bahasa", themeDark: "Gunakan tema gelap", themeLight: "Gunakan tema terang", menuOpen: "Buka navigasi", menuClose: "Tutup navigasi", star: "GitHub", source: "Repositori sumber"
  },
  zh: {
    home: "MyPaaS 首页", navLabel: "主导航", docs: "文档", install: "安装", integrations: "集成", operations: "运维", privacy: "隐私",
    search: "搜索", searchPlaceholder: "搜索 MyPaaS 文档…", searchHint: "输入关键词", searchEmpty: "没有匹配的结果。", searchClose: "关闭搜索", searchOpen: "打开搜索", searchResults: "搜索结果", resultSingular: "条结果", resultPlural: "条结果", navigate: "导航", open: "打开",
    language: "语言", themeDark: "使用深色主题", themeLight: "使用浅色主题", menuOpen: "打开导航", menuClose: "关闭导航", star: "GitHub", source: "源代码仓库"
  },
} as const;

const en = {
  metaTitle: "MyPaaS — Self-hosted deployment platform for your Linux server",
  metaDescription: "Deploy Git repositories and public OCI images to your own Linux VM with Docker or Podman, Caddy routing, logs, metrics, databases, and recovery tooling.",
  eyebrow: "Open source · MIT · single host",
  heroTitle: "A deployment platform for your own Linux server.",
  heroSummary: "Deploy Git repositories and public OCI images without giving up control of the host. MyPaaS manages builds, routing, logs, metrics, environment configuration, databases, and release recovery from one control plane.",
  primaryCta: "Read the docs",
  secondaryCta: "View on GitHub",
  proof: ["Self-hosted", "Docker Engine / Podman", "No vendor lock-in", "Agent-accessible"],

  deployLabel: "Deployment contract",
  deployTitle: "Explicit inputs. Predictable runtime behavior.",
  deployBody: "MyPaaS inspects the source, presents the deployment contract, and keeps the runtime choice visible instead of silently inventing a platform-specific build environment.",
  deployGroups: [
    ["Source", ["Git repository", "Public OCI image"]],
    ["Deploy", ["Dockerfile", "Docker Compose", "Static / SPA", "Container image"]],
    ["Runtime", ["Docker Engine", "Rootful Podman"]],
    ["Route", ["Caddy", "Cloudflare Tunnel"]],
  ] as const,

  ownershipLabel: "Ownership + integrations",
  ownershipTitle: "Own the infrastructure. Integrate the workflow.",
  ownershipBody: "No vendor lock-in does not mean operating in isolation. Workloads and persistent data stay on infrastructure you control while MyPaaS connects the tools around the deployment lifecycle.",
  ownershipItems: ["Linux host", "OCI workloads", "PostgreSQL", "Persistent volumes", "Git source", "VM migration"],
  integrationItems: ["GitHub OAuth + webhooks", "Public OCI registries", "Cloudflare Tunnel", "Docker / Podman", "Caddy", "Prometheus-compatible metrics"],

  operationsLabel: "Operate after deploy",
  operationsTitle: "Deployment is the beginning of the operational loop.",
  operationsBody: "The project view keeps live state, observability, lifecycle controls, release history, and data tooling close to the workload.",
  operations: [
    ["Observe", "Follow runtime metrics and host telemetry without turning configured quotas into fake usage."],
    ["Diagnose", "Inspect build output, runtime logs, and Compose service context from the same project."],
    ["Operate", "Deploy, start, stop, restart, and redeploy with explicit lifecycle actions."],
    ["Recover", "Use release history for Dockerfile, Compose, and registry-image rollback; static projects recover by redeploying the target revision."],
    ["Manage data", "Provision optional shared PostgreSQL and inspect PostgreSQL, MySQL, or MariaDB through DB Studio Lite."],
    ["Move the platform", "Export and restore the installation when moving to a fresh VM instead of binding the workload to one provider."],
  ] as const,

  interfacesLabel: "Automation surface",
  interfacesTitle: "One control plane. Multiple interfaces.",
  interfacesBody: "Use the interface that fits the operator: browser for humans, CLI and API for automation, webhooks for events, and MCP for AI agents.",
  interfaces: [
    ["Human", "Dashboard", "Create projects, inspect state, manage settings, databases, and recovery workflows."],
    ["Developer", "CLI", "Deploy, inspect logs, manage users, and run operational tasks from the terminal."],
    ["Automation", "API + webhooks", "Drive deployments and integrate repository events with the same control-plane state."],
    ["Agent", "MCP", "Expose bounded project, deployment, log, metric, environment, quota, and host-stat tools to local AI agents."],
  ] as const,

  boundariesLabel: "Scope",
  boundariesTitle: "Designed for one server. Intentionally.",
  boundariesBody: "MyPaaS is a focused control plane for an owner developer or a small trusted team. The VM remains the capacity and failure boundary.",
  boundaries: ["Single Linux VM", "No Kubernetes or multi-node scheduler", "No multi-region HA or automatic horizontal scaling", "Public registry images only; private registry credentials are not implemented", "Host capacity, backups, and provider reliability remain operator responsibilities"],

  installLabel: "Install",
  installTitle: "Your server is the platform.",
  installBody: "The bootstrap prepares a fresh Ubuntu or Debian host and opens the guided installer. Bring a domain, GitHub OAuth credentials, and a Cloudflare Tunnel token.",
  installDocker: "Docker Engine",
  installPodman: "Podman",
  installGuide: "Open the installation guide",
  verified: "Product claims on this page are derived from current MyPaaS main behavior, not roadmap items.",
  footer: "Open-source deployment control plane for a single Linux server.",
  documentation: "Documentation", changelog: "Changelog", license: "MIT License",
};

const id = {
  ...en,
  metaTitle: "MyPaaS — Platform deployment self-hosted untuk server Linux Anda",
  metaDescription: "Deploy repositori Git dan image OCI publik ke VM Linux milik sendiri dengan Docker atau Podman, routing Caddy, log, metrik, database, dan recovery.",
  eyebrow: "Open source · MIT · single host",
  heroTitle: "Platform deployment untuk server Linux milik Anda.",
  heroSummary: "Deploy repositori Git dan image OCI publik tanpa menyerahkan kontrol host. MyPaaS mengelola build, routing, log, metrik, environment, database, dan recovery release dari satu control plane.",
  primaryCta: "Baca dokumentasi", secondaryCta: "Lihat di GitHub",
  proof: ["Self-hosted", "Docker Engine / Podman", "Tanpa vendor lock-in", "Siap untuk agent"],
  deployLabel: "Kontrak deployment", deployTitle: "Input eksplisit. Runtime yang dapat diprediksi.",
  deployBody: "MyPaaS memeriksa source, menampilkan kontrak deployment, dan menjaga pilihan runtime tetap terlihat alih-alih membuat environment platform-specific secara diam-diam.",
  ownershipLabel: "Kepemilikan + integrasi", ownershipTitle: "Miliki infrastrukturnya. Integrasikan workflow-nya.",
  ownershipBody: "Tanpa vendor lock-in bukan berarti bekerja sendirian. Workload dan data persisten tetap di infrastruktur yang Anda kontrol sementara MyPaaS menghubungkan tool di sekitar lifecycle deployment.",
  operationsLabel: "Operasikan setelah deploy", operationsTitle: "Deployment adalah awal dari siklus operasional.",
  operationsBody: "Project view menjaga state live, observability, lifecycle, riwayat release, dan data tooling dekat dengan workload.",
  interfacesLabel: "Automation surface", interfacesTitle: "Satu control plane. Banyak interface.",
  interfacesBody: "Gunakan interface yang sesuai: dashboard untuk manusia, CLI/API untuk automation, webhook untuk event, dan MCP untuk AI agent.",
  boundariesLabel: "Ruang lingkup", boundariesTitle: "Dirancang untuk satu server. Dengan sengaja.",
  boundariesBody: "MyPaaS adalah control plane terfokus untuk owner developer atau tim kecil tepercaya. VM tetap menjadi batas kapasitas dan failure domain.",
  installLabel: "Instalasi", installTitle: "Server Anda adalah platformnya.",
  installBody: "Bootstrap menyiapkan host Ubuntu atau Debian yang fresh dan membuka installer terpandu. Siapkan domain, kredensial GitHub OAuth, dan token Cloudflare Tunnel.",
  installGuide: "Buka panduan instalasi",
  verified: "Claim produk pada halaman ini berasal dari perilaku MyPaaS main saat ini, bukan roadmap.",
  footer: "Control plane deployment open-source untuk satu server Linux.", documentation: "Dokumentasi",
};

const zh = {
  ...en,
  metaTitle: "MyPaaS — 面向自有 Linux 服务器的自托管部署平台",
  metaDescription: "将 Git 仓库和公开 OCI 镜像部署到自己的 Linux VM，支持 Docker 或 Podman、Caddy 路由、日志、指标、数据库与恢复工具。",
  eyebrow: "开源 · MIT · 单机",
  heroTitle: "为你自己的 Linux 服务器而生的部署平台。",
  heroSummary: "部署 Git 仓库和公开 OCI 镜像，同时保留对主机的控制。MyPaaS 在一个控制平面中管理构建、路由、日志、指标、环境配置、数据库与版本恢复。",
  primaryCta: "阅读文档", secondaryCta: "在 GitHub 查看",
  proof: ["自托管", "Docker Engine / Podman", "无供应商锁定", "Agent 可访问"],
  deployLabel: "部署契约", deployTitle: "输入明确，运行时行为可预测。",
  deployBody: "MyPaaS 检查来源并展示部署契约，让运行时选择保持可见，而不是悄悄生成平台专属环境。",
  ownershipLabel: "所有权 + 集成", ownershipTitle: "掌控基础设施，连接工作流。",
  ownershipBody: "无供应商锁定并不意味着与生态隔离。工作负载和持久数据留在你控制的基础设施上，同时 MyPaaS 连接部署生命周期周围的工具。",
  operationsLabel: "部署后的运维", operationsTitle: "部署只是运维闭环的开始。",
  operationsBody: "项目视图把实时状态、可观测性、生命周期控制、版本历史和数据工具放在工作负载附近。",
  interfacesLabel: "自动化接口", interfacesTitle: "一个控制平面，多种接口。",
  interfacesBody: "浏览器服务于人，CLI 和 API 服务于自动化，Webhook 服务于事件，MCP 服务于 AI Agent。",
  boundariesLabel: "范围", boundariesTitle: "有意为单机而设计。",
  boundariesBody: "MyPaaS 面向个人开发者或小型可信团队。单台 VM 仍然是容量和故障边界。",
  installLabel: "安装", installTitle: "你的服务器就是平台。",
  installBody: "Bootstrap 会准备全新的 Ubuntu 或 Debian 主机并打开引导式安装器。你需要准备域名、GitHub OAuth 凭据和 Cloudflare Tunnel Token。",
  installGuide: "打开安装指南",
  verified: "本页产品声明来自当前 MyPaaS main 的实际行为，而非路线图。",
  footer: "面向单台 Linux 服务器的开源部署控制平面。", documentation: "文档",
};

export const landingCopy = { en, id, zh } as const;

export function searchEntries(locale: Locale) {
  const copy = landingCopy[locale];
  const home = localeMeta[locale].path;
  const section = locale === "zh" ? "产品" : locale === "id" ? "Produk" : "Product";
  const docsSection = locale === "zh" ? "文档" : locale === "id" ? "Dokumentasi" : "Documentation";

  return [
    { title: copy.heroTitle, section, description: copy.heroSummary, href: home, keywords: "self hosted paas deployment linux server git oci docker podman" },
    { title: copy.deployTitle, section, description: copy.deployBody, href: `${home}#deployment`, keywords: "dockerfile compose static spa registry image deployment" },
    { title: copy.ownershipTitle, section, description: copy.ownershipBody, href: `${home}#integrations`, keywords: "integrations no vendor lock in github cloudflare caddy registry" },
    { title: copy.operationsTitle, section, description: copy.operationsBody, href: `${home}#operations`, keywords: "logs metrics telemetry lifecycle rollback databases migration" },
    { title: copy.interfacesTitle, section, description: copy.interfacesBody, href: `${home}#automation`, keywords: "cli api webhook mcp ai agents automation" },
    { title: copy.installTitle, section, description: copy.installBody, href: `${home}#install`, keywords: "install ubuntu debian cloudflare github oauth" },
    { title: locale === "zh" ? "文档概览" : locale === "id" ? "Ringkasan dokumentasi" : "Documentation overview", section: docsSection, description: "Install, deploy, configure, operate, automate, and troubleshoot MyPaaS.", href: "/docs/", keywords: "docs documentation overview architecture" },
    { title: locale === "zh" ? "安装" : locale === "id" ? "Instalasi" : "Installation", section: docsSection, description: "Prepare a Linux VM, GitHub OAuth, Cloudflare Tunnel, and complete the guided installer.", href: "/docs/installation/", keywords: "install bootstrap oauth cloudflare tunnel" },
    { title: locale === "zh" ? "部署模式" : locale === "id" ? "Model deployment" : "Deployment models", section: docsSection, description: "Dockerfile, Compose, static/SPA, and public OCI image deployment contracts.", href: "/docs/deployment-models/", keywords: "dockerfile compose static spa registry image deployment" },
    { title: locale === "zh" ? "配置与路由" : locale === "id" ? "Konfigurasi dan routing" : "Configuration and routing", section: docsSection, description: "Identity, environment variables, webhooks, Caddy, Cloudflare, and routing.", href: "/docs/configuration/", keywords: "configuration env domain caddy cloudflare routing webhook" },
    { title: locale === "zh" ? "运维" : locale === "id" ? "Operasional" : "Operations", section: docsSection, description: "Logs, statd telemetry, lifecycle controls, history, databases, and recovery.", href: "/docs/operations/", keywords: "operations logs metrics statd rollback database" },
    { title: locale === "zh" ? "迁移" : locale === "id" ? "Migrasi" : "Migration", section: docsSection, description: "Move a complete MyPaaS installation to a fresh VM.", href: "/docs/migration/", keywords: "migration export import vm" },
    { title: locale === "zh" ? "安全" : locale === "id" ? "Keamanan" : "Security", section: docsSection, description: "Trust boundaries, secrets, engine authority, and operator responsibilities.", href: "/docs/security/", keywords: "security secrets trust boundaries" },
    { title: locale === "zh" ? "限制" : locale === "id" ? "Keterbatasan" : "Limitations", section: docsSection, description: "Single-host boundaries and explicit product non-goals.", href: "/docs/limitations/", keywords: "limitations single host non goals" },
  ];
}
