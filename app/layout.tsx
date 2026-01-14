import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tickets App',
  description: 'A simple tickets app built with Next.js and Prisma',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body
        className={`bg-gray-100 text-gray-900 min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className='p-6 bg-white shadow'>
          <h1 className='text-3xl font-bold text-blue-950'>Ticket Apps</h1>
        </header>

        <main className='p-6'>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
