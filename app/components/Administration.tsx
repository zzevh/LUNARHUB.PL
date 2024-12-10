import Image from 'next/image';
import Link from 'next/link';

const admins = [
  { 
    nickname: 'afloXd',
    role: 'Właściciel',
    roleColor: 'text-red-500',
    skinUrl: '/images/admin-skins/afloxd.png'
  },
  { 
    nickname: 'Kubowid19',
    role: 'Developer',
    roleColor: 'text-blue-500',
    skinUrl: '/images/admin-skins/kubowid19.png'
  },
  { 
    nickname: 'DexsaMM',
    role: 'Admin',
    roleColor: 'text-[#FF6B6B]',
    skinUrl: '/images/admin-skins/dexsamm.png'
  },
  { 
    nickname: 'Trayz',
    role: 'Moderator',
    roleColor: 'text-green-500',
    skinUrl: '/images/admin-skins/trayz.png'
  },
  { 
    nickname: 'H3gwizk',
    role: 'Helper',
    roleColor: 'text-blue-500',
    skinUrl: '/images/admin-skins/h3gwizk.png'
  }
];

export default function Administration() {
  return (
    <section id="administracja" className="py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10">
          <div className="flex-shrink-0 w-20 sm:w-32 md:w-40 lg:w-56">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] translate-y-[0.7em]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['MinecraftTen'] text-white tracking-wider uppercase whitespace-nowrap flex-shrink-0">
            ADMINISTRACJA
          </h2>
          <div className="flex-shrink-0 w-20 sm:w-32 md:w-40 lg:w-56">
            <div className="h-0.5 w-full bg-gradient-to-r from-[#3C08CA] to-[#E04AEC] translate-y-[0.7em]" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {admins.map((admin, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-r from-[#E04AEC] to-[#3C08CA] p-[1px] h-[300px]"
            >
              <div className="bg-[#0B090C] h-full flex flex-col">
                <div className="p-4 text-center">
                  <div className="text-xl font-['MinecraftTen'] text-white mb-1">
                    {admin.nickname}
                  </div>
                  <div className={`text-sm font-minecraft ${admin.roleColor}`}>
                    {admin.role}
                  </div>
                </div>

                <div className="flex-1 flex items-end justify-center">
                  <Image
                    src={admin.skinUrl}
                    alt={admin.nickname}
                    width={200}
                    height={200}
                    className="w-auto h-[200px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 