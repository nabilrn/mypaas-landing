export type Locale = "en" | "id" | "zh";

export const locales: Locale[] = ["en", "id", "zh"];

export const localeMeta = {
  en: { label: "English", short: "EN", path: "/", htmlLang: "en", ogLocale: "en_US" },
  id: { label: "Bahasa Indonesia", short: "ID", path: "/id/", htmlLang: "id", ogLocale: "id_ID" },
  zh: { label: "简体中文", short: "中文", path: "/zh/", htmlLang: "zh-CN", ogLocale: "zh_CN" },
} satisfies Record<Locale, { label: string; short: string; path: string; htmlLang: string; ogLocale: string }>;

export const repositoryUrl = "https://github.com/nabilrn/MyPaas";
export const installCommand = "curl -fsSL https://raw.githubusercontent.com/nabilrn/MyPaas/main/scripts/bootstrap.sh | bash";

export const uiCopy = {
  en: { home: "MyPaas home", navLabel: "Landing page navigation", docs: "Docs", install: "Install", integrations: "Integrations", operations: "Operations", privacy: "Privacy", search: "Search", searchPlaceholder: "Search documentation and product sections…", searchHint: "Type to search", searchEmpty: "No matching pages or sections.", searchClose: "Close search", searchOpen: "Open search", searchResults: "Search results", resultSingular: "result", resultPlural: "results", navigate: "Navigate", open: "Open", language: "Language", themeDark: "Use dark theme", themeLight: "Use light theme", menuOpen: "Open navigation menu", menuClose: "Close navigation menu", star: "Star", source: "Source repository" },
  id: { home: "Beranda MyPaas", navLabel: "Navigasi landing page", docs: "Dokumentasi", install: "Instalasi", integrations: "Integrasi", operations: "Operasional", privacy: "Privasi", search: "Cari", searchPlaceholder: "Cari dokumentasi dan bagian produk…", searchHint: "Ketik untuk mencari", searchEmpty: "Tidak ada halaman atau bagian yang cocok.", searchClose: "Tutup pencarian", searchOpen: "Buka pencarian", searchResults: "Hasil pencarian", resultSingular: "hasil", resultPlural: "hasil", navigate: "Navigasi", open: "Buka", language: "Bahasa", themeDark: "Gunakan tema gelap", themeLight: "Gunakan tema terang", menuOpen: "Buka menu navigasi", menuClose: "Tutup menu navigasi", star: "Beri bintang", source: "Repositori sumber" },
  zh: { home: "MyPaas 首页", navLabel: "落地页导航", docs: "文档", install: "安装", integrations: "集成", operations: "运维", privacy: "隐私", search: "搜索", searchPlaceholder: "搜索文档和产品内容…", searchHint: "输入关键词开始搜索", searchEmpty: "没有找到匹配的页面或内容。", searchClose: "关闭搜索", searchOpen: "打开搜索", searchResults: "搜索结果", resultSingular: "条结果", resultPlural: "条结果", navigate: "导航", open: "打开", language: "语言", themeDark: "使用深色主题", themeLight: "使用浅色主题", menuOpen: "打开导航菜单", menuClose: "关闭导航菜单", star: "收藏仓库", source: "源代码仓库" },
} as const;

