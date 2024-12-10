import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0D0B0E] py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <Link href="/" className="flex flex-col items-center gap-2 sm:gap-3">
            <Image
              src="/images/logo.png"
              alt="LunarHub Logo"
              width={120}
              height={120}
              className="w-20 h-20 sm:w-24 sm:h-24"
            />
            <span className="text-3xl sm:text-4xl font-['MinecraftTen'] tracking-wide bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] bg-clip-text text-transparent">
              LUNARHUB.PL
            </span>
          </Link>

          <p className="text-gray-400 text-sm sm:text-base font-minecraft text-center px-4">
            Serwer LUNARHUB.PL nie jest w żaden sposób powiązany z Mojang AB.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Link 
              href="/strona-glowna" 
              className="px-4 sm:px-8 py-2 bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] text-white font-minecraft text-sm sm:text-base hover:opacity-90 transition-opacity"
            >
              Strona główna
            </Link>
            <Link 
              href="/sklep" 
              className="px-4 sm:px-8 py-2 bg-[#272129] text-white font-minecraft text-sm sm:text-base hover:bg-[#E04AEC] transition-colors"
            >
              Sklep
            </Link>
            <Link 
              href="/changelog" 
              className="px-4 sm:px-8 py-2 bg-[#272129] text-white font-minecraft text-sm sm:text-base hover:bg-[#E04AEC] transition-colors"
            >
              Changelog
            </Link>
            <Link 
              href="/lista-banow" 
              className="px-4 sm:px-8 py-2 bg-[#272129] text-white font-minecraft text-sm sm:text-base hover:bg-[#E04AEC] transition-colors"
            >
              Lista banów
            </Link>
            <Link 
              href="/voucher" 
              className="px-4 sm:px-8 py-2 bg-[#272129] text-white font-minecraft text-sm sm:text-base hover:bg-[#E04AEC] transition-colors"
            >
              Voucher
            </Link>
            <Link 
              href="/regulamin" 
              className="px-4 sm:px-8 py-2 bg-[#272129] text-white font-minecraft text-sm sm:text-base hover:bg-[#E04AEC] transition-colors"
            >
              Regulamin
            </Link>
          </div>

          <div className="text-[#272129] text-sm sm:text-base font-minecraft">
            Strona stworzona przez: <Link href="#" className="text-[#E04AEC]">FreshAgency.pl</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 