import Image from "next/image";

interface IndustryCardProps {
  imageSrc: string;
  alt: string;
  label: string;
}

export default function IndustryCard({
  imageSrc,
  alt,
  label,
}: IndustryCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden aspect-square">
      <Image src={imageSrc} alt={alt} fill className="object-cover" />
      <div
        className="absolute inset-0 rounded-xl"
        style={{ backgroundColor: "#0003" }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <p className="text-white text-sm font-medium">{label}</p>
      </div>
    </div>
  );
}

