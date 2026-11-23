import '@fontsource/nunito/400.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/900.css';
import '../globals.css';
import { notFound } from 'next/navigation';
import { LANGS } from '@/lib/site';

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));
export const viewport = { themeColor: '#0E0F26', colorScheme: 'dark' };

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!LANGS.includes(lang)) notFound();
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
