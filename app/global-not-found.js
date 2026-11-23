import '@fontsource/nunito/400.css';
import '@fontsource/nunito/900.css';
import './globals.css';
import BlockMark from '@/components/BlockMark';
import { CONTENT } from '@/lib/content';
import { basePath } from '@/lib/site';

export const metadata = { title: '404 · BLOCKORA' };

// GitHub Pages bu sayfayi bilinmeyen her adres icin 404.html olarak sunar. Iki dil birlikte.
export default function GlobalNotFound() {
  return (
    <html lang="tr">
      <body>
        <main className="chooser">
          <BlockMark size={80} />
          <h1>404</h1>
          {['tr', 'en'].map((l) => (
            <section key={l} lang={l}>
              <h2>{CONTENT[l].notFound.title}</h2>
              <p style={{ display: 'block', color: 'var(--muted)' }}>{CONTENT[l].notFound.text}</p>
              <p><a href={`${basePath}/${l}/`}>{CONTENT[l].notFound.back}</a></p>
            </section>
          ))}
        </main>
      </body>
    </html>
  );
}
