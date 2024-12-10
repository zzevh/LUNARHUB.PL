import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/Navbar';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "LunarHub.pl - Serwer Minecraft",
  description: "Najlepszy serwer Minecraft w Polsce!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/hero-background.png"
            alt="Site Background"
            fill
            className="object-cover object-center sm:object-top opacity-80"
            priority
            sizes="100vw"
            quality={100}
          />
        </div>

        <div className="relative z-20">
          <Navbar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
