import './globals.css';
import { Inter, Oswald } from 'next/font/google';
import Preloader from './components/Preloader';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-heading' });

export const metadata = {
  title: 'AGIT - Verein Antigewalt und Gewaltprävention',
  description: 'Wir bieten professionelle Gewaltprävention, Intervention und Beratung in Wien.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
