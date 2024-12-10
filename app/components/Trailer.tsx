import Image from 'next/image';
import Link from 'next/link';

export default function Trailer() {
  return (
    <section id="trailer" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10">
          <div className="flex-shrink-0 w-20 sm:w-32 md:w-40 lg:w-56">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] translate-y-[0.7em]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['MinecraftTen'] text-white tracking-wider uppercase whitespace-nowrap flex-shrink-0">
            TRAILER
          </h2>
          <div className="flex-shrink-0 w-20 sm:w-32 md:w-40 lg:w-56">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#3C08CA] to-[#E04AEC] translate-y-[0.7em]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-12 sm:mt-16">
       
          <div className="relative aspect-video bg-[#1E1921]">
            <Image
              src="/images/loading-trailer.png"
              alt="Trailer Placeholder"
              width={200}
              height={200}
              className="w-16 h-16 opacity-50"
            />
          </div>

          
          <div className="flex flex-col justify-center items-start lg:items-end text-left lg:text-right">
            <div className="text-xs sm:text-sm text-gray-400 font-minecraft mb-3 sm:mb-4">
              07.12.2024
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-['MinecraftTen'] text-white mb-3 sm:mb-4">
              1 EDYCJA EARTHSMP
            </h3>
            <h4 className="text-2xl font-['MinecraftTen'] text-white mb-6">
              IP LUNARHUB.PL
            </h4>
            <p className="text-gray-400 font-minecraft mb-8 max-w-xl">
              Lorem ipsum dolor sit amet consectetur. Amet elit sit enim auctor arcu erat donec erat malesuada vel.
            </p>
            <div className="flex gap-4 justify-end">
              <Link 
                href="#"
                className="bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] px-6 py-3 text-white font-minecraft flex items-center gap-2"
              >
                Obejrzyj trailer
                <Image
                  src="/images/eye.png"
                  alt="Watch"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
              <Link 
                href="#"
                className="relative bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] p-[1px]"
              >
                <div className="bg-[#080609] px-6 py-3 flex items-center gap-2">
                  <span className="font-minecraft bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] bg-clip-text text-transparent">
                    Pobierz
                  </span>
                  <Image
                    src="/images/download.png"
                    alt="Download"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 