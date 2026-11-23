import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoreButtons from '@/components/StoreButtons';
import BlockMark from '@/components/BlockMark';
import { t } from '@/lib/content';
import { asset, pageMeta } from '@/lib/site';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const c = t(lang).home;
  return pageMeta(lang, '/', c.title, c.description);
}

export default async function Home({ params }) {
  const { lang } = await params;
  const c = t(lang).home;
  return (
    <>
      <Header lang={lang} path="/" />
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1>{c.heading}</h1>
            <p className="lead">{c.lead}</p>
            <StoreButtons lang={lang} />
            <dl className="facts">
              {c.facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="hero-shot">
            <img src={asset('/shots/multi-hook.webp')} alt={c.heroAlt} width="432" height="768" />
          </figure>
        </section>

        <section className="wrap showcase" aria-labelledby="showcase-title">
          <h2 id="showcase-title">{c.showcaseTitle}</h2>
          <ol className="shots">
            {c.shots.map((s) => (
              <li key={s.img} className="shot">
                <img src={asset(`/shots/${s.img}.webp`)} alt={s.alt} width="432" height="768" loading="lazy" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="wrap closing">
          <BlockMark size={80} />
          <h2>{c.closingTitle}</h2>
          <p>{c.closingText}</p>
          <StoreButtons lang={lang} />
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
