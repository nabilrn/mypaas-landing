export type Locale = "en" | "id" | "zh";

export const locales: Locale[] = ["en", "id", "zh"];

export const localeMeta = {
  en: { label: "English", short: "EN", path: "/", htmlLang: "en", ogLocale: "en_US" },
  id: { label: "Bahasa Indonesia", short: "ID", path: "/id/", htmlLang: "id_ID", ogLocale: "id_ID" },
  zh: { label: "简体中文", short: "中文", path: "/zh/", htmlLang: "zh-CN", ogLocale: "zh_CN" },
} satisfies Record<Locale, { label: string; short: string; path: string; htmlLang: string; ogLocale: string }>;

export const repositoryUrl = "https://github.com/nabilrn/MyPaas";
export const installCommand = "curl -fsSL https://raw.githubusercontent.com/nabilrn/MyPaas/main/scripts/bootstrap.sh | bash";
export const podmanInstallCommand = installCommand;
export const dockerInstallCommand = "curl -fsSL https://raw.githubusercontent.com/nabilrn/MyPaas/main/scripts/bootstrap.sh | env USE_PODMAN=false bash";

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
  metaTitle: "MyPaaS — Deploy to your own Linux server",
  metaDescription: "Deploy Git repositories and public OCI images to one Linux server with a Podman-first runtime, Docker Engine compatibility, Caddy routing, logs, metrics, databases, backups, and recovery.",
  eyebrow: "SELF-HOSTED PAAS · ONE LINUX SERVER",
  heroTitle: "Deploy to your server. Keep control.",
  heroSummary: "MyPaaS deploys Git repositories and public container images to a Linux server you own, with routing, logs, metrics, databases, backups, and recovery built in.",
  primaryCta: "Install MyPaaS",
  secondaryCta: "View source",
  proof: ["Open source", "Podman-first", "Docker-compatible", "Caddy", "GitHub"],

  deployLabel: "Deploy",
  deployTitle: "From source to URL.",
  deployBody: "Choose a Git repository or public OCI image. MyPaaS runs the supported deployment path and routes the result through Caddy.",
  deployGroups: [["Source", ["Git repository", "Public OCI image"]],["Deploy", ["Dockerfile", "Docker Compose", "Static / SPA", "Container image"]],["Runtime", ["Rootful Podman (default)", "Docker Engine (compatibility)"]],["Route", ["Caddy", "Cloudflare Tunnel"]]] as const,

  operationsLabel: "Operate",
  operationsTitle: "Everything after deploy.",
  operationsBody: "Inspect what is running, change it deliberately, and recover supported releases without leaving the project view.",
  operations: [
    ["Logs & metrics", "Build output, runtime logs, service metrics, and host telemetry."],
    ["Lifecycle", "Start, stop, restart, redeploy, and recover supported container releases."],
    ["Environment", "Manage encrypted project variables and detected environment templates."],
    ["Databases", "Provision PostgreSQL or inspect PostgreSQL, MySQL, and MariaDB."],
    ["Automation", "Use the dashboard, CLI, API, webhooks, or MCP."],
    ["Migration", "Move a MyPaaS installation to a fresh VM with the supported migration flow."]
  ] as const,

  ownershipLabel: "Ownership",
  ownershipTitle: "Your server. Standard tools.",
  ownershipBody: "Workloads and persistent data stay on infrastructure you control. MyPaaS connects the tools around them instead of replacing your runtime with a proprietary one.",
  ownershipItems: ["Linux host", "Source repository", "OCI workloads", "Project data", "Persistent volumes", "Migration path"],
  integrationItems: ["GitHub", "Public OCI registries", "Rootful Podman", "Docker Engine compatibility", "Caddy", "Cloudflare Tunnel", "PostgreSQL"],

  interfacesLabel: "Automation",
  interfacesTitle: "Use the interface you need.",
  interfacesBody: "Dashboard for operators, CLI and API for automation, webhooks for repository events, and MCP for local AI agents.",
  interfaces: [["Human", "Dashboard", "Create projects and operate deployments."],["Developer", "CLI", "Deploy, inspect logs, and run operational tasks."],["Automation", "API + webhooks", "Integrate deployments with external workflows."],["Agent", "MCP", "Expose bounded operational tools to local AI agents."]] as const,

  boundariesLabel: "Scope",
  boundariesTitle: "Built for one server.",
  boundariesBody: "MyPaaS is a single-host control plane for an owner or small trusted team.",
  boundaries: ["Single Linux VM", "No Kubernetes", "No multi-node scheduler", "No multi-region HA", "No automatic horizontal scaling", "Public registry images only"],

  installLabel: "Install",
  installTitle: "Install on Ubuntu or Debian.",
  installBody: "Fresh supported hosts are Podman-first: rootful Podman is the installer default. Docker Engine remains an explicit supported compatibility mode.",
  installDocker: "Docker Engine compatibility",
  installPodman: "Rootful Podman default",
  installGuide: "Installation guide",
  verified: "Current product claims are reviewed against MyPaaS main.",
  footer: "Open-source deployment platform for one Linux server.",
  documentation: "Documentation", changelog: "Changelog", license: "MIT License",
};

