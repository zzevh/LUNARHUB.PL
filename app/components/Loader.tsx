import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-[#0B090C] z-50 flex items-center justify-center">
      <Image
        src="/images/loader-logo.png"
        alt="LunarHub Logo"
        width={300}
        height={300}
        className="animate-scaleUpDown"
        priority
      />
    </div>
  );
} 