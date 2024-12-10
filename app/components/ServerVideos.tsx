import Image from 'next/image';
import Link from 'next/link';

const videos = [
  {
    title: 'TEKST TESTOWY TEKST TESTOWY TEKST TESTOWY TEKSTO TESTOWY...',
    thumbnailUrl: '/images/video-placeholder.png'
  },
  {
    title: 'TEKST TESTOWY TEKST TESTOWY TEKST TESTOWY TEKSTO TESTOWY...',
    thumbnailUrl: '/images/video-placeholder.png'
  },
  {
    title: 'TEKST TESTOWY TEKST TESTOWY TEKST TESTOWY TEKSTO TESTOWY...',
    thumbnailUrl: '/images/video-placeholder.png'
  }
];

export default function ServerVideos() {
  return (
    <section id="filmy" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10">
          <div className="flex-shrink-0 w-20 sm:w-32 md:w-40 lg:w-56">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] translate-y-[0.7em]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['MinecraftTen'] text-white tracking-wider uppercase whitespace-nowrap flex-shrink-0">
            FILMY Z SERWERA
          </h2>
          <div className="flex-shrink-0 w-20 sm:w-32 md:w-40 lg:w-56">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#3C08CA] to-[#E04AEC] translate-y-[0.7em]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="flex flex-col"
            >
              <div className="relative aspect-video bg-[#0B090C] mb-3 sm:mb-4">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white font-minecraft text-xs sm:text-sm mb-3 sm:mb-4">
                {video.title}
              </p>
              <Link 
                href="#"
                className="bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] px-6 py-2 text-white font-minecraft flex items-center justify-center gap-2 w-full"
              >
                Obejrzyj film
                <Image
                  src="/images/eye.png"
                  alt="Watch"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 