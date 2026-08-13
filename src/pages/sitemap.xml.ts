import type { APIRoute } from "astro";
import { localeMeta, locales } from "../lib/site";
const paths=["/docs/","/docs/installation/","/docs/deployment-models/","/docs/configuration/","/docs/operations/","/docs/automation/","/docs/migration/","/docs/security/","/docs/limitations/","/privacy/"];
export const GET:APIRoute=({site})=>{const origin=site??new URL("https://mypaas.my.id");const urls=[...locales.map((locale)=>localeMeta[locale].path),...paths];const body=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((path)=>`<url><loc>${new URL(path,origin)}</loc></url>`).join("")}</urlset>`;return new Response(body,{headers:{"Content-Type":"application/xml; charset=utf-8"}})};
