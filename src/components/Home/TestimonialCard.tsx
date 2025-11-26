import Image from "next/image";
import { Text } from "@/base/texts";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageSrc?: string;
}

export default function TestimonialCard({
  quote,
  name,
  title,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <Text className="leading-relaxed mb-6" variant="blockquote">
        {quote}
      </Text>
      <div className="flex flex-col items-center text-center">
        {imageSrc ? (
          <Image
            alt={name}
            className="w-16 h-16 rounded-full mb-3 object-cover"
            height={64}
            src={imageSrc}
            width={64}
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-3"></div>
        )}
        <Text className="font-semibold" variant="p">
          {name}
        </Text>
        <Text variant="small">{title}</Text>
      </div>
    </div>
  );
}