const id = {
  ...en,
  metaTitle: "MyPaaS — Deploy ke server Linux milik Anda",
  metaDescription: "Deploy repositori Git dan image OCI publik ke satu server Linux dengan runtime Podman-first, kompatibilitas Docker Engine, routing Caddy, log, metrik, database, backup, dan recovery.",
  eyebrow: "PAAS SELF-HOSTED · SATU SERVER LINUX",
  heroTitle: "Deploy ke server Anda. Tetap pegang kendali.",
  heroSummary: "MyPaaS men-deploy repositori Git dan image container publik ke server Linux milik Anda, lengkap dengan routing, log, metrik, database, backup, dan recovery.",
  primaryCta: "Install MyPaaS",
  secondaryCta: "Lihat source",
  proof: ["Open source", "Podman-first", "Docker-compatible", "Caddy", "GitHub"],
  deployLabel: "Deploy",
  deployTitle: "Dari source ke URL.",
  deployBody: "Pilih repositori Git atau image OCI publik. MyPaaS menjalankan jalur deployment yang didukung lalu merutekannya melalui Caddy.",
  operationsLabel: "Operasikan",
  operationsTitle: "Semua setelah deploy.",
  operationsBody: "Lihat apa yang berjalan, ubah secara eksplisit, dan pulihkan release yang didukung dari project yang sama.",
  operations: [
    ["Log & metrik", "Build output, runtime log, service metrics, dan host telemetry."],
    ["Lifecycle", "Start, stop, restart, redeploy, dan recovery release container yang didukung."],
    ["Environment", "Kelola variable project terenkripsi dan template environment yang terdeteksi."],
    ["Database", "Provision PostgreSQL atau inspeksi PostgreSQL, MySQL, dan MariaDB."],
    ["Automation", "Gunakan dashboard, CLI, API, webhook, atau MCP."],
    ["Migrasi", "Pindahkan instalasi MyPaaS ke VM baru melalui flow migrasi yang didukung."]
  ] as const,
  ownershipLabel: "Kepemilikan",
  ownershipTitle: "Server Anda. Tool standar.",
  ownershipBody: "Workload dan data persisten tetap di infrastruktur yang Anda kontrol. MyPaaS menghubungkan tool di sekitarnya tanpa mengganti runtime aplikasi dengan runtime proprietary.",
  ownershipItems: ["Host Linux", "Source repository", "OCI workload", "Data project", "Persistent volume", "Jalur migrasi"],
  integrationItems: ["GitHub", "Public OCI registry", "Rootful Podman", "Kompatibilitas Docker Engine", "Caddy", "Cloudflare Tunnel", "PostgreSQL"],
  interfacesLabel: "Automation",
  interfacesTitle: "Gunakan interface yang dibutuhkan.",
  interfacesBody: "Dashboard untuk operator, CLI dan API untuk automation, webhook untuk event repository, dan MCP untuk AI agent lokal.",
  boundariesLabel: "Scope",
  boundariesTitle: "Dibuat untuk satu server.",
  boundariesBody: "MyPaaS adalah control plane single-host untuk owner atau tim kecil tepercaya.",
  boundaries: ["Satu VM Linux", "Tanpa Kubernetes", "Tanpa multi-node scheduler", "Tanpa multi-region HA", "Tanpa horizontal auto-scaling", "Hanya public registry image"],
  installLabel: "Instalasi",
  installTitle: "Install di Ubuntu atau Debian.",
  installBody: "Host baru yang didukung menggunakan kebijakan Podman-first: rootful Podman adalah default installer. Docker Engine tetap didukung sebagai mode kompatibilitas eksplisit.",
  installDocker: "Kompatibilitas Docker Engine",
  installPodman: "Rootful Podman default",
  installGuide: "Panduan instalasi",
  verified: "Claim produk direview terhadap MyPaaS main saat ini.",
  footer: "Platform deployment open-source untuk satu server Linux.",
  documentation: "Dokumentasi",
};

