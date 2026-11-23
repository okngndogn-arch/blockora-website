// Statik site: `next build` -> out/ (GitHub Pages).
// BASE_PATH, GitHub Pages proje adresinde alt yol icin (ornek: /blockora-website). Ozel alan adinda bos birakilir.
const basePath = process.env.BASE_PATH || '';
// SITE_URL: sitenin tam adresi (kanonik link ve sosyal paylasim onizlemesi icin). Workflow doldurur.
const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

export default {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  experimental: { globalNotFound: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_SITE_URL: siteUrl }
};
