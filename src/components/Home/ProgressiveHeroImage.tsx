import Image from "next/image";
// import { useEffect, useState } from "react";

export default function ProgressiveHeroImage() {
  // const [highQualityLoaded, setHighQualityLoaded] = useState(false);

  return (
    <div className="absolute inset-0 bg-[#1a1a1a]">
      {/* Compressed image - loads immediately */}
      <Image
        alt="Hero background"
        className={`absolute inset-0 object-cover`}
        fill
        priority
        sizes="100vw"
        src="/hero_compressed.png"
      />
      {/* High-quality image - always rendered but hidden until loaded */}
      <Image
        alt="Hero background"
        className={`absolute inset-0 object-cover`}
        fill
        loading="lazy"
        // onLoadingComplete={() => setHighQualityLoaded(true)}
        unoptimized
        sizes="100vw"
        src="https://rhlhswfxiviuowlkjkij.supabase.co/storage/v1/object/public/assets/hero.png"
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
