import { Roboto } from 'next/font/google';
import ThemesProvider from './ThemesProvider';
import Header from './components/Header';
import './globals.css';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'filmsHub',
  description: 'This is the website made with nextjs and tailwind ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={false}
        className={`${roboto.className} dark:bg-gray-800 transition bg-gray-50`}>
        <ThemesProvider>
          <Header />
          {children}
        </ThemesProvider>
      </body>
    </html>
  );
}
