'use client';

import { RecoilRoot } from 'recoil';
import './globals.css';
import Layout from '@/components/layout/layout';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RecoilRoot>
      <html lang="en">
        <Head>
          <title>Tier List</title>
        </Head>
        <body>
          <Layout>{children}</Layout>
        </body>
      </html>
    </RecoilRoot>
  );
}
