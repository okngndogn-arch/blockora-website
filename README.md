# BLOCKORA web sitesi

BLOCKORA blok bulmaca oyununun tanıtım, gizlilik ve destek sayfaları. Next.js statik çıktı (`out/`), GitHub Pages'te yayınlanır. Bütün metinler Türkçe ve İngilizce.

| Sayfa | Türkçe | English |
|---|---|---|
| Ana sayfa | `/tr/` | `/en/` |
| Gizlilik (Play Console / App Store Connect "Privacy Policy URL") | `/tr/privacy/` | `/en/privacy/` |
| Destek (App Store Connect "Support URL") | `/tr/support/` | `/en/support/` |

Kök adres (`/`) tarayıcı diline göre `/tr/` veya `/en/` sayfasına gider.

## Komutlar

```bash
npm install
npm run dev     # http://localhost:3000/tr/
npm run check   # TR/EN metin eşitliği + yazım kuralları
npm run build   # statik site -> out/
```

## Düzenleme

- Metinler: `lib/content.js` (TR ve EN aynı yapıda olmalı; `npm run check` denetler).
- Mağaza linkleri, destek e-postası, politika tarihi: `lib/site.js`.
- Ekran görüntüleri: `public/shots/` (oyun deposundaki `marketing/store/` görsellerinden, başlık şeridi kırpılmış).
- Yazım kuralı: [stop-slop](https://github.com/hardikpandya/stop-slop). Uzun tire yok, dolgu kelime yok, somut sayı ve isim.

## Yayın (GitHub Actions, `.github/workflows/site.yml`)

1. Pull request: içerik kontrolü + derleme.
2. `main`'e push: derleme, GitHub Pages'e yayın.
3. Ardından `package.json` sürümü için `vX.Y.Z` etiketi yoksa GitHub Release açılır (site zip'i ekli). Yeni release için sürümü artırın.

İlk kurulumda depo ayarlarından **Settings > Pages > Source: GitHub Actions** seçilmeli.
