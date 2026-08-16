import type { APIRoute } from "astro";
import { localeMeta, locales } from "../lib/site";

const paths = [
  "/docs/",
  "/docs/installation/",
  "/docs/github-oauth/",
  "/docs/cloudflare-tunnel/",
  "/docs/first-deployment/",
  "/docs/deployment-models/",
  "/docs/environment-variables/",
  "/docs/routing-webhooks/",
  "/docs/configuration/",
  "/docs/operations/",
  "/docs/observability/",
  "/docs/databases/",
  "/docs/backups-recovery/",
  "/docs/migration/",
  "/docs/automation/",
  "/docs/security/",
  "/docs/limitations/",
  "/docs/troubleshooting/",
  "/privacy/",
];

const escapeXml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://mypaas.my.id");
  const alternateLinks = locales.map((locale) => {
    const href = new URL(localeMeta[locale].path, origin).toString();
    return `<xhtml:link rel="alternate" hreflang="${escapeXml(localeMeta[locale].htmlLang)}" href="${escapeXml(href)}" />`;
  }).join("");
  const defaultLink = `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(new URL("/", origin).toString())}" />`;

  const localizedHomes = locales.map((locale) => {
    const loc = new URL(localeMeta[locale].path, origin).toString();
    return `<url><loc>${escapeXml(loc)}</loc>${alternateLinks}${defaultLink}</url>`;
  });
  const standardPages = paths.map((path) => `<url><loc>${escapeXml(new URL(path, origin).toString())}</loc></url>`);

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${[...localizedHomes, ...standardPages].join("")}</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
