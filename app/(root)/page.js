import BlockMark from '@/components/BlockMark';
import { basePath } from '@/lib/site';

// Statik sitede sunucu yonlendirmesi yok: tarayici dili Turkce ise /tr/, degilse /en/.
// JavaScript kapaliysa iki dil baglantisi gorunur.
const script = `(function(){try{var l=(navigator.languages&&navigator.languages[0]||navigator.language||'').toLowerCase();location.replace('${basePath}/'+(l.indexOf('tr')===0?'tr':'en')+'/'+location.hash);}catch(e){}})();`;

export default function Root() {
  return (
    <main className="chooser">
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <BlockMark size={96} />
      <h1>BLOCKORA</h1>
      <p>
        <a href={`${basePath}/tr/`} lang="tr" hrefLang="tr">Türkçe</a>
        <a href={`${basePath}/en/`} lang="en" hrefLang="en">English</a>
      </p>
    </main>
  );
}
