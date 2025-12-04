import Image from "next/image";
import { Text } from "@/base/text";

interface IndustryCardProps {
  alt: string;
  className?: string;
  imageSrc: string;
  label: string;
}

export default function IndustryCard({
  alt,
  className = "",
  imageSrc,
  label,
}: IndustryCardProps) {
  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <Image src={imageSrc} alt={alt} fill className="object-cover" />
      <div
        className="absolute inset-0 rounded-xl"
        style={{ backgroundColor: "#0003" }}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <Text className="text-white" variant="small">
          {label}
        </Text>
      </div>
    </div>
  );
}