const zh = {
  ...en,
  metaTitle: "MyPaaS — 部署到你自己的 Linux 服务器",
  metaDescription: "将 Git 仓库和公开 OCI 镜像部署到一台 Linux 服务器，默认使用 Rootful Podman，并保留 Docker Engine 兼容模式、Caddy 路由、日志、指标、数据库、备份和恢复。",
  eyebrow: "自托管 PAAS · 一台 LINUX 服务器",
  heroTitle: "部署到你的服务器。控制权留在手中。",
  heroSummary: "MyPaaS 将 Git 仓库和公开容器镜像部署到你自己的 Linux 服务器，并提供路由、日志、指标、数据库、备份和恢复。",
  primaryCta: "安装 MyPaaS",
  secondaryCta: "查看源码",
  proof: ["开源", "Podman-first", "Docker-compatible", "Caddy", "GitHub"],
  deployLabel: "部署",
  deployTitle: "从源码到 URL。",
  deployBody: "选择 Git 仓库或公开 OCI 镜像。MyPaaS 执行受支持的部署路径，并通过 Caddy 提供路由。",
  operationsLabel: "运维",
  operationsTitle: "部署之后的一切。",
  operationsBody: "查看正在运行的内容，明确执行变更，并在同一项目视图中恢复受支持的版本。",
  operations: [
    ["日志与指标", "构建输出、运行日志、服务指标和主机遥测。"],
    ["生命周期", "启动、停止、重启、重新部署并恢复受支持的容器版本。"],
    ["环境变量", "管理加密的项目变量和检测到的环境模板。"],
    ["数据库", "配置 PostgreSQL，或检查 PostgreSQL、MySQL 和 MariaDB。"],
    ["自动化", "使用 Dashboard、CLI、API、Webhook 或 MCP。"],
    ["迁移", "通过受支持的迁移流程将 MyPaaS 移到新的 VM。"]
  ] as const,
  ownershipLabel: "所有权",
  ownershipTitle: "你的服务器。标准工具。",
  ownershipBody: "工作负载和持久数据留在你控制的基础设施上。MyPaaS 连接周边工具，而不是用专有运行时替换你的应用运行时。",
  ownershipItems: ["Linux 主机", "源码仓库", "OCI 工作负载", "项目数据", "持久卷", "迁移路径"],
  integrationItems: ["GitHub", "公开 OCI Registry", "Rootful Podman", "Docker Engine 兼容模式", "Caddy", "Cloudflare Tunnel", "PostgreSQL"],
  interfacesLabel: "自动化",
  interfacesTitle: "选择需要的接口。",
  interfacesBody: "Dashboard 面向运维，CLI 和 API 面向自动化，Webhook 面向仓库事件，MCP 面向本地 AI Agent。",
  boundariesLabel: "范围",
  boundariesTitle: "为单机而设计。",
  boundariesBody: "MyPaaS 是面向个人或小型可信团队的单机控制平面。",
  boundaries: ["一台 Linux VM", "无 Kubernetes", "无多节点调度", "无多区域 HA", "无自动水平扩缩容", "仅公开 Registry 镜像"],
  installLabel: "安装",
  installTitle: "安装到 Ubuntu 或 Debian。",
  installBody: "全新受支持主机采用 Podman-first 策略：Rootful Podman 是安装器默认运行时，Docker Engine 作为显式兼容模式继续受支持。",
  installDocker: "Docker Engine 兼容模式",
  installPodman: "Rootful Podman 默认",
  installGuide: "安装指南",
  verified: "产品描述已对照当前 MyPaaS main 审核。",
  footer: "面向一台 Linux 服务器的开源部署平台。",
  documentation: "文档",
};

