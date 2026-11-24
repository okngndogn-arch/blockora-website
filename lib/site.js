// Sitenin tek ayar dosyasi. Magaza adresleri ve iletisim burada degisir.
export const SITE = {
  name: 'BLOCKORA',
  developer: 'BLOCKORA',
  contactEmail: 'okngndogn@gmail.com',
  androidPackage: 'com.blockora.game',
  appVersion: '1.0.0',
  // Uygulama magazada yayinlaninca true yapin; buton "Yakinda" yerine magaza linkine doner.
  playStoreLive: false,
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.blockora.game',
  appStoreLive: false,
  appStoreUrl: '',
  // Gizlilik politikasinin yururluk tarihi (ISO)
  policyDate: '2026-11-24'
};

export const LANGS = ['tr', 'en'];

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const asset = (p) => `${basePath}${p}`;
// Tam adres (basePath dahil), ornek: https://kullanici.github.io/blockora-website
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

// Bir sayfanin meta verisi: kanonik adres + diger dil (hreflang)
export function pageMeta(lang, path, title, description) {
  const url = (l) => `${siteUrl}/${l}${path}`;
  return {
    title,
    description,
    metadataBase: new URL(siteUrl + '/'),
    alternates: {
      canonical: url(lang),
      languages: { tr: url('tr'), en: url('en'), 'x-default': url('en') }
    },
    openGraph: {
      title,
      description,
      url: url(lang),
      siteName: 'BLOCKORA',
      locale: lang === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
      images: [{ url: `${siteUrl}/og.png`, width: 1024, height: 500 }]
    },
    icons: { icon: asset('/icon-64.png'), apple: asset('/icon-180.png') }
  };
}
