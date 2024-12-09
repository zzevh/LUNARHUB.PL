import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-24">
          <div className="flex-1 flex items-center justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
              <Image
                src="/images/logo.png"
                alt="LunarHub Logo"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
              <span className="text-lg sm:text-lg md:text-2xl lg:text-3xl text-white font-minecraft tracking-wide font-black self-center" 
                    style={{ textShadow: '0 0 1px rgba(255, 255, 255, 0.5)' }}>
                LUNARHUB.PL
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 lg:space-x-8 xl:space-x-10">
              <Link 
                href="/" 
                className="text-sm lg:text-base xl:text-lg bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] bg-clip-text text-transparent font-minecraft"
              >
                Strona glowna
              </Link>
              <Link 
                href="/sklep" 
                className="text-sm lg:text-base xl:text-lg text-gray-300 hover:text-white transition-colors font-minecraft"
              >
                Sklep
              </Link>
              <Link 
                href="/changelog" 
                className="text-sm lg:text-base xl:text-lg text-gray-300 hover:text-white transition-colors font-minecraft"
              >
                Changelog
              </Link>
              <Link 
                href="/lista-banow" 
                className="text-sm lg:text-base xl:text-lg text-gray-300 hover:text-white transition-colors font-minecraft"
              >
                Lista banow
              </Link>
              <Link 
                href="/voucher" 
                className="text-sm lg:text-base xl:text-lg text-gray-300 hover:text-white transition-colors font-minecraft"
              >
                Voucher
              </Link>
              <Link 
                href="/regulamin" 
                className="text-sm lg:text-base xl:text-lg text-gray-300 hover:text-white transition-colors font-minecraft"
              >
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 