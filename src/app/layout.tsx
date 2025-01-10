import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My E-commerce Website',
  description: 'An amazing e-commerce website built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      {/* <!-- Google Analytics Tag --> */}
{/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VSJZDJMCMY"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  {/* function gtag(){dataLayer.push(arguments);} */}
  gtag('js', new Date());

  gtag('config', 'G-VSJZDJMCMY');
</script>
  
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
