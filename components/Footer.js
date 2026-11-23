import Link from 'next/link';
import { t } from '@/lib/content';
import { SITE } from '@/lib/site';

export default function Footer({ lang }) {
  const c = t(lang);
  const year = new Date(SITE.policyDate).getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <p>© {year} {SITE.developer}. {c.footer.rights}</p>
        <nav aria-label={c.nav.menu} className="footer-nav">
          <Link href={`/${lang}/`}>{c.nav.home}</Link>
          <Link href={`/${lang}/support/`}>{c.nav.support}</Link>
          <Link href={`/${lang}/privacy/`}>{c.nav.privacy}</Link>
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </nav>
      </div>
    </footer>
  );
}