export const landingCopy = {
  en: {
    metaTitle: "MyPaas — Self-hosted PaaS for one Linux server",
    metaDescription: "Deploy Dockerfile, Docker Compose, and static projects from Git on your own Linux VM with an open-source control plane.",
    eyebrow: "Self-hosted PaaS · single node · open source",
    heroTitle: "Deploy from Git. Run it on your own server.",
    heroSummary: "MyPaas is a focused deployment control plane for one Linux VM. It builds and runs Dockerfile, Docker Compose, and static projects while keeping routing, logs, metrics, environment variables, lifecycle actions, and release history in one place.",
    readDocs: "Read the documentation", starRepository: "Star the repository", scopeLabel: "MyPaas product scope", domainExample: "project.yourdomain.example",
    scope: [["Input", "Git repository"], ["Contracts", "Dockerfile, Compose, static output"], ["Host", "One Linux VM"], ["Routing", "Caddy + Cloudflare Tunnel"], ["Domains", "project.yourdomain.example"], ["Access", "Owner and trusted collaborators"]],
    commandLabel: "Start the installer", commandPlatform: "Ubuntu / Debian", copy: "Copy", copied: "Copied", copyFailed: "Copy failed",
    commandNote: "The bootstrap checks out MyPaas and opens guided setup. GitHub OAuth, Cloudflare, your domain, and production secrets remain under your control.",
    integrationsLabel: "Integrations", integrationsTitle: "Infrastructure MyPaas coordinates on your host.", integrationsBody: "Runtime and integration points used by the platform—not bundled replacements or partnership claims.",
    workflowLabel: "Workflow", workflowTitle: "A visible deployment contract from repository to route.", workflowBody: "Detection prepares a plan. You still confirm ports, resources, services, environment keys, and the subdomain. Configure a wildcard domain once; projects publish as project.yourdomain.example.",
    workflow: [["01", "Connect a repository", "Select a branch and inspect its structure before creating the project."], ["02", "Review the contract", "Confirm Dockerfile, Compose, or static output along with ports, resources, and environment keys."], ["03", "Deploy on your VM", "MyPaas queues the release, builds it, applies limits, and routes it through Caddy."], ["04", "Operate it", "Follow logs and metrics, control lifecycle actions, and recover a previous successful release."]],
    contractHeaders: ["Contract", "What MyPaas expects", "Runtime"],
    contracts: [["Dockerfile", "A root Dockerfile with the real application port.", "Single application container"], ["Docker Compose", "A root Compose file and one selected public service.", "Public service plus internal dependencies"], ["Static output", "A ready index.html in dist, build, public, or the root.", "Caddy file server, no app container"]],
    operationsLabel: "Operations", operationsTitle: "Useful after the first successful deployment.", operationsBody: "The control plane keeps enough state to inspect, stop, restart, diagnose, and recover projects on the host.", requestPathLabel: "Request path",
    operations: [["Deployment state", "Queued, building, running, stopped, and failed states remain visible while work runs in the background."], ["Logs and metrics", "Build logs, runtime logs, CPU, memory, uptime, and Compose service context stay attached to the project."], ["Environment", "Detected keys can be reviewed before deployment. Stored values are encrypted and masked in normal views."], ["Lifecycle", "Deploy, start, stop, restart, and redeploy remain explicit operator actions."], ["History and rollback", "Release records keep commit and failure context, with recovery to a previous successful release."], ["Resource boundaries", "Named CPU and memory profiles keep configured limits separate from live usage."]],
    boundariesLabel: "Boundaries", boundariesTitle: "A focused control plane, not a public cloud.", boundariesBody: "MyPaas is designed for one owner, a small trusted team, and workloads sized to one VM. Capacity, backups, host reliability, and network configuration remain operator responsibilities.",
    boundaries: ["No public signup, plans, pricing, or billing.", "No buildpacks or hidden source-language runtime selection.", "No Kubernetes, multi-node scheduling, or multi-region failover.", "No promise that every repository deploys without preparation."],
    beforeLabel: "Before installation", beforeTitle: "Bring the host and credentials.", beforeBody: "The installer prepares MyPaas; it does not create external accounts or choose your domain.",
    prerequisites: [["01", "Linux VM", "Ubuntu or Debian is the supported path for automatic Docker preparation."], ["02", "Cloudflare domain", "Prepare root and wildcard hostnames for the MyPaas Caddy service."], ["03", "GitHub OAuth", "Create an OAuth application and keep its client credentials ready for setup."], ["04", "Tunnel token", "Provide the Cloudflare Tunnel token used for public ingress and TLS."]],
    installationGuide: "Open the installation guide", faqLabel: "FAQ", faqTitle: "Practical questions.",
    faq: [["Is MyPaas a hosted service?", "No. You install it on a Linux VM and remain responsible for the host, domain, backups, and capacity."], ["What can it deploy?", "Repositories with a root Compose file, a root Dockerfile, or ready static output containing index.html."], ["Does every Git push deploy automatically?", "It can after you add the generated webhook URL and secret to GitHub. MyPaas does not register the webhook for you."], ["How are projects exposed publicly?", "Caddy owns the internal route. A configured Cloudflare Tunnel provides public ingress and TLS for root and wildcard project hostnames."], ["What is intentionally out of scope?", "Public signup, billing, buildpacks, Kubernetes, multi-node high availability, multi-region deployment, and automatic horizontal scaling."]],
    footer: "Self-hosted PaaS for a single Linux server.", documentation: "Documentation", changelog: "Changelog", license: "MIT License",
  },
  id: {
    metaTitle: "MyPaas — PaaS self-hosted untuk satu server Linux",
    metaDescription: "Deploy project Dockerfile, Docker Compose, dan static dari Git ke VM Linux milik sendiri melalui control plane open source.",
    eyebrow: "PaaS self-hosted · single node · open source",
    heroTitle: "Deploy dari Git. Jalankan di server sendiri.",
    heroSummary: "MyPaas adalah control plane deployment yang fokus untuk satu VM Linux. MyPaas membangun dan menjalankan project Dockerfile, Docker Compose, serta static sambil mengelola routing, log, metrik, environment variable, lifecycle, dan riwayat release dari satu tempat.",
    readDocs: "Baca dokumentasi", starRepository: "Beri bintang repositori", scopeLabel: "Ruang lingkup produk MyPaas", domainExample: "project.domainmu.example",
    scope: [["Input", "Repositori Git"], ["Kontrak", "Dockerfile, Compose, output static"], ["Host", "Satu VM Linux"], ["Routing", "Caddy + Cloudflare Tunnel"], ["Domain", "project.domainmu.example"], ["Akses", "Owner dan kolaborator tepercaya"]],
    commandLabel: "Jalankan installer", commandPlatform: "Ubuntu / Debian", copy: "Salin", copied: "Tersalin", copyFailed: "Gagal menyalin",
    commandNote: "Bootstrap mengambil source MyPaas dan membuka guided setup. GitHub OAuth, Cloudflare, domain, dan secret production tetap berada di bawah kendali Anda.",
    integrationsLabel: "Integrasi", integrationsTitle: "Infrastruktur yang dikoordinasikan MyPaas di host Anda.", integrationsBody: "Titik integrasi dan runtime yang digunakan platform—bukan pengganti bawaan atau klaim kemitraan.",
    workflowLabel: "Alur kerja", workflowTitle: "Kontrak deployment yang jelas dari repositori hingga route.", workflowBody: "Deteksi menyiapkan rencana. Anda tetap mengonfirmasi port, resource, service, environment key, dan subdomain. Konfigurasi wildcard domain sekali; project publish sebagai project.domainmu.example.",
    workflow: [["01", "Hubungkan repositori", "Pilih branch dan periksa strukturnya sebelum membuat project."], ["02", "Tinjau kontrak", "Konfirmasi Dockerfile, Compose, atau output static beserta port, resource, dan environment key."], ["03", "Deploy ke VM", "MyPaas mengantrekan release, melakukan build, memasang limit, dan merutekannya melalui Caddy."], ["04", "Operasikan", "Ikuti log dan metrik, kendalikan lifecycle, serta pulihkan release sukses sebelumnya."]],
    contractHeaders: ["Kontrak", "Yang dibutuhkan MyPaas", "Runtime"],
    contracts: [["Dockerfile", "Dockerfile di root dengan application port yang sebenarnya.", "Satu container aplikasi"], ["Docker Compose", "Compose file di root dan satu public service yang dipilih.", "Public service dan dependency internal"], ["Output static", "index.html siap pakai di dist, build, public, atau root.", "Caddy file server tanpa app container"]],
    operationsLabel: "Operasional", operationsTitle: "Tetap berguna setelah deployment pertama berhasil.", operationsBody: "Control plane menyimpan state yang diperlukan untuk memeriksa, menghentikan, menjalankan ulang, mendiagnosis, dan memulihkan project.", requestPathLabel: "Jalur request",
    operations: [["Status deployment", "Status queued, building, running, stopped, dan failed tetap terlihat saat proses berjalan di background."], ["Log dan metrik", "Build log, runtime log, CPU, memory, uptime, dan konteks service Compose tetap terhubung ke project."], ["Environment", "Key hasil deteksi dapat ditinjau sebelum deploy. Nilai tersimpan dienkripsi dan dimasking pada tampilan normal."], ["Lifecycle", "Deploy, start, stop, restart, dan redeploy tetap menjadi aksi operator yang eksplisit."], ["Riwayat dan rollback", "Riwayat release menyimpan konteks commit dan kegagalan serta dapat kembali ke release sukses sebelumnya."], ["Batas resource", "Profil CPU dan memory memisahkan limit konfigurasi dari penggunaan aktual."]],
    boundariesLabel: "Batasan", boundariesTitle: "Control plane yang fokus, bukan public cloud.", boundariesBody: "MyPaas dirancang untuk satu owner, tim kecil yang tepercaya, dan workload seukuran satu VM. Kapasitas, backup, reliabilitas host, dan konfigurasi jaringan tetap menjadi tanggung jawab operator.",
    boundaries: ["Tidak ada pendaftaran publik, paket, harga, atau billing.", "Tidak ada buildpack atau pemilihan runtime bahasa secara tersembunyi.", "Tidak ada Kubernetes, penjadwalan multi-node, atau failover multi-region.", "Tidak ada janji bahwa semua repositori dapat deploy tanpa persiapan."],
    beforeLabel: "Sebelum instalasi", beforeTitle: "Siapkan host dan kredensial.", beforeBody: "Installer menyiapkan MyPaas; installer tidak membuat akun eksternal atau memilih domain Anda.",
    prerequisites: [["01", "VM Linux", "Ubuntu atau Debian adalah jalur yang didukung untuk persiapan Docker otomatis."], ["02", "Domain Cloudflare", "Siapkan hostname root dan wildcard untuk service Caddy MyPaas."], ["03", "GitHub OAuth", "Buat aplikasi OAuth dan siapkan client credential untuk proses setup."], ["04", "Tunnel token", "Sediakan token Cloudflare Tunnel untuk ingress publik dan TLS."]],
    installationGuide: "Buka panduan instalasi", faqLabel: "FAQ", faqTitle: "Pertanyaan praktis.",
    faq: [["Apakah MyPaas merupakan hosted service?", "Bukan. Anda menginstalnya di VM Linux dan tetap bertanggung jawab atas host, domain, backup, dan kapasitas."], ["Apa yang dapat di-deploy?", "Repositori dengan Compose file di root, Dockerfile di root, atau output static yang memiliki index.html."], ["Apakah setiap Git push otomatis di-deploy?", "Bisa setelah webhook URL dan secret dari MyPaas ditambahkan ke GitHub. MyPaas belum mendaftarkan webhook secara otomatis."], ["Bagaimana project dipublikasikan?", "Caddy mengelola route internal. Cloudflare Tunnel menyediakan ingress publik dan TLS untuk hostname root serta wildcard project."], ["Apa yang sengaja tidak didukung?", "Pendaftaran publik, billing, buildpack, Kubernetes, high availability multi-node, deployment multi-region, dan horizontal scaling otomatis."]],
    footer: "PaaS self-hosted untuk satu server Linux.", documentation: "Dokumentasi", changelog: "Catatan perubahan", license: "Lisensi MIT",
  },
  zh: {
    metaTitle: "MyPaas — 面向单台 Linux 服务器的自托管 PaaS",
    metaDescription: "通过开源控制平面，将 Dockerfile、Docker Compose 和静态项目从 Git 部署到你自己的 Linux 虚拟机。",
    eyebrow: "自托管 PaaS · 单节点 · 开源",
    heroTitle: "从 Git 部署，运行在你自己的服务器上。",
    heroSummary: "MyPaas 是面向单台 Linux 虚拟机的轻量部署控制平面。它负责构建和运行 Dockerfile、Docker Compose 与静态项目，并集中管理路由、日志、指标、环境变量、生命周期操作和发布历史。",
    readDocs: "阅读文档", starRepository: "收藏 GitHub 仓库", scopeLabel: "MyPaas 产品范围", domainExample: "project.yourdomain.example",
    scope: [["输入", "Git 仓库"], ["部署契约", "Dockerfile、Compose、静态输出"], ["主机", "一台 Linux 虚拟机"], ["路由", "Caddy + Cloudflare Tunnel"], ["域名", "project.yourdomain.example"], ["访问", "所有者与受信任协作者"]],
    commandLabel: "启动安装程序", commandPlatform: "Ubuntu / Debian", copy: "复制", copied: "已复制", copyFailed: "复制失败",
    commandNote: "引导脚本会拉取 MyPaas 并打开配置向导。GitHub OAuth、Cloudflare、域名和生产密钥仍由你自行管理。",
    integrationsLabel: "集成", integrationsTitle: "MyPaas 在你的主机上协调这些基础设施。", integrationsBody: "这些是平台使用的运行时与集成点，不代表内置替代品或合作关系。",
    workflowLabel: "工作流程", workflowTitle: "从仓库到路由，每一步部署契约都清晰可见。", workflowBody: "检测用于生成计划。你仍需确认端口、资源、服务、环境变量和子域名。配置一次通配符域名后，项目会以 project.yourdomain.example 发布。",
    workflow: [["01", "连接仓库", "选择分支并检查仓库结构，然后再创建项目。"], ["02", "确认契约", "确认 Dockerfile、Compose 或静态输出，以及端口、资源和环境变量。"], ["03", "部署到虚拟机", "MyPaas 将发布任务排队、构建、应用资源限制，并通过 Caddy 配置路由。"], ["04", "持续运维", "查看日志和指标，控制生命周期，并恢复到之前成功的发布。"]],
    contractHeaders: ["契约", "MyPaas 的要求", "运行方式"],
    contracts: [["Dockerfile", "仓库根目录中的 Dockerfile 和真实应用端口。", "单个应用容器"], ["Docker Compose", "仓库根目录中的 Compose 文件和一个公开服务。", "公开服务与内部依赖"], ["静态输出", "dist、build、public 或根目录中的可用 index.html。", "Caddy 文件服务，无应用容器"]],
    operationsLabel: "运维", operationsTitle: "首次部署成功后仍然有用。", operationsBody: "控制平面保留检查、停止、重启、诊断和恢复主机上项目所需的状态。", requestPathLabel: "请求路径",
    operations: [["部署状态", "任务在后台运行时，排队、构建、运行、停止和失败状态始终可见。"], ["日志与指标", "构建日志、运行日志、CPU、内存、运行时间和 Compose 服务上下文都保留在项目中。"], ["环境变量", "部署前可检查检测到的变量名；保存的值会加密，并在普通界面中隐藏。"], ["生命周期", "部署、启动、停止、重启和重新部署都是明确的运维操作。"], ["历史与回滚", "发布记录保留提交和失败上下文，并可恢复到之前成功的发布。"], ["资源边界", "命名的 CPU 与内存配置将资源限制和实时使用情况分开显示。"]],
    boundariesLabel: "边界", boundariesTitle: "专注的控制平面，而不是公共云。", boundariesBody: "MyPaas 面向一位所有者、小型受信任团队以及单台虚拟机可承载的工作负载。容量、备份、主机可靠性和网络配置仍由运维者负责。",
    boundaries: ["不提供公开注册、套餐、定价或计费。", "不提供 buildpack，也不会隐藏选择语言运行时。", "不提供 Kubernetes、多节点调度或多区域故障转移。", "不承诺每个仓库无需准备即可部署。"],
    beforeLabel: "安装前", beforeTitle: "准备好主机和凭据。", beforeBody: "安装程序负责配置 MyPaas，但不会创建外部账户或替你选择域名。",
    prerequisites: [["01", "Linux 虚拟机", "Ubuntu 或 Debian 是自动准备 Docker 的受支持路径。"], ["02", "Cloudflare 域名", "为 MyPaas Caddy 服务准备根域名和通配符主机名。"], ["03", "GitHub OAuth", "创建 OAuth 应用，并准备好配置所需的客户端凭据。"], ["04", "Tunnel 令牌", "提供用于公开入口和 TLS 的 Cloudflare Tunnel 令牌。"]],
    installationGuide: "打开安装指南", faqLabel: "常见问题", faqTitle: "实际使用问题。",
    faq: [["MyPaas 是托管服务吗？", "不是。你需要将它安装到 Linux 虚拟机，并自行负责主机、域名、备份和容量。"], ["它可以部署什么？", "根目录包含 Compose 文件、Dockerfile，或包含 index.html 的静态输出仓库。"], ["每次 Git push 都会自动部署吗？", "将 MyPaas 生成的 webhook URL 和密钥添加到 GitHub 后可以自动部署；MyPaas 目前不会代你注册 webhook。"], ["项目如何公开访问？", "Caddy 管理内部路由，配置好的 Cloudflare Tunnel 为根域名和项目通配符域名提供公开入口与 TLS。"], ["哪些功能明确不在范围内？", "公开注册、计费、buildpack、Kubernetes、多节点高可用、多区域部署和自动水平扩容。"]],
    footer: "面向单台 Linux 服务器的自托管 PaaS。", documentation: "文档", changelog: "更新日志", license: "MIT 许可证",
  },
} as const;

