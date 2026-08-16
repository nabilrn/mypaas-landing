const REPO_API = "https://api.github.com/repos/nabilrn/MyPaas";
const CACHE_KEY = "mypaas:repo-stars:v1";
const CACHE_TTL_MS = 15 * 60 * 1000;

type CachedStars = { count: number; cachedAt: number };
type RepoMeta = { stargazers_count?: number };

const formatStars = (count: number) => {
  if (count < 1000) return String(count);
  if (count < 1_000_000) return `${(count / 1000).toFixed(count >= 10_000 ? 0 : 1).replace(/\.0$/, "")}k`;
  return `${(count / 1_000_000).toFixed(1).replace(/\.0$/, "")}m`;
};

const paint = (count: number) => {
  const formatted = formatStars(count);
  document.querySelectorAll<HTMLElement>("[data-repo-stars]").forEach((node) => {
    node.textContent = formatted;
    node.hidden = false;
    node.dataset.loaded = "true";
    node.setAttribute("aria-label", `${count} GitHub stars`);
  });
};

const readCache = (): CachedStars | null => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw) as CachedStars;
    if (!Number.isFinite(cached.count) || Date.now() - cached.cachedAt > CACHE_TTL_MS) return null;
    return cached;
  } catch {
    return null;
  }
};

const fetchStars = async () => {
  const cached = readCache();
  if (cached) {
    paint(cached.count);
    return;
  }

  try {
    const response = await fetch(REPO_API, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) return;
    const meta = (await response.json()) as RepoMeta;
    const count = meta.stargazers_count;
    if (!Number.isFinite(count)) return;
    paint(count as number);
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify({ count: count as number, cachedAt: Date.now() } satisfies CachedStars));
    } catch {
      // Rendering must not depend on storage availability.
    }
  } catch {
    // GitHub API failure is non-fatal. Star chips remain hidden.
  }
};

void fetchStars();
document.addEventListener("astro:page-load", () => void fetchStars());
