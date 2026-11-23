import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { t } from '@/lib/content';
import { SITE, pageMeta } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const c = t(lang).support;
  return pageMeta(lang, '/support/', `${c.title} · BLOCKORA`, c.description);
}

export default async function Support({ params }) {
  const { lang } = await params;
  const c = t(lang).support;
  const mail = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(`${c.mailSubject} (${SITE.appVersion})`)}`;
  return (
    <>
      <Header lang={lang} path="/support/" />
      <main id="main" className="wrap doc">
        <h1>{c.title}</h1>
        <p className="lead">{c.intro}</p>

        <section className="contact-card" aria-labelledby="contact">
          <div>
            <h2 id="contact">{c.contactTitle}</h2>
            <p>{c.contactText}</p>
            <p className="mail">{SITE.contactEmail}</p>
          </div>
          <a className="btn" href={mail}>{c.contactButton}</a>
        </section>

        <h2>{c.faqTitle}</h2>
        {c.groups.map((g) => (
          <section key={g.h} className="faq-group">
            <h3>{g.h}</h3>
            {g.items.map((it) => (
              <details key={it.q}>
                <summary>{it.q}</summary>
                <p>{it.a}</p>
              </details>
            ))}
          </section>
        ))}
      </main>
      <Footer lang={lang} />
    </>
  );
}
