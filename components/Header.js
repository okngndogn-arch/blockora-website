import Link from 'next/link';
import BlockMark from './BlockMark';
import { t } from '@/lib/content';

// path: dil onekinden sonraki yol ('/', '/privacy/', '/support/')
export default function Header({ lang, path = '/' }) {
  const c = t(lang);
  const other = lang === 'tr' ? 'en' : 'tr';
  const items = [
    ['/support/', c.nav.support],
    ['/privacy/', c.nav.privacy]
  ];
  return (
    <header className="site-header">
      <a className="skip" href="#main">{c.nav.skip}</a>
      <div className="wrap header-row">
        <Link href={`/${lang}/`} className="brand" aria-label={`BLOCKORA, ${c.nav.home}`}>
          <BlockMark size={30} />
          <span>BLOCKORA</span>
        </Link>
        <nav aria-label={c.nav.menu} className="nav">
          {items.map(([href, label]) => (
            <Link key={href} href={`/${lang}${href}`} aria-current={path === href ? 'page' : undefined}>
              {label}
            </Link>
          ))}
          <Link href={`/${other}${path}`} hrefLang={other} lang={other} className="lang-switch">
            {c.switchTo}
          </Link>
        </nav>
      </div>
    </header>
  );
}
