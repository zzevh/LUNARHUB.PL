import Image from 'next/image';
import Link from 'next/link';

const serverModes = [
  { name: 'EARTHSMP', online: 200 },
  { name: 'SURVIVAL', online: 195 },
  { name: 'BOXPVP', online: 185 },
  { name: 'SKYWARS', online: 200 },
  { name: 'GENCASH', online: 150 },
  { name: 'DUELS', online: 50 },
];

export default function Modes() {
  return (
    <section id="tryby" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="flex-shrink-0 w-24 sm:w-32 md:w-40 lg:w-56">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] translate-y-[0.7em]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['MinecraftTen'] text-white tracking-wider uppercase whitespace-nowrap">
            TRYBY
          </h2>
          <div className="flex-shrink-0 w-24 sm:w-32 md:w-40 lg:w-56">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#3C08CA] to-[#E04AEC] translate-y-[0.7em]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 [&:has(>div:hover)>div:not(:hover)]:opacity-50 [&:has(>div:hover)>div:not(:hover)]:grayscale">
          {serverModes.map((mode, index) => (
            <div 
              key={mode.name}
              className="group relative bg-[#2E1530] border-2 border-transparent hover:border-[#E04AEC] transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-[#0B090C] transition-all duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/placeholder.png"
                    alt={mode.name}
                    width={200}
                    height={200}
                    className="w-16 h-16 opacity-50 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="p-6 text-center">
                <div className="text-base text-lg font-minecraft transition-all duration-300">
                  ONLINE: <span className="text-[#3EFF00] transition-colors duration-300">{mode.online}</span>
                </div>
                <div className="text-5xl font-['MinecraftTen'] text-white mb-6 transition-all duration-300">
                  {mode.name}
                </div>
                <Link 
                  href="#"
                  className="block w-full bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] py-3 px-4 text-center font-minecraft text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Przejdź do trybu
                  <Image
                    src="/images/arrow-right.png"
                    alt="Arrow Right"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 