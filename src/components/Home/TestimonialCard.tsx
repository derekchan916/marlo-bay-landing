import Image from "next/image";

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
      <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
        {quote}
      </blockquote>
      <div className="flex flex-col items-center text-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full mb-3 object-cover"
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded-full mb-3"></div>
        )}
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
}

