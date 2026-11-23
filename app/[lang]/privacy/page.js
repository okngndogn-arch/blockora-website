import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { t } from '@/lib/content';
import { SITE, pageMeta } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const c = t(lang).privacy;
  return pageMeta(lang, '/privacy/', `${c.title} · BLOCKORA`, c.description);
}

const formatDate = (lang, iso) =>
  new Intl.DateTimeFormat(lang === 'tr' ? 'tr-TR' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso));

export default async function Privacy({ params }) {
  const { lang } = await params;
  const c = t(lang).privacy;
  return (
    <>
      <Header lang={lang} path="/privacy/" />
      <main id="main" className="wrap doc">
        <h1>{c.title}</h1>
        <p className="meta">
          {c.updated}: <time dateTime={SITE.policyDate}>{formatDate(lang, SITE.policyDate)}</time> · BLOCKORA {SITE.appVersion} · {SITE.androidPackage}
        </p>
        <p className="lead">{c.intro}</p>
        <nav className="toc" aria-label={c.title}>
          <ol>
            {c.sections.map((s, i) => (
              <li key={s.h}><a href={`#s${i + 1}`}>{s.h}</a></li>
            ))}
          </ol>
        </nav>
        {c.sections.map((s, i) => (
          <section key={s.h} id={`s${i + 1}`}>
            <h2>{s.h}</h2>
            {s.p?.map((p) => <p key={p}>{p}</p>)}
            {s.list && (
              <ul>
                {s.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
            )}
            {s.links && (
              <ul className="links">
                {s.links.map((l) => (
                  <li key={l.href}><a href={l.href} rel="noopener">{l.label}</a></li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>
      <Footer lang={lang} />
    </>
  );
}