export const landingCopy = { en, id, zh } as const;

export function searchEntries(locale: Locale) {
  const copy = landingCopy[locale];
  const home = localeMeta[locale].path;
  const section = locale === "zh" ? "产品" : locale === "id" ? "Produk" : "Product";
  const docsSection = locale === "zh" ? "文档" : locale === "id" ? "Dokumentasi" : "Documentation";
  const docs = [
    ["Documentation overview", "/docs/", "install deploy configure operate architecture"],
    ["Installation", "/docs/installation/", "install bootstrap ubuntu debian setup"],
    ["GitHub OAuth setup", "/docs/github-oauth/", "github oauth identity callback"],
    ["Cloudflare Tunnel setup", "/docs/cloudflare-tunnel/", "cloudflare tunnel wildcard ingress caddy"],
    ["First deployment", "/docs/first-deployment/", "create project repository image deploy"],
    ["Deployment models", "/docs/deployment-models/", "dockerfile compose static spa registry image"],
    ["Environment variables", "/docs/environment-variables/", "environment env encryption configuration"],
    ["Domains, routing & webhooks", "/docs/routing-webhooks/", "domain routing caddy webhook github"],
    ["Configuration and routing", "/docs/configuration/", "configuration project resources routing"],
    ["Operations", "/docs/operations/", "operations lifecycle rollback recovery"],
    ["Observability", "/docs/observability/", "logs metrics statd telemetry health"],
    ["Databases & DB Studio", "/docs/databases/", "postgresql mysql mariadb db studio database"],
    ["Backups & recovery", "/docs/backups-recovery/", "backup retention recovery rollback"],
    ["Migration", "/docs/migration/", "migration export import vm move"],
    ["Automation & agents", "/docs/automation/", "cli api webhook mcp ai agent automation"],
    ["Security", "/docs/security/", "security trust boundary engine operator"],
    ["Limitations", "/docs/limitations/", "limitations single host non goals"],
    ["Troubleshooting", "/docs/troubleshooting/", "troubleshooting oauth cloudflare routing detection metrics"],
  ] as const;
  return [
    { title: copy.heroTitle, section, description: copy.heroSummary, href: home, keywords: "self hosted paas deploy linux server git oci podman docker compatibility" },
    { title: copy.deployTitle, section, description: copy.deployBody, href: `${home}#deploy`, keywords: "dockerfile compose static spa registry image deployment" },
    { title: copy.operationsTitle, section, description: copy.operationsBody, href: `${home}#operate`, keywords: "logs metrics telemetry lifecycle database migration" },
    { title: copy.ownershipTitle, section, description: copy.ownershipBody, href: `${home}#ownership`, keywords: "ownership integrations github cloudflare caddy registry" },
    { title: copy.installTitle, section, description: copy.installBody, href: `${home}#install`, keywords: "install ubuntu debian podman docker compatibility" },
    ...docs.map(([title, href, keywords]) => ({ title, section: docsSection, description: `MyPaaS documentation: ${title}.`, href, keywords })),
  ];
}