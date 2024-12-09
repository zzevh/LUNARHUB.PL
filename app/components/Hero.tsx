import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-12 sm:pt-20 md:pt-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="Hero Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="absolute top-0 right-0 z-10">
        <Image
          src="/images/right-top-shadow.png"
          alt="Right Top Shadow"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <Image
          src="/images/left-hero-shadow.png"
          alt="Left Hero Shadow"
          width={500}
          height={800}
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 min-h-[calc(100vh-48px)] sm:min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-128px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6 lg:gap-0">
          <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center sm:items-start text-center sm:text-left">
            <div className="flex flex-col gap-2 sm:gap-3">
              <h2 className="text-base sm:text-lg md:text-xl font-minecraft">
                Witaj na serwerze minecraft...
              </h2>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-['MinecraftTen'] bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] bg-clip-text text-transparent tracking-wider uppercase" 
                  style={{ textShadow: '0 0 1px rgba(224, 74, 236, 0.5)' }}>
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
                <span className="text-[#3EFF00]">20</span>
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