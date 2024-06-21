import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClientProviders } from './client-providers';
import '@/app/_styles/index.css';

const inter = Inter({ subsets: ['latin'] });
const siteTitle = 'Catstronaut';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: 'description dummy',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
