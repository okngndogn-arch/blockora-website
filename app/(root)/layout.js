import '@fontsource/nunito/400.css';
import '@fontsource/nunito/900.css';
import '../globals.css';
import { pageMeta } from '@/lib/site';

export const metadata = {
  ...pageMeta('en', '/', 'BLOCKORA', 'BLOCKORA block puzzle game. Türkçe / English.'),
  alternates: undefined
};
export const viewport = { themeColor: '#0E0F26', colorScheme: 'dark' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
