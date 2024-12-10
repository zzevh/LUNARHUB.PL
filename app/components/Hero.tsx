import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 top-0">
        <Image
          src="/images/hero-background.png"
          alt="Hero Background"
          fill
          className="object-cover object-center sm:object-top"
          priority
          quality={100}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute -top-20 right-0 w-[300px] h-[300px] bg-[#D400FF] blur-[150px] opacity-20" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center lg:items-start text-center lg:text-left relative">
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D400FF] blur-[150px] opacity-20" />
            
            <div className="flex flex-col gap-3 sm:gap-4 relative">
              <h2 className="text-base sm:text-base md:text-lg lg:text-xl font-minecraft">
                Witaj na serwerze minecraft...
              </h2>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-['MinecraftTen'] bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] bg-clip-text text-transparent tracking-wider uppercase">
                LUNARHUB.PL
              </h1>
            </div>

            <p className="text-[#9D9D9D] max-w-xl text-sm sm:text-base md:text-lg font-minecraft">
              Lorem ipsum dolor sit amet consectetur. Amet elit sit enim auctor arcu erat donec erat malesuada vel.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link 
                href="#tryby"
                className="w-full sm:w-auto bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded font-minecraft text-sm sm:text-base hover:opacity-90 transition-opacity flex items-center justify-center sm:justify-start gap-2"
              >
                Zobacz nasze tryby
                <Image
                  src="/images/button-arrow.png"
                  alt="Arrow Down"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </Link>

              <div className="flex items-center justify-center gap-2 font-minecraft text-sm sm:text-base">
                <span className="text-white">Online:</span>
                <span className="text-[#3EFF00]">250</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 w-full max-w-md mx-auto sm:mx-0">
              <Link 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block w-full hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/images/discordbannerimage.png"
                  alt="Join our Discord"
                  width={500}
                  height={200}
                  className="w-full h-auto rounded-sm"
                  priority
                />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-end relative h-[80vh]">
            <Image
              src="/images/hero-character.png"
              alt="Minecraft Character"
              width={900}
              height={900}
              className="object-contain absolute right-0 transform scale-125 xl:scale-150"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 