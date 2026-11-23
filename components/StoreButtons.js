import { t } from '@/lib/content';
import { SITE } from '@/lib/site';

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M4.2 2.4c-.3.3-.4.7-.4 1.2v16.8c0 .5.1.9.4 1.2l9.3-9.6-9.3-9.6Zm10.6 10.9 2.6 2.7-11.2 6.4 8.6-9.1Zm0-2.6L6.2 1.6l11.2 6.4-2.6 2.7Zm3.9-1.9 3 1.7c.9.5.9 1.4 0 1.9l-3 1.7-2.8-2.7 2.8-2.6Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="currentColor" d="M16.4 12.7c0-2.5 2-3.6 2.1-3.7-1.2-1.7-3-1.9-3.6-2-1.5-.2-3 .9-3.8.9-.8 0-2-.9-3.3-.9-1.7 0-3.3 1-4.2 2.5-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9 0 0-2.8-1.1-2.9-4.2ZM13.9 5.2c.7-.8 1.2-2 1-3.2-1 0-2.2.7-3 1.5-.6.7-1.2 1.9-1 3.1 1.1.1 2.3-.6 3-1.4Z" />
    </svg>
  );
}

function StoreButton({ live, href, icon, label, alt, soon, get }) {
  const inner = (
    <>
      {icon}
      <span className="store-text">
        <small>{live ? get : soon}</small>
        <strong>{label}</strong>
      </span>
    </>
  );
  if (live && href) {
    return (
      <a className="store-btn" href={href} aria-label={alt} rel="noopener">
        {inner}
      </a>
    );
  }
  return (
    <span className="store-btn is-soon" aria-label={`${alt}: ${soon}`}>
      {inner}
    </span>
  );
}

export default function StoreButtons({ lang }) {
  const s = t(lang).store;
  return (
    <div className="store-row">
      <StoreButton live={SITE.playStoreLive} href={SITE.playStoreUrl} icon={<PlayIcon />} label={s.play} alt={s.playAlt} soon={s.soon} get={s.get} />
      <StoreButton live={SITE.appStoreLive} href={SITE.appStoreUrl} icon={<AppleIcon />} label={s.apple} alt={s.appleAlt} soon={s.soon} get={s.get} />
    </div>
  );
}