export type SearchEntry = { title: string; section: string; description: string; href: string; keywords: string };

export function searchEntries(locale: Locale): SearchEntry[] {
  const copy = landingCopy[locale];
  const home = localeMeta[locale].path;
  const section = locale === "zh" ? "产品页面" : "Landing page";
  const docsSection = locale === "en" ? "Documentation" : locale === "id" ? "Dokumentasi" : "文档";
  return [
    { title: copy.heroTitle, section, description: copy.heroSummary, href: home, keywords: "self hosted paas git server deploy" },
    { title: copy.integrationsTitle, section, description: copy.integrationsBody, href: `${home}#integrations`, keywords: "github docker compose caddy cloudflare postgresql integrations" },
    { title: copy.workflowTitle, section, description: copy.workflowBody, href: `${home}#workflow`, keywords: "workflow repository deployment contract domain wildcard subdomain" },
    { title: copy.operationsTitle, section, description: copy.operationsBody, href: `${home}#operations`, keywords: "logs metrics lifecycle rollback environment" },
    { title: copy.beforeTitle, section, description: copy.beforeBody, href: `${home}#installation`, keywords: "install ubuntu debian vm cloudflare github oauth" },
    { title: copy.faqTitle, section, description: copy.faq[0][1], href: `${home}#faq`, keywords: "faq hosted limitations" },
    { title: locale === "zh" ? "文档概览" : locale === "id" ? "Ringkasan dokumentasi" : "Documentation overview", section: docsSection, description: "Architecture, deployment contracts, installation, operations, security, and known limitations.", href: "/docs/", keywords: "docs documentation overview architecture" },
    { title: locale === "zh" ? "安装" : locale === "id" ? "Instalasi" : "Installation", section: docsSection, description: "Prepare a Linux VM and complete the guided MyPaas setup.", href: "/docs/installation/", keywords: "install bootstrap ubuntu debian prerequisites" },
    { title: locale === "zh" ? "部署模式" : locale === "id" ? "Model deployment" : "Deployment models", section: docsSection, description: "Dockerfile, Docker Compose, and static deployment contracts.", href: "/docs/deployment-models/", keywords: "dockerfile compose static deployment" },
    { title: locale === "zh" ? "配置与路由" : locale === "id" ? "Konfigurasi dan routing" : "Configuration and routing", section: docsSection, description: "Environment, domains, Caddy, Cloudflare Tunnel, and project routing.", href: "/docs/configuration/", keywords: "configuration env domain caddy cloudflare routing" },
    { title: locale === "zh" ? "运维" : locale === "id" ? "Operasional" : "Operations", section: docsSection, description: "Deployment state, logs, metrics, lifecycle controls, and rollback.", href: "/docs/operations/", keywords: "operations logs metrics rollback lifecycle" },
    { title: locale === "zh" ? "安全" : locale === "id" ? "Keamanan" : "Security", section: docsSection, description: "Trust model, secrets, webhooks, network exposure, and operator responsibilities.", href: "/docs/security/", keywords: "security secrets oauth webhook network" },
    { title: locale === "zh" ? "限制" : locale === "id" ? "Keterbatasan" : "Limitations", section: docsSection, description: "Single-node boundaries and explicit product non-goals.", href: "/docs/limitations/", keywords: "limitations single node non goals" },
  ];
}
